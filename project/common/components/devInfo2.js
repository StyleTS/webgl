//设备信息块
Vue.component('devInfo2', {
    template: `
        <div class="devInfo2">
            <div class="top">
                <p>{{propdata.name}}</p>
                <div>
                    <span class="text" :class="propdata.state">{{propdata.state=='fixing'?'正常':'异常'}}</span>
                    <span class="circle-icon" :class="propdata.state"></span>
                </div>
            </div>
            <div class="content">
                <p class="hint">缺陷分析</p>
                <div class="devCenter">
                    <div class="devCenterText">
                        <img :src="propdata.image" heigth="100%" width="100%"/>
                        <div class="devTextBox">
                            <div style="height:100%;width:100%">
                                <div v-for="(val,item) in propdata.labels" class="listBox" :style="getLabelsStyle(item)">
                                    <p class="name">{{val.name}}</p>
                                    <div class="textBox">
                                        <p class="text">{{val.value}}</p>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>
                    <div class="rotateProBox">
                        <div style="height:100%;width:100%">
                            <div v-for="(val,item) in propdata.boards" class="rotatePro" :style="getProBoxStyle(item)">
                                <p>{{val.name}}</p>
                                <div>
                                    <echart-loop :change-init="changeInit" :propdata="val"></echart-loop>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    props: {
        propdata: {
            type: Object,
            default: function () {
                return {}
            },
        },
        changeInit: {
            type: Boolean,
            default: false
        }
    },
    mounted: function () {
    },
    methods: {
        getLabelsStyle: function (item) {
            let style = {};
            style.height = "calc(" + 1 / Number(this.propdata.labels.length) * 100 + "% - 0.04rem)";
            if (item == this.propdata.labels.length - 1) {
                style.height = 1 / Number(this.propdata.labels.length) * 100 + "%";
                style.marginBottom = "none";
            }
            return style;
        },
        getProBoxStyle: function (item) {
            let style = {};
            style.width = "calc(" + 1 / Number(this.propdata.boards.length) * 100 + "% - 0.04rem)";
            style.marginRight = "0.04rem";
            if (item == this.propdata.boards.length - 1) {
                style.width = "calc(" + 1 / Number(this.propdata.boards.length) * 100 + "%)";
                style.marginRight = "none"
            }
            return style;
        }
    }
})