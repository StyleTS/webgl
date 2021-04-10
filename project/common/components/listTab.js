//头部内容
Vue.component('listTab', {
    template: `
        <div class="listTab">
            <div class="listTabBox">
                <div ref="messageList">
                    <ul class="listTabUl">
                        <li v-for="(val,item) in tabs" :key="item" :class="item == active?'active':''" v-on:click="itemClick(item)">{{val}}</li>
                    </ul>
                </div>
            </div>
            <div class="listCenter">
                <div v-for="(val,item) in tabs" v-show="item == active">
                    <slot :name="item+1"></slot>
                </div>
            </div>
        </div>
     `,
    data: function () {
        return {
            active: 0,
        }
    },
    props: {
        tabs: {
            type: Array,
            default: []
        }
    },
    mounted: function () {
        $(this.$refs.messageList).mCustomScrollbar({
            theme: 'minimal',
            setLeft: 0,
            scrollInertia: 550,
            mouseWheelPixels: 220,
            setWidth: "100%",
            axis: "x",
        });

    },
    methods: {
        itemClick: function (e) {
            this.active = e;
        },
        clickConte: function () { },
        onClose: function () {
            this.$emit('close', false)
        }
    }
})