<template>
  <div>
    <p>
      {{ this.$store.state.items.id }}
    </p>
    <div>
      {{ this.$store.state.items.content }}
    </div>

    <!-- {{ this.$store }} -->
  </div>
</template>
<script>
export default {
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEMS', itemId);
  },
};
</script>
<style></style>
