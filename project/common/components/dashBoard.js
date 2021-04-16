Vue.component('dashBoard', {
    template: `
        <div class="dash-board" style="height:100%;width:100%">
            <div ref="dashBoard" style="height:100%;width:100%"></div>
        </div>`,
    data: function () {
        return{
           dashBoard : ""
        }
    },
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
    methods:{
        SetChartsData(){
            let _that = this;
            _that.dashBoardOption = {
                series: [{
                    type: 'gauge',
                    progress: {
                        show: true,
                        width: 18
                    },
                    axisLine: {
                        lineStyle: {
                            width: 18
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        length: 15,
                        lineStyle: {
                            width: 2,
                            color: '#999'
                        }
                    },
                    axisLabel: {
                        distance: 25,
                        color: '#999',
                        fontSize: 20
                    },
                    anchor: {
                        show: true,
                        showAbove: true,
                        size: 25,
                        itemStyle: {
                            borderWidth: 10
                        }
                    },
                    title: {
                        show: false
                    },
                    detail: {
                        valueAnimation: true,
                        fontSize: 80,
                        offsetCenter: [0, '70%']
                    },
                    data: [{
                        value: _that.propdata.value
                    }]
                }]
            };
            _that.dashBoard.setOption(_that.dashBoardOption);
        },
    },
    mounted: function () {
        let _this = this;
        this.dashBoard = echarts.init(this.$refs.dashBoard);
        this.SetChartsData();
    },
    watch: {
        changeInit: function (newV, oldV) {
            let _this = this;
            if (newV) {
                _this.dashBoard.resize()
            }
        },
        propdata: {
            handler(newVal, oldVal) {
                // console.log("更新数据")
                this.SetChartsData();
            },
            deep: true
        }
    }
})