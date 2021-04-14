//头部内容
Vue.component('tableDialog', {
    template: `
        <div id="dialog">
            <div class="table-wrap" @diyScroll="">
                <span class="close-dialog" v-on:click="onClose"><i class="iconfont icon-guanbi1"></i></span>
                <iframe v-if="propsdata.iframe" :style="styleObject" :src="propsdata.url" frameborder="0"></iframe>
                <template v-else>
                    <h1>{{propsdata.title}}</h1>
                    <div class="custom-table">
                        <ul>
                            <li class="th">
                                <span v-for="(item,index) in propsdata.colName" :style="{'width' : item.colWidth + '%'}">{{item.value}}</span>
                            </li>
                        </ul>
                        <div class="table-content">
                            <ul>
                                <li class="tr" v-for="(item,index) in propsdata.data">
                                    <span v-for="(cellItem,cellIndex) in propsdata.colName" :class="{progress : cellItem.name === 'progress'}" :style="{'width' : cellItem.colWidth + '%','backgroundSize':setCellData(item,cellItem) + '% 100%'}" >{{setCellData(item,cellItem)}}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </template>
                
            </div>
        </div>
     `,
    data: function () {
        return {
            styleObject: {
                width: "100%",
                height: "100%",
                border: "0",
                overfollow: "hidden"
            },
        }
    },
    props: {
        propsdata: {
            type: Object,
            default: "",
            title: {
                type: String,
                default: ""
            },
            colName: {
                type: Object,
                default: () => {}
            },
            data: {
                type: Object,
                default: () => {}
            }
        }
    },
    methods: {
        clickConte: function () {},
        onClose: function () {
            this.$emit('dialogonclose')
        },
        setCellData: function (mainData,firstRowData) {
            return mainData[firstRowData["name"]];
        }
    },
    mounted: function () {
        //调用JQ滚动条插件
        $("#dialog").find('.table-wrap .custom-table .table-content').mCustomScrollbar({
            theme: 'minimal',
            scrollInertia: 550,
            mouseWheelPixels: 220,
        });
    },
    watch:{
        propsdata(){
            
        }
    },
    // computed:{
    //     setCelData: function (firstdata,mainData,index) {
    //         return 1;
    //     }
    // }
})