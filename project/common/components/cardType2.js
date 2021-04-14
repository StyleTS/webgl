//卡片包容块内容
Vue.component('cardType2', {
    template: `
    <div :class="showClass" >
        <p class="cardTitle" :title="title">{{title}}</p>
        <div class="cardCenter">
        <div class="cardCenterBox">
                <slot></slot>
            </div>
        </div>
        <span v-if="arrowType" class="arrow" v-on:click="flex">
            <i :class="unfoldBox?'':'flex'"></i>
        </span>
    </div>`,
    data:function(){
        
        return {
            unfoldBox:true,
            arrowType: this.showArrow(),
            showClass: this.boxClass(),
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
        arrow:{
            type: Boolean,
            default: true
        },
    },
    mounted: function () {
        this.unfoldBox = this.unfold;
    },
    methods: {
        flex:function(){
            this.unfoldBox = !this.unfoldBox;
            this.$emit("unfold",this.unfoldBox)
        },
        boxClass : function () {
            let className = ""
            if (this.long && !this.arrow) {
                className = "cardArrowBox long no-arrow"
            }else if (this.long && this.arrow) {
                className = "cardArrowBox long"
            }else{
                className = "cardArrowBox"
            }
            return className;
        },
        showArrow : function () {
            return (this.long && this.arrow);
        }
    }
})