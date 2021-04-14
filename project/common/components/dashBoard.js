Vue.component('dashBoard', {
    template: `
        <div class="dash-board" style="height:100%;width:100%">
            <div ref="dashBoard" style="height:100%;width:100%"></div>
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
        this.dashBoard = echarts.init(this.$refs.dashBoard);
        this.dashBoardOption = {
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
                    value: this.propdata.value
                }]
            }]
        };;
        this.dashBoard.setOption(this.dashBoardOption); 
    },
    watch:{
        changeInit: function (newV, oldV) {
            let _this = this;
            if (newV) {
              _this.dashBoard.resize()
            }
          },
    }
})