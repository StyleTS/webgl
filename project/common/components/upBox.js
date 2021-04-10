//头部内容
Vue.component('upBox', {
    template: `
        <div class="upBox" v-on:click="onClose">
            <div class="lightPanel">
                <span class="closeBtn" v-on:click="onClose"></span>
                <div class="ifromBox" v-on:click.stop="clickConte">
                    <div class="title">{{title}}</div>
                    <div class="contontBox">
                        <slot></slot>
                    </div>
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
        clickConte:function(){},
        onClose:function(){
            this.$emit('close',false)
        }
    }
})