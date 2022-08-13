<template>
  <div>
    <p v-for="item in this.$store.state.news" :key="item.id">
      <a v-bind:href="item.url">{{ item.title }}</a>
      <small>
        {{ item.time_ago }}
        by
        <!-- <router-link :to="'/user/' + item.user"> {{ item.user }}</router-link> -->
        <router-link :to="`/user/${item.user}`"> {{ item.user }}</router-link>
      </small>
    </p>
  </div>
</template>
<script>
//import { fetchNewsList } from "../api/index";

export default {
  // component 가 생성되자 마자 실행되는 Hook
  created() {
    this.$store.dispatch('FETCH_NEWS');

    // *Vuex 적용 이전..
    // data() {
    //   return {
    //     users: [],
    //   };
    // },
    // created() {
    // var vm = this;

    // fetchNewsList()
    //   .then(function (response) {
    //     console.log(response);

    //     vm.users = response.data;
    //   })
    //   .catch(function (err) {
    //     console.log(err);
    //   });
  },
};
</script>
<style lang=""></style>
