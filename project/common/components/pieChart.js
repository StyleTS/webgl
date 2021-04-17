Vue.component('pieChart', {
    template: `
        <div class="pie-Chart" style="height:100%;width:100%">
            <div ref="pieChart" style="height:100%;width:100%"></div>
        </div>`,
    data: function () {
        return{
            pieChart : ""
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
            _that.pieChartOption = {
                title: {
                    text: _that.propdata.title ? _that.propdata.title : "" ,
                    subtext: _that.propdata.subTitle ? _that.propdata.subTitle : "" ,
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
                        data: _that.propdata.data ? _that.propdata.data : "" ,
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
            console.log(_that.propdata);
            _that.pieChart.setOption(_that.pieChartOption); 
        }
    },
    mounted:function () {
        let _this = this;
        this.pieChart = echarts.init(this.$refs.pieChart);
        this.SetChartsData();
    },
    watch:{
        changeInit: function (newV, oldV) {
            let _this = this;
            if (newV) {
              _this.pieChart.resize()
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