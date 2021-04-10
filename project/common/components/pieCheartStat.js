Vue.component('pieCheartStat', {
    template: `
        <div class="pieCheartStat" style="height:100%;width:100%">
            <p class="title">{{propdata.title}}</p>
            <div class="pieBox" ref="pieChartBox"> 
                <div ref="pieChart" style="height:100%;width:100%"></div>
            </div>
            <div class="statTable">
                <div class="statTableListBox" ref="messageList">
                    <ul>
                    <li v-for="(val,item) in propdata.data" :key="item">
                        <span>{{val.name}}</span>
                        <span>{{val.value}}</span>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
     `,
    data: function () {
        return {

        }
    },
    props: {
        propdata: {
            type: Object,
            default: function () {
                return {}
            }
        },
        changeInit: {
            type: Boolean,
            default: false
        }
    },
    mounted: function () {

        $(this.$refs.messageList).mCustomScrollbar({
            theme: 'minimal',
            scrollInertia: 550,
            mouseWheelPixels: 220,
        });


        let _this = this;
        this.echartPie = echarts.init(this.$refs.pieChart);

        let data = JSON.parse(JSON.stringify(_this.propdata.data));
        data.sort(function (a, b) {
            let n = Number(a.value);
            let m = Number(b.value);
            return m - n
        });
        data[0].itemStyle = { color: "#0bb3ff" };
        data[1].itemStyle = { color: "#2787ff" };
        data[2].itemStyle = { color: "#da853f" };
        this.echartPieOption = {
            series: [
                {
                    type: 'pie',
                    selectedMode: 'single',

                    label: {
                        position: 'inner',
                        formatter: '{b}\n{d}% ',
                    },
                    labelLine: {
                        show: false
                    },
                    data: data,
                }
            ]
        };
        this.echartPie.setOption(this.echartPieOption);

    },
    watch: {
        changeInit: function (newV, oldV) {
            let _this = this;
            if (newV) {
                let h = _this.$refs.pieChartBox.offsetHeight;
                let w = _this.$refs.pieChartBox.offsetWidth;
                _this.style.height = h + "px";
                _this.style.width = w + "px";
                _this.echartPie.resize()
            }
        },
        propdata: function (newV, oldV) {
            let _this = this;
            let data = JSON.parse(JSON.stringify(_this.propdata.data));
            data.sort(function (a, b) {
                let n = Number(a.value);
                let m = Number(b.value);
                return m - n
            });
            data[0].itemStyle = { color: "#0bb3ff" };
            data[1].itemStyle = { color: "#2787ff" };
            data[2].itemStyle = { color: "#da853f" };

            _this.echartPieOption.series.data = data;
            _this.echartPie.setOption(_this.echartPieOption);
        }
    }
})