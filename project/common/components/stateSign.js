Vue.component('stateSign', {
    template: `
        <span :class="getClass()" v-on:click="onClick()">
            <slot></slot>
        </span>
     `,
    data: function () {
        return {}
    },
    props: {
        state: {
            type: String,
            default: "normal",//  "ficing":处理中 "normal":正常 "warning":警告 "error":错误
        },
        icon: {//是否需要图标
            type: Boolean,
            default: false,
        },
        lable: {//是否为块状
            ype: Boolean,
            default: false,
        }
    },
    methods: {
        getClass: function () {
            let calssName = "stateSign " + this.state;
            if (this.icon) {
                calssName += " icon"
            }
            if (this.lable) {
                calssName += " lable"
            }
            return calssName;
        },
        onClick: function () {
            this.$emit('click')
        }
    }
})