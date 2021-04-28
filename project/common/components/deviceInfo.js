Vue.component('deviceInfo', {
    template: `
        <ul>
            <li class="img"><img :src="propdata.img" alt=""></li>
            <li class="chart"><week-chart :change-init="nowindex" :propdata="propdata.chartData"></week-chart></li>
            
            <li class="info-list">
                <p><span>设备状态：</span><span>{{propdata.deviceInfo.deviceStatus}}</span></p>
                <p><span>在产工单号：</span><span>{{propdata.deviceInfo.onProduce}}</span></p>
                <p><span>过板数：</span><span>{{propdata.deviceInfo.crossTop}}</span></p>
                <p><span>开工时间：</span><span>{{propdata.deviceInfo.startTime}}</span></p>
                <p><span>稼动率：</span><span>{{propdata.deviceInfo.utilization}}</span></p>
            </li>
        </ul>
    `,
    data: function () {
        return {}
    },
    props: {
        propdata: {
            type: Object,
            default: () => {}
        },
        nowindex:{
            type: Boolean,
            default: false,
        }
    },
    watch:{
        // nowindex: function (newV, oldV) {
        //     let _this = this;
        //     if (newV) {
        //       _this.pieChart.resize()
        //     }
        // },
    }
})