Vue.component('flawChart', {
    template: `
        <div class="flawChart" style="height:100%;width:100%" ref="flawChartBox">
            <div ref="flawChart" style="height:100%;width:100%"></div>
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
            type: Object,
            default: function(){
                return {}
            }
        },
        changeInit: {
            type: Boolean,
            default: false
        }
    },
    mounted: function () {
        let _this = this;
        let h = _this.$refs.flawChartBox.offsetHeight;
        let w = _this.$refs.flawChartBox.offsetWidth;
        _this.style.height = h+"px";
        _this.style.width = w+"px";

        this.flawChart = echarts.init(this.$refs.flawChart);
        this.flawChartOption = {
            color: ["#0099ff", "#80d816"],
            title: {
              text: "",
            },
            tooltip: {
              trigger: "axis",
            },
            legend: {
              orient: "vertical",
              right: 20,
              top: 30,
              data: ["上周缺陷", "本周缺陷"],
              icon: "roundRect", //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
              itemWidth: 26, // 设置宽度
              itemHeight: 10, // 设置高度
              itemGap: 16, // 设置间距
              textStyle: {
                //图例文字的样式
                color: "#fff",
                fontSize: 16,
              },
            },
            radar: {
              splitNumber: 4, // 雷达图圈数设置
              indicator: _this.propdata.listName,
              radius: 90,
              startAngle: 45 / 2,
              center: ["50%", "50%"],
              splitArea: {
                show: false,
                areaStyle: {
                  color: "rgba(0,17,34)", //圈与圈之间的颜色
                },
              },
              name: {
                // (圆外的标签)雷达图每个指示器名称的配置项。
                formatter: "{value}",
                textStyle: {
                  fontSize: 14,
                  color: "#fff",
                  // fontWeight:bold,
                },
              },
            },
      
            series: {
              type: "radar",
              areaStyle: {},
              data: [{
                  value: _this.propdata.nextWeek,
                  name: "上周缺陷",
                },
                {
                  value: _this.propdata.nowWeek,
                  name: "本周缺陷",
                },
              ],
            },
          };
        this.flawChart.setOption(this.flawChartOption);
      },
    watch:{
        changeInit: function (newV, oldV) {
            let _this = this;
            if (newV) {
                let h = _this.$refs.flawChartBox.offsetHeight;
                let w = _this.$refs.flawChartBox.offsetWidth;
                _this.style.height = h+"px";
                _this.style.width = w+"px";
                _this.flawChart.resize()
            }
        },
        "propdata":{
            nextWeek:function(newV, oldV){
                let _this = this;
                _this.flawChartOption.series.data[0].value = _this.propdata.nextWeek;
                _this.flawChart.setOption(_this.flawChartOption);
            },
            nowWeek:function(newV, oldV){
                let _this = this;
                _this.flawChartOption.series.data[1].value = _this.propdata.nowWeek;
                _this.flawChart.setOption(_this.flawChartOption);
            },
            listName:function(newV, oldV){
                let _this = this;
                _this.flawChartOption.radar.indicator =_this.propdata.listName;
                _this.flawChart.setOption(_this.flawChartOption);
            },
        },
    }
})