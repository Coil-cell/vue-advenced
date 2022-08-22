import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import TestView from '../views/test.vue';
import bus from '../utils/bus.js';
import { store } from '../store/index.js';

// HOC
// import CreateListView from '../views/CreateListView.js';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history', // url에 해시태그 제거
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      // path: url 주소
      path: '/news',
      // component: url 주소로 갔을때, 표시될 컴포넌트 -> ex. page
      name: 'news',
      component: NewsView,
      //component: CreateListView('NewsView'),
      beforeEnter: (to, from, next) => {
        // console.log('to', to);
        // console.log('from', from);
        // console.log('next', next);
        // next(); // next를 호출해주어야만 진행이 됨.
        //to, from, next
        bus.$emit('start:spinner');
        setTimeout(() => {
          store
            .dispatch('FETCH_LIST', to.name)
            .then(() => {
              console.log('fetched..route nav guard');
              console.log('5 - news');
              bus.$emit('end:spinner');
              next();
            })
            .catch((err) => {
              console.log(err);
            });
        }, 500);
      },
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      //component: CreateListView('AskView'),
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        setTimeout(() => {
          store
            .dispatch('FETCH_LIST', to.name)
            .then(() => {
              console.log('fetched..route nav guard');
              console.log('5 - ask');
              // bus.$emit('end:spinner');
              next();
            })
            .catch((err) => {
              console.log(err);
            });
        }, 500);
      },
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      //component: CreateListView('JobsView'),
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        setTimeout(() => {
          store
            .dispatch('FETCH_LIST', to.name)
            .then(() => {
              console.log('fetched..route nav guard');
              console.log('5 - jobs');
              next();
            })
            .catch((err) => {
              console.log(err);
            });
        }, 500);
      },
    },
    {
      // 동적 라우팅
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
    {
      path: '/test',
      component: TestView,
    },
  ],
});
