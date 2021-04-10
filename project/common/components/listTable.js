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
                <li v-for="(val2,item2) in propdata.colData" :key="val2.id?val2.id:item2">
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

