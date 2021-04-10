//卡片包容块内容
Vue.component('cardType3', {
    template: `<div class="cardType3">
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
    },
    mounted: function () {

    },
    methods: {

    }
})