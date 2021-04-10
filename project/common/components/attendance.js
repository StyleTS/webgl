Vue.component('attendance', {
    template: `
        <div class="attendance">
            <div class="linetext">
                <div class="blue-line"></div>
                <p>温湿度监控</p>
                <div class="blue-line"></div>
            </div>
            <div class="content">
                <div><p class="con-font">日出勤率</p> <p>{{propdata.day}}</p></div>
                <div><p class="con-font">周出勤率</p> <p>{{propdata.week}}</p></div>
                <div><p class="con-font">月出勤率</p> <p>{{propdata.month}}</p></div>
            </div> 
        </div>
    `,
    props: {
      propdata: {
        type: Object,
        default: function(){
            return {
                day:"0",
                week:"0",
                month:"0",
            }
        },
      }
    },
  })