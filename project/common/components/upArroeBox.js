//头部内容
Vue.component('upArroeBox', {
    template: `
        <div class="upArroeBox" v-on:click="onClose">
            <div class="lightPanel" v-on:click.stop="clickConte">
                <span class="closeBtn" v-on:click="onClose"></span>
                <div class="title"><span>{{title}}</span></div>
                <div class="contontBox">
                    <slot></slot>
                </div>
            </div>
        </div>
     `,
    data: function () {
        return {}
    },
    props: {
        title: {
            type: String,
            default: ""
        }
    },
    methods: {
        clickConte: function () { },
        onClose: function () {
            this.$emit('close', false)
        }
    }
})