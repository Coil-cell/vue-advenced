<template lang="">
  <div>
    <div v-for="item in ask" :key="item.id">{{ item.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from "../api/index";

export default {
  data() {
    return {
      ask: [],
    };
  },
  created() {
    var vm = this;

    fetchAskList()
      .then(function (res) {
        vm.ask = res.data;
      })
      .catch(function (err) {
        console.log(err);
      });
  },
};
</script>

<style lang=""></style>
