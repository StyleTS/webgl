Vue.component('echartLoop', {
  template: `
      <div class="echartLoop" style="height:100%;width:100%">
            <div ref="echartLoop" style="height:100%;width:100%"></div>
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
  mounted: function () {
    let _this = this;
    this.echartLoop = echarts.init(this.$refs.echartLoop);
    this.echartLoopOption = {
      tooltip: {
        trigger: 'item',
        formatter: "{d}%"
      },
      color: [_this.propdata.color || "#2278ea", "#131935"],
      series: [
        {
          name: '',
          type: 'pie',
          center: ['50%', '50%'], // 饼图的圆心坐标
          radius: ['70%', '80%'],
          avoidLabelOverlap: false,
          hoverAnimation: false,
          label: { //  饼图图形上的文本标签

            normal: { // normal 是图形在默认状态下的样式
              show: true,
              position: 'center',
              color: '#ffffff',
              fontSize: 18,
              fontWeight: 'bold',
              formatter: '{d}%' // {b}:数据名； {c}：数据值； {d}：百分比，可以自定义显示内容，
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{
            value: _this.propdata.value,
            name: "",
            label: {
              normal: {
                show: true
              }
            }
          },
          {
            value: 100,
            name: '',
            label: {
              normal: {
                show: false
              }
            }
          }
          ]
        }
      ]
    };
    this.echartLoop.setOption(this.echartLoopOption);
  },
  computed: {},
  watch: {
    changeInit: function (newV, oldV) {
      let _this = this;
      if (newV) {
        _this.echartLoop.resize()
      }
    },
    propdata: {
      deep: true,
      handler: function (newV, oldV) {
        let _this = this;
        _this.echartLoopOption.color[0] = _this.propdata.color;
        _this.echartLoopOption.series[0].data = [
          {
            value: _this.propdata.value,
            name: "",
            label: {
              normal: {
                show: true
              }
            }
          },
          {
            value: 100 - Number(_this.propdata.value),
            name: '',
            label: {
              normal: {
                show: false
              }
            }
          }
        ];

        if (_this.echartLoop && _this.echartLoop.setOption) {
          _this.echartLoop.setOption(_this.echartLoopOption)
        }
      }
    }
  }
})