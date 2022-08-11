<template>
  <div>
    <div v-for="user in users" :key="user.id">{{ user.title }}</div>
  </div>
</template>
<script>
import { fetchNewsList } from "../api/index";

export default {
  data() {
    return {
      users: [],
    };
  },
  // component 가 생성되자 마자 실행되는 Hook
  created() {
    var vm = this;

    fetchNewsList()
      .then(function (response) {
        console.log(response);

        vm.users = response.data;
      })
      .catch(function (err) {
        console.log(err);
      });
  },
};
</script>
<style lang=""></style>
