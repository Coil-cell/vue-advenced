import Vue from 'vue';
import App from './App.vue';
import { router } from './router/index.js';

Vue.config.productionTip = false;

new Vue({
  // vue(App.vue) 에 넘겨줄 구조물들
  render: (h) => h(App),
  router, // 앞 뒤 의 값이 같을때 하나로 줄일수 있음 (=> router: router,)
}).$mount('#app');
