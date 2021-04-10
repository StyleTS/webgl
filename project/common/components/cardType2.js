//卡片包容块内容
Vue.component('cardType2', {
    template: `
    <div :class="long?'cardArrowBox  long':'cardArrowBox'">
        <p class="cardTitle" :title="title">{{title}}</p>
        <div class="cardCenter">
        <div class="cardCenterBox">
                <slot></slot>
            </div>
        </div>
        <span v-if="long" class="arrow" v-on:click="flex">
            <i :class="unfoldBox?'':'flex'"></i>
        </span>
    </div>`,
    data:function(){
        return {
            unfoldBox:true,
        }
    },
    props: {
        unfold:{
            type: Boolean,
            default: true
        },
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
        this.unfoldBox = this.unfold;
    },
    methods: {
        flex:function(){
            this.unfoldBox = !this.unfoldBox;
            this.$emit("unfold",this.unfoldBox)
        }
    }
})