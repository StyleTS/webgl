Vue.component('textLableBox', {
    template: `
        <div class="textLableBox" :class="propdata.state">
            <p class="title">{{propdata.name}}</p>
            <div class="textListBox" ref="messageList">
                <div class="listText" v-for="(val,item) in propdata.list" :class="val.state?val.state+' state':''">
                    <p class="lable">{{val.name || '--'}}</p>
                    <p class="text">
                        <state-sign :state="val.state" v-if="val.state"> {{val.value || '--'}}</state-sign>
                        <span v-else>{{val.value || '--'}}</span>
                    </p>
                </div>
            </div>
        </div>
     `,
    data: function () {
        return {}
    },
    props: {
        propdata: {
            type: Object,
            default: function () {
                return {}
            }
        },
    },
    mounted: function () {
        $(this.$refs.messageList).mCustomScrollbar({
            theme: 'minimal',
            scrollInertia: 550,
            mouseWheelPixels: 220,
        });
    },
    methods: {

    }
})