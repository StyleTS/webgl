//链接包容块内容
Vue.component('listLink', {
    template: `<div class="lisLink">
        <ul class="lisLinkBox">
                <li v-for="(val,item) in propdata" v-on:click="clickLink(val.name)">
                    <a>
                        <img :src="val.image" height="100%" width="100%"/>
                        <p>{{val.name}}</p>
                    </a>
                </li>
            </ul>
    </div>`,
    props: {
        propdata: {
            type: Array,
            default: []
        },
    },
    mounted: function () {

    },
    methods: {
        clickLink: function (name) {
            this.$emit('clicklink', name)
        }
    }
})