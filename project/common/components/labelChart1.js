Vue.component('labelChart1', {
    template: `
        <div class="labelChart1">
            <div>
                <div v-for="(val,item) in propdata" class="listBox">
                    <p class="name">{{val.name}}</p>
                    <p class="value">{{val.value}}</p>
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
    }
})