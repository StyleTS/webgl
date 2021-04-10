Vue.component('bigMap', {
    template: `
        <div class="bigMap" style="height:100%;width:100%" ref="bigMapBox">
            <div ref="bigMap" :style="style"></div>
        </div>
     `,
    data: function () {
        return {
            style: {
                height: "100%",
                width: "100%",
                position: "absolute",
                left: 0,
                top: 0,
                overflow: "hidden",
            },
            result: []
        }
    },
    props: {
        propdata: {
            type: Array,
            default: function () {
                return []
            }
        },
        changeInit: {
            type: Boolean,
            default: false
        }
    },
    mounted: function () {
        let _this = this;
        _this.bigMap = echarts.init(_this.$refs.bigMap);
        _this.setResult(_this.propdata)
        _this.bigMaptOption = {
            geo: {
                map: 'map',
                zoom: 0.98,
                roam: true,
                center: [110.4632992051, 30.2979563489],
                name:"",
                itemStyle: {//每个区域
                    color: '#1A3F57', //地图背景色
                    borderColor: '#516a89', //省市边界线00fcff 516a89
                    borderWidth: 1
                },
                emphasis: {//鼠标经过样式
                    label: {
                        show: false
                    },
                    itemStyle: {
                        color: "#1A3F57" //悬浮背景
                    },
                },
            },
            // legend: {
            //     orient: 'horizontal',
            //     x: 'center',      //可设定图例在左、右、居中
            //     top: '100px',
            //     padding: 20,   //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
            //     data: [{
            //         name: "已完成",
            //         icon: "image://../common/images/builded.jpg",
            //     }, {
            //         name: "建设中",
            //         icon: "image://../common/images/building.jpg",
            //     }],
            //     textStyle: {
            //         color: '#000',
            //     },
            //     borderColor: '#2259a3',
            //     borderWidth: 1,
            //     borderRadius: 3,
            //     width: '400px',
            //     height: '50px',
            //     backgroundColor: 'rgba(255,255,255,.7)',
            //     selected: false,
            //     selectedMode: false
            // },
            series: _this.result,
            tooltip: {
                show: true,
                trigger: 'item',
                formatter: '{b0}: {c0}<br />',
            }
        };
        $.get('data/china.json', function (data) {
            //加载地图数据
            echarts.registerMap("map", data);
            // 使用刚指定的配置项和数据显示图表。
            _this.bigMap.setOption(_this.bigMaptOption);
        })
    },
    methods: {
        setResult: function (railWayData) {
            console.log(this.bigMap);
            var _this = this;
            for (let i = 0; i < railWayData.length; i++) {
                const element = railWayData[i];
                // let statusColor = railWayData[i].status === "1" ? ["#000", "#fff"] : ["#2d9200", "#fff"];
                // let railWayStatus = railWayData[i].status === "1" ? "已完成" : "建设中";
                _this.result.push(
                    // {
                    //     type: "lines",//高铁线-黑色线
                    //     coordinateSystem: 'geo', // 这句的意思是连线是基于地理坐标的,geo组件将在下面给出
                    //     polyline: true, // 这表示连线是否为多端点的连线
                    //     data: [{
                    //         coords: railWayData[i].coordinate
                    //     }],
                    //     lineStyle: {
                    //         color: statusColor[0],
                    //         width: 4,
                    //     },
                    //     progressiveThreshold: 500,
                    //     progressive: 200,
                    //     tooltip: {
                    //         show: true,
                    //         trigger: 'item',
                    //         formatter: function (params, ticket, callback) {
                    //             return _this.formatTips(railWayData[i]);
                    //         }
                    //     }
                    // },
                    // {
                    //     name: railWayStatus,
                    //     type: "lines",//高铁线-白色线
                    //     coordinateSystem: 'geo', // 这句的意思是连线是基于地理坐标的,geo组件将在下面给出
                    //     polyline: true, // 这表示连线是否为多端点的连线
                    //     data: [{
                    //         coords: railWayData[i].coordinate
                    //     }],
                    //     lineStyle: {
                    //         color: statusColor[1],
                    //         width: 4,
                    //         type: "dashed",
                    //     },
                    //     progressiveThreshold: 500,
                    //     progressive: 200,
                    //     tooltip: {
                    //         show: true,
                    //         trigger: 'item',
                    //         formatter: function (params, ticket, callback) {
                    //             return _this.formatTips(railWayData[i]);
                    //         }
                    //     }
                    // },
                    {
                        type: "scatter",//主要城市描点
                        coordinateSystem: 'geo', // 这句的意思是连线是基于地理坐标的,geo组件将在下面给出
                        hoverAnimation: true,
                        symbol: "circle",
                        symbolSize: 17,//城市描点大小
                        data: railWayData[i].coordinate,
                        dataZoom:{
                            type:'inside'
                        },
                        label: {
                            show: true,
                            position: "outside",
                            backgroundColor: "rgba(0,0,0,0.4)",
                            color:"#fff",
                            width: "180",
                            height: "180",
                            formatter: function (params, ticket, callback) {
                                return railWayData[i].pointName[params.dataIndex]
                            }
                        },
                        itemStyle: {
                            color: "#ff0000",
                            // borderColor: "#fff"
                        },
                        tooltip: {
                            show: true,
                            trigger: 'item',
                            formatter: function (params, ticket, callback) {
                                return railWayData[i].pointName[params.dataIndex]
                            }
                        },
                    }
                )
            }
            _this.bigMap.on('click', function(params){
                // alert(1);
                console.log(params);//此处写点击事件内容
                if (params.componentType === 'series') window.open(railWayData[0].link[params.dataIndex],"_blank");
            });//点击事件，此事件还可以用到柱状图等其他地图
            _this.bigMap.on('tap', function(params){
                // alert(1);
                console.log(params);//此处写点击事件内容
                if (params.componentType === 'series') window.open(railWayData[0].link[params.dataIndex],"_blank");
            });//触摸事件，此事件还可以用到柱状图等其他地图
        },
        formatTips: function (data) {
            let html = "<span>" + data.name + "</span><br />";
            html += "<span>供货公司: 北信</span><br />";
            html += "<span>线路开通时间: " + data.time + "</span><br />";
            html += "<span>供货产品范围：" + data.data + "</span><br />";
            html += "<span>站数：" + data.number + "</span><br />";
            return html;
        }
    },
    watch: {
        changeInit: function (newV, oldV) {
            let _this = this;
            if (newV) {
                _this.bigMap.resize()
            }
        }
    }
})