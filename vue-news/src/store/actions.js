import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUsersInfo,
  fetchItemsInfo,
} from '../api/index.js';

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
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => {
        console.log('Jobs - store');
        commit('SET_JOBS', data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  FETCH_USER({ commit }, name) {
    fetchUsersInfo(name)
      .then((res) => {
        console.log('users - store', res.data);
        commit('SET_USERS', res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  FETCH_ITEMS({ commit }, itemId) {
    fetchItemsInfo(itemId)
      .then((res) => {
        console.log('items - store', res.data);
        commit('SET_ITEMS', res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
