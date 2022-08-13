<template lang="">
  <div>
    <p v-for="item in fetchedAsk" :key="item.id">
      <a v-bind:href="item.url">{{ item.title }}</a>
      <small> {{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // #4 store/getters + array
    ...mapGetters(['fetchedAsk']),

    // #3 store/getters + dict
    // ...mapGetters({
    //   askItems: 'fetchedAsk',
    // }),

    // #2 map
    // import { mapState } from 'vuex';
    // ...mapState({
    //   ask: (state) => state.ask,
    // }),

    // #1
    // ask() {
    //   return this.$store.state.ask;
    // }
  },

  created() {
    this.$store.dispatch('FETCH_ASK');
  },
};
</script>

<style lang=""></style>
