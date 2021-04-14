Vue.component('listTable', {
    template: `
      <div class="listTableBox">
        <div class="listTableHaed">
            <div v-for="(val,item) in propdata.colName" :key="item" :style="getStyle(item)">
                <div>{{propdata.colName[item]}}</div>
            </div>
        </div>
        <div class="listTableCenter">
        <div ref="messageList">
            <ul>
                <li v-for="(val2,item2) in propdata.colData" @click="rowOnClick(item2)" :key="val2.id?val2.id:item2">
                    <div v-for="(val3,item3) in propdata.colModel" :key="item3" :style="getStyle(item3)">
                        <div :style="getTextShowStyle(item3)" v-if="val3.formatterClass">
                            <span :class="val3.formatterClass(val2[val3.name])">
                                {{val3.formatterText?val3.formatterText(val2[val3.name]):val2[val3.name]}}
                            </span>
                        </div>
                        <div :style="getTextShowStyle(item3)" v-else>
                            {{val3.formatterText?val3.formatterText(val2[val3.name]):val2[val3.name]}}
                        </div>
                    </div>
                </li>
            </ul>
            </div>
        </div>

      </div>
      `,
    props: {
        propdata: {
            type: Object,
            default: function () {
                return {
                    // colName: [],
                    // colModel: [],
                    // colData: function () {
                    //     return [
                    //         {
                    //             class: function () {
                    //                 return ""
                    //             }
                    //         }
                    //     ]
                    // },
                }
            },
        },
        flex: {
            type: Boolean,
            default: false,
        },
        // 行点击事件
        rowclick:{
            type: Boolean,
            default: false,
        }
    },
    mounted: function () {
        $(this.$refs.messageList).mCustomScrollbar({
            theme: 'minimal',
            scrollInertia: 550,
            mouseWheelPixels: 220,
        });
    },
    methods: {
        rowOnClick: function (index) {
            if (!this.rowclick) return false;
            console.log("触发了点击事件" + index);

            let data = {};

            // 构造数据,下面通过url获取数据后,这段可删除
            data = {
                "title": "数据名字",
                "colName": [
                    {
                        "name":"machineName",
                        "value": "机器",
                        "colWidth": "15",
                    },{
                        "name":"machineType",
                        "value": "机器类型",
                        "colWidth": "15",
                    },{
                        "name":"machineNo",
                        "value": "机器编码",
                        "colWidth": "15",
                    },{
                        "name":"machineStatus",
                        "value": "机器状态",
                        "colWidth": "15",
                    },{
                        "name":"logTime",
                        "value": "登记时间",
                        "colWidth": "15",
                    },{
                        "name":"progress",
                        "value": "进度",
                        "colWidth": "25",
                    },
                ],
                "data": [{
                    "machineName": "打印机1",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "55"
                }, {
                    "machineName": "打印机2",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "100"
                }, {
                    "machineName": "打印机3",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "25"
                }, {
                    "machineName": "打印机4",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "50"
                }, {
                    "machineName": "打印机5",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "95"
                }, {
                    "machineName": "打印机6",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "60"
                }, {
                    "machineName": "打印机7",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "30"
                }, {
                    "machineName": "打印机8",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "20"
                }, {
                    "machineName": "打印机9",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "36"
                }, {
                    "machineName": "打印机9",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "50"
                }, {
                    "machineName": "打印机9",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "19"
                }, {
                    "machineName": "打印机9",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "15"
                }, {
                    "machineName": "打印机9",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "4"
                }, {
                    "machineName": "打印机9",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "88"
                }, {
                    "machineName": "打印机9",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "10"
                }, {
                    "machineName": "打印机9",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "50"
                }, {
                    "machineName": "打印机9",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "50"
                }, {
                    "machineName": "打印机9",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "12"
                }, {
                    "machineName": "打印机9",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "50"
                }, {
                    "machineName": "打印机9",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "50"
                }, {
                    "machineName": "打印机9",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "50"
                }, {
                    "machineName": "打印机9",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "50"
                }, {
                    "machineName": "打印机9",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "50"
                }, ]
            }

            // 弹框打开,下面执行网络请求
            // axios.post(url, {
            //         // 这里是所传输的data..
            //         //  传值给父组件,执行打开弹框,data为网络请求后的数据
            this.$emit("dialogonopen", data);
            //     })
            //     .then(function (response) {
            //         console.log('成功后执行');
            //         console.log('response');
            //     })
            //     .catch(function (error) {
            //         console.log("打印错误" + error);
            //     });
        },
        getTextShowStyle: function (item) {
            let style = {};
            let colModel = this.propdata.colModel;
            if (this.flex) {
                if (!colModel[item].flexd) {
                    style.overflow = "hidden";
                    style.textOverflow = "ellipsis";
                    style.whiteSpace = "nowrap";
                }
            }
            return style;
        },
        getStyle: function (item) {
            let style = {};
            style.width = this.getColWidth(item);
            return style;
        },
        getColWidth: function (item) {
            let colModel = this.propdata.colModel;
            let itemModel = colModel[item];
            if (itemModel.hide) return 0;
            if (!itemModel.width && !itemModel.widthPer) return 0;

            let width = null;
            //判断是否伸缩
            if (!this.flex) {
                if (itemModel.width) {
                    width = itemModel.width + "px";
                }
                if (itemModel.widthPer) {
                    //计算出所有没widthPer的列总和宽度
                    let num = 0;
                    for (let i = 0; i < colModel.length; i++) {
                        if (!colModel[i].widthPer && colModel[i].width && !colModel[i].hide) {
                            num = num + Number(colModel[i].width)
                        }
                    }
                    width = "calc(" + itemModel.widthPer + "% - " + (num + 1) * itemModel.widthPer / 100 + "px)";
                }
            } else {
                if (!itemModel.flexd) {
                    width = "0.1px";
                } else {
                    if (itemModel.width) {
                        width = itemModel.width + "px";
                    }
                    if (itemModel.widthPer) {
                        //计算出所有没widthPer的列总和宽度
                        let num = 0;
                        //计算出所有widthPer的比量和
                        let fm = 0;

                        for (let i = 0; i < colModel.length; i++) {
                            if (!colModel[i].widthPer && colModel[i].width && !colModel[i].hide && colModel[i].flexd) {
                                num = num + Number(colModel[i].width)
                            }
                            if (colModel[i].widthPer && !colModel[i].hide && colModel[i].flexd) {
                                fm = fm + Number(colModel[i].widthPer)
                            }
                        }
                        width = "calc(" + (itemModel.widthPer / fm) * 100 + "% - " + (num + 1) * itemModel.widthPer / fm + "px)";
                    }
                }
            }


            return width;
        }
    },
    computed: {
    },
    watch: {

    }

})

