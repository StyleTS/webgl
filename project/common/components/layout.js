// 页面布局
Vue.component('layout', {
    template: `
        <div class="layout">
            <div class="webGlBox">
                <slot name='webGl'></slot>
            </div>
            <div class="headBox">
                <slot name='head'></slot>
            </div>
            <div class="conterBox">
                <slot name='conter'></slot>
            </div>
        </div>
     `,
    data: function () {
        return {}
    },
    props: {
        name: {
            type: String,
            default: "baidu"
        },
    },
    mounted: function () {

    },
    methods: {

    }
})