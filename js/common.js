;(function(global) {
    "use strict";
    var CommonControl = function(webGlBox) {
		//接受传入的webGlBox对象,便于调用web-3d.js里面的方法
		this.webGlBox = webGlBox;
    };
	
	var socket;
    CommonControl.prototype = {
		
        init: function() {
			
        },
		
		getContextPath:function(){
			var pathName = document.location.pathname;
			var index = pathName.substr(1).indexOf("/");
			var result = pathName.substr(0,index+1);
			return result;
		},
		
		getSocketUrl: function(){
			return "ws://"+ window.location.host + this.getContextPath() +"/webSocket";
		},
		
		openSocket: function(socketUrl,collback){
			let _that = this;
			// let lightObj = {};
			if(typeof(WebSocket) == "undefined") {
			    console.log("您的浏览器不支持WebSocket");
			}else{
			    console.log("您的浏览器支持WebSocket");
			    //实现化WebSocket对象，指定要连接的服务器地址与端口  建立连接
			    var socketUrl = socketUrl;
			    // var socketUrl="ws://"+ window.location.host + getContextPath() +"/webSocket";
			    console.log(socketUrl);
			    if(socket!=null){
			        socket.close();
			        socket=null;
			    }
				console.log(this.webGlBox);
			    socket = new WebSocket(socketUrl);
			    //打开事件
			    socket.onopen = function() {
			        console.log("websocket已打开");
			    };
			    //获得消息事件
			    socket.onmessage = function(msg) {
					//var serverMsg = "收到服务端信息：" + msg.data;
			        var data = $.parseJSON(msg.data);
					if(collback) collback(data);
					_that.webGlBox.statusChange(data);
			    };
			    //关闭事件
			    socket.onclose = function() {
			        console.log("websocket已关闭");
			    };
			    //发生了错误事件
			    socket.onerror = function() {
			        console.log("websocket发生了错误");
			    }
			}
		}
    };

    if (typeof module !== 'undefined' && module.exports) module.exports = CommonControl;
    if (typeof define === 'function') define(function() { return CommonControl; });
    global.CommonControl = CommonControl;

})(this);