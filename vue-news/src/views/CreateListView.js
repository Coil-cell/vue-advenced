import ListView from './ListView.vue';
import bus from '../utils/bus.js';

export default function createListView(name) {
  // route/index.js -> components: createListView('NewsView')
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    name: name,
    created() {
      bus.$emit('start:spinner');
      setTimeout(() => {
        this.$store
          .dispatch('FETCH_LIST', this.$route.name)
          .then(() => {
            console.log('fetched..HOC');
            bus.$emit('end:spinner');
          })
          .catch((err) => {
            console.log(err);
          });
      }, 500);
    },
    render(createElement) {
      return createElement(ListView);
    },
  };
}
