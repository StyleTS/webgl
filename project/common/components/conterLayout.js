// 内容块布局
Vue.component('conterLayout', {
    template: `
        <div class="conterLayout">
           <div class="itemConter" ref="contentWrap" v-for="(val,item) in layout" :key="item" :style="calStyle(val)" v-if="val.name" :data-option="getDataOption(val)">
            <slot :name="val.name"></slot>
           </div>
        </div>
     `,
    props: {
        layout: {
            type: Array,
            default: []
        },
        scroll:{
            type: Boolean,
            default: false,
        }
    },
    methods: {
        calStyle:function(opt){
            let option = opt;
            if(!option.cor || Number(option.cor)<1)option.cor=1;
            if(!option.col || Number(option.col)<1)option.col=1;
            if(!option.top || !Number(option.top))option.top=0;
            if(!option.left || !Number(option.left))option.left=0;
            let style = {};
            style.position = option.position ? option.position : "absolute" ;
            style.height=((Number(option.cor)/24)*100).toFixed(2)+"%";
            style.width=((Number(option.col)/24)*100).toFixed(2)+"%";
            style.top = ((Number(option.top)/24)*100).toFixed(2)+"%";
            style.left = ((Number(option.left)/24)*100).toFixed(2)+"%";
            if(option.transform)style.transform = option.transform; // 新增transorm偏移
            return style;
        },
        getDataOption:function(){
            let zbox = document.getElementsByClassName("layout");
            let height=null;
        },
        scrollInit:function () {
            if (!this.scroll)return false;
            $(this.$refs.contentWrap).mCustomScrollbar({
                theme: 'minimal',
                scrollInertia: 550,
                mouseWheelPixels: 220,
            });
        }
    },
    mounted: function (){
        this.scrollInit();
    }
})