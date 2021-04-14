Vue.component('pieChart', {
    template: `
        <div class="pie-Chart" style="height:100%;width:100%">
            <div ref="pieChart" style="height:100%;width:100%"></div>
        </div>`,
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
    mounted:function () {
        let _this = this;
        this.pieChart = echarts.init(this.$refs.pieChart);
        this.pieChartOption = {
            title: {
                text: this.propdata.title ? this.propdata.title : "" ,
                subtext: this.propdata.subTitle ? this.propdata.subTitle : "" ,
                left: 'center',
                show: false,
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                textStyle:{
                    color:"#ffffff"
                }
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '50%',
                    data: this.propdata.data ? this.propdata.data : "" ,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        this.pieChart.setOption(this.pieChartOption); 
    },
    watch:{
        changeInit: function (newV, oldV) {
            let _this = this;
            if (newV) {
              _this.pieChart.resize()
            }
          },
    }
})