Vue.component('labelChart3', {
    template: `
        <div class="labelChart3">
            <div>
                <div v-for="(val,item) in propdata" class="listBox" :key="item" :style="getStyle()">
                    <div>
                    <div>
                    <p class="title">{{val.text}}</p>
                        <span class="value">{{val.value}}</span>
                    </div>
                    </div>
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
        }
    },
    methods:{
        getStyle:function(){
            let style={};
            style.height = (100/this.propdata.length).toFixed(2) +"%";
            style.maxHeight = (100/this.propdata.length).toFixed(2) +"%";
            return style;
        }
    }
})