Vue.component('model3d', {
    template: `
        <div class="model3d" style="height:100%;width:100%">
            <div ref="model3d" :id="propsdata.id" style="height:100%;width:100%"></div>
            <div class="listContenBox" style="top: 58px;left: 10px">
                <ul>
                    <li v-for="(val,item) in propsdata.data.devText">
                        <p class="title">{{val.name}}</p>
                        <p class="text">{{val.value}}</p>
                    </li>
                </ul>
            </div>

            <div class="listRightBox">
                <div class="topBox">
                    <p class="title">产线效率</p>
                    <div class="center">
                        <div id="graphOne" ref="graphOne" style="height: 100%;width: 100%"></div>
                    </div>
                </div>
                <div class="contenBox">
                    <p class="title">运行效率</p>
                    <div class="center">
                        <div id="graphTwo" ref="graphTwo" style="height: 100%;width: 100%"></div>
                    </div>
                </div>
            </div>
        </div>`,
    data: function () {
        return {
            webGlBox: "",
            graphMainOne:"",
        }
    },
    props: {
        propsdata: {
            type: Object,
            default: function () {
                return {
                    elem:null,
                    id:"",

                }
            },
        }
    },
    created: function () {
        let _this = this;
        if (!this.propsdata.id) {
            this.propsdata.id = "webGl3D" + Date.now() + parseInt(Math.random() * 100);
        }
    },
    mounted: function () {
        let _this = this;
        _this.webGlBox = new webGL(_this.propsdata.id);
        _this.webGlBox.init();
        _this.webGlBox.loading = function (e) {
            //生成文件加载进度dom
            if (!($(".loadingBox").length)) {
                var html = $("<div class='loadingBox'><span class='loadingNum'></span></div>");
                $("body").append(html);
            }
            //显示加载进度
            $(".loadingNum").html(parseInt(e) + "%");
            if (e === 100) {
                //删除加载进度dom
                setTimeout(function () {
                    $(".loadingBox").remove();
                }, 400);
                //进入第一个场景
                _this.webGlBox.sceneTo("plant");
            }
        };
        _this.webGlBox.logonScene({
            name: "plant", //该场景名称(提供场景切换)
            rotateAnime: false, //该场景在无交互情况下是否要自动旋转
            rotateSpeed: -0.003,
            onShow: function () {
                _this.webGlBox.camera.position.set(32.52063457788685,690.6927731884972,-907.1129577625959)
            },
            mounted: function (scene) { //进入该场景触发方法 this 指向该场景所有需要加载的文件
                scene.scale.multiplyScalar(0.3);
                console.log()
                if(_this.propsdata.elem){
                    _this.propsdata.elem.position.set(0,0,0);
                    scene.add(_this.propsdata.elem)
                }

                if(_this.propsdata.elem._state){
                    _this.webGlBox.lightControl(_this.propsdata.elem.name,_this.propsdata.elem._state)
                }
                _this.webGlBox.animate = function () {
                    _this.webGlBox.lightAnime();
                };
            }
        });


        console.log()
        //初始化表格
        this.graphMainOne = echarts.init(this.$refs.graphOne);
        let graphMainOneOption = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data:['运行','报警','未排产','停机'],
                textStyle:{color:"#ffffff",fontSize: 12,},
                bottom: "0",
                borderRadius:'0'
            },
            calculable : true,
            xAxis : [{
                type : 'category',
                data : ['印刷机','贴片机1','贴片机2','贴片机3','AOI','回焊爐'],
                nameTextStyle:{color:"#ffffff"},
                axisLine:{
                    lineStyle:{
                        color:"rgba(255,255,255,0.6)"
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:"#002a54"
                    }
                }
            }],
            yAxis : [{
                type : 'value',
                nameTextStyle:{color:"#ffffff"},
                axisLine:{
                    lineStyle:{
                        color:"rgba(255,255,255,0.6)",
                        width:0
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:"#002a54"
                    }
                }
            }],
            series : [
                {
                    name:'运行',
                    type:'bar',
                    stack: '总量',
                    barCategoryGap: "60%",
                    itemStyle : { normal: {label : {show: false, position: 'insideRight'},color:"#009944"}},
                    data:[28, 24, 24, 26, 26, 28]
                },
                {
                    name:'报警',
                    type:'bar',
                    stack: '总量',
                    barCategoryGap: "60%",
                    itemStyle : { normal: {label : {show: false, position: 'insideRight'},color:"#f39800"}},
                    data:[1, 6, 2, 0, 2, 2]
                },
                {
                    name:'未排产',
                    type:'bar',
                    stack: '总量',
                    barCategoryGap: "60%",
                    itemStyle : { normal: {label : {show: false, position: 'insideRight'},color:"#920783"}},
                    data:[1, 0, 2, 2, 0, 0]
                },
                {
                    name:'停机',
                    type:'bar',
                    stack: '总量',
                    barCategoryGap: "60%",
                    itemStyle : { normal: {label : {show: false, position: 'insideRight'},color:"#ff0000"}},
                    data:[0, 0, 2, 2, 2, 0]
                }
            ]
        };
        this.graphMainOne.setOption(graphMainOneOption);

        this.graphTwo= echarts.init(this.$refs.graphTwo);
        let graphTwoOption =  {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['upper','floor','real','norm'],
                textStyle:{color:"#ffffff",fontSize: 12,},
                bottom: "0",
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['4/15','4/16','4/17','4/18','4/19','4/20','4/21'],
                    axisLine:{
                        lineStyle:{
                            color:"rgba(255,255,255,0.6)"
                        }
                    },
                    splitLine:{
                        lineStyle:{
                            color:"#002a54"
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLine:{
                        lineStyle:{
                            color:"rgba(255,255,255,0.6)",
                            width:0
                        }
                    },
                    splitLine:{
                        lineStyle:{
                            color:"#002a54"
                        }
                    },
                    axisLabel : {
                        formatter: '{value}'
                    }
                }
            ],
            series : [
                {
                    name:'real',
                    type:'line',
                    data:[1.22, 1.22, 1.22, 1.22, 1.22, 1.22, 1.22],
                    itemStyle : { normal: {color:"#21b5f9"}},
                    smooth: true
                },
                {
                    name:'norm',
                    type:'line',
                    data:[1.22, 1.22, 1.22, 1.22, 1.22, 1.22, 1.22],
                    itemStyle : { normal: {color:"green"}},
                    smooth: true
                },
                {
                    name:'floor',
                    type:'line',
                    data:[0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
                    itemStyle : { normal: {color:"red"}},
                    smooth: true
                },
                {
                    name:'upper',
                    type:'line',
                    data:[1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98],
                    itemStyle : { normal: {color:"#5f52a0"}},
                    smooth: true
                }
            ]
        };
        this.graphTwo.setOption(graphTwoOption);

        var graphOneSetOptionDay =  function(el,data){
            var _this = this;
            this.data = data;
            this.ser = _this.data.series;
            this.el = el;
            this.dates = _this.data.xAxis[0].data;

            this.run = function(){

                var sd = _this.dates.shift();
                var md = _this.dates[_this.dates.length - 1];
                var yf = md.split("/")[0];
                var rf = md.split("/")[1];
                var xd = Number(rf)+1;
                if(xd>30){
                    xd = 1;
                    yf = Number(yf)+1;
                    if(yf>12) yf = 1;
                }
                var newds = yf+"/"+xd;
                _this.dates.push(newds);

                for(var i = 0;i<_this.ser.length;i++){
                    var d = _this.ser[i].data;
                    var zs = d.shift();
                    if(_this.ser[i].name === 'upper' || _this.ser[i].name === 'floor'|| _this.ser[i].name === 'norm'){
                        d.push(zs)
                    }else {
                        var da = (Math.random()*1.98).toFixed(2);
                        da = da<1.98? da:1.98;
                        da = da>0.5? da:0.5;
                        d.push(da);
                    }
                }
                _this.el.setOption(_this.data);
                return setTimeout(function(){
                    _this.run()
                },1000 + Math.random()*4000)

            };
            this.run();

        };

        var m2 = new graphOneSetOptionDay(this.graphTwo,graphTwoOption);

    },
    beforeDestroy:function() {
        this.webGlBox.beforeDestroy();
        this.webGlBox=null;
        this.graphMainOne = null;
        this.graphTwo=null;
    },
})