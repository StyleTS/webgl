Vue.component('gaugeChart', {
    template: `
      <div class="gaugeChart" style="height:100%;width:100%" ref="gaugeChartBox">
            <div ref="gaugeChart" style="height:100%;width:100%"></div>
      </div>`,
    props: {
        propdata: {
            type: Number,
            default: function () {
                return 0
            },
        },
        changeInit: {
            type: Boolean,
            default: false
        }
    },
    mounted: function () {
        let _this = this;

        this.gaugeChart = echarts.init(this.$refs.gaugeChart);
        this.gaugeChartOption = {
            tooltip: {
                formatter: "{a} <br/>{c} {b}"
            },
            series: [
                {
                    name: '',
                    type: 'gauge',
                    z: 3,
                    min: 0,
                    max: 10,
                    endAngle: 0,
                    startAngle: 180,
                    splitNumber: 2,
                    radius: '90%',
                    center: ['50%', '55%'],
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: 10,
                            color: [
                                [0.1, "#63d8a6"],
                                [0.2, "#75db9c"],
                                [0.3, "#a2e085"],
                                [0.4, "#e3e062"],
                                [0.5, "#fadf56"],
                                [0.6, "#ffc54c"],
                                [0.7, "#ffa047"],
                                [0.8, "#ff7b44"],
                                [0.9, "#ff4e41"],
                                [1, "#ff4341"],
                            ]
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length: 15,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    splitLine: {           // 分隔线
                        length: 20,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    axisLabel: {
                        formatter: function (v) {
                            switch (v + '') {
                                case '0': return '正常';
                                case '5': return '保养';
                                case '10': return '报废';
                            }
                        }
                    },
                    data: [{ value: _this.propdata }]
                }
            ]
        };
        this.gaugeChart.setOption(this.gaugeChartOption);
    },
    computed: {},
    watch: {
        changeInit: function (newV, oldV) {
            let _this = this;
            if (newV) {
                _this.gaugeChart.resize()
            }
        },
        propdata: {
            deep: true,
            handler: function (newV, oldV) {
                let _this = this;
                _this.gaugeChartOption.series.data[0].value = _this.propdata;
                _this.gaugeChart.setOption(_this.gaugeChartOption);
            }
        }
    }
})