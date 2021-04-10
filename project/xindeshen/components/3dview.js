//3d内容
Vue.component('web3d', {
    template: `<div ref="webGl3d" :id="propData.id" style="height:100%;width:100%"></div>`,
    data: function () {
        return {
            webGlBox: "",
        }
    },
    props: {
        propData: {
            type: Object,
            default: function () {
                return {}
            },
        }
    },
    created: function () {
        let _this = this;
        if (!this.propData.id) {
            this.propData.id = "webGl3D" + Date.now() + parseInt(Math.random() * 100);
        }
    },
    mounted: function () {
        let _this = this;
        _this.webGlBox = new webGL(_this.propData.id);
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
            files: {
                mainMode: {
                    url: 'JSON/Scene.js',
                    type: "json"
                },
            },
            rotateAnime: false, //该场景在无交互情况下是否要自动旋转
            rotateSpeed: -0.003,
            onShow: function () {
                _this.webGlBox.camera.position.set(32.52063457788685, 690.6927731884972, -907.1129577625959)
            },
            mounted: function (scene) { //进入该场景触发方法 this 指向该场景所有需要加载的文件
                scene.scale.multiplyScalar(0.05);
                scene.add(this.mainMode);

                let loadThisData = function (data) {
                    _this.webGlBox.loadData(data, scene, 0, "", function () {
                        // _this.webGlBox.lightControl("HuiLiuHang2","error")
                        _this.webGlBox.eventListAll("click", function (e) {
                            let es = e.clone();
                            es._state = e._state;
                            _this.clickModel(es)
                        });
                    })
                }
                _this.webGlBox.readData("data/data.json", loadThisData);
                _this.webGlBox.animate = function () {
                    TWEEN.update();
                    _this.webGlBox.lightAnime();
                };
            }
        });
    },
    methods: {
        clickModel: function (e) {
            this.$emit('clickmodel', e)
        }
    }
})