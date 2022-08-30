import Chart from 'chart.js'


export default {
    install(Vue) {
      console.log('chart plugins');
      Vue.prototype.$_Chart = Chart;

      // $_ : 뷰에서 지정한 플러그인의 함수, 속성의 접조사

      // 어디서든 this.$_Chart로 불러올 수 있음
      // BarChart.vue
      // this.$_Chart

      // LineChart.vue
      // this.$_Chart
    }
}