Vue.component('yearChart', {
    template: `
        <div class="yearChart" style="height:100%;width:100%" ref="yearChartBox">
            <div ref="yearChart" style="height:100%;width:100%"></div>
        </div>
     `,
    data:function(){
        return {
            style:{
                height:"100%",
                width:"100%",
            }
        }
    },
    props: {
        propdata: {
            type: Array,
            default: function(){
                return []
            }
        },
        changeInit: {
            type: Boolean,
            default: false
        }
    },
    mounted: function () {
        let _this = this;
        let h = _this.$refs.yearChartBox.offsetHeight;
        let w = _this.$refs.yearChartBox.offsetWidth;
        _this.style.height = h+"px";
        _this.style.width = w+"px";

        this.yearChart = echarts.init(this.$refs.yearChart);
        this.yearChartOption = {
            xAxis: {
              type: "category",
              gird: {
                // width: 530,
                // height: 335,
                top: 55,
                left: 50,
              },
              data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
              ],
              axisLine: {
                // x轴的颜色和宽度
                lineStyle: {
                  color: "#808891",
                  width: 1,
                },
              },
              axisLabel: {
                // x轴的字体样式
                show: true,
                textStyle: {
                  color: "#fff",
                  fontSize: "10",
                },
              },
              axisTick: {
                show: false, //去掉刻度线
              },
              splitLine: {
                //网格样式
                show: false,
                lineStyle: {
                  color: ["#808891"],
                  width: 1,
                  type: "solid",
                },
              },
            },
            yAxis: [{
                type: "value",
                min: 0,
                splitNumber: 9, //把Y轴刻度分成9份
                axisLine: {
                  lineStyle: {
                    color: "#808891",
                    width: 1,
                  },
                },
                axisLabel: {
                  // y轴的字体样式
                  show: true,
                  textStyle: {
                    color: "#fff",
                    fontSize: "10",
                  },
                },
                axisTick: {
                  show: false,
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: ["#808891"],
                    width: 1,
                    type: "solid",
                  },
                },
              },
              {
                type: "value",
              },
            ],
        
            series: [{
              data: _this.propdata,
              type: "line",
              areaStyle: {
                normal: {
                  color: "#66707a", //改变区域颜色
                },
              },
              itemStyle: {
                normal: {
                  color: "#fff", //改变折线点的颜色
                  lineStyle: {
                    color: "#ff66ff", //改变折线颜色
                  },
                },
              },
            }, ],
          };
        this.yearChart.setOption(this.yearChartOption);
      },
    watch:{
        changeInit: function (newV, oldV) {
            let _this = this;
            if (newV) {
                let h = _this.$refs.yearChartBox.offsetHeight;
                let w = _this.$refs.yearChartBox.offsetWidth;
                _this.style.height = h+"px";
                _this.style.width = w+"px";
                _this.yearChart.resize()
            }
        },
        propdata:function(newV, oldV){
            let _this = this;
            _this.yearChartOption .series.data = _this.propdata;
            _this.yearChart.setOption(_this.yearChartOption);
        }
    }
})