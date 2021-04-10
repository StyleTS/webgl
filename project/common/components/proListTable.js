Vue.component('proListTable', {
    template: `
      <div class="proListTable">
        <div ref="messageList">
            <ul class="proListTables">
                <li v-for="(val,item) in propdata" :key="item">
                    <p class="name">{{val.name}}</p>
                    <span class="state" :class="val.state">{{stateText(val.state)}}</span>
                    <div class="proBox">
                        <div class="pro" :style="'width:'+val.value+'%'">
                            <span>{{val.value}}%</span>
                        </div>
                    </div>
                </li>
            </ul>
            </div>
        </div>
      </div>
      `,
    props: {
        propdata: {
            type: Array,
            default: function () {
                return []
            },
        }
    },
    mounted: function () {
        $(this.$refs.messageList).mCustomScrollbar({
            theme: 'minimal',
            scrollInertia: 550,
            mouseWheelPixels: 220,
        });
    },
    methods: {
        stateText: function (state) {
            if (state == "warning") return "转产";
            if (state == "error") return "未转产";
            return "完成";
        }
    },
    computed: {
    },
    watch: {

    }

})

