Vue.prototype.$initWebGl = function () {
	
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
				url: 'JSON/PJ-PCB-200722-Scene-1-106506x42744x2350-Primary.js',
				type: "json"
			},
		},
		rotateAnime: true, //该场景在无交互情况下是否要自动旋转
		rotateSpeed: -0.003,
		onShow: function () {

		},
		mounted: function (scene) { //进入该场景触发方法 this 指向该场景所有需要加载的文件
			scene.scale.multiplyScalar(0.05);
			scene.add(this.mainMode);
			this.mainMode.position.set(0, 1075, 0);
			this.mainMode.rotateY(Math.PI / 180 * 90);
			webGlBox.isLog = true;

			let data = [];
			webGlBox.readData("data/data.json", function (resultData) {
				data = resultData;
				// 插入运货的AGV数据组合
				data.push({
					"name": "moveAgv",
					"type": "group",
					"position": [-8254, 108, -13923],
					"children": [{
							"name": "agv",
							"url": "JSON/WL-IS-9-KR-AGV-677x950x462-Primary.js",
							"position": [0, 0, 0]
						},
						{
							"name": "storey",
							"url": "JSON/MM-PCBB-MSRMB-0-1-800x800x800-Primary.js",
							"position": [0, 736.391, 0]
						}
					]
				});
				data.push({
					"name": "moveAgv1",
					"type": "group",
					"position": [-27962, 108, -3617],
					"children": [{
							"name": "agv",
							"url": "JSON/WL-IS-9-KR-AGV-677x950x462-Primary.js",
							"position": [0, 0, 0]
						},
						{
							"name": "storey",
							"url": "JSON/MM-PCBB-MSRMB-0-1-800x800x800-Primary.js",
							"position": [0, 736.391, 0]
						}
					]
				});

				data.push({
					"name": "moveAgv2",
					"type": "group",
					"position": [5441, 108, -3536],
					"children": [{
							"name": "agv",
							"url": "JSON/WL-IS-9-KR-AGV-677x950x462-Primary.js",
							"position": [0, 0, 0]
						},
						{
							"name": "storey",
							"url": "JSON/MM-PCBB-MSRMB-0-1-800x800x800-Primary.js",
							"position": [0, 736.391, 0]
						}
					]
				});

				data.push({
					"name": "moveAgv3",
					"type": "group",
					"position": [44741, 108, -10938],
					"children": [{
							"name": "agv",
							"url": "JSON/WL-IS-9-KR-AGV-677x950x462-Primary.js",
							"position": [0, 0, 0]
						},
						{
							"name": "storey",
							"url": "JSON/MM-PCBB-MSRMB-0-1-800x800x800-Primary.js",
							"position": [0, 736.391, 0]
						}
					]
				});

				data.push({
					"name": "moveAgv4",
					"type": "group",
					"position": [21497, 108, 2938],
					"children": [{
							"name": "agv",
							"url": "JSON/WL-IS-9-KR-AGV-677x950x462-Primary.js",
							"position": [0, 0, 0]
						},
						{
							"name": "storey",
							"url": "JSON/MM-PCBB-MSRMB-0-1-800x800x800-Primary.js",
							"position": [0, 736.391, 0]
						}
					]
				});

				data.push({
					"name": "moveAgv5",
					"type": "group",
					"position": [47237, 108, 7843],
					"children": [{
							"name": "agv",
							"url": "JSON/WL-IS-9-KR-AGV-677x950x462-Primary.js",
							"position": [0, 0, 0]
						},
						{
							"name": "storey",
							"url": "JSON/MM-PCBB-MSRMB-0-1-800x800x800-Primary.js",
							"position": [0, 736.391, 0]
						}
					]
				});

				data.push({
					"name": "moveAgv6",
					"type": "group",
					"position": [41772, 108, 14284],
					"children": [{
							"name": "agv",
							"url": "JSON/WL-IS-9-KR-AGV-677x950x462-Primary.js",
							"position": [0, 0, 0]
						},
						{
							"name": "storey",
							"url": "JSON/MM-PCBB-MSRMB-0-1-800x800x800-Primary.js",
							"position": [0, 736.391, 0]
						}
					]
				});

				data.push({
					"name": "moveAgv7",
					"type": "group",
					"position": [19917, 108, 13964],
					"children": [{
							"name": "agv",
							"url": "JSON/WL-IS-9-KR-AGV-677x950x462-Primary.js",
							"position": [0, 0, 0]
						},
						{
							"name": "storey",
							"url": "JSON/MM-PCBB-MSRMB-0-1-800x800x800-Primary.js",
							"position": [0, 736.391, 0]
						}
					]
				});

				data.push({
					"name": "moveAgv8",
					"type": "group",
					"position": [-8052, 108, 12588],
					"children": [{
							"name": "agv",
							"url": "JSON/WL-IS-9-KR-AGV-677x950x462-Primary.js",
							"position": [0, 0, 0]
						},
						{
							"name": "storey",
							"url": "JSON/MM-PCBB-MSRMB-0-1-800x800x800-Primary.js",
							"position": [0, 736.391, 0]
						}
					]
				});

				data.push({
					"name": "moveAgv9",
					"type": "group",
					"position": [-2975, 108, 4218],
					"children": [{
							"name": "agv",
							"url": "JSON/WL-IS-9-KR-AGV-677x950x462-Primary.js",
							"position": [0, 0, 0]
						},
						{
							"name": "storey",
							"url": "JSON/MM-PCBB-MSRMB-0-1-800x800x800-Primary.js",
							"position": [0, 736.391, 0]
						}
					]
				});

				data.push({
					"name": "moveAgv10",
					"type": "group",
					"position": [-10373, 108, 5668],
					"children": [{
							"name": "agv",
							"url": "JSON/WL-IS-9-KR-AGV-677x950x462-Primary.js",
							"position": [0, 0, 0]
						},
						{
							"name": "storey",
							"url": "JSON/MM-PCBB-MSRMB-0-1-800x800x800-Primary.js",
							"position": [0, 736.391, 0]
						}
					]
				});

				data.push({
					"name": "moveAgv11",
					"type": "group",
					"position": [-34205, 108, 7268],
					"children": [{
							"name": "agv",
							"url": "JSON/WL-IS-9-KR-AGV-677x950x462-Primary.js",
							"position": [0, 0, 0]
						},
						{
							"name": "storey",
							"url": "JSON/MM-PCBB-MSRMB-0-1-800x800x800-Primary.js",
							"position": [0, 736.391, 0]
						}
					]
				});
				// console.log(data);
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
							// [-8254,108,-13923,0,1],
							[-8254, 108, -11179, -90],
							[-22815, 108, -11179, 90],
							[-22815, 108, -9459, -90],
							[-29732, 108, -9459, 90],
							[-29732, 108, -8078, -90]
						],
					];
					moveAgvOption.repeat = true;
					webGlBox.animationSingleLine(moveAgvOption);

					let moveAgv1Option = {};
					moveAgv1Option.obj = scene.getObjectByName("moveAgv1");

					moveAgv1Option.obj.rotateY(Math.PI / 180 * 90);
					moveAgv1Option.cargoObj = moveAgv1Option.obj.getObjectByName("storey");
					moveAgv1Option.positionArr = [
						[
							// [-27962,108,-3617,0,1],
							[-29298, 108, -3617, 90],
							[-29298, 108, -83, 90],
							[1544, 108, -83, 90],
							[1544, 108, -4231, 90]
						],
					];
					moveAgv1Option.repeat = true;
					webGlBox.animationSingleLine(moveAgv1Option);

					let moveAgv2Option = {};
					moveAgv2Option.obj = scene.getObjectByName("moveAgv2");

					moveAgv2Option.cargoObj = moveAgv2Option.obj.getObjectByName("storey");
					moveAgv2Option.positionArr = [
						[
							// [5441,108,-3536,0],
							[5441, 108, -2184, 90],
							[6606, 108, -2184, -90],
							[6606, 108, -83, 90],
							[27895, 108, -83, 90],
							[27895, 108, -2706, -90],
							[29860, 108, -2706, 90],
							[29860, 108, -3319, -90],
							[32168, 108, -3319, 90],
						],
					];
					moveAgv2Option.repeat = true;
					webGlBox.animationSingleLine(moveAgv2Option);

					let moveAgv3Option = {};
					moveAgv3Option.obj = scene.getObjectByName("moveAgv3");

					moveAgv3Option.cargoObj = moveAgv3Option.obj.getObjectByName("storey");
					moveAgv3Option.positionArr = [
						[
							// [44741,108,-10938,0],
							[44741, 108, -2280, 90],
							[45112, 108, -2280, -90],
							[45112, 108, -83, 90],
							[48573, 108, -83, -90],
							[48573, 108, 5392, -90],
							[46960, 108, 5392, -90],
							[46960, 108, 4195, 90]
						],
					];
					moveAgv3Option.repeat = true;
					webGlBox.animationSingleLine(moveAgv3Option);

					let moveAgv4Option = {};
					moveAgv4Option.obj = scene.getObjectByName("moveAgv4");

					moveAgv4Option.cargoObj = moveAgv4Option.obj.getObjectByName("storey");
					moveAgv4Option.positionArr = [
						[
							// [21497,108,2938,0],
							[21497, 108, 7544, -90],
							[18431, 108, 7544, 90]
						],
					];
					moveAgv4Option.repeat = true;
					webGlBox.animationSingleLine(moveAgv4Option);

					let moveAgv5Option = {};
					moveAgv5Option.obj = scene.getObjectByName("moveAgv5");

					moveAgv5Option.cargoObj = moveAgv5Option.obj.getObjectByName("storey");
					moveAgv5Option.positionArr = [
						[
							// [47237,108,7843,0],
							[47237, 108, 10782, 90],
							[49037, 108, 10782, -90],
							[49037, 108, 15019, -90],
							[45815, 108, 15019, -90],
							[45815, 108, 13637, 90]
						],
					];
					moveAgv5Option.repeat = true;
					webGlBox.animationSingleLine(moveAgv5Option);

					let moveAgv6Option = {};
					moveAgv6Option.obj = scene.getObjectByName("moveAgv6");

					moveAgv6Option.cargoObj = moveAgv6Option.obj.getObjectByName("storey");
					moveAgv6Option.positionArr = [
						[
							// [41772,108,14284,0],
							[41772, 108, 12785, 90],
							[40291, 108, 12785, 90],
							[40291, 108, 15152, -90],
							[37848, 108, 15152, -90],
							[37848, 108, 13964, 90]
						],
					];
					moveAgv6Option.repeat = true;
					webGlBox.animationSingleLine(moveAgv6Option);

					let moveAgv7Option = {};
					moveAgv7Option.obj = scene.getObjectByName("moveAgv7");

					moveAgv7Option.cargoObj = moveAgv7Option.obj.getObjectByName("storey");
					moveAgv7Option.positionArr = [
						[
							// [19917,108,13964,0],
							[19917, 108, 15152, -90],
							[18446, 108, 15152, -90],
							[18446, 108, 12589, 90],
							[16032, 108, 12589, 90]
						],
					];
					moveAgv7Option.repeat = true;
					webGlBox.animationSingleLine(moveAgv7Option);

					let moveAgv8Option = {};
					moveAgv8Option.obj = scene.getObjectByName("moveAgv8");

					moveAgv8Option.cargoObj = moveAgv8Option.obj.getObjectByName("storey");
					moveAgv8Option.positionArr = [
						[
							// [-8052,108,12588,0],
							[-8052, 108, 11071, -90],
							[-3377, 108, 11071, 90],
							[-3377, 108, 9459, -90],
							[5027, 108, 9459, 90],
							[5027, 108, 5668, -90],
							[16104, 108, 5668, 90],
							[16104, 108, 4234, 90]
						],
					];
					moveAgv8Option.repeat = true;
					webGlBox.animationSingleLine(moveAgv8Option);

					let moveAgv9Option = {};
					moveAgv9Option.obj = scene.getObjectByName("moveAgv9");

					moveAgv9Option.cargoObj = moveAgv9Option.obj.getObjectByName("storey");
					moveAgv9Option.positionArr = [
						[
							// [-2975,108,4218,0],
							[-2975, 108, 5668, -90],
							[-7614, 108, 5668, 90]
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
							// [-10373,108,5668,0],
							[-14050, 108, 5668, 90],
							[-14050, 108, 8722, -90],
							[-19097, 108, 8722, -90],
							[-19097, 108, 5860, -90],
							[-18036, 108, 5860, 90]
						],
					];
					moveAgv10Option.repeat = true;
					webGlBox.animationSingleLine(moveAgv10Option);

					let moveAgv11Option = {};
					moveAgv11Option.obj = scene.getObjectByName("moveAgv11");

					moveAgv11Option.cargoObj = moveAgv11Option.obj.getObjectByName("storey");
					moveAgv11Option.positionArr = [
						[
							// [-34205,108,7268,0],
							[-33164, 108, 7268, 90],
							[-33164, 108, 9771, -90],
							[-47440, 108, 9771, 90],
							[-47440, 108, 12023, 90]
						],
					];
					moveAgv11Option.repeat = true;
					webGlBox.animationSingleLine(moveAgv11Option);

					setTimeout(function () {
						webGlBox.lightControl('ChengTongXian', 'error');
						webGlBox.lightControl('ZuanKonJi1', 'warning');
						webGlBox.lightControl('LuoJi2', 'warning');
					}, 5000);


					// 组装data,触发点击事件
					let openData = [{
						"name": "DaBaoXian",
						"cnName": "自动包装机",
						"url": "PE-PCB-5-PL-1-2428x9020x2828-Primary",
						"data": [{
							"title": "工单号",
							"content": "200612091-01"
						}, {
							"title": "板件尺寸",
							"content": "480*560mm"
						}, {
							"title": "抽真空时间",
							"content": "2s"
						}, {
							"title": "加热时间",
							"content": "3s"
						}],
						"cameraPosition": {
							"x": 1417,
							"y": -81,
							"z": 2366
						},
						"controlsTarget": {
							"x": -207,
							"y": -140,
							"z": 156
						}
					}, {
						"name": "AVIZiDonJianChe2",
						"cnName": "自动外观检查机",
						"url": "PE-PCB-4-AVI-1-2711x2619x3033-Primary",
						"data": [{
							"title": "工单号",
							"content": "200612091-01"
						}, {
							"title": "环境温度",
							"content": "25±2℃"
						}, {
							"title": "环境湿度",
							"content": "55±5%"
						}, {
							"title": "测试尺寸",
							"content": "480*560mm"
						}, {
							"title": "板件厚度",
							"content": ""
						}, {
							"title": "对位精度",
							"content": "±25μm"
						}, {
							"title": "最小焊盘",
							"content": "5mil"
						}, {
							"title": "配方",
							"content": "3#"
						}, {
							"title": "CCD解析度",
							"content": "18-40μm"
						}, {
							"title": "测试速度",
							"content": "160mm/s"
						}, {
							"title": "气压",
							"content": "0.6~0.8MPa"
						}, {
							"title": "缺陷类型",
							"content": ""
						}, {
							"title": "操作温度",
							"content": "17~35℃"
						}],
						"cameraPosition": {
							"x": 1238,
							"y": 291,
							"z": 896
						},
						"controlsTarget": {
							"x": 235,
							"y": -353,
							"z": -200
						}
					}, {
						"name": "AVIZiDonJianChe1",
						"cnName": "自动外观检查机",
						"url": "PE-PCB-4-AVI-1-2711x2619x3033-Primary",
						"data": [{
							"title": "工单号",
							"content": "200612091-01"
						}, {
							"title": "环境温度",
							"content": "25±2℃"
						}, {
							"title": "环境湿度",
							"content": "55±5%"
						}, {
							"title": "测试尺寸",
							"content": "480*560mm"
						}, {
							"title": "板件厚度",
							"content": ""
						}, {
							"title": "对位精度",
							"content": "±25μm"
						}, {
							"title": "最小焊盘",
							"content": "5mil"
						}, {
							"title": "配方",
							"content": "3#"
						}, {
							"title": "CCD解析度",
							"content": "18-40μm"
						}, {
							"title": "测试速度",
							"content": "160mm/s"
						}, {
							"title": "气压",
							"content": "0.6~0.8MPa"
						}, {
							"title": "缺陷类型",
							"content": ""
						}, {
							"title": "操作温度",
							"content": "17~35℃"
						}],
						"cameraPosition": {
							"x": 1238,
							"y": 291,
							"z": 896
						},
						"controlsTarget": {
							"x": 235,
							"y": -353,
							"z": -200
						}
					}, {
						"name": "VKeJi2",
						"cnName": "自动通用测试机",
						"url": "PE-PCB-21-VE-1-3800x2500x2295-Primary",
						"data": [{
							"title": "工单号",
							"content": "200612091-01"
						}, {
							"title": "环境温度",
							"content": "25±2℃"
						}, {
							"title": "环境湿度",
							"content": "55±5%"
						}, {
							"title": "测试尺寸",
							"content": "480*560mm"
						}, {
							"title": "测试密度",
							"content": "50mil"
						}, {
							"title": "测试厚度",
							"content": "0.8~4mm"
						}, {
							"title": "绝缘测试电压",
							"content": "50~300V"
						}, {
							"title": "绝缘测试阻抗",
							"content": "1MΩ～100MΩ"
						}, {
							"title": "导通测试",
							"content": "10Ω～100Ω"
						}, {
							"title": "碳阻测试",
							"content": "200Ω～18kΩ"
						}, {
							"title": "测试速度",
							"content": "6000～8000 points/sec"
						}, {
							"title": "压缩气气压",
							"content": "0.6~0.8MPa"
						}, {
							"title": "测试治具号",
							"content": "065#"
						}],
						"cameraPosition": {
							"x": -1225,
							"y": 314,
							"z": 1039
						},
						"controlsTarget": {
							"x": -56,
							"y": -329,
							"z": 39
						}
					}, {
						"name": "VKeJi1",
						"cnName": "自动通用测试机",
						"url": "PE-PCB-21-VE-1-3800x2500x2295-Primary",
						"data": [{
							"title": "工单号",
							"content": "200612091-01"
						}, {
							"title": "环境温度",
							"content": "25±2℃"
						}, {
							"title": "环境湿度",
							"content": "55±5%"
						}, {
							"title": "测试尺寸",
							"content": "480*560mm"
						}, {
							"title": "测试密度",
							"content": "50mil"
						}, {
							"title": "测试厚度",
							"content": "0.8~4mm"
						}, {
							"title": "绝缘测试电压",
							"content": "50~300V"
						}, {
							"title": "绝缘测试阻抗",
							"content": "1MΩ～100MΩ"
						}, {
							"title": "导通测试",
							"content": "10Ω～100Ω"
						}, {
							"title": "碳阻测试",
							"content": "200Ω～18kΩ"
						}, {
							"title": "测试速度",
							"content": "6000～8000 points/sec"
						}, {
							"title": "压缩气气压",
							"content": "0.6~0.8MPa"
						}, {
							"title": "测试治具号",
							"content": "065#"
						}],
						"cameraPosition": {
							"x": -1225,
							"y": 314,
							"z": 1039
						},
						"controlsTarget": {
							"x": -56,
							"y": -329,
							"z": 39
						}
					}, {
						"name": "LuoJi2",
						"cnName": "锣机",
						"url": "PE-PCB-9-GBM-1-3516x1843x1798-Primary",
						"data": [{
							"title": "工单号",
							"content": "200612091-01"
						}, {
							"title": "刀径",
							"content": "1.5mm"
						}, {
							"title": "转速",
							"content": "120000rpm"
						}, {
							"title": "下刀速度",
							"content": "0.3~2m/min"
						}, {
							"title": "起刀速度",
							"content": "1m/min"
						}, {
							"title": "刀具开槽最大寿命",
							"content": "15m"
						}, {
							"title": "刀具精修最大寿命",
							"content": "25m"
						}, {
							"title": "配方",
							"content": "1#"
						}, {
							"title": "压脚压力",
							"content": "0.2kg"
						}, {
							"title": "刀具夹持力",
							"content": "0.2kg"
						}],
						"cameraPosition": {
							"x": 852,
							"y": 240,
							"z": 983
						},
						"controlsTarget": {
							"x": 175,
							"y": -201,
							"z": -345
						},
						"warningData": [{
								"title": "警告名称",
								"content": "计划保养"
							},
							{
								"title": "警告位置",
								"content": "锣机"
							},
							{
								"title": "警告代码",
								"content": "JG002"
							},
							{
								"title": "警告描述",
								"content": "计划保养提醒,请及时保养"
							},
							{
								"title": "执行动作",
								"content": "指令已发送"
							}
						]
					}, {
						"name": "LuoJi1",
						"cnName": "锣机",
						"url": "PE-PCB-9-GBM-1-3516x1843x1798-Primary",
						"data": [{
							"title": "工单号",
							"content": "200612091-01"
						}, {
							"title": "刀径",
							"content": "1.5mm"
						}, {
							"title": "转速",
							"content": "120000rpm"
						}, {
							"title": "下刀速度",
							"content": "0.3~2m/min"
						}, {
							"title": "起刀速度",
							"content": "1m/min"
						}, {
							"title": "刀具开槽最大寿命",
							"content": "15m"
						}, {
							"title": "刀具精修最大寿命",
							"content": "25m"
						}, {
							"title": "配方",
							"content": "1#"
						}, {
							"title": "压脚压力",
							"content": "0.2kg"
						}, {
							"title": "刀具夹持力",
							"content": "0.2kg"
						}],
						"cameraPosition": {
							"x": 852,
							"y": 240,
							"z": 983
						},
						"controlsTarget": {
							"x": 175,
							"y": -201,
							"z": -345
						}
					}, {
						"name": "ShiKe5",
						"cnName": "绿油显影",
						"url": "PE-PCB-11-Developer-1-5954x1530x3031-3",
						"data": [{
							"title": "产品尺寸",
							"content": "460*530mm"
						}, {
							"title": "工单号",
							"content": "200612091-01"
						}, {
							"title": "传送速度",
							"content": "3m/min"
						}, {
							"title": "显影槽温度",
							"content": "30℃"
						}, {
							"title": "喷淋压力",
							"content": "2kg"
						}, {
							"title": "水洗压力",
							"content": "1.8kg"
						}, {
							"title": "风干温度",
							"content": "60℃"
						}],
						"cameraPosition": {
							"x": 1461,
							"y": -56,
							"z": 1067
						},
						"controlsTarget": {
							"x": 540,
							"y": -483,
							"z": -419
						}
					}, {
						"name": "BaoGuangJi1",
						"cnName": "曝光机",
						"url": "PE-PCB-2-Exposure-1-2525x1810x2350-1",
						"data": [{
							"title": "对准精度",
							"content": "±2mil"
						}, {
							"title": "曝光时间",
							"content": "1s"
						}, {
							"title": "抽真空时间",
							"content": "1s"
						}, {
							"title": "光照强度",
							"content": "≥300mw/cm²"
						}, {
							"title": "曝光室温度",
							"content": "23℃"
						}, {
							"title": "对位次数",
							"content": "2"
						}, {
							"title": "配方",
							"content": "2#"
						}, {
							"title": "产品尺寸",
							"content": "460*530mm"
						}, {
							"title": "工单号",
							"content": "200612091-01"
						}],
						"cameraPosition": {
							"x": -2022,
							"y": 320,
							"z": 318
						},
						"controlsTarget": {
							"x": 11,
							"y": -167,
							"z": 40
						}
					}, {
						"name": "SuiDaoHonXiang",
						"cnName": "隧道烘箱",
						"url": "PE-PCB-7-OM-1-1874x5001x2500-1",
						"data": [{
							"title": "预热温度",
							"content": "80℃"
						}, {
							"title": "预热时间",
							"content": "60min"
						}, {
							"title": "烘干温度",
							"content": "155℃"
						}, {
							"title": "烘烤时间",
							"content": "60min"
						}, {
							"title": "用电量",
							"content": "054673"
						}, {
							"title": "产品尺寸",
							"content": "460*530mm"
						}, {
							"title": "工单号",
							"content": "200612091-01"
						}],
						"cameraPosition": {
							"x": 1228,
							"y": 328,
							"z": 1104
						},
						"controlsTarget": {
							"x": 429,
							"y": -187,
							"z": -88
						}
					}, {
						"name": "SiYinJi1",
						"cnName": "绿油丝印机",
						"url": "PE-PCB-8-SPM-1-2958x1718x2270-Primary",
						"data": [{
							"title": "产品尺寸",
							"content": "460*530mm"
						}, {
							"title": "工单号",
							"content": "200612091-01"
						}, {
							"title": "尺寸",
							"content": "480*560mm"
						}, {
							"title": "印刷尺寸",
							"content": "480X750mm"
						}, {
							"title": "防焊网框",
							"content": "(外) 750X970 mm"
						}, {
							"title": "印刷速度",
							"content": "120次/Hr"
						}, {
							"title": "CCD对位精度",
							"content": "±0.005mm"
						}],
						"cameraPosition": {
							"x": 709,
							"y": 296,
							"z": 1080
						},
						"controlsTarget": {
							"x": 97,
							"y": -271,
							"z": -97
						}
					}, {
						"name": "QianChuLiShuaBan1",
						"cnName": "前处理刷板线",
						"url": "PE-PCB-3-PG-1-1555x6000x2300-4",
						"data": [{
							"title": "产品尺寸",
							"content": "460*530mm"
						}, {
							"title": "工单号",
							"content": "200612091-01"
						}, {
							"title": "传送速度",
							"content": "4m/min"
						}, {
							"title": "微蚀温度",
							"content": "30℃"
						}, {
							"title": "烘干温度",
							"content": "80℃"
						}, {
							"title": "水洗压力",
							"content": "1.8kg"
						}],
						"cameraPosition": {
							"x": -2182,
							"y": 415,
							"z": -1222
						},
						"controlsTarget": {
							"x": 714,
							"y": -401,
							"z": 11
						}
					}, {
						"name": "SiYinJi2",
						"cnName": "全自动字符印刷线",
						"url": "PE-PCB-8-SPM-1-2958x1718x2270-Primary",
						"data": [{
							"title": "",
							"content": ""
						}],
						"cameraPosition": {
							"x": 709,
							"y": 296,
							"z": 1080
						},
						"controlsTarget": {
							"x": 97,
							"y": -271,
							"z": -97
						}
					}, {
						"name": "SiYinJi3",
						"cnName": "全自动字符印刷线",
						"url": "PE-PCB-8-SPM-1-2958x1718x2270-Primary",
						"data": [{
							"title": "",
							"content": ""
						}],
						"cameraPosition": {
							"x": 709,
							"y": 296,
							"z": 1080
						},
						"controlsTarget": {
							"x": 97,
							"y": -271,
							"z": -97
						}
					}, {
						"name": "YunShuDai4",
						"cnName": "全自动字符印刷线",
						"url": "PE-EA-4-DackStation-Single-1017x1000x900-Primary",
						"data": [{
							"title": "",
							"content": ""
						}],
						"cameraPosition": {
							"x": 1468,
							"y": 1407,
							"z": 1245
						},
						"controlsTarget": {
							"x": 353,
							"y": -88,
							"z": -150
						}
					}, {
						"name": "TaiYanFanBanJi2",
						"cnName": "全自动字符印刷线",
						"url": "PE-PCB-22-SD-1-1216x1765x1603-Primary",
						"data": [{
							"title": "",
							"content": ""
						}],
						"cameraPosition": {
							"x": 671,
							"y": 140,
							"z": 681
						},
						"controlsTarget": {
							"x": 170,
							"y": -139,
							"z": -75
						}
					}, {
						"name": "JiGuangDaMa1",
						"cnName": "全自动字符印刷线",
						"url": "PE-PCB-23-LC-1-1108x1554x1993-Primary",
						"data": [{
							"title": "",
							"content": ""
						}],
						"cameraPosition": {
							"x": -571,
							"y": 202,
							"z": 404
						},
						"controlsTarget": {
							"x": 29,
							"y": -104,
							"z": 100
						}
					}, {
						"name": "YunShuDai3",
						"cnName": "全自动字符印刷线",
						"url": "PE-EA-4-1-DackStation-4670x1325x3670-3",
						"data": [{
							"title": "",
							"content": ""
						}],
						"cameraPosition": {
							"x": 1468,
							"y": 1407,
							"z": 1245
						},
						"controlsTarget": {
							"x": 353,
							"y": -88,
							"z": -150
						}
					}, {
						"name": "TaiYanFanBanJi3",
						"cnName": "全自动字符印刷线",
						"url": "PE-PCB-22-SD-1-1216x1765x1603-Primary",
						"data": [{
							"title": "",
							"content": ""
						}],
						"cameraPosition": {
							"x": 671,
							"y": 140,
							"z": 681
						},
						"controlsTarget": {
							"x": 170,
							"y": -139,
							"z": -75
						}
					}, {
						"name": "JiGuangDaMa2",
						"cnName": "全自动字符印刷线",
						"url": "PE-PCB-23-LC-1-1108x1554x1993-Primary",
						"data": [{
							"title": "",
							"content": ""
						}],
						"cameraPosition": {
							"x": -571,
							"y": 202,
							"z": 404
						},
						"controlsTarget": {
							"x": 29,
							"y": -104,
							"z": 100
						}
					}, {
						"name": "YunShuDai2",
						"cnName": "全自动字符印刷线",
						"url": "PE-EA-4-1-DackStation-1325x6354x3670-1",
						"data": [{
							"title": "",
							"content": ""
						}],
						"cameraPosition": {
							"x": 1468,
							"y": 1407,
							"z": 1245
						},
						"controlsTarget": {
							"x": 353,
							"y": -88,
							"z": -150
						}
					}, {
						"name": "TuXingDianDu",
						"cnName": "图形电镀线",
						"url": "PE-PCB-20-GPL-1-3359x20525x2100-Primary",
						"data": [{
							"title": "",
							"content": ""
						}],
						"cameraPosition": {
							"x": 2169,
							"y": 701,
							"z": 5655
						},
						"controlsTarget": {
							"x": -1083,
							"y": -548,
							"z": 1548
						}
					}, {
						"name": "BaoGuangJi3",
						"cnName": "曝光机",
						"url": "PE-PCB-2-Exposure-1-2525x4000x2350-Primary",
						"data": [{
							"title": "对准精度",
							"content": "±2mil"
						}, {
							"title": "曝光时间",
							"content": "0.5s"
						}, {
							"title": "抽真空时间",
							"content": "1s"
						}, {
							"title": "光照强度",
							"content": "≥300mw/cm²"
						}, {
							"title": "曝光室温度",
							"content": "23℃"
						}, {
							"title": "对位次数",
							"content": "2"
						}, {
							"title": "产品尺寸",
							"content": "460*530mm"
						}, {
							"title": "工单号",
							"content": "200612091-01"
						}],
						"cameraPosition": {
							"x": -2022,
							"y": 320,
							"z": 318
						},
						"controlsTarget": {
							"x": 11,
							"y": -167,
							"z": 40
						}
					}, {
						"name": "TieMoJi2",
						"cnName": "贴膜机",
						"url": "PE-PCB-28-AFA-1-973x4473x2686-Primary",
						"data": [{
								"title": "预热温度上",
								"content": "80℃"
							}, {
								"title": "预热温度下",
								"content": "80℃"
							}, {
								"title": "压膜棍温度上",
								"content": "100~110℃"
							}, {
								"title": "压膜棍温度下",
								"content": "100~110℃"
							}, {
								"title": "抽真空时间",
								"content": "2s"
							}, {
								"title": "抽真空真空度",
								"content": "-30"
							}, {
								"title": "贴膜时间",
								"content": "2s"
							},
							{
								"title": "贴膜压力",
								"content": "0.5~0.6kg"
							},
							{
								"title": "产品尺寸",
								"content": "460*530mm"
							},
							{
								"title": "配方",
								"content": "2#"
							},
							{
								"title": "干膜型号",
								"content": "PH2325"
							}, {
								"title": "工单号",
								"content": "200612091-01"
							}
						],
						"cameraPosition": {
							"x": -1164,
							"y": 290,
							"z": 912
						},
						"controlsTarget": {
							"x": 153,
							"y": -234,
							"z": 348
						}
					}, {
						"name": "QianChuLiShuaBan3",
						"cnName": "前处理刷板线",
						"url": "PE-PCB-3-PG-1-1555x9250x2204-2",
						"data": [{
							"title": "产品尺寸",
							"content": "460*530mm"
						}, {
							"title": "工单号",
							"content": "200612091-01"
						}, {
							"title": "传送速度",
							"content": "4m/min"
						}, {
							"title": "微蚀温度",
							"content": "30℃"
						}, {
							"title": "烘干温度",
							"content": "80℃"
						}, {
							"title": "水洗压力",
							"content": "1.8kg"
						}],
						"cameraPosition": {
							"x": 1559,
							"y": 195,
							"z": 1038
						},
						"controlsTarget": {
							"x": 619,
							"y": 22,
							"z": 370
						}
					}, {
						"name": "ShiKe2",
						"cnName": "蚀刻机",
						"url": "PE-PCB-11-Developer-1-1530x21074x3031-1",
						"data": [{
							"title": "传送速度",
							"content": "4m/min"
						}, {
							"title": "显影段温度",
							"content": "30℃"
						}, {
							"title": "显影段喷淋压力",
							"content": "2kg"
						}, {
							"title": "蚀刻段温度",
							"content": "45℃"
						}, {
							"title": "蚀刻段喷淋压力",
							"content": "2kg"
						}, {
							"title": "褪膜段温度",
							"content": "40℃"
						}, {
							"title": "褪膜段喷淋压力",
							"content": "2kg"
						}, {
							"title": "水洗压力",
							"content": "2kg"
						}, {
							"title": "烘干温度",
							"content": "80℃"
						}, {
							"title": "蚀刻液浓度",
							"content": "2.5%"
						}, {
							"title": "显影液浓度",
							"content": "1.5%"
						}, {
							"title": "褪膜液浓度",
							"content": "2%"
						}, {
							"title": "配方",
							"content": "3#"
						}, {
							"title": "产品尺寸",
							"content": "460*530mm"
						}, {
							"title": "工单号",
							"content": "200612091-01"
						}],
						"cameraPosition": {
							"x": -2182,
							"y": 415,
							"z": -1222
						},
						"controlsTarget": {
							"x": 714,
							"y": -401,
							"z": 11
						}
					}, {
						"name": "QianChuLiShuaBan4",
						"cnName": "前处理刷板线",
						"url": "PE-PCB-3-PG-1-9250x1555x2300-3",
						"data": [{
							"title": "产品尺寸",
							"content": "460*530mm"
						}, {
							"title": "工单号",
							"content": "200612091-01"
						}, {
							"title": "传送速度",
							"content": "4m/min"
						}, {
							"title": "微蚀温度",
							"content": "30℃"
						}, {
							"title": "烘干温度",
							"content": "80℃"
						}, {
							"title": "水洗压力",
							"content": "1.8kg"
						}],
						"cameraPosition": {
							"x": -2182,
							"y": 415,
							"z": -1222
						},
						"controlsTarget": {
							"x": 714,
							"y": -401,
							"z": 11
						}
					}, {
						"name": "ChengTongXian",
						"cnName": "沉铜线",
						"url": "PE-PCB-18-HCD-1-10915x1555x1930-Primary",
						"data": [{
							"title": "传送速度",
							"content": "4m/min"
						}, {
							"title": "蓬松槽温度",
							"content": "80℃"
						}, {
							"title": "去钻污槽温度",
							"content": "80℃"
						}, {
							"title": "中和槽温度",
							"content": "30℃"
						}, {
							"title": "微蚀槽温度",
							"content": "30"
						}, {
							"title": "沉铜槽温度",
							"content": "26℃"
						}, {
							"title": "沉铜喷淋压力",
							"content": "2kg"
						}, {
							"title": "沉铜槽整流机电流",
							"content": "1000A"
						}, {
							"title": "沉铜槽整流机电压",
							"content": "5A"
						}, {
							"title": "烘干温度",
							"content": "75℃"
						}, {
							"title": "水洗压力",
							"content": "2kg"
						}, {
							"title": "产品尺寸",
							"content": "460*530mm"
						}, {
							"title": "工单号",
							"content": "200612091-01"
						}, {
							"title": "市水用量",
							"content": "12340"
						}, {
							"title": "用电量",
							"content": "078612"
						}],
						"cameraPosition": {
							"x": 2499,
							"y": 640,
							"z": 2095
						},
						"controlsTarget": {
							"x": 1110,
							"y": -548,
							"z": -305
						},
						"errorData": [{
								"title": "故障名称",
								"content": "传送段卡板"
							},
							{
								"title": "故障位置",
								"content": "沉铜段"
							},
							{
								"title": "故障代码",
								"content": "GZ003"
							},
							{
								"title": "故障描述",
								"content": "板件传送超时,请检查传送机构"
							},
							{
								"title": "执行动作",
								"content": "指令已发送"
							}
						]
					}, {
						"name": "VcpDianDuXian",
						"cnName": "VCP电镀线",
						"url": "PE-PCB-12-EL-1-10746x2603x2162-1",
						"data": [{
							"title": "产品尺寸",
							"content": "460*530mm"
						}, {
							"title": "工单号",
							"content": "200612091-01"
						}, {
							"title": "微蚀温度",
							"content": "28℃"
						}, {
							"title": "微蚀时间",
							"content": "2min"
						}, {
							"title": "除油温度",
							"content": "30℃"
						}, {
							"title": "除油时间",
							"content": "4min"
						}, {
							"title": "酸浸时间",
							"content": "2min"
						}, {
							"title": "镀铜时间",
							"content": "80min"
						}, {
							"title": "桐钢温度",
							"content": "26℃"
						}, {
							"title": "微蚀温度",
							"content": "28℃"
						}, {
							"title": "微蚀时间",
							"content": "2min"
						}, {
							"title": "整流机电流",
							"content": "800A"
						}, {
							"title": "整流机电压",
							"content": "5v"
						}, {
							"title": "市水用量",
							"content": "01245"
						}, {
							"title": "纯水用量",
							"content": "01457"
						}, {
							"title": "用电量",
							"content": "005357"
						}],
						"cameraPosition": {
							"x": -2430,
							"y": 320,
							"z": -2358
						},
						"controlsTarget": {
							"x": -720,
							"y": -578,
							"z": 1236
						}
					}, {
						"name": "ZuanKonJi1",
						"cnName": "钻孔机",
						"url": "PE-PCB-10-DM-1-5005x1800x2394-Primary",
						"data": [{
							"title": "主轴转速",
							"content": "250000RPM"
						}, {
							"title": "压脚压力",
							"content": "0.2kg"
						}, {
							"title": "夹持力",
							"content": "0.18kg"
						}, {
							"title": "抽尘负压",
							"content": "-0.3Mpa"
						}, {
							"title": "进刀深度",
							"content": "0.2mm"
						}, {
							"title": "刀径",
							"content": "1.5mm"
						}, {
							"title": "定位精度",
							"content": "±0.004mm"
						}, {
							"title": "重复精度",
							"content": "±0.0025mm"
						}, {
							"title": "钻孔精度",
							"content": "±0.018mm"
						}, {
							"title": "下刀速度",
							"content": "0.5m/min"
						}, {
							"title": "起刀速度",
							"content": "1m/min"
						}, {
							"title": "冷水机温度",
							"content": "20℃"
						}, {
							"title": "平台XY轴移动速度",
							"content": "80m/min"
						}, {
							"title": "平台Z轴移动速度",
							"content": "25m/min"
						}],
						"cameraPosition": {
							"x": -741,
							"y": 761,
							"z": 1727
						},
						"controlsTarget": {
							"x": 97,
							"y": -531,
							"z": -80
						},
						"warningData": [{
								"title": "警告名称",
								"content": "设备待机"
							},
							{
								"title": "警告位置",
								"content": "钻机"
							},
							{
								"title": "警告代码",
								"content": "JG004"
							},
							{
								"title": "警告描述",
								"content": "加工已完成,请上料"
							},
							{
								"title": "执行动作",
								"content": "指令已发送"
							},
						]
					}, {
						"name": "ZuanKonJi2",
						"cnName": "钻孔机",
						"url": "PE-PCB-10-DM-1-5005x1800x2394-Primary",
						"data": [{
							"title": "主轴转速",
							"content": "250000RPM"
						}, {
							"title": "压脚压力",
							"content": "0.2kg"
						}, {
							"title": "夹持力",
							"content": "0.18kg"
						}, {
							"title": "抽尘负压",
							"content": "-0.3Mpa"
						}, {
							"title": "进刀深度",
							"content": "0.2mm"
						}, {
							"title": "刀径",
							"content": "1.5mm"
						}, {
							"title": "定位精度",
							"content": "±0.004mm"
						}, {
							"title": "重复精度",
							"content": "±0.0025mm"
						}, {
							"title": "钻孔精度",
							"content": "±0.018mm"
						}, {
							"title": "下刀速度",
							"content": "0.5m/min"
						}, {
							"title": "起刀速度",
							"content": "1m/min"
						}, {
							"title": "冷水机温度",
							"content": "20℃"
						}, {
							"title": "平台XY轴移动速度",
							"content": "80m/min"
						}, {
							"title": "平台Z轴移动速度",
							"content": "25m/min"
						}],
						"cameraPosition": {
							"x": -741,
							"y": 761,
							"z": 1727
						},
						"controlsTarget": {
							"x": 97,
							"y": -531,
							"z": -80
						}
					}, {
						"name": "YaJi1",
						"cnName": "压机",
						"url": "PE-PCB-14-PM-1-1500x1587x3185-Primary",
						"data": [{
							"title": "层盘压力",
							"content": "30kg"
						}, {
							"title": "压盘温度",
							"content": "140℃"
						}, {
							"title": "温升速率",
							"content": "1.5℃/min"
						}, {
							"title": "压制时间",
							"content": "120min"
						}, {
							"title": "物料型号",
							"content": "PP2013431"
						}, {
							"title": "产品尺寸",
							"content": "460*530mm"
						}, {
							"title": "工单号",
							"content": "200612091-01"
						}],
						"cameraPosition": {
							"x": -1626,
							"y": 28,
							"z": -606
						},
						"controlsTarget": {
							"x": 345,
							"y": -168,
							"z": 186
						}
					}, {
						"name": "YaJi2",
						"cnName": "压机",
						"url": "PE-PCB-14-PM-1-1500x1587x3185-Primary",
						"data": [{
							"title": "层盘压力",
							"content": "30kg"
						}, {
							"title": "压盘温度",
							"content": "140℃"
						}, {
							"title": "温升速率",
							"content": "1.5℃/min"
						}, {
							"title": "压制时间",
							"content": "120min"
						}, {
							"title": "物料型号",
							"content": "PP2013431"
						}, {
							"title": "产品尺寸",
							"content": "460*530mm"
						}, {
							"title": "工单号",
							"content": "200612091-01"
						}],
						"cameraPosition": {
							"x": -1626,
							"y": 28,
							"z": -606
						},
						"controlsTarget": {
							"x": 345,
							"y": -168,
							"z": 186
						}
					}, {
						"name": "YaJi3",
						"cnName": "压机",
						"url": "PE-PCB-14-PM-1-1500x1587x3185-Primary",
						"data": [{
							"title": "层盘压力",
							"content": "30kg"
						}, {
							"title": "压盘温度",
							"content": "140℃"
						}, {
							"title": "温升速率",
							"content": "1.5℃/min"
						}, {
							"title": "压制时间",
							"content": "120min"
						}, {
							"title": "物料型号",
							"content": "PP2013431"
						}, {
							"title": "产品尺寸",
							"content": "460*530mm"
						}, {
							"title": "工单号",
							"content": "200612091-01"
						}],
						"cameraPosition": {
							"x": -1626,
							"y": 28,
							"z": -606
						},
						"controlsTarget": {
							"x": 345,
							"y": -168,
							"z": 186
						}
					}, {
						"name": "YaJi4",
						"cnName": "压机",
						"url": "PE-PCB-14-PM-1-1500x1587x3185-Primary",
						"data": [{
							"title": "层盘压力",
							"content": "30kg"
						}, {
							"title": "压盘温度",
							"content": "140℃"
						}, {
							"title": "温升速率",
							"content": "1.5℃/min"
						}, {
							"title": "压制时间",
							"content": "120min"
						}, {
							"title": "物料型号",
							"content": "PP2013431"
						}, {
							"title": "产品尺寸",
							"content": "460*530mm"
						}, {
							"title": "工单号",
							"content": "200612091-01"
						}],
						"cameraPosition": {
							"x": -1626,
							"y": 28,
							"z": -606
						},
						"controlsTarget": {
							"x": 345,
							"y": -168,
							"z": 186
						}
					}, {
						"name": "ShiKe1",
						"cnName": "棕化线",
						"url": "PE-PCB-11-Developer-1-1530x2740x3031-2",
						"data": [{
							"title": "传送速度",
							"content": "4m/min"
						}, {
							"title": "棕化液温度",
							"content": "45℃"
						}, {
							"title": "喷淋压力",
							"content": "2kg"
						}, {
							"title": "烘干温度",
							"content": "75℃"
						}, {
							"title": "产品尺寸",
							"content": "460*530mm"
						}, {
							"title": "工单号",
							"content": "200612091-01"
						}],
						"cameraPosition": {
							"x": -1826,
							"y": 593,
							"z": -626
						},
						"controlsTarget": {
							"x": 608,
							"y": -347,
							"z": 863
						}
					}, {
						"name": "ZonHua",
						"cnName": "棕化线",
						"url": "PE-PCB-29-BE-1-1555x6000x2300-Primary",
						"data": [{
							"title": "传送速度",
							"content": "4m/min"
						}, {
							"title": "棕化液温度",
							"content": "45℃"
						}, {
							"title": "喷淋压力",
							"content": "2kg"
						}, {
							"title": "烘干温度",
							"content": "75℃"
						}, {
							"title": "产品尺寸",
							"content": "460*530mm"
						}, {
							"title": "工单号",
							"content": "200612091-01"
						}],
						"cameraPosition": {
							"x": -1478,
							"y": 195,
							"z": -1104
						},
						"controlsTarget": {
							"x": 67,
							"y": -271,
							"z": -205
						}
					}, {
						"name": "GangBanQingXiJi",
						"cnName": "钢板清洗机",
						"url": "PE-PCB-15-SPC-1-1390x3000x1100-Primary",
						"data": [{
							"title": "",
							"content": ""
						}],
						"cameraPosition": {
							"x": -1565,
							"y": 187,
							"z": -451
						},
						"controlsTarget": {
							"x": 1,
							"y": -160,
							"z": 28
						}
					}, {
						"name": "CaiMoJi1",
						"cnName": "裁磨自动线",
						"url": "PE-PCB-16-CM-1-1522x1593x2204-Primary",
						"data": [{
							"title": "产品尺寸",
							"content": "460*530mm"
						}, {
							"title": "裁切速度",
							"content": "8m/min"
						}, {
							"title": "磨板边深",
							"content": "0.5mm"
						}, {
							"title": "转速",
							"content": "2800rpm"
						}, {
							"title": "气压",
							"content": "0.6~0.8MPa"
						}, {
							"title": "工单号",
							"content": "200612091-01"
						}],
						"cameraPosition": {
							"x": -1392,
							"y": 252,
							"z": -572
						},
						"controlsTarget": {
							"x": -11,
							"y": -183,
							"z": -39
						}
					}, {
						"name": "CaiMoJi2",
						"cnName": "裁磨自动线",
						"url": "PE-PCB-16-CM-1-1522x1593x2204-Primary",
						"data": [{
							"title": "产品尺寸",
							"content": "460*530mm"
						}, {
							"title": "裁切速度",
							"content": "8m/min"
						}, {
							"title": "磨板边深",
							"content": "0.5mm"
						}, {
							"title": "转速",
							"content": "2800rpm"
						}, {
							"title": "气压",
							"content": "0.6~0.8MPa"
						}, {
							"title": "工单号",
							"content": "200612091-01"
						}],
						"cameraPosition": {
							"x": -1392,
							"y": 252,
							"z": -572
						},
						"controlsTarget": {
							"x": -11,
							"y": -183,
							"z": -39
						}
					}, {
						"name": "RollerConveyor5",
						"cnName": "裁磨自动线",
						"url": "PE-EA-4-RC-1-1390x1000x1956-1",
						"data": [{
							"title": "产品尺寸",
							"content": "460*530mm"
						}, {
							"title": "裁切速度",
							"content": "8m/min"
						}, {
							"title": "磨板边深",
							"content": "0.5mm"
						}, {
							"title": "转速",
							"content": "2800rpm"
						}, {
							"title": "气压",
							"content": "0.6~0.8MPa"
						}, {
							"title": "工单号",
							"content": "200612091-01"
						}],
						"cameraPosition": {
							"x": -750,
							"y": 100,
							"z": 523
						},
						"controlsTarget": {
							"x": 48,
							"y": -59,
							"z": -4
						}
					}, {
						"name": "RollerConveyor3",
						"cnName": "裁磨自动线",
						"url": "PE-EA-4-RC-1-1390x1000x1956-1",
						"data": [{
							"title": "产品尺寸",
							"content": "460*530mm"
						}, {
							"title": "裁切速度",
							"content": "8m/min"
						}, {
							"title": "磨板边深",
							"content": "0.5mm"
						}, {
							"title": "转速",
							"content": "2800rpm"
						}, {
							"title": "气压",
							"content": "0.6~0.8MPa"
						}, {
							"title": "工单号",
							"content": "200612091-01"
						}],
						"cameraPosition": {
							"x": -750,
							"y": 100,
							"z": 523
						},
						"controlsTarget": {
							"x": 48,
							"y": -59,
							"z": -4
						}
					}, {
						"name": "RollerConveyor4",
						"cnName": "裁磨自动线",
						"url": "PE-EA-4-RC-1-1390x1000x1956-1",
						"data": [{
							"title": "产品尺寸",
							"content": "460*530mm"
						}, {
							"title": "裁切速度",
							"content": "8m/min"
						}, {
							"title": "磨板边深",
							"content": "0.5mm"
						}, {
							"title": "转速",
							"content": "2800rpm"
						}, {
							"title": "气压",
							"content": "0.6~0.8MPa"
						}, {
							"title": "工单号",
							"content": "200612091-01"
						}],
						"cameraPosition": {
							"x": -750,
							"y": 100,
							"z": 523
						},
						"controlsTarget": {
							"x": 48,
							"y": -59,
							"z": -4
						}
					}, {
						"name": "RollerConveyor6",
						"cnName": "裁磨自动线",
						"url": "PE-EA-4-RC-1-1390x1000x1956-1",
						"data": [{
							"title": "产品尺寸",
							"content": "460*530mm"
						}, {
							"title": "裁切速度",
							"content": "8m/min"
						}, {
							"title": "磨板边深",
							"content": "0.5mm"
						}, {
							"title": "转速",
							"content": "2800rpm"
						}, {
							"title": "气压",
							"content": "0.6~0.8MPa"
						}, {
							"title": "工单号",
							"content": "200612091-01"
						}],
						"cameraPosition": {
							"x": -750,
							"y": 100,
							"z": 523
						},
						"controlsTarget": {
							"x": 48,
							"y": -59,
							"z": -4
						}
					}, {
						"name": "XRay",
						"cnName": "裁磨自动线",
						"url": "PE-EA-10-0-Xray-1842x1346x2041-1",
						"data": [{
							"title": "产品尺寸",
							"content": "460*530mm"
						}, {
							"title": "裁切速度",
							"content": "8m/min"
						}, {
							"title": "磨板边深",
							"content": "0.5mm"
						}, {
							"title": "转速",
							"content": "2800rpm"
						}, {
							"title": "气压",
							"content": "0.6~0.8MPa"
						}, {
							"title": "工单号",
							"content": "200612091-01"
						}],
						"cameraPosition": {
							"x": -997,
							"y": 135,
							"z": -551
						},
						"controlsTarget": {
							"x": -63,
							"y": 11,
							"z": 77
						}
					}, {
						"name": "IBC2",
						"cnName": "裁磨自动线",
						"url": "PE-PCB-17-IBC-1-2430x2170x2327-Primary",
						"data": [{
							"title": "产品尺寸",
							"content": "460*530mm"
						}, {
							"title": "裁切速度",
							"content": "8m/min"
						}, {
							"title": "磨板边深",
							"content": "0.5mm"
						}, {
							"title": "转速",
							"content": "2800rpm"
						}, {
							"title": "气压",
							"content": "0.6~0.8MPa"
						}, {
							"title": "工单号",
							"content": "200612091-01"
						}],
						"cameraPosition": {
							"x": -1369,
							"y": 188,
							"z": -638
						},
						"controlsTarget": {
							"x": -7,
							"y": -190,
							"z": -62
						}
					}, {
						"name": "AOI1",
						"cnName": "AOI",
						"url": "PE-PCB-25-AOI-1-917x1146x740-Primary",
						"data": [{
							"title": "",
							"content": ""
						}],
						"cameraPosition": {
							"x": -1660,
							"y": 219,
							"z": -782
						},
						"controlsTarget": {
							"x": 47,
							"y": -123,
							"z": -33
						}
					}, {
						"name": "FuJianAoi2",
						"cnName": "检修站",
						"url": "PE-PCB-25-AOI-2-840x575x552-Primary",
						"data": [{
							"title": "",
							"content": ""
						}],
						"cameraPosition": {
							"x": 409,
							"y": 195,
							"z": 843
						},
						"controlsTarget": {
							"x": 115,
							"y": -161,
							"z": -6
						}
					}, {
						"name": "KaiLiaoJi",
						"cnName": "下料机",
						"url": "PE-PCB-13-OM-1-2929x3201x1417-1",
						"data": [{
							"title": "裁切长度",
							"content": "620mm"
						}, {
							"title": "刀具直径",
							"content": "305mm"
						}, {
							"title": "刀具转速",
							"content": "3600~4400rpm"
						}, {
							"title": "裁切速度",
							"content": "3~4m/min"
						}, {
							"title": "裁切厚度",
							"content": "≤50mm"
						}, {
							"title": "气压",
							"content": "0.6~0.8MPa"
						}, {
							"title": "刀具寿命",
							"content": "≤2000m"
						}, {
							"title": "基板总长度",
							"content": "1245mm"
						}, {
							"title": "基板宽度",
							"content": "2085mm"
						}, {
							"title": "用电量",
							"content": "20350"
						}, {
							"title": "工单号",
							"content": "200612091-01"
						}, {
							"title": "物料型号",
							"content": "HP2546078A0"
						}],
						"cameraPosition": {
							"x": 1088,
							"y": 146,
							"z": 970
						},
						"controlsTarget": {
							"x": 170,
							"y": -80,
							"z": -120
						}
					}, {
						"name": "ShiKe4",
						"cnName": "清洗机",
						"url": "PE-PCB-11-Developer-1-5954x1530x3031-Primary",
						"data": [{
							"title": "产品尺寸",
							"content": "460*530mm"
						}, {
							"title": "工单号",
							"content": "200612091-01"
						}, {
							"title": "传送速度",
							"content": "4m/min"
						}, {
							"title": "微蚀温度",
							"content": "30℃"
						}, {
							"title": "烘干温度",
							"content": "80℃"
						}, {
							"title": "水洗压力",
							"content": "1.8kg"
						}],
						"cameraPosition": {
							"x": -1800,
							"y": -50,
							"z": -409
						},
						"controlsTarget": {
							"x": 471,
							"y": -180,
							"z": 69
						}
					}, {
						"name": "QianChuLiShuaBan2",
						"cnName": "前处理机",
						"url": "PE-PCB-3-PG-1-1555x7250x2204-1",
						"data": [{
							"title": "产品尺寸",
							"content": "460*530mm"
						}, {
							"title": "工单号",
							"content": "200612091-01"
						}, {
							"title": "传送速度",
							"content": "4m/min"
						}, {
							"title": "微蚀温度",
							"content": "30℃"
						}, {
							"title": "烘干温度",
							"content": "80℃"
						}, {
							"title": "水洗压力",
							"content": "1.8kg"
						}],
						"cameraPosition": {
							"x": -1725,
							"y": 203,
							"z": 2097
						},
						"controlsTarget": {
							"x": 1049,
							"y": -634,
							"z": 618
						}
					}, {
						"name": "TieMoJi1",
						"cnName": "贴膜机",
						"url": "PE-PCB-28-AFA-1-973x4473x2686-Primary",
						"data": [{
								"title": "预热温度上",
								"content": "80℃"
							}, {
								"title": "预热温度下",
								"content": "80℃"
							}, {
								"title": "压膜棍温度上",
								"content": "100~110℃"
							}, {
								"title": "压膜棍温度下",
								"content": "100~110℃"
							}, {
								"title": "抽真空时间",
								"content": "2s"
							}, {
								"title": "抽真空真空度",
								"content": "-30"
							}, {
								"title": "贴膜时间",
								"content": "2s"
							},
							{
								"title": "贴膜压力",
								"content": "0.5~0.6kg"
							},
							{
								"title": "产品尺寸",
								"content": "460*530mm"
							},
							{
								"title": "配方",
								"content": "2#"
							},
							{
								"title": "干膜型号",
								"content": "PH2325"
							}, {
								"title": "工单号",
								"content": "200612091-01"
							}
						],
						"cameraPosition": {
							"x": -1164,
							"y": 290,
							"z": 912
						},
						"controlsTarget": {
							"x": 153,
							"y": -234,
							"z": 348
						}
					}, {
						"name": "BaoGuangJi2",
						"cnName": "曝光机",
						"url": "PE-PCB-2-Exposure-1-2525x4000x2350-Primary",
						"data": [{
							"title": "对准精度",
							"content": "±0.6mil"
						}, {
							"title": "曝光时间",
							"content": "0.5s"
						}, {
							"title": "抽真空时间",
							"content": "1s"
						}, {
							"title": "光照强度",
							"content": "≥300mw/cm²"
						}, {
							"title": "曝光室温度",
							"content": "23℃"
						}, {
							"title": "对位次数",
							"content": "2"
						}],
						"cameraPosition": {
							"x": -2022,
							"y": 320,
							"z": 318
						},
						"controlsTarget": {
							"x": 11,
							"y": -167,
							"z": 40
						}
					}, {
						"name": "ShiKe3",
						"cnName": "蚀刻机",
						"url": "PE-PCB-11-Developer-1-1530x21074x3031-1",
						"data": [{
							"title": "传送速度",
							"content": "4m/min"
						}, {
							"title": "显影段温度",
							"content": "30℃"
						}, {
							"title": "显影段喷淋压力",
							"content": "2kg"
						}, {
							"title": "蚀刻段温度",
							"content": "45℃"
						}, {
							"title": "蚀刻段喷淋压力",
							"content": "2kg"
						}, {
							"title": "褪膜段温度",
							"content": "40℃"
						}, {
							"title": "褪膜段喷淋压力",
							"content": "2kg"
						}, {
							"title": "水洗压力",
							"content": "2kg"
						}, {
							"title": "烘干温度",
							"content": "80℃"
						}, {
							"title": "蚀刻液浓度",
							"content": "2.5%"
						}, {
							"title": "显影液浓度",
							"content": "1.5%"
						}, {
							"title": "褪膜液浓度",
							"content": "2%"
						}, {
							"title": "产品尺寸",
							"content": "460*530mm"
						}, {
							"title": "工单号",
							"content": "200612091-01"
						}],
						"cameraPosition": {
							"x": -2139,
							"y": 615,
							"z": -2665
						},
						"controlsTarget": {
							"x": 1128,
							"y": -36,
							"z": -1577
						}
					}, {
						"name": "BanChengPing1",
						"cnName": "WIP",
						"url": "MM-PCBB-MSRMB-0-1-800x800x800-Primary",
						"data": [{
							"title": "批卡号",
							"content": "R0003219-0-1"
						}, {
							"title": "客户编码",
							"content": "PQJ888"
						}, {
							"title": "总批数",
							"content": "12 PNJS"
						}, {
							"title": "交货数量",
							"content": "4000"
						}, {
							"title": "工单号码",
							"content": "200612091-01"
						}],
						"cameraPosition": {
							"x": 576,
							"y": 377,
							"z": 494
						},
						"controlsTarget": {
							"x": 134,
							"y": -25,
							"z": -84
						}
					}, {
						"name": "BanChengPing2",
						"cnName": "WIP",
						"url": "MM-PCBB-MSRMB-0-1-800x800x800-Primary",
						"data": [{
							"title": "批卡号",
							"content": "R0003219-0-1"
						}, {
							"title": "客户编码",
							"content": "PQJ888"
						}, {
							"title": "总批数",
							"content": "12 PNJS"
						}, {
							"title": "交货数量",
							"content": "4000"
						}, {
							"title": "工单号码",
							"content": "200612091-01"
						}],
						"cameraPosition": {
							"x": 576,
							"y": 377,
							"z": 494
						},
						"controlsTarget": {
							"x": 134,
							"y": -25,
							"z": -84
						}
					}, {
						"name": "BanChengPing3",
						"cnName": "WIP",
						"url": "MM-PCBB-MSRMB-0-1-800x800x800-Primary",
						"data": [{
							"title": "批卡号",
							"content": "R0003219-0-1"
						}, {
							"title": "客户编码",
							"content": "PQJ888"
						}, {
							"title": "总批数",
							"content": "12 PNJS"
						}, {
							"title": "交货数量",
							"content": "4000"
						}, {
							"title": "工单号码",
							"content": "200612091-01"
						}],
						"cameraPosition": {
							"x": 576,
							"y": 377,
							"z": 494
						},
						"controlsTarget": {
							"x": 134,
							"y": -25,
							"z": -84
						}
					}, {
						"name": "BanChengPing20",
						"cnName": "WIP",
						"url": "MM-PCBB-MSRMB-0-1-800x800x800-Primary",
						"data": [{
							"title": "批卡号",
							"content": "R0003219-0-1"
						}, {
							"title": "客户编码",
							"content": "PQJ888"
						}, {
							"title": "总批数",
							"content": "12 PNJS"
						}, {
							"title": "交货数量",
							"content": "4000"
						}, {
							"title": "工单号码",
							"content": "200612091-01"
						}],
						"cameraPosition": {
							"x": 576,
							"y": 377,
							"z": 494
						},
						"controlsTarget": {
							"x": 134,
							"y": -25,
							"z": -84
						}
					}, {
						"name": "BanChengPing15",
						"cnName": "WIP",
						"url": "MM-PCBB-MSRMB-0-1-800x800x800-Primary",
						"data": [{
							"title": "批卡号",
							"content": "R0003219-0-1"
						}, {
							"title": "客户编码",
							"content": "PQJ888"
						}, {
							"title": "总批数",
							"content": "12 PNJS"
						}, {
							"title": "交货数量",
							"content": "4000"
						}, {
							"title": "工单号码",
							"content": "200612091-01"
						}],
						"cameraPosition": {
							"x": 576,
							"y": 377,
							"z": 494
						},
						"controlsTarget": {
							"x": 134,
							"y": -25,
							"z": -84
						}
					}, {
						"name": "BanChengPing16",
						"cnName": "WIP",
						"url": "MM-PCBB-MSRMB-0-1-800x800x800-Primary",
						"data": [{
							"title": "批卡号",
							"content": "R0003219-0-1"
						}, {
							"title": "客户编码",
							"content": "PQJ888"
						}, {
							"title": "总批数",
							"content": "12 PNJS"
						}, {
							"title": "交货数量",
							"content": "4000"
						}, {
							"title": "工单号码",
							"content": "200612091-01"
						}],
						"cameraPosition": {
							"x": 576,
							"y": 377,
							"z": 494
						},
						"controlsTarget": {
							"x": 134,
							"y": -25,
							"z": -84
						}
					}, {
						"name": "BanChengPing14",
						"cnName": "WIP",
						"url": "MM-PCBB-MSRMB-0-1-800x800x800-Primary",
						"data": [{
							"title": "批卡号",
							"content": "R0003219-0-1"
						}, {
							"title": "客户编码",
							"content": "PQJ888"
						}, {
							"title": "总批数",
							"content": "12 PNJS"
						}, {
							"title": "交货数量",
							"content": "4000"
						}, {
							"title": "工单号码",
							"content": "200612091-01"
						}],
						"cameraPosition": {
							"x": 576,
							"y": 377,
							"z": 494
						},
						"controlsTarget": {
							"x": 134,
							"y": -25,
							"z": -84
						}
					}, {
						"name": "BanChengPing13",
						"cnName": "WIP",
						"url": "MM-PCBB-MSRMB-0-1-800x800x800-Primary",
						"data": [{
							"title": "批卡号",
							"content": "R0003219-0-1"
						}, {
							"title": "客户编码",
							"content": "PQJ888"
						}, {
							"title": "总批数",
							"content": "12 PNJS"
						}, {
							"title": "交货数量",
							"content": "4000"
						}, {
							"title": "工单号码",
							"content": "200612091-01"
						}],
						"cameraPosition": {
							"x": 576,
							"y": 377,
							"z": 494
						},
						"controlsTarget": {
							"x": 134,
							"y": -25,
							"z": -84
						}
					}, {
						"name": "BanChengPing12",
						"cnName": "WIP",
						"url": "MM-PCBB-MSRMB-0-1-800x800x800-Primary",
						"data": [{
							"title": "批卡号",
							"content": "R0003219-0-1"
						}, {
							"title": "客户编码",
							"content": "PQJ888"
						}, {
							"title": "总批数",
							"content": "12 PNJS"
						}, {
							"title": "交货数量",
							"content": "4000"
						}, {
							"title": "工单号码",
							"content": "200612091-01"
						}],
						"cameraPosition": {
							"x": 576,
							"y": 377,
							"z": 494
						},
						"controlsTarget": {
							"x": 134,
							"y": -25,
							"z": -84
						}
					}, {
						"name": "BanChengPing23",
						"cnName": "WIP",
						"url": "MM-PCBB-MSRMB-0-1-800x800x800-Primary",
						"data": [{
							"title": "批卡号",
							"content": "R0003219-0-1"
						}, {
							"title": "客户编码",
							"content": "PQJ888"
						}, {
							"title": "总批数",
							"content": "12 PNJS"
						}, {
							"title": "交货数量",
							"content": "4000"
						}, {
							"title": "工单号码",
							"content": "200612091-01"
						}],
						"cameraPosition": {
							"x": 576,
							"y": 377,
							"z": 494
						},
						"controlsTarget": {
							"x": 134,
							"y": -25,
							"z": -84
						}
					}, {
						"name": "BanChengPing25",
						"cnName": "WIP",
						"url": "MM-PCBB-MSRMB-0-1-800x800x800-Primary",
						"data": [{
							"title": "批卡号",
							"content": "R0003219-0-1"
						}, {
							"title": "客户编码",
							"content": "PQJ888"
						}, {
							"title": "总批数",
							"content": "12 PNJS"
						}, {
							"title": "交货数量",
							"content": "4000"
						}, {
							"title": "工单号码",
							"content": "200612091-01"
						}],
						"cameraPosition": {
							"x": 576,
							"y": 377,
							"z": 494
						},
						"controlsTarget": {
							"x": 134,
							"y": -25,
							"z": -84
						}
					}, {
						"name": "BanChengPing22",
						"cnName": "WIP",
						"url": "MM-PCBB-MSRMB-0-1-800x800x800-Primary",
						"data": [{
							"title": "批卡号",
							"content": "R0003219-0-1"
						}, {
							"title": "客户编码",
							"content": "PQJ888"
						}, {
							"title": "总批数",
							"content": "12 PNJS"
						}, {
							"title": "交货数量",
							"content": "4000"
						}, {
							"title": "工单号码",
							"content": "200612091-01"
						}],
						"cameraPosition": {
							"x": 576,
							"y": 377,
							"z": 494
						},
						"controlsTarget": {
							"x": 134,
							"y": -25,
							"z": -84
						}
					}, {
						"name": "Ren1",
						"cnName": "人员信息",
						"url": "PJ-HB-Man-Lower-1-Z1700-Primary",
						"data": [{
							"title": "上岗核对",
							"content": "张工 B等（通过）"
						}, {
							"title": "物料核对",
							"content": "PG01、PG06（通过）"
						}, {
							"title": "工具核对",
							"content": "PG11、PG12（通过）"
						}, {
							"title": "下岗核对",
							"content": "张工 B等（作业中）"
						}],
						"cameraPosition": {
							"x": 576,
							"y": 377,
							"z": 494
						},
						"controlsTarget": {
							"x": 134,
							"y": -25,
							"z": -84
						}
					}, {
						"name": "Ren2",
						"cnName": "人员信息",
						"url": "PJ-HB-Man-Lower-1-Z1700-Primary",
						"data": [{
							"title": "上岗核对",
							"content": "张工 B等（通过）"
						}, {
							"title": "物料核对",
							"content": "PG01、PG06（通过）"
						}, {
							"title": "工具核对",
							"content": "PG11、PG12（通过）"
						}, {
							"title": "下岗核对",
							"content": "张工 B等（作业中）"
						}],
						"cameraPosition": {
							"x": 576,
							"y": 377,
							"z": 494
						},
						"controlsTarget": {
							"x": 134,
							"y": -25,
							"z": -84
						}
					}, {
						"name": "Ren3",
						"cnName": "人员信息",
						"url": "PJ-HB-Man-Lower-1-Z1700-Primary",
						"data": [{
							"title": "上岗核对",
							"content": "张工 B等（通过）"
						}, {
							"title": "物料核对",
							"content": "PG01、PG06（通过）"
						}, {
							"title": "工具核对",
							"content": "PG11、PG12（通过）"
						}, {
							"title": "下岗核对",
							"content": "张工 B等（作业中）"
						}],
						"cameraPosition": {
							"x": 576,
							"y": 377,
							"z": 494
						},
						"controlsTarget": {
							"x": 134,
							"y": -25,
							"z": -84
						}
					}, {
						"name": "Ren4",
						"cnName": "人员信息",
						"url": "PJ-HB-Man-Lower-1-Z1700-Primary",
						"data": [{
							"title": "上岗核对",
							"content": "张工 B等（通过）"
						}, {
							"title": "物料核对",
							"content": "PG01、PG06（通过）"
						}, {
							"title": "工具核对",
							"content": "PG11、PG12（通过）"
						}, {
							"title": "下岗核对",
							"content": "张工 B等（作业中）"
						}],
						"cameraPosition": {
							"x": 576,
							"y": 377,
							"z": 494
						},
						"controlsTarget": {
							"x": 134,
							"y": -25,
							"z": -84
						}
					}, {
						"name": "Ren5",
						"cnName": "人员信息",
						"url": "PJ-HB-Man-Lower-1-Z1700-Primary",
						"data": [{
							"title": "上岗核对",
							"content": "张工 B等（通过）"
						}, {
							"title": "物料核对",
							"content": "PG01、PG06（通过）"
						}, {
							"title": "工具核对",
							"content": "PG11、PG12（通过）"
						}, {
							"title": "下岗核对",
							"content": "张工 B等（作业中）"
						}],
						"cameraPosition": {
							"x": 576,
							"y": 377,
							"z": 494
						},
						"controlsTarget": {
							"x": 134,
							"y": -25,
							"z": -84
						}
					}, {
						"name": "Ren6",
						"cnName": "人员信息",
						"url": "PJ-HB-Man-Lower-1-Z1700-Primary",
						"data": [{
							"title": "上岗核对",
							"content": "张工 B等（通过）"
						}, {
							"title": "物料核对",
							"content": "PG01、PG06（通过）"
						}, {
							"title": "工具核对",
							"content": "PG11、PG12（通过）"
						}, {
							"title": "下岗核对",
							"content": "张工 B等（作业中）"
						}],
						"cameraPosition": {
							"x": 576,
							"y": 377,
							"z": 494
						},
						"controlsTarget": {
							"x": 134,
							"y": -25,
							"z": -84
						}
					}, {
						"name": "Ren7",
						"cnName": "人员信息",
						"url": "PJ-HB-Man-Lower-1-Z1700-Primary",
						"data": [{
							"title": "上岗核对",
							"content": "张工 B等（通过）"
						}, {
							"title": "物料核对",
							"content": "PG01、PG06（通过）"
						}, {
							"title": "工具核对",
							"content": "PG11、PG12（通过）"
						}, {
							"title": "下岗核对",
							"content": "张工 B等（作业中）"
						}],
						"cameraPosition": {
							"x": 576,
							"y": 377,
							"z": 494
						},
						"controlsTarget": {
							"x": 134,
							"y": -25,
							"z": -84
						}
					}, {
						"name": "Ren8",
						"cnName": "人员信息",
						"url": "PJ-HB-Man-Lower-1-Z1700-Primary",
						"data": [{
							"title": "上岗核对",
							"content": "张工 B等（通过）"
						}, {
							"title": "物料核对",
							"content": "PG01、PG06（通过）"
						}, {
							"title": "工具核对",
							"content": "PG11、PG12（通过）"
						}, {
							"title": "下岗核对",
							"content": "张工 B等（作业中）"
						}],
						"cameraPosition": {
							"x": 576,
							"y": 377,
							"z": 494
						},
						"controlsTarget": {
							"x": 134,
							"y": -25,
							"z": -84
						}
					}, {
						"name": "Ren9",
						"cnName": "人员信息",
						"url": "PJ-HB-Man-Lower-1-Z1700-Primary",
						"data": [{
							"title": "上岗核对",
							"content": "张工 B等（通过）"
						}, {
							"title": "物料核对",
							"content": "PG01、PG06（通过）"
						}, {
							"title": "工具核对",
							"content": "PG11、PG12（通过）"
						}, {
							"title": "下岗核对",
							"content": "张工 B等（作业中）"
						}],
						"cameraPosition": {
							"x": 576,
							"y": 377,
							"z": 494
						},
						"controlsTarget": {
							"x": 134,
							"y": -25,
							"z": -84
						}
					}, {
						"name": "Ren10",
						"cnName": "人员信息",
						"url": "PJ-HB-Man-Lower-1-Z1700-Primary",
						"data": [{
							"title": "上岗核对",
							"content": "张工 B等（通过）"
						}, {
							"title": "物料核对",
							"content": "PG01、PG06（通过）"
						}, {
							"title": "工具核对",
							"content": "PG11、PG12（通过）"
						}, {
							"title": "下岗核对",
							"content": "张工 B等（作业中）"
						}],
						"cameraPosition": {
							"x": 576,
							"y": 377,
							"z": 494
						},
						"controlsTarget": {
							"x": 134,
							"y": -25,
							"z": -84
						}
					}, {
						"name": "Ren11",
						"cnName": "人员信息",
						"url": "PJ-HB-Man-Lower-1-Z1700-Primary",
						"data": [{
							"title": "上岗核对",
							"content": "张工 B等（通过）"
						}, {
							"title": "物料核对",
							"content": "PG01、PG06（通过）"
						}, {
							"title": "工具核对",
							"content": "PG11、PG12（通过）"
						}, {
							"title": "下岗核对",
							"content": "张工 B等（作业中）"
						}],
						"cameraPosition": {
							"x": 576,
							"y": 377,
							"z": 494
						},
						"controlsTarget": {
							"x": 134,
							"y": -25,
							"z": -84
						}
					}, {
						"name": "Ren12",
						"cnName": "人员信息",
						"url": "PJ-HB-Man-Lower-1-Z1700-Primary",
						"data": [{
							"title": "上岗核对",
							"content": "张工 B等（通过）"
						}, {
							"title": "物料核对",
							"content": "PG01、PG06（通过）"
						}, {
							"title": "工具核对",
							"content": "PG11、PG12（通过）"
						}, {
							"title": "下岗核对",
							"content": "张工 B等（作业中）"
						}],
						"cameraPosition": {
							"x": 576,
							"y": 377,
							"z": 494
						},
						"controlsTarget": {
							"x": 134,
							"y": -25,
							"z": -84
						}
					}, {
						"name": "Ren13",
						"cnName": "人员信息",
						"url": "PJ-HB-Man-Lower-1-Z1700-Primary",
						"data": [{
							"title": "上岗核对",
							"content": "张工 B等（通过）"
						}, {
							"title": "物料核对",
							"content": "PG01、PG06（通过）"
						}, {
							"title": "工具核对",
							"content": "PG11、PG12（通过）"
						}, {
							"title": "下岗核对",
							"content": "张工 B等（作业中）"
						}],
						"cameraPosition": {
							"x": 576,
							"y": 377,
							"z": 494
						},
						"controlsTarget": {
							"x": 134,
							"y": -25,
							"z": -84
						}
					}]
					openData.push({
						"name": "agv",
						"cnName": "AGV",
						"url": "WL-IS-9-KR-AGV-677x950x462-Primary",
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

					openData.push({
						"name": "storey",
						"cnName": "AGV",
						"url": "WL-IS-9-KR-AGV-677x950x462-Primary",
						"data": [{
							"title": "工单编号",
							"content": "200612091-01"
						}, {
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
					// console.log(webGlBox);
					for (let i = 0; i < openData.length; i++) {
						// console.log(openData[i]["name"]);
						webGlBox.eventList(openData[i]["name"], "click", function (e) {
							console.log(openData[i]["cnName"]);
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
				});

			}
			webGlBox.animate = function () {
				TWEEN.update();
				webGlBox.lightAnime();
			};
		}
	});

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
				url: 'JSON/PJ-PCB-200722-Scene-1-106506x42744x2350-Primary.js',
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
	webGlBox.eventList("JianKonQi", "click", function (e) {
		layerShowBox("监控", "files/video/video.mp4", "mp4");
	});
	webGlBox.eventList("WenShiDuKanBan", "click", function (e) {
		layerShowBox("产线拉头看板", "files/img/plan1_1.jpg", "img");
	});
	webGlBox.eventList("DaKanBan", "click", function (e) {
		layerShowBox("产线拉头看板", "images/banner1.png", "img");
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

	$(window).resize(function () {

	})
}