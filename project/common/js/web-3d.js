if (!Detector.webgl) Detector.addGetWebGLMessage();
//3D场景
var scene3D = function (elId) {
    var ob = {};
    var _this = {};
    _this.mixers = [];
    _this.clock = new THREE.Clock();

    // _this.container = document.createElement( 'div' );
    // document.body.appendChild( _this.container );
    _this.container = document.getElementById(elId);

    //判断鼠标是否在场景区域活动
    _this.moveTouch = false;
    _this.mousemoveTime = "";
    _this.container.onmousemove = function (event) {
        _this.moveTouch = true;
        clearTimeout(_this.mousemoveTime);
        _this.mousemoveTime = setTimeout(function () {
            _this.moveTouch = false;
        }, 4000)
    };

    //设置场景
    _this.scene = new THREE.Scene();
    _this.scene.fog = new THREE.FogExp2(0x314d79, 0.0002);

    //初始化像机
    _this.camera = new THREE.PerspectiveCamera(90, _this.container.clientWidth / _this.container.clientHeight, 1, 15000);
    _this.camera.position.set(800, 2000, 1400);

    // 设置灯光
    _this.lightMan = new THREE.DirectionalLight(0xffffff, 0.98);
    _this.lightMan.position.set(-2000, 2000, 2000);
    _this.lightMan.castShadow = true;
    _this.lightMan.visible = true;
    _this.scene.add(_this.lightMan);


    _this.light = new THREE.DirectionalLight(0x002288, 0.4);
    _this.light.position.set(-2000, -2000, -2000);
    _this.scene.add(_this.light);

    _this.light = new THREE.AmbientLight(0x222222);
    _this.scene.add(_this.light);

    _this.light = new THREE.HemisphereLight(0xffffff, 0x444444, 0.4);
    _this.light.position.set(0, 20000, 0);
    _this.scene.add(_this.light);


    _this.getObjectByName = function (name) {
        if (_this.scene.getObjectByName(name)) return _this.scene.getObjectByName(name);
    };

    //设置渲染器
    _this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    _this.renderer.setSize(_this.container.clientWidth, _this.container.clientHeight);
    _this.renderer.setClearColor(0xEEEEEE, 0.0);
    _this.renderer.shadowMap.enabled = true;
    _this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    _this.container.appendChild(_this.renderer.domElement);
    _this.container = document.getElementById(elId);



    //设置轨道像机
    _this.controls = new THREE.OrbitControls(_this.camera, _this.renderer.domElement);
    _this.controls.target.set(0, 0, 0);
    _this.controls.update();

    //监听窗口大小改变
    _this.onWindowResize = function () {
        if (!_this.container) return
        _this.camera.aspect = _this.container.clientWidth / _this.container.clientHeight;
        _this.camera.updateProjectionMatrix();
        _this.renderer.setSize(_this.container.clientWidth, _this.container.clientHeight);
    };
    window.addEventListener('resize', _this.onWindowResize, false);

    //防止初始化时包容块被隐藏了
    _this.mutationObserver = new MutationObserver(_this.onWindowResize);
    var options = {
        'childList': true,
        'attributes': true
    };
    _this.mutationObserver.observe(_this.container, options);


    //后期处理

    // var composer = new THREE.EffectComposer( _this.renderer );
    // var renderPass = new THREE.RenderPass( _this.scene, _this.camera );
    // composer.addPass( renderPass );
    //
    // //模型外发光错误
    // _this.errorObjects = [];
    // var outlinePass = new THREE.OutlinePass( new THREE.Vector2(window.innerWidth, window.innerHeight), _this.scene, _this.camera);
    // outlinePass.visibleEdgeColor =  new THREE.Color(0x910602);
    // outlinePass.hiddenEdgeColor = new THREE.Color(0x910602);
    // outlinePass.pulsePeriod = 0.5;
    // outlinePass.selectedObjects = _this.errorObjects ;
    // composer.addPass( outlinePass );
    //
    // //模型外发光警告
    // _this.warningObjects = [];
    // var outlinePass2 = new THREE.OutlinePass( new THREE.Vector2(window.innerWidth, window.innerHeight), _this.scene, _this.camera);
    // outlinePass2.visibleEdgeColor =  new THREE.Color(0xbe8201);
    // outlinePass2.hiddenEdgeColor = new THREE.Color(0xbe8201);
    // outlinePass2.pulsePeriod = 0.5;
    // outlinePass2.selectedObjects = _this.warningObjects ;
    // composer.addPass( outlinePass2 );
    //
    // var HueSaturation = new THREE.ShaderPass(THREE.HueSaturationShader);
    // HueSaturation.renderToScreen = true;
    // composer.addPass(HueSaturation);
    //
    // var effectFXAA =  new THREE.ShaderPass(THREE.FXAAShader);
    // effectFXAA.uniforms['resolution'].value.set(1 / window.innerWidth, 1 / window.innerHeight );
    // composer.addPass(effectFXAA);



    //循环渲染调用
    _this.animate = function () { };
    _this.render = function () {
        _this.renderer.render(_this.scene, _this.camera)
    };
    _this.FaceCamera = [];
    _this.animateRun = function () {
        if (!_this.container) return;
        requestAnimationFrame(_this.animateRun);
        _this.animate();
        if (_this.mixers.length > 0) {
            for (var i = 0; i < _this.mixers.length; i++) {
                _this.mixers[i].update(_this.clock.getDelta());
            }
        }
        _this.controls.update();
        // composer.render();
        //让展板文字块保持面向屏幕
        if (_this.FaceCamera && _this.FaceCamera.length) {
            _this.FaceCamera.forEach(function (value, index, array) {
                value.rotation.copy(_this.camera.rotation);
            })
        }

        _this.render();
    };

    _this.animateRun();

    // 光线投射 - - 完成点击事件
    _this.raycaster = new THREE.Raycaster();
    _this.mouse = new THREE.Vector2();
    _this.selectedObjects = [];
    _this.moved = false;
    _this.mousemove = null;
    _this.click = null;
    _this.mousetoclick = 0;
    _this.container.addEventListener('mousedown', function () {
        _this.moved = false;
        _this.mousetoclick = 0;
    }, false);
    _this.number = 0;
    _this.container.addEventListener('mouseup', function () {
        if (_this.mousetoclick < 2 && _this.click) {
            var e = checkIntersection();
            _this.click(e)
        }
        if (_this.mousetoclick < 2 && _this._click) {
            var e = checkIntersection();
            _this._click(e)
        }
    });
    _this.container.addEventListener('mousemove', onTouchMove);
    _this.container.addEventListener('touchmove', onTouchMove);
    function onTouchMove(event) {
        if (event.changedTouches) {
            x = event.changedTouches[0].pageX - $(_this.container).offset().left;
            y = event.changedTouches[0].pageY - $(_this.container).offset().top;
        } else {
            x = event.clientX - $(_this.container).offset().left;
            y = event.clientY - $(_this.container).offset().top;
        }
        _this.mouse.x = (x / _this.container.clientWidth) * 2 - 1;
        _this.mouse.y = - (y / _this.container.clientHeight) * 2 + 1;

        _this.mousetoclick++;
        if (_this.mousemove) {
            _this.mousemove(checkIntersection())
        }

    }
    function addSelectedObject(object) {
        _this.selectedObjects = [];
        _this.selectedObjects.push(object);
    }
    function checkIntersection() {
        _this.raycaster.setFromCamera(_this.mouse, _this.camera);
        var intersects = _this.raycaster.intersectObjects([_this.scene], true);
        if (intersects.length > 0) {
            var selectedObject = intersects[0].object;
            return selectedObject;
        }
        else {
        }
    }

    return _this;

};
//3D操作
var webGL = function (elId) {
    var _this = this;
    //控制函数内控制台打印
    _this.isLog = false;

    _this.__proto__ = scene3D(elId);
    //元素朝向屏幕
    _this.FaceCamera = _this.__proto__.FaceCamera;
    //镜头拉动动画, number 镜头拉动远点值,time 动画时间,callback完成时回调
    _this.cameraTo = function (number, time, callback) {
        //获取像机当前位置
        var now = {};
        now.x = _this.camera.position.x;
        now.y = _this.camera.position.y;
        now.z = _this.camera.position.z;

        //判断像机方向
        var fx = {};
        fx.x = 1;
        fx.y = 1;
        fx.z = 1;
        if (now.x < 0) fx.x = -1;
        if (now.y < 0) fx.y = -1;
        if (now.z < 0) fx.z = -1;

        //取绝对值
        var now2 = {};
        now2.x = Math.abs(now.x);
        now2.y = Math.abs(now.y);
        now2.z = Math.abs(now.z);

        //取距离最大得轴(距离最大轴到达远点值则结束)
        if (now2.x >= now2.y && now2.x >= now2.z) {
            //过渡计算
            animentNumber(now2.x, parseInt(number), time, function (e) {
                //计算各轴坐标
                _this.camera.position.x = e * fx.x;
                _this.camera.position.y = (now2.y / now2.x) * e * fx.y;
                _this.camera.position.z = (now2.z / now2.x) * e * fx.z;

                if (e === parseInt(number)) {
                    if (callback) callback();
                }

            });
        } else if (now2.y >= now2.x && now2.y >= now2.y) {
            //过渡计算
            animentNumber(now2.y, parseInt(number), time, function (e) {
                //计算各轴坐标
                _this.camera.position.y = e * fx.y;
                _this.camera.position.x = (now2.x / now2.y) * e * fx.x;
                _this.camera.position.z = (now2.z / now2.y) * e * fx.z;

                if (e === parseInt(number)) {
                    if (callback) callback();
                }

            });
        } else {
            //过渡计算
            animentNumber(now2.z, parseInt(number), time, function (e) {
                //计算各轴坐标
                _this.camera.position.z = e * fx.z;
                _this.camera.position.x = (now2.x / now2.z) * e * fx.x;
                _this.camera.position.y = (now2.y / now2.z) * e * fx.y;


                if (e === parseInt(number)) {
                    if (callback) callback();
                }

            });
        }

    };
    //点击查找父级块,e 为模型对象,name 父级name值(非必填如果没有则返回该对象最顶级父级)
    _this.findBox = function (e, name) {
        if (!e) return;
        if (name) {
            if (e.name && e.name === name) {
                return e;
            } else if (e.parent) {
                return _this.findBox(e.parent, name);
            } else {
                return false;
            }
        } else {
            if (e.parent) {
                return _this.findBox(e.parent);
            } else {
                return e;
            }
        }
    };
    //通过模型name值注册点击事件, name模型name值,event事件类型(目前只支持"click"事件),callback事件触发的回调
    _this.eventList = function (name, event, callback) {
        //创建存储对象
        if (!_this.eventListOb) {
            _this.eventListOb = {
                //注册支持事件类型
                click: {}
            }
        };

        //存储回调
        if (_this.eventListOb[event]) {
            var evetOb = _this.eventListOb[event];
            evetOb[name] = callback;
        };

        //事件触发
        _this.__proto__._click = function (e) {
            console.log(_this.isLog);
            if (_this.isLog) console.log(e);
            // _this.findBox(e);
            var eventArray = _this.eventListOb.click;
            var clickOb = {};
            var clis;
            for (var i in eventArray) {
                var box = _this.findBox(e, i);

                if (box) {
                    clickOb = box;
                    clis = i;
                }
            }
            clickOb.targetModel = e;
            if (clis) _this.eventListOb.click[clis](clickOb);
        };
    };
    //添加所有点击触发时间
    _this.eventListAll = function (event, callback) {
        if (event == "click") {
            _this.__proto__.click = callback;
        }
    };

    //注册场景
    _this.logonScene = function (obj) {
        //创建存储对象
        if (!_this.sceneArrays) _this.sceneArrays = {};

        if (!obj.name) return;
        _this.sceneArrays[obj.name] = {};
        var main = _this.sceneArrays[obj.name];

        //把加载文件推入到加载队列
        if (!_this.loadFilesUrl) _this.loadFilesUrl = [];
        if (obj.files) {
            for (var i in obj.files) {
                var b = obj.files[i];
                b.hook = obj.name;
                b.name = i;
                _this.loadFilesUrl.push(b);
            }
        }

        //入场动画完成时调用
        main.onShow = function () { };
        if (obj.onShow) {
            main.onShow = obj.onShow;
        }

        //该场景在无交互情况下是否要自动旋转
        main.rotateAnime = false;
        if (obj.rotateAnime) {
            main.rotateAnime = true;
        }


        main.loadFilesUrl = obj.files;
        //用来存储加载后的文件
        main.files = {};

        //场景组对象
        main.sceneGroup = new THREE.Group();

        //存储方法
        main.mounted = obj.mounted;

        main.destroyed = obj.destroyed;


        //旋转动画速度控制
        if (obj.rotateSpeed) {

            _this.rotateSpeed = obj.rotateSpeed;
        } else {

            _this.rotateSpeed = 0.005;
        }

    };
    _this.rotateScene = function () {
        if (!_this.rotateAnime) return;
        if (_this.moveTouch) {
            return
        };
        if (_this.nowSceneOb.rotation.y >= (Math.PI / 180 * 360)) {
            _this.nowSceneOb.rotation.y = 0;
        }
        _this.nowSceneOb.rotation.y += _this.rotateSpeed;
    };

    //场景在无交互情况下是否要自动旋转
    _this.rotateAnime = false;

    //进入指定场景, name 添加场景时给的场景名称
    _this.nowScene = {};//记录当前显示的场景
    _this.nowScene = {};//记录当前显示的场景
    _this.sceneTo = function (name) {
        if (!_this.sceneArrays && !_this.sceneArrays[name]) return;
        //把像机推开
        _this.cameraTo(14600, 200, function () {
            //清除所有模型
            _this.scene.children.forEach(function (value, index, array) {
                if (value.type === "Group") {
                    _this.scene.remove(value)
                }
            });

            //触发上一个场景注销事件
            if (_this.nowScene && _this.nowScene.destroyed) _this.nowScene.destroyed.call(_this.nowScene.files, _this.nowScene.sceneGroup);
            _this.nowScene = null;//清空当前记录
            _this.nowScene = _this.sceneArrays[name];

            //添加要抵达得场景模型
            var m = _this.nowScene.sceneGroup.clone();
            _this.nowSceneOb = m;
            _this.scene.add(m);

            //触发当前场景运行事件
            if (_this.nowScene.mounted) _this.nowScene.mounted.call(_this.nowScene.files, m);

            //访问场景记录(记录访问路径根据路径可以返回上一层)
            if (!_this.sceneHistory) _this.sceneHistory = [];
            if (_this.sceneHistory.length >= 7) _this.sceneHistory.shift();
            if (_this.sceneHistory[_this.sceneHistory.length - 1] !== name) _this.sceneHistory.push(name);
            //显示异常返回按钮
            if (_this.sceneHistory.length > 1) {
                $(".returnBtn").fadeIn();
            } else {
                $(".returnBtn").fadeOut();
            }

            setTimeout(function () {

                //防止之前把聚焦点调节过
                _this.controls.target.x = 0;
                _this.controls.target.y = 0;
                _this.controls.target.z = 0;

                //把像机拉近
                _this.cameraTo(1200, 200, function () {
                    _this.nowScene.onShow.call(_this.nowScene.files, m);

                    //判断是否开启该场景在无交互情况下要自动旋转
                    if (_this.nowScene.rotateAnime) {
                        _this.rotateAnime = true;
                    } else {
                        _this.rotateAnime = false;
                    }
                })
            });
        });

    };

    //返回上一个场景(最多返回6层)
    _this.scenePrev = function () {
        if (_this.sceneHistory.length > 1) {
            _this.sceneTo(_this.sceneHistory[_this.sceneHistory.length - 2]);

            //删除上一个场景记录
            _this.sceneHistory.pop();
        }
    };
    //文件加载进度
    _this.loading = function (e) { };
    //加载文件  _this.loadFile([{url:"fonts/SimHei_Regular.json",type:"font"},{url:'files/PangusFloor003.fbx',type:"fbx"},{url:'webGL/images/138.png',type:"img"}],ture); boolen 表示该次加载是记录加载进度
    _this.load = function (array, boolen) {
        if (!array || !(array instanceof Array)) return;

        if (!array.length) return _this.loading(100);

        //存储加载文件(全部加载完成后通过回调返回出去)
        var loadOb = {};

        //按数组逐个加载
        var index = 0;
        var progress = 0;
        loadStart();
        function loadStart() {
            if (index < array.length) {
                format(array[index], function (e) {
                    var ob = array[index];
                    progress = parseInt(100 * (index / array.length) + e / array.length);
                    if (index === array.length - 1 && e === 100) {
                        progress = 100;
                    }
                    if (boolen) _this.loading(progress);
                    if (progress === 100) {
                        ob.files = loadOb;
                        for (var i in loadOb) {
                            for (var j in loadOb[i]) {
                                var m = loadOb[i][j];

                                // 防止模型加重复被覆盖后提取模型名称
                                var name = j.split(m.hook_wg + "_");
                                name = name[name.length - 1];

                                _this.sceneArrays[m.hook_wg].files[name] = m;
                            }
                        }
                        _this.loadfiles = ob.files;
                    }
                    if (Number(e) === 100) {
                        index++;
                        return loadStart();
                    }
                });
            }
        }

        //判断文件以什么类型取加载
        function format(ob, callback) {
            if (!ob.url || !ob.type) return;
            var url = ob.url.trim();
            var type = ob.type.trim().toLowerCase();
            var hook = ob.hook ? ob.hook.trim() : "";
            var urlSplit = url.split('.')[0].split("/");
            var fileName = ob.name ? ob.name.trim() : urlSplit[urlSplit.length - 1];


            if (type === "img") {
                return loadImg(url, fileName, hook, callback)
            }
            if (type === "font") {
                return loadFont(url, fileName, hook, callback)
            }
            if (type === "fbx") {
                return loadFbxModels(url, fileName, hook, callback)
            }
            if (type === "json") {
                return loadJson(url, fileName, hook, callback)
            }
            if (type === "obj") {
                return loadObj(url, fileName, hook, callback)
            }
        }

        //加载fbx文件，回调返回加载状态
        function loadFbxModels(url, name, hook, callback) {
            var manager = new THREE.LoadingManager();
            manager.onProgress = function (item, loaded, total) {
                if (_this.isLog) console.log(item, loaded, total);
            };
            //加载进度(注意加载精度并不是精确的)
            var onProgress = function (xhr) {
                if (xhr.lengthComputable) {
                    var percentComplete = xhr.loaded / xhr.total * 100;
                    var num = Math.round(percentComplete, 2);
                    //注意这里到达100也极有可能文件还没加载完，所以100状态要在文件加载得事件里发送
                    if (num < 100) callback(num);
                }
            };
            var onError = function (xhr) {
                console.error(xhr);
            };

            var loaderFBX = new THREE.FBXLoader(manager);
            loaderFBX.load(url, function (object) {
                if (!loadOb.fbx) loadOb.fbx = {};
                //[hook+"_"+name] 防止模型加重复被覆盖
                loadOb.fbx[hook + "_" + name] = object;
                loadOb.fbx[hook + "_" + name].hook_wg = hook;
                //100状态要在文件加载完成事件里发送
                callback(100);
            }, onProgress, onError);

        };

        //加载字体文件，回调返回加载状态
        function loadFont(url, name, hook, callback) {
            var manager = new THREE.LoadingManager();
            manager.onProgress = function (item, loaded, total) {
                if (_this.isLog) console.log(item, loaded, total);
            };
            //加载进度(注意加载精度并不是精确的)
            var onProgress = function (xhr) {
                if (xhr.lengthComputable) {
                    var percentComplete = xhr.loaded / xhr.total * 100;
                    var num = Math.round(percentComplete, 2);
                    if (_this.isLog) console.log(num);
                    //注意这里到达100也极有可能文件还没加载完，所以100状态要在文件加载得事件里发送
                    if (num < 100) callback(num);
                }
            };
            var onError = function (xhr) {
                console.error(xhr);
            };

            var fontLoader = new THREE.FontLoader(manager);
            fontLoader.load(url, function (font) {
                if (!loadOb.font) loadOb.font = {};
                loadOb.font[name] = font;
                loadOb.font[name].hook_wg = hook;
                //100状态要在文件加载完成事件里发送
                callback(100);
            }, onProgress, onError)

        };

        //加载图片文件，回调返回加载状态
        function loadImg(url, name, hook, callback) {
            var imgLoader = new THREE.TextureLoader();
            imgLoader.load(url, function (img) {
                if (!loadOb.imags) loadOb.imags = {};
                loadOb.imags[name] = img;
                loadOb.imags[name].hook_wg = hook;
                callback(100);
            });
        };

        //加载json文件
        function loadJson(url, name, hook, callback) {
            var manager = new THREE.LoadingManager();
            manager.onProgress = function (item, loaded, total) {
                if (_this.isLog) console.log(item, loaded, total);
            };
            //加载进度(注意加载精度并不是精确的)
            var onProgress = function (xhr) {
                if (xhr.lengthComputable) {
                    var percentComplete = xhr.loaded / xhr.total * 100;
                    var num = Math.round(percentComplete, 2);
                    //注意这里到达100也极有可能文件还没加载完，所以100状态要在文件加载得事件里发送
                    if (num < 100) callback(num);
                }
            };
            var onError = function (xhr) {
                if (_this.isLog) console.log(xhr);
                console.error(xhr);
            };
            var fontLoader = new THREE.JSONLoader(manager);
            fontLoader.load(url, function (geometry, materials) {
                if (!loadOb.json) loadOb.json = {};
                loadOb.json[name] = new THREE.Mesh(geometry, materials);
                loadOb.json[name].hook_wg = hook;
                //100状态要在文件加载完成事件里发送
                callback(100);
            }, onProgress, onError)
        }

        //加载obj文件
        function loadObj(url, name, hook, callback) {
            //加载进度(注意加载精度并不是精确的)
            var onProgress = function (xhr) {
                if (xhr.lengthComputable) {
                    var percentComplete = xhr.loaded / xhr.total * 100;
                    var num = Math.round(percentComplete, 2);
                    //注意这里到达100也极有可能文件还没加载完，所以100状态要在文件加载得事件里发送
                    if (num < 100) callback(num);
                }
            };
            var onError = function (xhr) {
                console.error(xhr);
            };
            THREE.Loader.Handlers.add(/\.dds$/i, new THREE.DDSLoader());
            var mtlLoader = new THREE.MTLLoader();
            var mtlUrl = url.split('.');
            mtlUrl.pop();
            mtlUrl = mtlUrl.join('.') + '.mtl';
            mtlLoader.load(mtlUrl, function (materials) {
                materials.preload();
                var objLoader = new THREE.OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.load(url, function (object) {
                    if (!loadOb.obj) loadOb.obj = {};
                    loadOb.obj[name] = object;
                    loadOb.obj[name].hook_wg = hook;
                    //100状态要在文件加载完成事件里发送
                    callback(100);
                }, onProgress, onError);

            });
        }
    };

    /**
     * 逐个加载JSON模型,避免异步加载的问题
     * @param option  数据,JSON字符串.
     * etc.
     let testData = [
             {"name":"lanseliaoxiang","url":"JSON/TC-BOX-0-0-Blue-590X400X350-Primary.js","position":[45.206,1631.76,-3.441],"rotate":[0,180,12.5]},
             {"name":"hongseliaoxiang","url":"JSON/TC-BOX-0-0-Red-590X400X350-Primary.js","position":[-1106.823,1336.596,-3.441],"rotate":[0,-180,12.5]},
             {"name":"heiseliaoxiang","url":"JSON/TC-BOX-0-0-Black-590X400X350-Primary.js","position":[45.206,531.073,-3.441],"rotate":[0,-180,12.5]}
     ];
     * @param parent 父级
     * @param times  循环次数,初始为0
     * @param callback  回调函数,一般不需要设置.用于循环JSON的字模型,函数内部使用较多.
     * @param callback2  回调函数2,用于模型加载完成后执行的函数.在loadData中使用.
     */
    _this.loadDataOld = function (option, parent, times, callback) {
        let _that = _this;
        // if(_this.isLog) console.log(option,"次数 :" + times);
        let j = times;
        let name = option[j].name ? option[j].name : "";
        let url = option[j].url ? option[j].url : "";
        let position = option[j].position ? option[j].position : "";
        let group = option[j].group ? option[j].group : "";
        let children = option[j].children ? option[j].children : "";
        let copyControl = option[j].copyControl ? option[j].copyControl : "";
        let objRotate = option[j].rotate ? option[j].rotate : "";
        parent = parent ? parent : scene;
        callback = callback ? callback : '';
        if (_this.isLog) console.log(url);

        if (children !== "") {
            // if(_this.isLog) console.log('进到子元素界面', children);
            _this.group = new THREE.Group();
            _this.group.name = name;
            parent.add(_this.group);
            _that.loadDataOld(children, _this.group, 0, function () {
                if (++j < option.length) {
                    _that.loadDataOld(option, parent, j, callback);
                }
            });
        }
        if (children === "" && url !== "") {
            loader.load(url, function (geometry, materials) {
                let material = new THREE.MultiMaterial(materials);
                let object = new THREE.Mesh(geometry, material);
                object.position.set(position[0], position[1], position[2]);
                if (objRotate !== "" && objRotate !== "0") {
                    object.rotateX(Math.PI / 180 * objRotate[0]);
                    object.rotateY(Math.PI / 180 * objRotate[1]);
                    object.rotateZ(Math.PI / 180 * objRotate[2]);
                }
                object.name = name;
                parent.add(object);
                if (++j < option.length) {
                    _that.loadDataOld(option, parent, j, callback);
                } else if (callback !== "") {
                    callback();
                }
            })
        }
        if (copyControl !== "") {
            // if(_this.isLog) console.log(copyControl);
            let newgroup = _that.scene.getObjectByName(copyControl).clone();
            newgroup.name = name;
            parent.add(newgroup);
            newgroup.position.set(position[0], position[1], position[2]);
            if (objRotate !== "" && objRotate !== "0") {
                newgroup.rotateX(Math.PI / 180 * objRotate[0]);
                newgroup.rotateY(Math.PI / 180 * objRotate[1]);
                newgroup.rotateZ(Math.PI / 180 * objRotate[2]);
            }
            if (++j < option.length) {
                _that.loadDataOld(option, parent, j);
            }
        }
    }
    let loader = new THREE.JSONLoader();
    _this.loadData = function (option, parent, times, callback, callback2) {
        let _that = _this;
        //定义计数起点,方便计算回调结束
        let timeCount = option.length;
        function loadStart(option, parent, times, callback) {
            let j = times;
            let name = option[j].name ? option[j].name : "";
            let url = option[j].url ? option[j].url : "";
            let position = option[j].position ? option[j].position : "";
            let group = option[j].group ? option[j].group : "";
            let children = option[j].children ? option[j].children : "";
            let copyControl = option[j].copyControl ? option[j].copyControl : "";
            let objRotate = option[j].rotate ? option[j].rotate : "";
            parent = parent ? parent : scene;
            callback = callback ? callback : '';
            callback2 = callback2 ? callback2 : '';
            if (_this.isLog) console.log(name);

            if (children !== "") {
                let _thisGroup = new THREE.Group();
                _thisGroup.name = name;
                parent.add(_thisGroup);
                _thisGroup.position.set(position[0], position[1], position[2]);
                // 拥有子元素时候增加计数个数
                timeCount += Array.isArray(children) ? children.length : 0;
                if (_this.isLog) console.log('子元素增加的个数:' + children.length);
                loadStart(children, _thisGroup, 0, function () {
                    if (_this.isLog) console.log(_thisGroup);
                    if (++j < option.length) {
                        loadStart(option, parent, j, callback);
                    }
                });
            }
            if (children === "" && url !== "") {
                loader.load(url, function (geometry, materials) {
                    let material = new THREE.MultiMaterial(materials);
                    let object = new THREE.Mesh(geometry, material);
                    object.position.set(position[0], position[1], position[2]);
                    if (objRotate !== "" && objRotate !== "0") {
                        object.rotateX(Math.PI / 180 * objRotate[0]);
                        object.rotateY(Math.PI / 180 * objRotate[1]);
                        object.rotateZ(Math.PI / 180 * objRotate[2]);
                    }
                    object.name = name;
                    parent.add(object);
                    if (++j < option.length) {
                        loadStart(option, parent, j, callback);
                    } else if (callback !== "") {
                        callback();
                    }
                })
            }
            if (copyControl !== "") {
                // if(_this.isLog) console.log(copyControl);
                let newgroup = _that.scene.getObjectByName(copyControl).clone();
                newgroup.name = name;
                parent.add(newgroup);
                if (objRotate !== "" && objRotate !== "0") {
                    newgroup.rotateX(Math.PI / 180 * objRotate[0]);
                    newgroup.rotateY(Math.PI / 180 * objRotate[1]);
                    newgroup.rotateZ(Math.PI / 180 * objRotate[2]);
                }
                newgroup.position.set(position[0], position[1], position[2]);
                // if(_this.isLog) console.log(newgroup);
                if (++j < option.length) {
                    loadStart(option, parent, j);
                }
            }
            //结束时,执行回调函数
            if ((--timeCount === 0) && (typeof callback2 === 'function')) {
                // 前面的--就是把自己刨出去
                //稍微加点延迟,让模型渲染完毕
                setTimeout(function () {
                    callback2();
                }, 500)
            }
        }
        loadStart(option, parent, times, callback);
    }

    /*
    * 动画 闭环结束版
    * element 对象 模型名称
    * arr 坐标列表 数组
    * repeat 是否循环 true,false
    * */
    _this.animationClosed = function (element, arr, repeat) {
        let _that = _this;
        let oldPosition = [element.position.x, element.position.y, element.position.z];
        let times = 4500;
        let time = 5;
        if (arr.length > 0) {
            if (element.position.x !== Number(arr[0][0])) {
                times = Math.abs((element.position.x - Number(arr[0][0])) / time);
            } else if (element.position.z !== Number(arr[0][2])) {
                times = Math.abs((element.position.z - Number(arr[0][2])) / time);
            }
            new TWEEN.Tween(element.position).to({
                x: Number(arr[0][0]),
                y: Number(arr[0][1]),
                z: Number(arr[0][2])
            }, times).easing(TWEEN.Easing.Linear.None).onUpdate(function () {

            }).onComplete(function () {
                // 旋转动画
                new TWEEN.Tween(element.rotation).to({ y: element.rotation.y + (Math.PI / 180 * 90) }, 1000).easing(TWEEN.Easing.Linear.None).onComplete(function () {
                    element.position.set(Number(arr[0][0]), Number(arr[0][1]), Number(arr[0][2]));
                    // let oldPosition = [Number(arr[0][0]), Number(arr[0][1]), Number(arr[0][2])];
                    arr.shift();
                    if (repeat === true) {
                        arr.push(oldPosition);
                    }
                    if (arr.length > 0) {
                        _that.animationClosed(element, arr, repeat);
                    }
                }).start();
            }).start();
        }
    }

    /*
    * 动画 单线版本 起点/终点 装货/卸货
    * element 对象 模型名称
    * arrList 坐标列表 数组
    * [X,Y,Z,ROTATE]
    * moveAgvOption.positionArr = [
                    [
                        [-23710.43,107.566,-1290.727,90],
                        [-14791.098,107.566,-1290.727,90],
                        [-14791.098,107.566,-14607.592,90],
                        [-12062.092,107.566,-14607.592,90]
                    ],
                ];
    * arrList[0] 当前坐标数组
    * arrList[1] 回程坐标数组
    * repeat 是否循环 true,false
    * */
    _this.animationSingleLine = function (option) {
        let element = option.obj;
        let arrList = option.positionArr;
        let repeat = option.repeat;
        let cargoObj = option.cargoObj;

        let _that = _this;
        let oldPosition = [element.position.x, element.position.y, element.position.z];
        let times = 4500;
        let speed = 5;
        //初始化回程列表
        let arr = arrList[0];
        if (!arrList[1] || arrList[1].length < 1) {
            arrList[1] = [];
        }

        if (arr.length > 0) {
            if (element.position.x !== Number(arr[0][0])) {
                times = Math.abs((element.position.x - Number(arr[0][0])) / speed);
            } else if (element.position.z !== Number(arr[0][2])) {
                times = Math.abs((element.position.z - Number(arr[0][2])) / speed);
            }
            new TWEEN.Tween(element.position).to({
                x: Number(arr[0][0]),
                y: Number(arr[0][1]),
                z: Number(arr[0][2])
            }, times).easing(TWEEN.Easing.Linear.None).onUpdate(function () {

            }).onComplete(function () {
                // AGV旋转动画,最后一步的时候不旋转
                if (arr.length > 1) {
                    if (arr[0][3] !== 0) {
                        new TWEEN.Tween(element.rotation).to({ y: element.rotation.y + (Math.PI / 180 * arr[0][3]) }, 1000).easing(TWEEN.Easing.Linear.None).onComplete(function () {
                            nextStep();
                        }).start();
                    } else {
                        nextStep();
                    }

                } else {
                    //最后一步,暂停两秒
                    setTimeout(function () {
                        // 取反,货物的可见状态,用于AGV卸货与装货
                        cargoObj.visible = !cargoObj.visible;
                        nextStep();
                    }, 2000)
                }
            }).start();
        };

        //下一步的方法
        function nextStep() {
            element.position.set(Number(arr[0][0]), Number(arr[0][1]), Number(arr[0][2]));
            let _thisRotate = arr[0][3]
            arr.shift();
            if (repeat === true) {
                oldPosition[3] = Number(_thisRotate);
                arrList[1].unshift(oldPosition);
                if (arr.length < 1) {
                    arrList.shift();
                }
            }
            // if(_this.isLog) console.log(arrList);
            if (arrList.length > 0) {
                let nextOption = {};
                nextOption.obj = element;
                nextOption.positionArr = arrList;
                nextOption.repeat = repeat;
                nextOption.cargoObj = cargoObj;
                _that.animationSingleLine(nextOption);
            }
        }
    }

    /*
    * current1 相机当前的位置
    * target1 相机的controls的target
    * current2 新相机的目标位置
    * target2 新的controls的target
    * */
    _this.animateCamera = function (current1, target1, current2, target2) {
        // webGlBox.nowSceneOb.rotation.y = 0;
        // webGlBox.controls.reset();
        // if(_this.isLog) console.log(webGlBox.camera.position);
        let camera = webGlBox.camera;
        let controls = webGlBox.controls;
        let sceneRotation = webGlBox.nowSceneOb.rotation;
        // sceneRotation.y = 0;
        new TWEEN.Tween(sceneRotation).to({ x: 0, y: 0, z: 0 }, 200).start();
        setTimeout(function () {
            let positionVar = {
                x1: current1.x,
                y1: current1.y,
                z1: current1.z,
                x2: target1.x,
                y2: target1.y,
                z2: target1.z
            };


            //关闭控制器
            controls.enabled = false;
            var tween = new TWEEN.Tween(positionVar);
            tween.to({
                x1: current2.x,
                y1: current2.y,
                z1: current2.z,
                x2: target2.x,
                y2: target2.y,
                z2: target2.z
            }, 1000);

            tween.onUpdate(function () {
                camera.position.x = positionVar.x1;
                camera.position.y = positionVar.y1;
                camera.position.z = positionVar.z1;
                controls.target.x = positionVar.x2;
                controls.target.y = positionVar.y2;
                controls.target.z = positionVar.z2;
                controls.update();
                // if(_this.isLog) console.log(positionVar);
            })

            tween.onComplete(function () {
                ///开启控制器
                controls.enabled = true;
            })

            tween.easing(TWEEN.Easing.Cubic.InOut);
            tween.start();
        }, 500)
        //  复位controls.target位置
        // new TWEEN.Tween( controls.target ).to( { x: 0,y: 0 ,z: 0}, 1000 ).start();
        // new TWEEN.Tween( webGlBox.camera.position ).to( {x: 799.9999999999999, y: 2000.0000000000002, z: 1400}, 1000 ).start();

    }

    /*
     * 读取文件
     * file 文件
     * callback 回调函数.
     */
    _this.readData = function (file, callback) {
        let url = file;
        let request = new XMLHttpRequest();
        request.open("get", url); /*设置请求方法与路径*/
        request.send(null); /*不发送数据到服务器*/
        request.onload = function () { /*XHR对象获取到返回信息后执行*/
            if (request.status == 200) { /*返回状态为200，即为数据获取成功*/
                var json = JSON.parse(request.responseText);
                // for(var i=0;i<json.length;i++){
                // 	if(_this.isLog) console.log(json[i].name);
                // }
                callback(json)
            }
        }
    }

    /*
    * 新模型状态变化.传值data数据即可
    * data组成结构
    {
    "code": 200,
    "msg": "success",
    "data": [{
        "productionLine": "S25",
        "childrens": [{
            "id": 186,
            "name": "ShangBanJi22",
            "status": "normal"
        }， {
            "id": 185,
            "name": "NG8",
            "status": "normal"
        }, {
            "id": 184,
            "name": "JieBoTai8",
            "status": "normal"
        }],
        {
            "productionLine": "S19",
            "childrens": [{
                "id": 135,
                "name": "ZhuoZi6",
                "status": "normal"
            }, {
                "id": 134,
                "name": "ZhuoZi5",
                "status": "normal"
            }, {
                "id": 133,
                "name": "ChangGuiDao3",
                "status": "normal"
            }]
        }
    }]
    }
    * */

    _this.lightObj = {}
    let lightData = _this.lightObj;
    _this.statusChange = function (data, isToNew) {
        let isNew = isToNew || true;
        let _that = _this;
        // for(var o in lightObj){
        //     var el = lightObj[o];
        //     el.parent.remove(el);
        // }

        // lightObj={};

        var dataList = [];
        if (isNew) {
            for (let i = 0; i < data.data.length; i++) {
                if (data.data[i].dataName == "3D") {
                    dataList = data.data[i].dataValue;
                }
            }
        } else {
            dataList = data.data;
        }

        for (var j = 0; j < dataList.length; j++) {
            var data1 = null;
            if (!isNew) {
                data1 = dataList[j].childrens;
            } else {
                data1 = dataList[j].lineChildrens;
            }
            for (var i = 0; i < data1.length; i++) {
                var elName = data1[i].name;
                // lightData[elName] = data1[i];
                var statNmae = data1[i].status;
                lightControl(elName, statNmae, _that.lightObj);

            }
        }

        // for(let l in lightData){
        //     var statNmae = lightData[l].status;
        //     lightControl(elName,statNmae,lightObj);
        // }

        function lightControl(name, type) {
            var hn = "_light";
            if (lightObj[name + hn]) {
                var el = lightObj[name + hn];

                if (type) {
                    if (type === "error") {
                        el.traverse(function (child) {
                            if (child instanceof THREE.Mesh) {
                                child.material = error;
                            }
                        });
                    } else if (type === "warning") {
                        el.traverse(function (child) {
                            if (child instanceof THREE.Mesh) {
                                child.material = warning;
                            }
                        });
                    } else if (type === "green") {
                        el.traverse(function (child) {
                            if (child instanceof THREE.Mesh) {
                                child.material = green;
                            }
                        });
                    } else if (type == "normal") {
                        el.parent.remove(el);
                        lightObj[name + hn] = null;
                    }
                } else {
                    el.parent.remove(el);
                    lightObj[name + hn] = null;
                }

            } else {
                if (!type) return;
                if (type == "normal") return;
                if (_that.scene.getObjectByName(name) && _that.scene.getObjectByName(name) !== "") {
                    var p = _that.scene.getObjectByName(name).parent;
                    lightObj[name + hn] = _that.scene.getObjectByName(name).clone();
                    // if(_this.isLog) console.log(lightObj);
                    var el = lightObj[name + hn];
                    p.add(el)
                    if (type === "error") {
                        el.traverse(function (child) {
                            if (child instanceof THREE.Mesh) {
                                child.material = error;
                            }
                        });
                    } else if (type === "warning") {
                        el.traverse(function (child) {
                            if (child instanceof THREE.Mesh) {
                                child.material = warning;
                            }
                        });
                    } else if (type === "green") {
                        el.traverse(function (child) {
                            if (child instanceof THREE.Mesh) {
                                child.material = green;
                            }
                        });
                    }
                }
            }
        }

    }


    /*
     * 旧模型变状态的方法
     * name string 模型的名字
     * type string 状态,有error|warning|normal 三种
     * lightObj array 状态集合,由common那传入
     */
    _this.lightControl = function (name, type, lightObj) {
        var hn = "_light";
        let _that = _this;
        var lightObj = lightObj || _that.lightObj;
        //模型记录状态
        if (_that.scene.getObjectByName(name)) _that.scene.getObjectByName(name)._state = type;

        if (lightObj[name + hn]) {
            var el = lightObj[name + hn];
            if (type) {
                el._state = type;
                if (type === "error") {
                    el.traverse(function (child) {
                        if (child instanceof THREE.Mesh) {
                            child.material = error;
                        }
                    });
                } else if (type === "warning") {
                    el.traverse(function (child) {
                        if (child instanceof THREE.Mesh) {
                            child.material = warning;
                        }
                    });
                } else if (type === "green") {
                    el.traverse(function (child) {
                        if (child instanceof THREE.Mesh) {
                            child.material = green;
                        }
                    });
                }
            } else {
                el.parent.remove(el);
            }

        } else {
            if (!type) return;
            if (_that.scene.getObjectByName(name) && _that.scene.getObjectByName(name) !== "") {
                var p = _that.scene.getObjectByName(name).parent;
                lightObj[name + hn] = _that.scene.getObjectByName(name).clone();
                var el = lightObj[name + hn];
                //保存跟原对象的关联与状态
                el._state = type;
                el._originName = name;

                if (_this.isLog) console.log(lightObj);

                p.add(el)
                if (type === "error") {
                    el.traverse(function (child) {
                        if (child instanceof THREE.Mesh) {
                            child.material = error;
                        }
                    });
                } else if (type === "warning") {
                    el.traverse(function (child) {
                        if (child instanceof THREE.Mesh) {
                            child.material = warning;
                        }
                    });
                } else if (type === "green") {
                    el.traverse(function (child) {
                        if (child instanceof THREE.Mesh) {
                            child.material = green;
                        }
                    });
                }
            }
        }
    }

    //错误警报
    var error = new THREE.MeshPhongMaterial({ color: 0xfe0707, emissive: 0xfe0707, shininess: 0 });
    error.transparent = true;
    error.opacity = 0.3;
    //警告警报
    var warning = new THREE.MeshPhongMaterial({ color: 0xfc5605, emissive: 0xfc5605, shininess: 0 });
    warning.transparent = true;
    warning.opacity = 0.3;
    //绿色
    var green = new THREE.MeshPhongMaterial({ color: 0x04874e, emissive: 0x04874e, shininess: 0 });
    green.transparent = true;
    green.opacity = 0.3;
    //灯光动画
    var xf = true;
    _this.lightAnime = function () {
        if (error.opacity > 0.55) {
            xf = false;
        }
        if (error.opacity < 0.1) {
            xf = true;
        }
        if (xf) {
            warning.opacity = error.opacity = green.opacity = error.opacity + 0.1;
        } else {
            warning.opacity = error.opacity = green.opacity = error.opacity - 0.1;
        }
    }

    _this.init = function () {
        setTimeout(function () {
            _this.load(_this.loadFilesUrl, true);
        });
    };
    _this.animate = function () { };
    _this.__proto__.animate = function () {
        _this.animate();

        //判断场景是否开启旋转
        _this.rotateScene();
    };

    _this.beforeDestroy = function () {
        _this.__proto__.container = null;
        _this = null;
    }
};

