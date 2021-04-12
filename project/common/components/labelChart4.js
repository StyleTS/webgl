Vue.component('labelChart4', {
    template: `
        <div class="labelChart4">
            <div v-if=" propdata.type === 'quality' " class="listBox_quality">
                <div v-for="(val,item,index) in propdata.data" :key="item" :style="getStyle(item)" class="list-item">
                        <span>{{val.value}}</span>
                        <span>{{val.title}}</span>             
                </div>
            </div>
            <div class="progress_quality">
                <span>生产进度：</span>
                <p :style="{'backgroundSize':propdata.progress + '% 100%'}">{{propdata.progress + '%'}}</p>
            </div>
        </div>
        
     `,
    props: {
        propdata: {
            type: Object,
            default: function(){
                return {}
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
        getStyle:function(index){
            let style={};
            let bgColor = "";
            if (index <= 5) {
                bgColor = "#008dcb"
            }
            if (index <= 3) {
                bgColor = "#2359a3"
            }
            if (index <= 1) {
                bgColor = "#d0712d"
            }
            style.backgroundColor = bgColor;
            return style;
        }
    }
})