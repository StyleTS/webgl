//卡片包容块内容
Vue.component('cardType1', {
    template: `<div :class="long?'cardBox long':'cardBox'">
        <p class="cardTitle" :title="title">{{title}}</p>
        <div class="cardCenter">
            <div class="cardCenterBox">
                <slot></slot>
            </div>
        </div>
    </div>`,
    props: {
        title: {
            type: String,
            default: ""
        },
        long:{
            type: Boolean,
            default: false
        },
    },
    mounted: function () {

    },
    methods: {

    }
})