//递增递减方法
/*
*  number1:开始值
*  number2:结束值
*  time:过渡时间(毫秒单位)
*  callback:过渡过程回调其中参数为当前的过渡值
*  使用: animentNumber (1,100,800,funciton(n){
*               if(_this.isLog) console.log(n)
*           })
* */
function animentNumber(number1, number2, time, callbk) {
    var number = number1;
    var times = new Date().getTime();
    var bs = time * (6 / 100);
    var timex = true;
    numberAnimet();
    function numberAnimet() {
        var times2 = new Date().getTime();
        if (timex) {
            if (times2 - times > time / bs && times2 - times < time / bs * 2) {
                if (number2 > number1) {
                    number = (number2 - number1) / bs + number;
                    if (number >= number2) {
                        number = number2;
                        timex = false;
                    }
                } else {
                    number = number - (number1 - number2) / bs;
                    if (number <= number2) {
                        number = number2;
                        timex = false;
                    }
                }
                times += time / bs;
            } else if (times2 - times > time / bs * 2) {
                if (number2 > number1) {
                    number = (number2 - number1) / bs * 2 + number;
                    if (number >= number2) {
                        number = number2;
                        timex = false;
                    }
                } else {
                    number = number - (number1 - number2) / bs * 2;
                    if (number <= number2) {
                        number = number2;
                        timex = false;
                    }
                }
                times += time / bs * 2;
            }

            requestAnimationFrame(numberAnimet);
            TWEEN.update();
            callbk(number);
        }
    }
};


