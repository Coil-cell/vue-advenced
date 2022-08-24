import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUsersInfo,
  fetchItemsInfo,
  fetchList,
} from '../api/index.js';

export default {
  // promise
  // FETCH_NEWS(context) {
  //   fetchNewsList()
  //     .then((res) => {
  //       console.log(res.data);
  //       context.commit('SET_NEWS', res.data);
  //       return res;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },

  // async
  async FETCH_NEWS(context) {
    const res = await fetchNewsList();
    context.commit('SET_NEWS', res.data);
    console.log('fetch news');
    return res;
  },

  async FETCH_ASK({ commit }) {
    try {
      const res = await fetchAskList();
      commit('SET_ASK', res.data);
      console.log('fetch ask');
      return res;
    } catch (err) {
      console.log(err);
    }
  },

  async FETCH_JOBS(context) {
    const res = fetchJobsList();
    context.commit('SET_JOBS', res.data);
    console.log('fetch jobs');
  },

  FETCH_USER({ commit }, name) {
    fetchUsersInfo(name)
      .then((res) => {
        //console.log('users - store', res.data);
        commit('SET_USERS', res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  FETCH_ITEMS({ commit }, itemId) {
    fetchItemsInfo(itemId)
      .then((res) => {
        //console.log('items - store', res.data);
        commit('SET_ITEMS', res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  async FETCH_LIST({ commit }, pageName) {
    const res = await fetchList(pageName);
    commit('SET_LIST', res.data);
    return res;
  },
};
