//头部内容
Vue.component('tableDialog', {
    template: `
        <div id="dialog">
            <div class="table-wrap" @diyScroll="">
                <span class="close-dialog" v-on:click="onClose"><i class="iconfont icon-guanbi1"></i></span>
                <h1>{{propsdata.title}}</h1>
                <div class="custom-table">
                        <ul>
                            <li class="th"><span v-for="(item,index) in propsdata.colName">{{item}}</span></li>
                        </ul>
                        <div class="table-content">
                            <ul>
                                <li class="tr" v-for="(item,index) in propsdata.data"><span v-for="(value,key,index) in item" :class="{progress : key === 'progress'}" :style="{'backgroundSize':value + '% 100%'}">{{key === 'progress' ?  value + '%' : value}}</span></li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>
     `,
    data: function () {
        return {}
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
                default: () => []
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
})