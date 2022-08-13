import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js';

export default {
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
};
