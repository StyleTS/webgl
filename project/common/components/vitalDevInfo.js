//设备信息块
Vue.component('vitalDevInfo', {
    template: `
        <div class="vitalDevInfo">
            <div ref="messageList">
                <div :style="offset">
                    <div v-for="(val,item) in propdata" :style="getItemStyle()">
                        <div style="height:100%;width:100%;">
                            <dev-info2 :propdata="val" :change-init="changeInit"></dev-info2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    data:function(){
        return {
            offset:{
                width:"0px",
                height:"100%",
            },
        }
        
    },
    props: {
        propdata: {
            type: Array,
            default: function(){
                return []
            },
        },
        changeInit: {
            type: Boolean,
            default: false
        }
    },
    mounted: function () {
        let width = this.$refs.messageList.offsetWidth/2 * this.propdata.length + 1;
        if(width<100) width = 100;
        this.offset.width = width+"px";
        this.offset.height = this.$refs.messageList.offsetHeight +"px";

        $(this.$refs.messageList).mCustomScrollbar({
            theme: 'minimal',
            setLeft: 0,
            scrollInertia: 550,
            mouseWheelPixels: 220,
            setWidth: "100%",
            axis: "x",
        });

    },
    methods:{
        getItemStyle: function () {
            let style = {};
            style.height="100%";
            style.float="left";
            let width = 1/this.propdata.length*100;
            style.width = width+"%";
            return style;
        },
    },
    watch: {
        changeInit: function (newV, oldV) {
            this.changeInit = newV;
            let width = this.$refs.messageList.offsetWidth/2 * this.propdata.length + 1;
            if(width<100) width = 100;
            this.offset.width = width+"px";
            this.offset.height = this.$refs.messageList.offsetHeight +"px";
        },
    }
})