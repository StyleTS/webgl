//设备信息块
Vue.component('devInfo', {
    template: `
        <div class="devInfo">
            <div class="devInfoText clearfix">
                <span class="orderNo left">工单号：{{propdata.orderNo}}</span>
                <span class="planNo left">计划数量：{{propdata.planNo}}</span>
                <span class="finishNo left">成品料号：{{propdata.finishNo}}</span>
                <span class="finishName left">成品名称：{{propdata.finishName}}</span>
            </div>
            <div class="devImage"><img :src="propdata.image"/></div>
            <div class="listText">
                <ul v-if="propdata.data">
                    <li v-for="(val,item) in propdata.data" :style="getStyle()">
                        <div class="devText">
                            <p class="name">{{val.name}}</p>
                            <div class="stateBox"><span :class="val.state">设备状态： {{val.state=='fixing'?'运行中':'异常'}}</span></div>
                            <div class="devListText" ref="messageList">
                                <ul>
                                    <li v-for="(val2,item2) in val.list">
                                        {{val2.name}}: {{val2.value}}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    `,
    props: {
        propdata: {
            type: Object,
            default: function () {
                return {
                    image: "",
                    data: [],
                }
            },
        },
    },
    mounted: function () {

        $(this.$refs.messageList).mCustomScrollbar({
            theme: 'minimal',
            scrollInertia: 550,
            mouseWheelPixels: 220,
        });

    },
    methods: {
        getStyle: function () {
            let style = {};
            style.width = 1 / this.propdata.data.length * 100 + "%";
            return style;
        }
    }
})