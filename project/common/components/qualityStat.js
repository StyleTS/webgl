Vue.component('qualityStat', {
  template: `
    <div ref="echartStatBox" class="qualityStat">
        <p class="lableText">本月提交校验数量:{{sum}}</p>
        <div class="qualityStatCenter">
          <div ref="echartStat" class="qualityStatEchart"></div>
        </div>
    </div>`,
  data: function () {
    return {
      optionOne: {}

    }
  },
  props: {
    propdata: {
      type: Object,
      default: function () {
        return {
          succeed: {
            type: Number,
            default: 0,
          },
          pass: {
            type: Number,
            default: 0,
          },
          defeated: {
            type: Number,
            default: 0,
          },
        }
      },
    },
    changeInit: {
      type: Boolean,
      default: false
    }
  },
  mounted: function () {
    let _this = this;
    this.chartOne = echarts.init(this.$refs.echartStat);
    this.optionOne = {
      color: ["#8fc9f4", "#007edf", "#3333ff"],
      //图形中间文字
      graphic: {
        type: "text",
        left: "center",
        top: "center",
        style: {
          text: "进厂质量检验",
          textAlign: "center",
          fill: "#fff",
          fontSize: 12,
        },
      },
      tooltip: {
        trigger: "item",
        formatter: "{b}: {c} ({d}%)",
      },
      series: [{
        //图饼主要显示区
        type: "pie",
        radius: [63, 75],
        avoidLabelOverlap: false,
        label: {
          show: true,
          normal: {
            formatter: "{b}: \n {d}%",
            textStyle: {
              fontWeight: "normal",
              fontSize: 15,
              color: "#ffffff",
            },
          },
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "20",
            fontWeight: "bold",
          },
        },
        data: [{
          value: _this.propdata.succeed,
          name: "合格数量"
        },
        {
          value: _this.propdata.pass,
          name: "让步数量"
        },
        {
          value: _this.propdata.defeated,
          name: "不合格数量"
        },
        ],
      },
      {
        //图饼的外边框
        name: "外边框",
        type: "pie",
        clockWise: false, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        center: ["50%", "50%"],
        radius: [75, 80],
        label: {
          normal: {
            show: false,
          },
        },
        data: [{
          value: 9,
          name: "",
          itemStyle: {
            normal: {
              borderWidth: 2,
              borderColor: "#ffffff",
              color: ["#ffffff"],
            },
          },
        },],
      },
      ],
    };
    this.chartOne.setOption(this.optionOne);
  },
  computed: {
    sum: function () {
      return Number(this.propdata.succeed) + Number(this.propdata.pass) + Number(this.propdata.defeated)
    }
  },
  watch: {
    changeInit: function (newV, oldV) {
      if (newV) {
        this.chartOne.resize()
      }
    },
    propdata: {
      deep: true, // 深度监听
      handler(val) {
        this.optionOne.series[0].data[0].value = this.propdata.succeed;
        this.optionOne.series[0].data[1].value = this.propdata.pass;
        this.optionOne.series[0].data[2].value = this.propdata.defeated;
        this.chartOne.setOption(this.optionOne);
      }
    }
  }
})