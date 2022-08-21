import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import TestView from '../views/test.vue';
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
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      //component: CreateListView('AskView'),
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      //component: CreateListView('JobsView'),
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
