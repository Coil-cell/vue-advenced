import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: [],
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
  },
  mutations: {
    SET_NEWS(state, data) {
      state.news = data;
    },
    SET_ASK(state, data) {
      state.ask = data;
    },
    SET_JOBS(state, data) {
      state.jobs = data;
    },
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then((res) => {
          console.log(res.data);
          context.commit('SET_NEWS', res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    FETCH_ASK(context) {
      fetchAskList()
        .then((res) => {
          console.log('Ask - store');
          context.commit('SET_ASK', res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    FETCH_JOBS(context) {
      fetchJobsList()
        .then((res) => {
          console.log('Jobs - store');
          context.commit('SET_JOBS', res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  //   getters,
  //   mutations,
  //   actions,
});
