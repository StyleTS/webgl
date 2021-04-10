"use strict";

;

(function (global) {
  "use strict";

  var htmlUtil = function htmlUtil() {// this.el = typeof el === "string" ? document.querySelector(el) : el;
  };

  var commonHtml = '<div id="" :class="[className,showMore]" :style="style"><p class="title clearfix">{{ title }}   >><span class="title-warning right">未处理: <i>{{ countStatus.warning }}</i> 个</span><span class="title-fixing right">处理中: <i>{{ countStatus.fixing }}</i> 个</span></p><div class="fromCenterBox"><div id="message-list"><div class="table-header"><span class="item lot-number">批次批号</span><span class="item time">申请时间</span><span class="item content">问题描述</span><span class="item person">当前处理人</span><span class="item status">状态</span></div><ul><li v-for="item in message" ref="lis"><span class="item lot-number">{{ item.batchNumber }}</span><span class="item time">{{ item.date }}</span><span class="item content">{{ item.statusInfo }}</span><span class="item person">{{ item.controller }}</span><span class="item status"><i :class="item.status">{{ item.status === "warning" ? "未处理" : "处理中" }}</i></span></li></ul></div></div><span id="arrow-right"><i :class="arrowType" @click="changeWidth"></i></span></div>';
  var commonHtml2 = '<div id="" :class="className" :style="style"><p class="title clearfix">{{ title }}</p> <div class="fromBox-content"></div></div>';
  htmlUtil.prototype = {
    eleInit: function eleInit(option) {
      var tagName = option.tagName ? option.tagName : "";
      var innerClassName = option.className ? option.className : "";
      var innerStyle = option.style ? option.style : "";
      var innerData = option.data ? option.data : "";
      var innerTitle = option.title ? option.title : "";
      var innerWrapElement = option.wrapElement ? option.wrapElement : "body";
      var callback = option.callback ? option.callback : "";
      var thisHtml = $.parseHTML(commonHtml);
      $(thisHtml).attr("id", tagName); // console.log(thisHtml);

      $(innerWrapElement).append(thisHtml);
      this.app = new Vue({
        el: '#' + tagName,
        data: {
          message: innerData,
          title: innerTitle,
          tagName: tagName,
          className: innerClassName,
          style: innerStyle,
          showMore: 'show-more',
          arrowType: 'for-left',
          countStatus: {
            "warning": 0,
            "fixing": 0
          }
        },
        methods: {
          //收缩动画
          changeWidth: function changeWidth(event) {
            var el = event.currentTarget;
            this.showMore = this.showMore === 'show-more' ? '' : 'show-more';
            this.arrowType = this.arrowType === 'for-left' ? 'for-right' : 'for-left';
          },
          scrollInit: function scrollInit() {
            $("#message-list,#product-list").mCustomScrollbar({
              theme: 'minimal',
              scrollInertia: 550,
              mouseWheelPixels: 220
            });
          },
          clearNotAllow: function clearNotAllow() {
            var _that = this;

            setTimeout(function () {
              _that.notAllow = '';
            }, 2000);
          },
          dataControl: function dataControl(data) {
            var _this = this;

            console.log(data, this.message);

            for (var i = 0; i < data.length; i++) {
              var element = data[i];

              switch (element.type) {
                case "add":
                  this.message.push(element);
                  this.countStatus["warning"] += 1;
                  break;

                case "modify":
                  for (var j = 0; j < this.message.length; j++) {
                    if (element.batchNumber === this.message[j].batchNumber) {
                      var _ret = function () {
                        _this.message[j].status = element.status;
                        var targetEle = _this.$refs.lis[j];

                        if (element.status === "fixing") {
                          //转变成处理中动画
                          targetEle.setAttribute("class", "to-fix");
                          _this.countStatus["warning"] -= 1;
                          _this.countStatus["fixing"] += 1;
                        } else if (element.status === "done") {
                          //转变成处理完毕动画,删除自身
                          targetEle.setAttribute("class", "to-done");
                          _this.countStatus["fixing"] -= 1;
                          setTimeout(function () {
                            targetEle.setAttribute("class", "to-none");
                            setTimeout(function () {
                              targetEle.remove();
                            }, 1500);
                          }, 2000);
                        }

                        return "break";
                      }();

                      if (_ret === "break") break;
                    }

                    console.log(j);
                  }

                  break;
              }
            }
          },
          initStatus: function initStatus() {
            var data = this.message;
            console.log(data);

            for (var i = 0; i < data.length; i++) {
              var element = data[i]; // console.log(this.$refs);

              if (element.status === "warning") {
                this.countStatus["warning"] += 1;
              } else if (element.status === "fixing") {
                this.countStatus["fixing"] += 1;
              }
            }
          }
        },
        mounted: function mounted() {
          //初始化滚动条插件
          // this.scrollInit();
          // this.clearNotAllow();
          this.initStatus();
        },
        computed: {//     //状态统计
          //     countStatus: function (val,oldVal) {
          //         let status={
          //             "warning":0,
          //             "fixing":0
          //         };
          //         let data = this.message;
          //         console.log(val,oldVal);
          //         for (let i = 0; i < data.length; i++) {
          //             const element = data[i];
          //             if(element.status === "warning"){
          //                 status["warning"] += 1;
          //             }else if(element.status === "fixing"){
          //                 status["fixing"] += 1;
          //             }
          //         }
          //         return status;
          //     },
        }
      });
    },
    htmlInit: function htmlInit(option) {
      var tagName = option.tagName ? option.tagName : "";
      var innerClassName = option.className ? option.className : "";
      var innerStyle = option.style ? option.style : "";
      var innerData = option.data ? option.data : "";
      var innerTitle = option.title ? option.title : "";
      var innerWrapElement = option.wrapElement ? option.wrapElement : "body";
      var innerHtml = option.innerHtml ? option.innerHtml : "";
      var callback = option.callback ? option.callback : "";
      var thisHtml = $.parseHTML(commonHtml2);
      innerHtml = $.parseHTML(innerHtml);
      $(thisHtml).attr("id", tagName).find('.fromBox-content').append(innerHtml);
      $(innerWrapElement).append(thisHtml);
      this.app = new Vue({
        el: '#' + tagName,
        data: {
          message: innerData,
          title: innerTitle,
          tagName: tagName,
          className: innerClassName,
          style: innerStyle,
          contentHtml: innerHtml
        }
      });
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = htmlUtil;
  if (typeof define === 'function') define(function () {
    return htmlUtil;
  });
  global.buildHtml = htmlUtil;
})(void 0);