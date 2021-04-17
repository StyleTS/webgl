Vue.component('weekChart', {
  template: `
        <div class="weekChart" style="height:100%;width:100%" ref="weekChartBox">
            <div ref="weekChart" style="height:100%;width:100%"></div>
        </div>
     `,
  data: function () {
    return {
      style: {
        height: "100%",
        width: "100%",
      }
    }
  },
  props: {
    propdata: {
      type: [Object,Array],
      default: ()=>[]
    },
    changeInit: {
      type: Boolean,
      default: false
    }
  },
  mounted: function () {
    let _this = this;
    let h = _this.$refs.weekChartBox.offsetHeight;
    let w = _this.$refs.weekChartBox.offsetWidth;
    _this.style.height = h + "px";
    _this.style.width = w + "px";

    this.weekChart = echarts.init(this.$refs.weekChart);
    this.weekChartOption = {
      // color: ["#4fe8ff"],
      tooltip: {
        trigger: "axis",
        formatter: "{a} <br/>{b}: {c}%",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      grid: {
        // width: 530,
        // height: 150,
        top: 35,
        left: 50,
      },
      xAxis: [{
        type: "category",
        data: this.propdata.xData ? this.propdata.xData :["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: "#fff",
            fontSize: "16",
          },
        },
        axisLine: {
          // x轴的颜色和宽度
          lineStyle: {
            color: "#808891",
            width: 1,
          },
        },
        axisTick: {
          show: false, //去掉刻度线
        },
      },],
      yAxis: [{
        type: "value",
        // max: 100000,
        min: 0,
        splitNumber: 6, //把Y轴刻度分成6份
        axisLabel: {
          show: true,
          textStyle: {
            color: "#fff",
            fontSize: "12",
          },
        },
        axisLine: {
          // x轴的颜色和宽度
          lineStyle: {
            color: "#808891",
            width: 1,
          },
        },
        splitLine: {
          //网格样式
          show: true,
          lineStyle: {
            color: ["#808891"],
            width: 1,
            type: "solid",
          },
        },
        axisTick: {
          show: false, //去掉刻度线
        },
      },
      {
        type: "value",
      },
      ],
      series: [{
        name: "",
        type: "bar",
        barWidth: 28,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: "#35ceff",
            },
            {
              offset: 1,
              color: "#64fdff",
            },
            ]),
          },
        },

        data: this.propdata.valueData ? this.propdata.valueData : _this.propdata,
      },],
    };
    this.weekChart.setOption(this.weekChartOption);
  },
  watch: {
    changeInit: function (newV, oldV) {
      let _this = this;
      if (newV) {
        let h = _this.$refs.weekChartBox.offsetHeight;
        let w = _this.$refs.weekChartBox.offsetWidth;
        _this.style.height = h + "px";
        _this.style.width = w + "px";
        _this.weekChart.resize()
      }
    },
    propdata: {
      deep: true,
      handler: function (newV, oldV) {
        let _this = this;
        _this.weekChartOption.series.xAxis = this.propdata.xData ? this.propdata.xData :["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
        _this.weekChartOption.series.data = this.propdata.valueData ? this.propdata.valueData : _this.propdata;
        _this.weekChart.setOption(_this.weekChartOption);
      }
    }
  }
})