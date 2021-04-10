Vue.component('labelChart2', {
    template: `
        <div class="labelChart2">
            <div>
                <div v-for="(val,item) in propdata" class="listBox" :key="item" :style="getStyle()">
                    <p class="title">{{val.title}}</p>
                    <div v-if="isloop" style="height:calc(100% - 0.68rem);width:100%">
                        <echart-loop :change-init="changeInit" :propdata="val"></echart-loop>
                    </div>
                    <span class="value" v-else>{{val.value}}</span>
                </div>
            </div>
        </div>
     `,
    props: {
        propdata: {
            type: Array,
            default: function(){
                return []
            }
        },
        isloop:{
            type: Boolean,
            default:false
        },
        changeInit: {
            type: Boolean,
            default: false
        }
    },
    methods:{
        getStyle:function(){
            let style={};
            style.width = (100/this.propdata.length).toFixed(2) +"%"
            return style;
        }
    }
})