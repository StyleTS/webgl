//头部内容
Vue.component('headTop', {
    template: `
        <div class="head" style="padding-bottom: 0">
            <div class="headCenterBox title-bg1">
                <div>
                    <span class="logo">
                        <img :src="headr.logo1Ur2" v-if="headr.logo1Ur2">
                    </span>
                </div>
                <div>
                    <p class="title blueText" v-if="headr.title">{{headr.title}}</p>
                </div>
                <div>
                    <span class="logo" style="float:right">
                        <img :src="headr.logo1Url" v-if="headr.logo1Url">
                    </span>
                </div>
                <div class="page-change head-left">
                    <button class="page-change-btn" v-for="(item,index) in headr.buttonList" :data="index" :data11="headr.indexPage" v-if="index < 4"  v-on:click="clickChangePage(index)" :class="{active : parseInt(headr.indexPage) === (index + 1)}">{{item}}{{index+1}}</button>
                </div>
                <div class="page-change head-right">
                    <button class="page-change-btn" v-for="(item,index) in headr.buttonList" :data="index" :data11="headr.indexPage" v-if="index >= 4"  v-on:click="clickChangePage(index)" :class="{active : parseInt(headr.indexPage) === (index + 1)}">{{item}}</button>
                </div>
            </div>
        </div>
     `,
    data: function () {

        return {}
    },
    props: {
        headr: {
            type: Object,
            default: {}
        }
    },
    mounted: function () {
        
    },
    updated() {

    },
    methods: {
        clickChangePage:function (index) {
            this.$emit('onchangepage', index)
        }
    }
})