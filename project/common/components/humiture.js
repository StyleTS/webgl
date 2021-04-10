Vue.component('humiture', {
    template: `
        <div class="humiture">
            <div class="linetext">
                <div class="blue-line"></div>
                <p>温湿度监控</p>
                <div class="blue-line"></div>
            </div>
            <div class="content">
                <div :class="stpWarning">
                    <img src="../common/images/wendu.png">
                    <div class="align-play">
                        <div>当前温度: <span>{{propdata.t}}</span></div>
                        <div>标准温度: {{propdata.stp}}</div>
                    </div>
                </div>
                <div :class="sthWarning">
                    <img src="../common/images/shidu.png">
                    <div class="align-play">
                        <div>当前湿度: <span class="hot-red">{{propdata.h}}</span></div>
                        <div>标准湿度: {{propdata.sth}}</div>
                    </div>
                </div>
            </div> 
        </div>
    `,
    data: function () {
        return {
            stpWarning: "",
            sthWarning: "",
        }
    },
    props: {
        propdata: {
            type: Object,
            default: function () {
                return {
                    stp: "0℃",
                    t: "0℃",
                    sth: "0℃",
                    h: "0℃",
                }
            },
        }
    },
    mounted: function () {
        this.getStpWarning();
        this.getSthWarning();
    },
    methods: {
        getStpWarning: function () {
            let m = parseFloat(this.propdata.stp);
            let n = parseFloat(this.propdata.t);
            console.log(m, n)
            if (n > m) {
                this.stpWarning = "warning";
            } else {
                this.stpWarning = "";
            }
        },
        getSthWarning: function () {
            let m = parseFloat(this.propdata.sth);
            let n = parseFloat(this.propdata.h);
            if (n > m) {
                this.sthWarning = "warning";
            } else {
                this.sthWarning = "";
            }
        }
    },
    computed: {},
    watch: {
        'propdata': {
            stp: function (nwl, old) {
                this.getStpWarning();
            },
            t: function (nwl, old) {
                this.getStpWarning();
            },
            sth: function (nwl, old) {
                this.getSthWarning();
            },
            h: function (nwl, old) {
                this.getSthWarning();
            }
        }
    }
})