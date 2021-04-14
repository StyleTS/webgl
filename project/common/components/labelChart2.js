Vue.component('labelChart2', {
    template: `
        <div class="labelChart2">
            <div>
                <div v-for="(val,item) in propdata" class="listBox" :key="item" :style="getStyle()" @click="itemOnClick(item)">
                    <p class="title">{{val.title}}</p>
                    <div v-if="isloop" style="height:calc(100% - 0.68rem);width:100%">
                        <echart-loop :change-init="changeInit" :propdata="val"></echart-loop>
                    </div>
                    <span class="value" v-else>{{val.value}}</span>
                </div>
            </div>
        </div>
     `,
    props: {
        propdata: {
            type: Array,
            default: function(){
                return []
            }
        },
        isloop:{
            type: Boolean,
            default:false
        },
        changeInit: {
            type: Boolean,
            default: false
        },
        itemclick:{
            type: Boolean,
            default:false
        }
    },
    methods:{
        getStyle:function(){
            let style={};
            style.width = (100/this.propdata.length).toFixed(2) +"%"
            return style;
        },
        itemOnClick:function (index) {
            if (!this.itemclick) return false;
            console.log("触发了点击事件" + index);

            let data = {};

            // 构造数据,下面通过url获取数据后,这段可删除
            data = {
                "title": "数据名字",
                "colName": [
                    {
                        "name":"machineName",
                        "value": "机器",
                        "colWidth": "15",
                    },{
                        "name":"machineType",
                        "value": "机器类型",
                        "colWidth": "15",
                    },{
                        "name":"machineNo",
                        "value": "机器编码",
                        "colWidth": "15",
                    },{
                        "name":"machineStatus",
                        "value": "机器状态",
                        "colWidth": "15",
                    },{
                        "name":"logTime",
                        "value": "登记时间",
                        "colWidth": "15",
                    },{
                        "name":"progress",
                        "value": "进度",
                        "colWidth": "25",
                    },
                ],
                "data": [{
                    "machineName": "打印机1",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "55"
                }, {
                    "machineName": "打印机2",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "100"
                }, {
                    "machineName": "打印机3",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "25"
                }, {
                    "machineName": "打印机4",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "50"
                }, {
                    "machineName": "打印机5",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "95"
                }, {
                    "machineName": "打印机6",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "60"
                }, {
                    "machineName": "打印机7",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "30"
                }, {
                    "machineName": "打印机8",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "20"
                }, {
                    "machineName": "打印机9",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "36"
                }, {
                    "machineName": "打印机9",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "50"
                }, {
                    "machineName": "打印机9",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "19"
                }, {
                    "machineName": "打印机9",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "15"
                }, {
                    "machineName": "打印机9",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "4"
                }, {
                    "machineName": "打印机9",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "88"
                }, {
                    "machineName": "打印机9",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "10"
                }, {
                    "machineName": "打印机9",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "50"
                }, {
                    "machineName": "打印机9",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "50"
                }, {
                    "machineName": "打印机9",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "12"
                }, {
                    "machineName": "打印机9",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "50"
                }, {
                    "machineName": "打印机9",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "50"
                }, {
                    "machineName": "打印机9",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "50"
                }, {
                    "machineName": "打印机9",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "50"
                }, {
                    "machineName": "打印机9",
                    "machineType": "固定资产",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "50"
                }, ]
            }

            // 弹框打开,下面执行网络请求
            // axios.post(url, {
            //         // 这里是所传输的data..
            //         //  传值给父组件,执行打开弹框,data为网络请求后的数据
            this.$emit("dialogonopen", data);
            //     })
            //     .then(function (response) {
            //         console.log('成功后执行');
            //         console.log('response');
            //     })
            //     .catch(function (error) {
            //         console.log("打印错误" + error);
            //     });
        }
    }
})