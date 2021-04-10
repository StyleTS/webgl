;
(function (global) {
    "use strict";
    var htmlUtil = function () {
        // this.el = typeof el === "string" ? document.querySelector(el) : el;
    };
    // <span class="title-warning right">未处理: <i>{{ countStatus.warning }}</i> 个</span>
    // <span class="title-fixing right">处理中: <i>{{ countStatus.fixing }}</i> 个</span>
    let commonHtml = `<div id="" :class="[className,showMore]" :style="style">
    <p class="title clearfix">{{ title }}   >>
    <span class="title-warning right">未处理  </span>
    <span class="title-fixing right">处理中  </span>
    </p>
    <div class="fromCenterBox">
    <div id="message-list">
    <div class="table-header">
    <span class="item lot-number">工单号</span>
    <span class="item time">发生时间</span>
    <span class="item content">不良描述</span>
    <span class="item person">处理人</span>
    <span class="item status">状态</span>
    </div><ul>
    <li v-for="item in message" ref="lis">
    <span class="item lot-number">{{ item.A09_01 }}</span>
    <span class="item time">{{ item.A09_04 }}</span>
    <span class="item content">{{ item.A09_03 }}</span>
    <span class="item person">{{ item.A09_05 }}</span>
    <span class="item status"><i :class="item.A09_06==='warning'?'warning':'fixing'">{{ item.A09_06 === "warning" ? "未处理" : "处理中" }}</i></span>
    </li></ul></div></div>
    <span id="arrow-right"><i :class="arrowType" @click="changeWidth"></i></span></div>`;

    let commonHtml2 = '<div id="" :class="className" :style="style"><p class="title clearfix">{{ title }}</p> <div class="fromBox-content"></div></div>';

    htmlUtil.prototype.__proto__ = {
        eleInit: function (option) {
            let tagName = option.tagName ? option.tagName : "";
            let innerClassName = option.className ? option.className : "";
            let innerStyle = option.style ? option.style : "";
            let innerData = option.data ? option.data : "";
            let innerTitle = option.title ? option.title : "";
            let innerWrapElement = option.wrapElement ? option.wrapElement : "body";
            let callback = option.callback ? option.callback : "";

            let thisHtml = $.parseHTML(commonHtml);
            $(thisHtml).attr("id", tagName);

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
                    countStatus:{
                        "warning":0,
                        "fixing":0
                    }
                },
                methods:{
                    //收缩动画
                    changeWidth: function (event) {
                        let el = event.currentTarget;
                        this.showMore = this.showMore === 'show-more' ? '' : 'show-more';
                        this.arrowType = this.arrowType === 'for-left' ? 'for-right' : 'for-left';
                    },
                    scrollInit: function () {
                        $("#message-list,#product-list").mCustomScrollbar({
                            theme: 'minimal',
                            scrollInertia: 550,
                            mouseWheelPixels: 220,
                        });
                    },
                    clearNotAllow: function () {
                        let _that = this;
                        setTimeout(function () {
                            _that.notAllow = '';
                        },2000);
                    },
                    dataControl:function (data) {
                        this.message = data;
                        // for (let i = 0; i < data.length; i++) {
                        //     const element = data[i];
                        //     switch (element.type) {
                        //         case "add":
                        //             if(this,message.length == 1 && !this.message.ID){
                        //                 this.message=[];
                        //             }
                        //             this.message.push(element);
                        //             this.countStatus["warning"] += 1;
                        //             break;
                        //         case "modify":
                        //             for (let j = 0; j < this.message.length; j++) {
                        //                 if (element.ID === this.message[j].ID) {
                        //                     this.message[j].status = element.status;
                        //                     let targetEle = this.$refs.lis[j];
                        //                     if(element.status === "fixing"){
                        //                         //转变成处理中动画
                        //                         targetEle.setAttribute("class", "to-fix");
                        //                         this.countStatus["warning"] -= 1;
                        //                         this.countStatus["fixing"] += 1;
                        //                     }else if (element.status === "done") {
                        //                         //转变成处理完毕动画,删除自身
                        //                         targetEle.setAttribute("class", "to-done"); 
                        //                         this.countStatus["fixing"] -= 1;
                        //                         setTimeout(function () {
                        //                             targetEle.setAttribute("class", "to-none");
                        //                             setTimeout(function () {
                        //                                 targetEle.remove();
                        //                             },1500)
                        //                         },2000)
                        //                     }
                        //                     break;
                        //                 }
                        //                 console.log(j);
                        //             }
                        //             break;
                        //     }
                        // }
                    },
                    initStatus: function () {
                        let data = this.message;
                        for (let i = 0; i < data.length; i++) {
                            const element = data[i];
                            // console.log(this.$refs);
                            if(element.status === "warning"){
                                this.countStatus["warning"] += 1;
                            }else if(element.status === "fixing"){
                                this.countStatus["fixing"] += 1;
                            }
                        }
                    },
                },
                mounted: function () {
                    //初始化滚动条插件
                    // this.scrollInit();
                    // this.clearNotAllow();
                    this.initStatus();
                },
                computed:{
                //     //状态统计
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
                },
            })
        },

        htmlInit:function (option) {
            let tagName = option.tagName ? option.tagName : "";
            let innerClassName = option.className ? option.className : "";
            let innerData = option.data ? option.data : "";
            let innerTitle = option.title ? option.title : "";
            let innerWrapElement = option.wrapElement ? option.wrapElement : "body";
            let innerHtml = option.innerHtml? option.innerHtml : "";
            let callback = option.callback ? option.callback : "";
            let innerStyle = "";
            ["width","height","top","left","bottom","right","transform"].forEach(function(value,index,array){
                if(option.style[value]){
                    if(!innerStyle) innerStyle = {};
                    innerStyle[value] = option.style[value];
                }
            });

            let thisHtml = $.parseHTML(commonHtml2);
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
                    contentHtml: innerHtml,
                    showMore: 'show-more',
                    arrowType: 'for-left',
                    countStatus:{
                        "warning":0,
                        "fixing":0
                    }
                },
                methods:{
                    //收缩动画
                    changeWidth: function (event) {
                        let el = event.currentTarget;
                        this.showMore = this.showMore === 'show-more' ? '' : 'show-more';
                        this.arrowType = this.arrowType === 'for-left' ? 'for-right' : 'for-left';
                    },
                    scrollInit: function () {
                        $("#message-list,#product-list").mCustomScrollbar({
                            theme: 'minimal',
                            scrollInertia: 550,
                            mouseWheelPixels: 220,
                        });
                    },
                    clearNotAllow: function () {
                        let _that = this;
                        setTimeout(function () {
                            _that.notAllow = '';
                        },2000);
                    },
                    dataControl:function (data) {
                        this.message = data;
                        // for (let i = 0; i < data.length; i++) {
                        //     const element = data[i];
                        //     switch (element.type) {
                        //         case "add":
                        //             if(this,message.length == 1 && !this.message.ID){
                        //                 this.message=[];
                        //             }
                        //             this.message.push(element);
                        //             this.countStatus["warning"] += 1;
                        //             break;
                        //         case "modify":
                        //             for (let j = 0; j < this.message.length; j++) {
                        //                 if (element.ID === this.message[j].ID) {
                        //                     this.message[j].status = element.status;
                        //                     let targetEle = this.$refs.lis[j];
                        //                     if(element.status === "fixing"){
                        //                         //转变成处理中动画
                        //                         targetEle.setAttribute("class", "to-fix");
                        //                         this.countStatus["warning"] -= 1;
                        //                         this.countStatus["fixing"] += 1;
                        //                     }else if (element.status === "done") {
                        //                         //转变成处理完毕动画,删除自身
                        //                         targetEle.setAttribute("class", "to-done"); 
                        //                         this.countStatus["fixing"] -= 1;
                        //                         setTimeout(function () {
                        //                             targetEle.setAttribute("class", "to-none");
                        //                             setTimeout(function () {
                        //                                 targetEle.remove();
                        //                             },1500)
                        //                         },2000)
                        //                     }
                        //                     break;
                        //                 }
                        //                 console.log(j);
                        //             }
                        //             break;
                        //     }
                        // }
                    },
                    initStatus: function () {
                        let data = this.message;
                        console.log(data);
                        for (let i = 0; i < data.length; i++) {
                            const element = data[i];
                            // console.log(this.$refs);
                            if(element.status === "warning"){
                                this.countStatus["warning"] += 1;
                            }else if(element.status === "fixing"){
                                this.countStatus["fixing"] += 1;
                            }
                        }
                    },
                },
                
            })
        }
    };

    if (typeof module !== 'undefined' && module.exports) module.exports = htmlUtil;
    if (typeof define === 'function') define(function () {
        return htmlUtil;
    });
    global.buildHtml = htmlUtil;

})(this);