<template>
  <div>
    <app-header :title="appTitle"></app-header>
    <app-content :items="items" @renew="renewItems"></app-content>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';

export default {
  components: {
    AppHeader,
    AppContent,
  },
  data() {
    return {
      appTitle: 'Common Approach',
      items: [10, 20, 30],
    };
  },
  methods: {
    renewItems() {
      // this.items = [40, 50, 60];
      var itemList = this.items;
      // var itemLength = this.items.length();

      for (var i in itemList) {
        this.$set(this.items, i, (this.items[i] += 10));
      }

      console.log(this.items);
    },
  },
};
</script>
