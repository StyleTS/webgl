Vue.prototype.$initWebGl = function () {
// $(function () {
	var webGlBox = new webGL("contontBoxMain");
	webGlBox.init();
	webGlBox.loading = function (e) {
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
			webGlBox.sceneTo("plant");
		}
	};

	webGlBox.logonScene({
		name: "plant", //该场景名称(提供场景切换)
		files: {
			mainMode: {
				url: 'JSON/Scene.js',
				type: "json"
			},
		},
		rotateAnime: true, //该场景在无交互情况下是否要自动旋转
		rotateSpeed: -0.003,
		onShow: function () {

		},
		mounted: function (scene) { //进入该场景触发方法 this 指向该场景所有需要加载的文件
			scene.scale.multiplyScalar(0.04);
			scene.add(this.mainMode);
			let data = [];
			// webGlBox.isLog = true;
			webGlBox.readData("data/databak.json", function (resultData) {
				data = resultData;
				data.push({
					"name": "moveAgv",
					"type": "group",
					"position": [5906.781, 118.838, -24875.541],
					"children": [{
							"name": "agv",
							"url": "JSON/AGV.js",
							"position": [0, 0, 0]
						},
						{
							"name": "storey",
							"url": "JSON/SmtFedarCar.js",
							"position": [0, 581.026, 0]
						}
					]
				});
				data.push({
					"name": "moveAgv1",
					"type": "group",
					"position": [3414.824, 118.838, -24875.541],
					"children": [{
							"name": "agv",
							"url": "JSON/AGV.js",
							"position": [0, 0, 0]
						},
						{
							"name": "storey",
							"url": "JSON/SmtFedarCar.js",
							"position": [0, 581.026, 0]
						}
					]
				});
				data.push({
					"name": "moveAgv2",
					"type": "group",
					"position": [-37.759, 118.838, -24875.541],
					"children": [{
							"name": "agv",
							"url": "JSON/AGV.js",
							"position": [0, 0, 0]
						},
						{
							"name": "storey",
							"url": "JSON/SmtFedarCar.js",
							"position": [0, 581.026, 0]
						}
					]
				});

				data.push({
					"name": "moveAgv3",
					"type": "group",
					"position": [-2558.539, 118.838, -24875.541],
					"children": [{
							"name": "agv",
							"url": "JSON/AGV.js",
							"position": [0, 0, 0]
						},
						{
							"name": "storey",
							"url": "JSON/SmtFedarCar.js",
							"position": [0, 581.026, 0]
						}
					]
				});

				data.push({
					"name": "moveAgv4",
					"type": "group",
					"position": [9090.95, 118.838, -1098.115],
					"children": [{
							"name": "agv",
							"url": "JSON/AGV.js",
							"position": [0, 0, 0]
						},
						{
							"name": "storey",
							"url": "JSON/SmtFedarCar.js",
							"position": [0, 581.026, 0]
						}
					]
				});
				data.push({
					"name": "moveAgv5",
					"type": "group",
					"position": [2524.781, 118.838, -1098.115],
					"children": [{
							"name": "agv",
							"url": "JSON/AGV.js",
							"position": [0, 0, 0]
						},
						{
							"name": "storey",
							"url": "JSON/SmtFedarCar.js",
							"position": [0, 581.026, 0]
						}
					]
				});
				data.push({
					"name": "moveAgv6",
					"type": "group",
					"position": [-4571.704, 118.838, -1098.115],
					"children": [{
							"name": "agv",
							"url": "JSON/AGV.js",
							"position": [0, 0, 0]
						},
						{
							"name": "storey",
							"url": "JSON/SmtFedarCar.js",
							"position": [0, 581.026, 0]
						}
					]
				});
				data.push({
					"name": "moveAgv7",
					"type": "group",
					"position": [-11433.598, 118.838, -1098.115],
					"children": [{
							"name": "agv",
							"url": "JSON/AGV.js",
							"position": [0, 0, 0]
						},
						{
							"name": "storey",
							"url": "JSON/SmtFedarCar.js",
							"position": [0, 581.026, 0]
						}
					]
				});
				data.push({
					"name": "moveAgv8",
					"type": "group",
					"position": [9140.147, 118.838, 23299.898],
					"children": [{
						"name": "agv",
						"url": "JSON/AGV.js",
						"position": [0, 0, 0]
					}, {
						"name": "shelf",
						"url": "JSON/WL-IS-15-KonZB-Pod-1034x1197x666-Primary.js",
						"position": [0, 333.471, 0]
					}, {
						"name": "storey",
						"url": "JSON/CargoBox.js",
						"position": [0, 1449.182, 0]
					}]
				}, {
					"name": "moveAgv9",
					"type": "group",
					"position": [2522.06, 118.838, 23299.898],
					"children": [{
						"name": "agv",
						"url": "JSON/AGV.js",
						"position": [0, 0, 0]
					}, {
						"name": "shelf",
						"url": "JSON/WL-IS-15-KonZB-Pod-1034x1197x666-Primary.js",
						"position": [0, 333.471, 0]
					}, {
						"name": "storey",
						"url": "JSON/CargoBox.js",
						"position": [0, 1449.182, 0]
					}]
				}, {
					"name": "moveAgv10",
					"type": "group",
					"position": [-4551.229, 118.838, 23299.898],
					"children": [{
						"name": "agv",
						"url": "JSON/AGV.js",
						"position": [0, 0, 0]
					}, {
						"name": "shelf",
						"url": "JSON/WL-IS-15-KonZB-Pod-1034x1197x666-Primary.js",
						"position": [0, 333.471, 0]
					}, {
						"name": "storey",
						"url": "JSON/CargoBox.js",
						"position": [0, 1449.182, 0]
					}]
				}, {
					"name": "moveAgv11",
					"type": "group",
					"position": [-11429.963, 118.838, 23299.898],
					"children": [{
						"name": "agv",
						"url": "JSON/AGV.js",
						"position": [0, 0, 0]
					}, {
						"name": "shelf",
						"url": "JSON/WL-IS-15-KonZB-Pod-1034x1197x666-Primary.js",
						"position": [0, 333.471, 0]
					}, {
						"name": "storey",
						"url": "JSON/CargoBox.js",
						"position": [0, 1449.182, 0]
					}]
				});

				loadThisData(data);
			});

			function loadThisData(data) {

				webGlBox.loadData(data, scene, 0, "", function () {
					//组合AGV数据
					let moveAgvOption = {};
					moveAgvOption.obj = scene.getObjectByName("moveAgv");
					// moveAgvOption.obj.rotateY(Math.PI/180 * 90);
					//定义货物的属性
					moveAgvOption.cargoObj = moveAgvOption.obj.getObjectByName("storey");
					moveAgvOption.positionArr = [
						[
							[5906.781, 118.838, -24875.541, 90],
							[5906.781, 118.838, -12936.781, 90],
							[7535.085, 118.838, -12936.781, 90]
						],
					];
					moveAgvOption.repeat = true;
					webGlBox.animationSingleLine(moveAgvOption);

					let moveAgv1Option = {};
					moveAgv1Option.obj = scene.getObjectByName("moveAgv1");

					// moveAgv1Option.obj.rotateY(Math.PI / 180 * 90);
					moveAgv1Option.cargoObj = moveAgv1Option.obj.getObjectByName("storey");
					moveAgv1Option.positionArr = [
						[
							[3414.824, 118.838, -24875.541, 90],
							[3414.824, 118.838, -23654.314, 90],
							[-953.105, 118.838, -23654.314, 90],
							[-953.105, 118.838, -2813.67, 90],
							[1193.435, 118.838, -2813.67, 90],
						],
					];
					moveAgv1Option.repeat = true;
					webGlBox.animationSingleLine(moveAgv1Option);

					let moveAgv2Option = {};
					moveAgv2Option.obj = scene.getObjectByName("moveAgv2");
					moveAgv2Option.obj.rotateY(Math.PI / 180 * 90);
					moveAgv2Option.cargoObj = moveAgv2Option.obj.getObjectByName("storey");
					moveAgv2Option.positionArr = [
						[
							[-37.759, 118.838, -24875.541, 90],
							[-7942.434, 118.838, -24875.541, 90],
							[-7942.434, 118.838, -12936.781, 90],
							[-6170.568, 118.838, -12936.781, 90],

						],
					];
					moveAgv2Option.repeat = true;
					webGlBox.animationSingleLine(moveAgv2Option);

					let moveAgv3Option = {};
					moveAgv3Option.obj = scene.getObjectByName("moveAgv3");

					moveAgv3Option.cargoObj = moveAgv3Option.obj.getObjectByName("storey");
					moveAgv3Option.positionArr = [
						[
							[-2558.539, 118.838, -24875.541, 90],
							[-2558.539, 118.838, -23654.314, 90],
							[-14323.697, 118.838, -23654.314, 90],
							[-14323.697, 118.838, -2813.67, 90],
							[-12620.697, 118.838, -2813.67, 90]
						],
					];
					moveAgv3Option.repeat = true;
					webGlBox.animationSingleLine(moveAgv3Option);

					let moveAgv4Option = {};
					moveAgv4Option.obj = scene.getObjectByName("moveAgv4");
					moveAgv4Option.obj.rotateY(Math.PI / 180 * 90);
					moveAgv4Option.cargoObj = moveAgv4Option.obj.getObjectByName("storey");
					moveAgv4Option.positionArr = [
						[
							[9090.95, 118.838, -1098.115, 0],
							[9090.95, 118.838, 759.645, 0]

						],
					];
					moveAgv4Option.repeat = true;
					webGlBox.animationSingleLine(moveAgv4Option);

					let moveAgv5Option = {};
					moveAgv5Option.obj = scene.getObjectByName("moveAgv5");
					moveAgv5Option.obj.rotateY(Math.PI / 180 * 90);
					moveAgv5Option.cargoObj = moveAgv5Option.obj.getObjectByName("storey");
					moveAgv5Option.positionArr = [
						[
							[2524.781, 118.838, -1098.115, 0],
							[2524.781, 118.838, 759.645, 0],


						],
					];
					moveAgv5Option.repeat = true;
					webGlBox.animationSingleLine(moveAgv5Option);

					let moveAgv6Option = {};
					moveAgv6Option.obj = scene.getObjectByName("moveAgv6");
					moveAgv6Option.obj.rotateY(Math.PI / 180 * 90);
					moveAgv6Option.cargoObj = moveAgv6Option.obj.getObjectByName("storey");
					moveAgv6Option.positionArr = [
						[
							[-4571.704, 118.838, -1098.115, 0],
							[-4571.704, 118.838, 759.645, 0]

						],
					];
					moveAgv6Option.repeat = true;
					webGlBox.animationSingleLine(moveAgv6Option);

					let moveAgv7Option = {};
					moveAgv7Option.obj = scene.getObjectByName("moveAgv7");
					moveAgv7Option.obj.rotateY(Math.PI / 180 * 90);
					moveAgv7Option.cargoObj = moveAgv7Option.obj.getObjectByName("storey");
					moveAgv7Option.positionArr = [
						[
							[-11433.598, 118.838, -1098.115, 0],
							[-11433.598, 118.838, 759.645, 0]

						],
					];
					moveAgv7Option.repeat = true;
					webGlBox.animationSingleLine(moveAgv7Option);

					let moveAgv8Option = {};
					moveAgv8Option.obj = scene.getObjectByName("moveAgv8");
					moveAgv8Option.obj.rotateY(Math.PI / 180 * 90);
					moveAgv8Option.cargoObj = moveAgv8Option.obj.getObjectByName("storey");
					moveAgv8Option.positionArr = [
						[
							[9140.147, 118.838, 23299.898, 90],
							[5491.521, 118.838, 23299.898, 90],
							[5491.521, 118.838, 25328.119, 90]


						],
					];
					moveAgv8Option.repeat = true;
					webGlBox.animationSingleLine(moveAgv8Option);

					let moveAgv9Option = {};
					moveAgv9Option.obj = scene.getObjectByName("moveAgv9");
					moveAgv9Option.obj.rotateY(Math.PI / 180 * 90);
					moveAgv9Option.cargoObj = moveAgv9Option.obj.getObjectByName("storey");
					moveAgv9Option.positionArr = [
						[
							[2522.06, 118.838, 23299.898, 90],
							[-639.158, 118.838, 23299.898, 90],
							[-639.158, 118.838, 25269.023, 90]


						],
					];
					moveAgv9Option.repeat = true;
					webGlBox.animationSingleLine(moveAgv9Option);

					let moveAgv10Option = {};
					moveAgv10Option.obj = scene.getObjectByName("moveAgv10");
					moveAgv10Option.obj.rotateY(Math.PI / 180 * 90);
					moveAgv10Option.cargoObj = moveAgv10Option.obj.getObjectByName("storey");
					moveAgv10Option.positionArr = [
						[
							[-4551.229, 118.838, 23299.898, 90],
							[-4551.229, 118.838, 25269.023, 90],
							[-7942.434, 118.838, 25328.119, 90]


						],
					];
					moveAgv10Option.repeat = true;
					webGlBox.animationSingleLine(moveAgv10Option);

					let moveAgv11Option = {};
					moveAgv11Option.obj = scene.getObjectByName("moveAgv11");
					moveAgv11Option.obj.rotateY(Math.PI / 180 * 90);
					moveAgv11Option.cargoObj = moveAgv11Option.obj.getObjectByName("storey");
					moveAgv11Option.positionArr = [
						[
							[-11429.963, 118.838, 23299.898, 90],
							[-12944.935, 118.838, 23299.898, 90],
							[-12944.935, 118.838, 26648.613, 90]


						],
					];
					moveAgv11Option.repeat = true;
					webGlBox.animationSingleLine(moveAgv11Option);

					//组装data,触发点击事件
					let openData = [{"name":"ShangBanJi1","cnName":"上板机","url":"PE-EA-1-Prototype-0-2000x900x1300-Primary","data":[{"title":"供给电压","content":"AC220V"},{"title":"供给气压","content":"5kgf/c㎡"},{"title":"料架规格","content":"355*320*565"},{"title":"传送高度","content":"900±20"},{"title":"传送速度","content":"＞10片/Min"},{"title":"主电机功率","content":"220"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"YinShuaJi1","cnName":"印刷机","url":"PE-EA-2-DEK-Horizon03iX-1340x1636x1467-Primary","data":[{"title":"线路板厚度","content":"3.5mm"},{"title":"印刷速度","content":"120mm/s"},{"title":"线路板翘曲度","content":"Max PCB 对角线 1%"},{"title":"XY轴可调尺寸","content":"± 10mm"},{"title":"传送周期时间","content":"15s"},{"title":"传送高度","content":"900±20"},{"title":"电源","content":"220VAC 50-60Hz 1700W"},{"title":"气压供应","content":"80 psi (5.5 bar)"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"JieBoTai1","cnName":"接驳台","url":"PE-EA-4-DS-Single-765x850x1010-Primary","data":[{"title":"功率","content":"0.1KW"},{"title":"承载能力","content":"5kg"},{"title":"运输高度","content":"900±20mm"},{"title":"传送速度","content":"＞10片/Min"},{"title":"生产周期","content":"≤10/s"},{"title":"电源","content":"AC220V"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"SPI1","cnName":"SPI","url":"PE-EA-3-0-Blue-1619x1405x2290-Primary","data":[{"title":"相机分辨率","content":"20μm"},{"title":"全3D检测速度","content":"22.5-56.1cm²/s"},{"title":"最小锡膏间距","content":"150μm(5.91mils)"},{"title":"Z轴分辨率","content":"0.37μm"},{"title":"高度精度","content":"1μm"},{"title":"最大检测尺寸","content":"10×10mm"},{"title":"最大检测高度","content":"0.39×0.39inch"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"JieBoZhuo1","cnName":"接驳桌","url":"PE-EA-4-Table-DarkGreen-875x1200x1800-Primary","data":[{"title":"功率","content":"0.1KW"},{"title":"承载能力","content":"5kg"},{"title":"运输高度","content":"900±20mm"},{"title":"传送速度","content":"＞10片/Min"},{"title":"生产周期","content":"≤10/s"},{"title":"电源","content":"AC220V"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"TiePianJi1","cnName":"贴片机","url":"PE-EA-5-JUKI-RS1-1810x1800x1440-Primary","data":[{"title":"设备电源","content":"220V"},{"title":"定位精度","content":"0.01mm"},{"title":"最高贴装范围","content":"6mm"},{"title":"Z轴最大移动范围","content":"20mm"},{"title":"最大贴装尺寸","content":"510×450mm"},{"title":"MARK点定位","content":"全自动"},{"title":"最大贴片速度","content":"11000 Pcs/小时"},{"title":"阻容平均贴片速度","content":"8600 Pcs/小时"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"TiePianJi2","cnName":"贴片机","url":"PE-EA-5-JUKI-RS1-1810x1800x1440-Primary","data":[{"title":"设备电源","content":"220V"},{"title":"定位精度","content":"0.01mm"},{"title":"最高贴装范围","content":"6mm"},{"title":"Z轴最大移动范围","content":"20mm"},{"title":"最大贴装尺寸","content":"510×450mm"},{"title":"MARK点定位","content":"全自动"},{"title":"最大贴片速度","content":"11000 Pcs/小时"},{"title":"阻容平均贴片速度","content":"8600 Pcs/小时"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"JieBoTai2","cnName":"接驳台","url":"PE-EA-4-DS-Single-765x850x1010-Primary","data":[{"title":"功率","content":"0.1KW"},{"title":"承载能力","content":"5kg"},{"title":"运输高度","content":"900±20mm"},{"title":"传送速度","content":"＞10片/Min"},{"title":"生产周期","content":"≤10/s"},{"title":"电源","content":"AC220V"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"IBOX1","cnName":"IBOX","url":"PE-EA-39-IBOX-1-114x154x65-Primary","data":[{"title":"条码编号","content":"20210320112430"},{"title":"判断","content":"正确"},{"title":"流入时间","content":"10:36:27"},{"title":"流出时间","content":"10:38:30"},{"title":"停机时间","content":"8:20"},{"title":"开机时间","content":"8:30"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"HuiLiuHanLu1","cnName":"回流焊炉","url":"PE-EA-6-Heller-MK5-1400x5000x1600-Primary","data":[{"title":"循环时间","content":"1.4米/分"},{"title":"功率","content":"5400W"},{"title":"电压","content":"220V/380V"},{"title":"加热温区数","content":"垂直固化"},{"title":"氮气选项","content":"氮气"},{"title":"加热区长度","content":"3570"},{"title":"冷区方式","content":"水冷"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"JieBoZhuo2","cnName":"接驳桌","url":"PE-EA-4-Table-DarkGreen-875x1200x1800-Primary","data":[{"title":"功率","content":"0.1KW"},{"title":"承载能力","content":"5kg"},{"title":"运输高度","content":"900±20mm"},{"title":"传送速度","content":"＞10片/Min"},{"title":"生产周期","content":"≤10/s"},{"title":"电源","content":"AC220V"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AOI1","cnName":"AOI","url":"PE-EA-7-0-Blue-1150x1200x1800-Primary","data":[{"title":"最小检测元件","content":"01005（英）"},{"title":"X-Y精度","content":"10um"},{"title":"高度重复性精度","content":"<1um(4sigma)"},{"title":"检测面积","content":"450x450mm"},{"title":"检测速度","content":"0.45秒/FOV"},{"title":"Mark点识别","content":"0.5秒/个"},{"title":"最大检测高度","content":"10mm"},{"title":"可过板上器件高度","content":"50mm"},{"title":" 弯曲PCB最大测量高度","content":"±5mm"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"ShangBanJi2","cnName":"下板机","url":"PE-EA-1-Prototype-0-2000x900x1300-Primary","data":[{"title":"供给电压","content":"AC220V"},{"title":"供给气压","content":"5kgf/c㎡"},{"title":"料架规格","content":"355*320*565"},{"title":"传送高度","content":"900±20"},{"title":"传送速度","content":"＞10片/Min"},{"title":"主电机功率","content":"220"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"ShangBanJi3","cnName":"上板机","url":"PE-EA-1-Prototype-0-2000x900x1300-Primary","data":[{"title":"供给电压","content":"AC220V"},{"title":"供给气压","content":"5kgf/c㎡"},{"title":"料架规格","content":"355*320*565"},{"title":"传送高度","content":"900±20"},{"title":"传送速度","content":"＞10片/Min"},{"title":"主电机功率","content":"220"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"YinShuaJi2","cnName":"印刷机","url":"PE-EA-2-DEK-Horizon03iX-1340x1636x1467-Primary","data":[{"title":"线路板厚度","content":"3.5mm"},{"title":"印刷速度","content":"120mm/s"},{"title":"线路板翘曲度","content":"Max PCB 对角线 1%"},{"title":"XY轴可调尺寸","content":"± 10mm"},{"title":"传送周期时间","content":"15s"},{"title":"传送高度","content":"900±20"},{"title":"电源","content":"220VAC 50-60Hz 1700W"},{"title":"气压供应","content":"80 psi (5.5 bar)"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"JieBoTai3","cnName":"接驳台","url":"PE-EA-4-DS-Single-765x850x1010-Primary","data":[{"title":"功率","content":"0.1KW"},{"title":"承载能力","content":"5kg"},{"title":"运输高度","content":"900±20mm"},{"title":"传送速度","content":"＞10片/Min"},{"title":"生产周期","content":"≤10/s"},{"title":"电源","content":"AC220V"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"SPI2","cnName":"SPI","url":"PE-EA-3-0-Blue-1619x1405x2290-Primary","data":[{"title":"相机分辨率","content":"20μm"},{"title":"全3D检测速度","content":"22.5-56.1cm²/s"},{"title":"最小锡膏间距","content":"150μm(5.91mils)"},{"title":"Z轴分辨率","content":"0.37μm"},{"title":"高度精度","content":"1μm"},{"title":"最大检测尺寸","content":"10×10mm"},{"title":"最大检测高度","content":"0.39×0.39inch"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"JieBoZhuo3","cnName":"接驳桌","url":"PE-EA-4-Table-DarkGreen-875x1200x1800-Primary","data":[{"title":"功率","content":"0.1KW"},{"title":"承载能力","content":"5kg"},{"title":"运输高度","content":"900±20mm"},{"title":"传送速度","content":"＞10片/Min"},{"title":"生产周期","content":"≤10/s"},{"title":"电源","content":"AC220V"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"TiePianJi3","cnName":"贴片机","url":"PE-EA-5-JUKI-RS1-1810x1800x1440-Primary","data":[{"title":"设备电源","content":"220V"},{"title":"定位精度","content":"0.01mm"},{"title":"最高贴装范围","content":"6mm"},{"title":"Z轴最大移动范围","content":"20mm"},{"title":"最大贴装尺寸","content":"510×450mm"},{"title":"MARK点定位","content":"全自动"},{"title":"最大贴片速度","content":"11000 Pcs/小时"},{"title":"阻容平均贴片速度","content":"8600 Pcs/小时"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"TiePianJi4","cnName":"贴片机","url":"PE-EA-5-JUKI-RS1-1810x1800x1440-Primary","data":[{"title":"设备电源","content":"220V"},{"title":"定位精度","content":"0.01mm"},{"title":"最高贴装范围","content":"6mm"},{"title":"Z轴最大移动范围","content":"20mm"},{"title":"最大贴装尺寸","content":"510×450mm"},{"title":"MARK点定位","content":"全自动"},{"title":"最大贴片速度","content":"11000 Pcs/小时"},{"title":"阻容平均贴片速度","content":"8600 Pcs/小时"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"JieBoTai4","cnName":"接驳台","url":"PE-EA-4-DS-Single-765x850x1010-Primary","data":[{"title":"功率","content":"0.1KW"},{"title":"承载能力","content":"5kg"},{"title":"运输高度","content":"900±20mm"},{"title":"传送速度","content":"＞10片/Min"},{"title":"生产周期","content":"≤10/s"},{"title":"电源","content":"AC220V"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"IBOX2","cnName":"IBOX","url":"PE-EA-39-IBOX-1-114x154x65-Primary","data":[{"title":"条码编号","content":"20210320112430"},{"title":"判断","content":"正确"},{"title":"流入时间","content":"10:36:27"},{"title":"流出时间","content":"10:38:30"},{"title":"停机时间","content":"8:20"},{"title":"开机时间","content":"8:30"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"HuiLiuHanLu2","cnName":"回流焊炉","url":"PE-EA-6-Heller-MK5-1400x5000x1600-Primary","data":[{"title":"循环时间","content":"1.4米/分"},{"title":"功率","content":"5400W"},{"title":"电压","content":"220V/380V"},{"title":"加热温区数","content":"垂直固化"},{"title":"氮气选项","content":"氮气"},{"title":"加热区长度","content":"3570"},{"title":"冷区方式","content":"水冷"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"JieBoZhuo4","cnName":"接驳桌","url":"PE-EA-4-Table-DarkGreen-875x1200x1800-Primary","data":[{"title":"功率","content":"0.1KW"},{"title":"承载能力","content":"5kg"},{"title":"运输高度","content":"900±20mm"},{"title":"传送速度","content":"＞10片/Min"},{"title":"生产周期","content":"≤10/s"},{"title":"电源","content":"AC220V"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AOI2","cnName":"AOI","url":"PE-EA-7-0-Blue-1150x1200x1800-Primary","data":[{"title":"最小检测元件","content":"01005（英）"},{"title":"X-Y精度","content":"10um"},{"title":"高度重复性精度","content":"<1um(4sigma)"},{"title":"检测面积","content":"450x450mm"},{"title":"检测速度","content":"0.45秒/FOV"},{"title":"Mark点识别","content":"0.5秒/个"},{"title":"最大检测高度","content":"10mm"},{"title":"可过板上器件高度","content":"50mm"},{"title":" 弯曲PCB最大测量高度","content":"±5mm"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"ShangBanJi4","cnName":"下板机","url":"PE-EA-1-Prototype-0-2000x900x1300-Primary","data":[{"title":"供给电压","content":"AC220V"},{"title":"供给气压","content":"5kgf/c㎡"},{"title":"料架规格","content":"355*320*565"},{"title":"传送高度","content":"900±20"},{"title":"传送速度","content":"＞10片/Min"},{"title":"主电机功率","content":"220"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"ShangBanJi5","cnName":"上板机","url":"PE-EA-1-Prototype-0-2000x900x1300-Primary","data":[{"title":"供给电压","content":"AC220V"},{"title":"供给气压","content":"5kgf/c㎡"},{"title":"料架规格","content":"355*320*565"},{"title":"传送高度","content":"900±20"},{"title":"传送速度","content":"＞10片/Min"},{"title":"主电机功率","content":"220"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"YinShuaJi3","cnName":"印刷机","url":"PE-EA-2-DEK-Horizon03iX-1340x1636x1467-Primary","data":[{"title":"线路板厚度","content":"3.5mm"},{"title":"印刷速度","content":"120mm/s"},{"title":"线路板翘曲度","content":"Max PCB 对角线 1%"},{"title":"XY轴可调尺寸","content":"± 10mm"},{"title":"传送周期时间","content":"15s"},{"title":"传送高度","content":"900±20"},{"title":"电源","content":"220VAC 50-60Hz 1700W"},{"title":"气压供应","content":"80 psi (5.5 bar)"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"JieBoTai5","cnName":"接驳台","url":"PE-EA-4-DS-Single-765x850x1010-Primary","data":[{"title":"功率","content":"0.1KW"},{"title":"承载能力","content":"5kg"},{"title":"运输高度","content":"900±20mm"},{"title":"传送速度","content":"＞10片/Min"},{"title":"生产周期","content":"≤10/s"},{"title":"电源","content":"AC220V"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"SPI3","cnName":"SPI","url":"PE-EA-3-0-Blue-1619x1405x2290-Primary","data":[{"title":"相机分辨率","content":"20μm"},{"title":"全3D检测速度","content":"22.5-56.1cm²/s"},{"title":"最小锡膏间距","content":"150μm(5.91mils)"},{"title":"Z轴分辨率","content":"0.37μm"},{"title":"高度精度","content":"1μm"},{"title":"最大检测尺寸","content":"10×10mm"},{"title":"最大检测高度","content":"0.39×0.39inch"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"JieBoZhuo5","cnName":"接驳桌","url":"PE-EA-4-Table-DarkGreen-875x1200x1800-Primary","data":[{"title":"功率","content":"0.1KW"},{"title":"承载能力","content":"5kg"},{"title":"运输高度","content":"900±20mm"},{"title":"传送速度","content":"＞10片/Min"},{"title":"生产周期","content":"≤10/s"},{"title":"电源","content":"AC220V"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"TiePianJi5","cnName":"贴片机","url":"PE-EA-5-JUKI-RS1-1810x1800x1440-Primary","data":[{"title":"设备电源","content":"220V"},{"title":"定位精度","content":"0.01mm"},{"title":"最高贴装范围","content":"6mm"},{"title":"Z轴最大移动范围","content":"20mm"},{"title":"最大贴装尺寸","content":"510×450mm"},{"title":"MARK点定位","content":"全自动"},{"title":"最大贴片速度","content":"11000 Pcs/小时"},{"title":"阻容平均贴片速度","content":"8600 Pcs/小时"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"TiePianJi6","cnName":"贴片机","url":"PE-EA-5-JUKI-RS1-1810x1800x1440-Primary","data":[{"title":"设备电源","content":"220V"},{"title":"定位精度","content":"0.01mm"},{"title":"最高贴装范围","content":"6mm"},{"title":"Z轴最大移动范围","content":"20mm"},{"title":"最大贴装尺寸","content":"510×450mm"},{"title":"MARK点定位","content":"全自动"},{"title":"最大贴片速度","content":"11000 Pcs/小时"},{"title":"阻容平均贴片速度","content":"8600 Pcs/小时"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"JieBoTai6","cnName":"接驳台","url":"PE-EA-4-DS-Single-765x850x1010-Primary","data":[{"title":"功率","content":"0.1KW"},{"title":"承载能力","content":"5kg"},{"title":"运输高度","content":"900±20mm"},{"title":"传送速度","content":"＞10片/Min"},{"title":"生产周期","content":"≤10/s"},{"title":"电源","content":"AC220V"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"IBOX3","cnName":"IBOX","url":"PE-EA-39-IBOX-1-114x154x65-Primary","data":[{"title":"条码编号","content":"20210320112430"},{"title":"判断","content":"正确"},{"title":"流入时间","content":"10:36:27"},{"title":"流出时间","content":"10:38:30"},{"title":"停机时间","content":"8:20"},{"title":"开机时间","content":"8:30"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"HuiLiuHanLu3","cnName":"回流焊炉","url":"PE-EA-6-Heller-MK5-1400x5000x1600-Primary","data":[{"title":"循环时间","content":"1.4米/分"},{"title":"功率","content":"5400W"},{"title":"电压","content":"220V/380V"},{"title":"加热温区数","content":"垂直固化"},{"title":"氮气选项","content":"氮气"},{"title":"加热区长度","content":"3570"},{"title":"冷区方式","content":"水冷"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"JieBoZhuo6","cnName":"接驳桌","url":"PE-EA-4-Table-DarkGreen-875x1200x1800-Primary","data":[{"title":"功率","content":"0.1KW"},{"title":"承载能力","content":"5kg"},{"title":"运输高度","content":"900±20mm"},{"title":"传送速度","content":"＞10片/Min"},{"title":"生产周期","content":"≤10/s"},{"title":"电源","content":"AC220V"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AOI3","cnName":"AOI","url":"PE-EA-7-0-Blue-1150x1200x1800-Primary","data":[{"title":"最小检测元件","content":"01005（英）"},{"title":"X-Y精度","content":"10um"},{"title":"高度重复性精度","content":"<1um(4sigma)"},{"title":"检测面积","content":"450x450mm"},{"title":"检测速度","content":"0.45秒/FOV"},{"title":"Mark点识别","content":"0.5秒/个"},{"title":"最大检测高度","content":"10mm"},{"title":"可过板上器件高度","content":"50mm"},{"title":" 弯曲PCB最大测量高度","content":"±5mm"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"ShangBanJi6","cnName":"下板机","url":"PE-EA-1-Prototype-0-2000x900x1300-Primary","data":[{"title":"供给电压","content":"AC220V"},{"title":"供给气压","content":"5kgf/c㎡"},{"title":"料架规格","content":"355*320*565"},{"title":"传送高度","content":"900±20"},{"title":"传送速度","content":"＞10片/Min"},{"title":"主电机功率","content":"220"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"ShangBanJi7","cnName":"上板机","url":"PE-EA-1-Prototype-0-2000x900x1300-Primary","data":[{"title":"供给电压","content":"AC220V"},{"title":"供给气压","content":"5kgf/c㎡"},{"title":"料架规格","content":"355*320*565"},{"title":"传送高度","content":"900±20"},{"title":"传送速度","content":"＞10片/Min"},{"title":"主电机功率","content":"220"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"YinShuaJi4","cnName":"印刷机","url":"PE-EA-2-DEK-Horizon03iX-1340x1636x1467-Primary","data":[{"title":"线路板厚度","content":"3.5mm"},{"title":"印刷速度","content":"120mm/s"},{"title":"线路板翘曲度","content":"Max PCB 对角线 1%"},{"title":"XY轴可调尺寸","content":"± 10mm"},{"title":"传送周期时间","content":"15s"},{"title":"传送高度","content":"900±20"},{"title":"电源","content":"220VAC 50-60Hz 1700W"},{"title":"气压供应","content":"80 psi (5.5 bar)"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"JieBoTai7","cnName":"接驳台","url":"PE-EA-4-DS-Single-765x850x1010-Primary","data":[{"title":"功率","content":"0.1KW"},{"title":"承载能力","content":"5kg"},{"title":"运输高度","content":"900±20mm"},{"title":"传送速度","content":"＞10片/Min"},{"title":"生产周期","content":"≤10/s"},{"title":"电源","content":"AC220V"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"SPI4","cnName":"SPI","url":"PE-EA-3-0-Blue-1619x1405x2290-Primary","data":[{"title":"相机分辨率","content":"20μm"},{"title":"全3D检测速度","content":"22.5-56.1cm²/s"},{"title":"最小锡膏间距","content":"150μm(5.91mils)"},{"title":"Z轴分辨率","content":"0.37μm"},{"title":"高度精度","content":"1μm"},{"title":"最大检测尺寸","content":"10×10mm"},{"title":"最大检测高度","content":"0.39×0.39inch"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"JieBoZhuo7","cnName":"接驳桌","url":"PE-EA-4-Table-DarkGreen-875x1200x1800-Primary","data":[{"title":"功率","content":"0.1KW"},{"title":"承载能力","content":"5kg"},{"title":"运输高度","content":"900±20mm"},{"title":"传送速度","content":"＞10片/Min"},{"title":"生产周期","content":"≤10/s"},{"title":"电源","content":"AC220V"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"TiePianJi7","cnName":"贴片机","url":"PE-EA-5-JUKI-RS1-1810x1800x1440-Primary","data":[{"title":"设备电源","content":"220V"},{"title":"定位精度","content":"0.01mm"},{"title":"最高贴装范围","content":"6mm"},{"title":"Z轴最大移动范围","content":"20mm"},{"title":"最大贴装尺寸","content":"510×450mm"},{"title":"MARK点定位","content":"全自动"},{"title":"最大贴片速度","content":"11000 Pcs/小时"},{"title":"阻容平均贴片速度","content":"8600 Pcs/小时"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"TiePianJi8","cnName":"贴片机","url":"PE-EA-5-JUKI-RS1-1810x1800x1440-Primary","data":[{"title":"设备电源","content":"220V"},{"title":"定位精度","content":"0.01mm"},{"title":"最高贴装范围","content":"6mm"},{"title":"Z轴最大移动范围","content":"20mm"},{"title":"最大贴装尺寸","content":"510×450mm"},{"title":"MARK点定位","content":"全自动"},{"title":"最大贴片速度","content":"11000 Pcs/小时"},{"title":"阻容平均贴片速度","content":"8600 Pcs/小时"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"JieBoTai8","cnName":"接驳台","url":"PE-EA-4-DS-Single-765x850x1010-Primary","data":[{"title":"功率","content":"0.1KW"},{"title":"承载能力","content":"5kg"},{"title":"运输高度","content":"900±20mm"},{"title":"传送速度","content":"＞10片/Min"},{"title":"生产周期","content":"≤10/s"},{"title":"电源","content":"AC220V"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"IBOX4","cnName":"IBOX","url":"PE-EA-39-IBOX-1-114x154x65-Primary","data":[{"title":"条码编号","content":"20210320112430"},{"title":"判断","content":"正确"},{"title":"流入时间","content":"10:36:27"},{"title":"流出时间","content":"10:38:30"},{"title":"停机时间","content":"8:20"},{"title":"开机时间","content":"8:30"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"HuiLiuHanLu4","cnName":"回流焊炉","url":"PE-EA-6-Heller-MK5-1400x5000x1600-Primary","data":[{"title":"循环时间","content":"1.4米/分"},{"title":"功率","content":"5400W"},{"title":"电压","content":"220V/380V"},{"title":"加热温区数","content":"垂直固化"},{"title":"氮气选项","content":"氮气"},{"title":"加热区长度","content":"3570"},{"title":"冷区方式","content":"水冷"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"JieBoZhuo8","cnName":"接驳桌","url":"PE-EA-4-Table-DarkGreen-875x1200x1800-Primary","data":[{"title":"功率","content":"0.1KW"},{"title":"承载能力","content":"5kg"},{"title":"运输高度","content":"900±20mm"},{"title":"传送速度","content":"＞10片/Min"},{"title":"生产周期","content":"≤10/s"},{"title":"电源","content":"AC220V"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AOI4","cnName":"AOI","url":"PE-EA-7-0-Blue-1150x1200x1800-Primary","data":[{"title":"最小检测元件","content":"01005（英）"},{"title":"X-Y精度","content":"10um"},{"title":"高度重复性精度","content":"<1um(4sigma)"},{"title":"检测面积","content":"450x450mm"},{"title":"检测速度","content":"0.45秒/FOV"},{"title":"Mark点识别","content":"0.5秒/个"},{"title":"最大检测高度","content":"10mm"},{"title":"可过板上器件高度","content":"50mm"},{"title":" 弯曲PCB最大测量高度","content":"±5mm"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"ShangBanJi8","cnName":"下板机","url":"PE-EA-1-Prototype-0-2000x900x1300-Primary","data":[{"title":"供给电压","content":"AC220V"},{"title":"供给气压","content":"5kgf/c㎡"},{"title":"料架规格","content":"355*320*565"},{"title":"传送高度","content":"900±20"},{"title":"传送速度","content":"＞10片/Min"},{"title":"主电机功率","content":"220"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable1","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201025"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable2","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201026"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable3","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201027"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable4","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201028"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable5","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201029"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable6","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201030"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable7","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201030"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable8","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201031"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable9","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201032"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable10","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201033"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"Manipulator1","cnName":"机械手","url":"WL-IS-17-KUKA-0-863x1671x1800-Primary","data":[{"title":"有效荷载","content":"40公斤"},{"title":"最远可达距离","content":"2091毫米"},{"title":"结构类型","content":"堆垛机器人"},{"title":"执行环节","content":"标准"},{"title":"保护","content":"IP65"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable11","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201034"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable12","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201035"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable13","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201036"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable14","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201037"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable15","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201038"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable16","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201039"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable17","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201040"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable18","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201041"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable19","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201042"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable20","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201043"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"Manipulator2","cnName":"机械手","url":"WL-IS-17-KUKA-0-863x1671x1800-Primary","data":[{"title":"有效荷载","content":"40公斤"},{"title":"最远可达距离","content":"2091毫米"},{"title":"结构类型","content":"堆垛机器人"},{"title":"执行环节","content":"标准"},{"title":"保护","content":"IP65"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable21","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201044"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable22","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201045"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable23","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201046"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable24","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201047"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable25","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201048"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable26","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201049"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable27","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201050"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable28","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201051"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable29","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201052"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable30","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201053"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"Manipulator3","cnName":"机械手","url":"WL-IS-17-KUKA-0-863x1671x1800-Primary","data":[{"title":"有效荷载","content":"40公斤"},{"title":"最远可达距离","content":"2091毫米"},{"title":"结构类型","content":"堆垛机器人"},{"title":"执行环节","content":"标准"},{"title":"保护","content":"IP65"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable31","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201044"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable32","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201045"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable33","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201046"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable34","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201047"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable35","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201048"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable36","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201049"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable37","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201050"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable38","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201051"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable39","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201052"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"AssemblyTable40","cnName":"组装台","url":"PR-LE-13-0-4-1200x600-Primary","data":[{"title":"工位物料","content":"20201053"},{"title":"A物件数量","content":"500"},{"title":"B物件数量","content":"1000"},{"title":"C物件数量","content":"2000"},{"title":"工位工装","content":"锁螺丝定位治具"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}},{"name":"Manipulator4","cnName":"机械手","url":"WL-IS-17-KUKA-0-863x1671x1800-Primary","data":[{"title":"有效荷载","content":"40公斤"},{"title":"最远可达距离","content":"2091毫米"},{"title":"结构类型","content":"堆垛机器人"},{"title":"执行环节","content":"标准"},{"title":"保护","content":"IP65"}],"cameraPosition":{"x":1417,"y":-81,"z":2366},"controlsTarget":{"x":-207,"y":-140,"z":156}}]

					// openData = JSON.parse(openData);

					openData.push({
						"name": "agv",
						"cnName": "AGV",
						"url": "AGV",
						"data": [{
							"title": "AGV编号",
							"content": "AGV 01"
						}, {
							"title": "任务编号",
							"content": "MN 001"
						}, {
							"title": "任务状态",
							"content": "任务执行中"
						}, {
							"title": "货架编号",
							"content": "PB 001"
						}, {
							"title": "货物去向",
							"content": "压合工段"
						}, {
							"title": "当前位置",
							"content": "66 , 39"
						}, {
							"title": "目标位置",
							"content": "52 , 27"
						}],
						"cameraPosition": {
							"x": 434.8540275252416,
							"y": 382.4942759188589,
							"z": 277.15001117450333
						},
						"controlsTarget": {
							"x": -396.59390499850326,
							"y": -210.73164320901142,
							"z": -315.6605187593676
						}
					})

					for (let i = 0; i < openData.length; i++) {
						// console.log(openData[i]["name"]);
						webGlBox.eventList(openData[i]["name"], "click", function (e) {
							// console.log(openData[i]["cnName"]);
							// Box2ShoW(openData[i]["name"]);
							$(".upIfromBox").css("top", 0);

							let loader = new THREE.JSONLoader();
							loader.load('JSON/' + openData[i]["url"] + '.js', function (geometry, materials) {
								let material = new THREE.MultiMaterial(materials);
								let object = new THREE.Mesh(geometry, material);
								// console.log(webGlBox2.scene.children[4]);
								// let group = webGlBox2.scene.children()[4].getObjectByName('boxGroup');
								object.position.set(0, 0, 0);
								object.scale.set(0.5, 0.5, 0.5);
								webGlBox2.scene.add(object);

								if (openData[i]["name"] === "agv" || openData[i]["name"] === "storey") {
									$('.upIfromBox .listContenBox').find('.agv-info').show();
								}
								if (openData[i]["name"].indexOf("Ren") !== -1) {
									$('.upIfromBox .listContenBox').find('.person-info').show();
								}

								// console.log(webGlBox2, openData[i]["cameraPosition"]);
								let cameraPosition = openData[i]["cameraPosition"];
								let controlsTarget = openData[i]["controlsTarget"];
								if (controlsTarget) {
									webGlBox2.controls.target.set(controlsTarget.x, controlsTarget.y, controlsTarget.z);
								} else {
									webGlBox2.controls.target.set(0, 0, 0);
								}
								if (cameraPosition) {
									webGlBox2.camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
								} else {
									webGlBox2.camera.position.set(480, 1200, 840);
								}


								$(".upIfromBox .ifromBox>.title").html(openData[i]["cnName"]);
								$(".upIfromBox .ifromBox .listContenBox").eq(0).css('display', 'none');

								// console.log('cameraPosition:', webGlBox2.camera.position);
								// console.log('controlsTarget:', webGlBox2.controls.target);

								let parameterHtml = "";
								// console.log(openData[i]["data"]);
								if (openData[i]["data"] && openData[i]["data"] !== "") {
									let parameterData = openData[i]["data"];

									for (let i = 0; i < parameterData.length; i++) {
										parameterHtml += '<li><p class="title">' + parameterData[i].title + '</p><p class="text">' + parameterData[i].content + '</p></li>';
									}
									$(".upIfromBox .parameter > ul").html(parameterHtml);
								}

								let badInfoWrap = $('.listRightBox').find('.item');

								if (openData[i]["errorData"] && openData[i]["errorData"] !== "") {
									badDataControl(openData[i]["errorData"], 'error');
								};
								if (openData[i]["warningData"] && openData[i]["warningData"] !== "") {
									badDataControl(openData[i]["warningData"], 'warning');
									$(".upIfromBox .parameter").find('h1').html("人员核对信息");
								};

								function badDataControl(data, type) {

									let dataName;
									let dataTitle;
									if (type === 'error') {
										dataName = 'errorInfo';
										dataTitle = '错误提醒';
									} else if (type === "warning") {
										dataName = 'warningInfo';
										dataTitle = '警告提醒';
									}
									badInfoWrap.attr("datainfo", dataName);
									badInfoWrap.find('h1 span').html(dataTitle);
									let dataHtml = "";
									for (let i = 0; i < data.length; i++) {
										dataHtml += '<li><p class="title">' + data[i].title + '</p><p class="text">' + data[i].content + '</p></li>';
									}
									badInfoWrap.find('ul').html(dataHtml);
									badInfoWrap.show();
								}

								$(".closeBtn").on("click", function () {
									// webGlBox2.sceneTo("clerBox");
									webGlBox2.scene.remove(object);
									$('.upIfromBox .listContenBox').find('.agv-info').hide();
									$('.upIfromBox .listContenBox').find('.person-info').hide();
									$(".upIfromBox .parameter").find('h1').html("设备侧信息");
									badInfoWrap.hide();
									$(".upIfromBox").css("top", -50000);
								})
							});

							$(".upIfromBox").css("top", 0);
						})

					}
				})
			}
			webGlBox.animate = function () {
				TWEEN.update();
				webGlBox.lightAnime();
			};
		}
	})

	var webGlBox2 = new webGL("contontBox2");
	webGlBox2.init();
	// console.log(webGlBox2);

	webGlBox2.loading = function (e) {
		if (e === 100) {
			//删除加载进度dom
			setTimeout(function () {
				$("#contontBox .loadingBox").remove();
			}, 400);
			//进入第一个场景
			webGlBox2.sceneTo("secondSence");
			$(".upIfromBox").css("top", -500000);
			// $(".upIfromBox").hide();
		}
	};

	webGlBox2.logonScene({
		name: 'secondSence', //该场景名称(提供场景切换)
		files: { //该场景需要的文件(推入等到加载,目前支持格式 fbx,img,font ; 需要添加前往修改 webGlBox.load 方法)
			boxSence: {
				url: 'JSON/Scene.js',
				type: "json"
			},
		},
		onShow: function () {
			// if(openData[i]["position"] && openData[i]["position"] !== ""){
			// 	webGlBox2.camera.position.x = openData[i]["position"][0];
			// 	webGlBox2.camera.position.y = openData[i]["position"][1];
			// 	webGlBox2.camera.position.z = openData[i]["position"][2];
			// }
		},
		mounted: function (scene) { //进入该场景触发方法 this 指向该场景所有需要加载的文件
			// var _this = this;
			scene.name = 'boxSence';
			let group = new THREE.Group();
			group.name = "boxGroup";
			scene.add(group);
		},
		destroyed: function (e) { //该方法场景离开时调用
		},
	});



	//场景2跳转
	// function Box2ShoW(name){
	//     webGlBox2.sceneTo(name);
	//     $(".upIfromBox").show();
	// }

	//打开看板和视频
	webGlBox.eventList("JianKonQi1", "click", function (e) {
		layerShowBox("监控", "files/video/video.mp4", "mp4");
	});
	webGlBox.eventList("JianKonQi2", "click", function (e) {
		layerShowBox("监控", "files/video/video.mp4", "mp4");
	});
	webGlBox.eventList("LargeDisplay1", "click", function (e) {
		layerShowBox("产线拉头看板", "files/img/plan1_1.jpg", "img");
	});
	webGlBox.eventList("SmallDisplay9", "click", function (e) {
		layerShowBox("产线拉头看板", "files/img/banner1.png", "img");
	});
	webGlBox.eventList("SmallDisplay10", "click", function (e) {
		layerShowBox("产线拉头看板", "files/img/banner2.png", "img");
	});
	webGlBox.eventList("SmallDisplay11", "click", function (e) {
		layerShowBox("产线拉头看板", "files/img/banner3.png", "img");
	});
	webGlBox.eventList("SmallDisplay12", "click", function (e) {
		layerShowBox("产线拉头看板", "files/img/banner4.png", "img");
	});


	//echart
	var graphOb = {};

	var graphOne = echarts.init(document.getElementById('graphOne'));
	graphOb.graphOneOption = {
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		legend: {
			data: ['运行', '报警', '未排产', '停机'],
			textStyle: {
				color: "#ffffff",
				fontSize: 12,
			},
			bottom: "0",
			borderRadius: '0'
		},
		calculable: true,
		xAxis: [{
			type: 'category',
			// data : ['印刷机','贴片机1','贴片机2','贴片机3','AOI','回焊爐'],
			nameTextStyle: {
				color: "#ffffff"
			},
			axisLine: {
				lineStyle: {
					color: "rgba(255,255,255,0.6)"
				}
			},
			splitLine: {
				lineStyle: {
					color: "#002a54"
				}
			}
		}],
		yAxis: [{
			type: 'value',
			nameTextStyle: {
				color: "#ffffff"
			},
			axisLine: {
				lineStyle: {
					color: "rgba(255,255,255,0.6)",
					width: 0
				}
			},
			splitLine: {
				lineStyle: {
					color: "#002a54"
				}
			}
		}],
		series: [{
				name: '运行',
				type: 'bar',
				stack: '总量',
				barCategoryGap: "60%",
				itemStyle: {
					normal: {
						label: {
							show: false,
							position: 'insideRight'
						},
						color: "#009944"
					}
				},
				data: [28, 24, 24, 26, 26, 28]
			},
			{
				name: '报警',
				type: 'bar',
				stack: '总量',
				barCategoryGap: "60%",
				itemStyle: {
					normal: {
						label: {
							show: false,
							position: 'insideRight'
						},
						color: "#f39800"
					}
				},
				data: [1, 6, 2, 0, 2, 2]
			},
			{
				name: '未排产',
				type: 'bar',
				stack: '总量',
				barCategoryGap: "60%",
				itemStyle: {
					normal: {
						label: {
							show: false,
							position: 'insideRight'
						},
						color: "#920783"
					}
				},
				data: [1, 0, 2, 2, 0, 0]
			},
			{
				name: '停机',
				type: 'bar',
				stack: '总量',
				barCategoryGap: "60%",
				itemStyle: {
					normal: {
						label: {
							show: false,
							position: 'insideRight'
						},
						color: "#ff0000"
					}
				},
				data: [0, 0, 2, 2, 2, 0]
			}
		]
	};
	graphOne.setOption(graphOb.graphOneOption);
	$("#graphOne").attr("data-id", "graphOneOption");

	var graphTwo = echarts.init(document.getElementById('graphTwo'));
	graphOb.graphTwoOption = {
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['UCL', 'LCL', 'Q1', 'X'],
			textStyle: {
				color: "#ffffff",
				fontSize: 12,
			},
			bottom: "0",
		},
		calculable: true,
		xAxis: [{
			type: 'category',
			boundaryGap: false,
			data: ['4/15', '4/16', '4/17', '4/18', '4/19', '4/20', '4/21'],
			axisLine: {
				lineStyle: {
					color: "rgba(255,255,255,0.6)"
				}
			},
			splitLine: {
				lineStyle: {
					color: "#002a54"
				}
			}
		}],
		yAxis: [{
			type: 'value',
			axisLine: {
				lineStyle: {
					color: "rgba(255,255,255,0.6)",
					width: 0
				}
			},
			splitLine: {
				lineStyle: {
					color: "#002a54"
				}
			},
			axisLabel: {
				formatter: '{value}'
			}
		}],
		series: [{
				name: 'Q1',
				type: 'line',
				data: [1.22, 1.22, 1.22, 1.22, 1.22, 1.22, 1.22],
				itemStyle: {
					normal: {
						color: "#21b5f9"
					}
				},
				smooth: true
			},
			{
				name: 'X',
				type: 'line',
				data: [1.22, 1.22, 1.22, 1.22, 1.22, 1.22, 1.22],
				itemStyle: {
					normal: {
						color: "green"
					}
				},
				smooth: true
			},
			{
				name: 'LCL',
				type: 'line',
				data: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
				itemStyle: {
					normal: {
						color: "red"
					}
				},
				smooth: true
			},
			{
				name: 'UCL',
				type: 'line',
				data: [1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98],
				itemStyle: {
					normal: {
						color: "#5f52a0"
					}
				},
				smooth: true
			}
		]
	};
	graphTwo.setOption(graphOb.graphTwoOption);
	$("#graphTwo").attr("data-id", "graphTwoOption");


	//layer弹窗展示图片视频
	function layerShowBox(title, url, type, area) {
		area = area ? area : ['1200px', '720px'];
		var el = "";
		var html;
		var contentType = 1;
		// console.log('type');
		switch (type) {
			case 'img':
				el = "<img src='" + url + "'>";
				break;
			case 'mp4':
				el = " <video style='height: 100%;width: 100%' autoplay='autoplay' src='" + url + "'></video>";
				break;
			case 'url':
				el = [url, 'no'];
				contentType = 2;
				break;
		}
		// if(type === "img"){
		//     el = "<img src='"+ url +"'>";
		// }else if(type === "mp4"){
		//     el = " <video style='height: 100%;width: 100%' autoplay='autoplay' src='"+ url +"'></video>";
		// }
		if (type == 'url') {
			html = el;
		} else {
			html = "<div class='upShowBox'>" + el + "</div>";
		}
		// console.log(html);
		layer.open({
			type: contentType,
			title: title,
			skin: "layer_phone_wight",
			area: area,
			resize: false,
			shadeClose: true, //点击遮罩关闭
			content: html,
			btnAlign: 'c',
			zIndex: 100,
			success: function () {

			}
		})
	}
// })
}