<template lang="">
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <div class="user-description">
      <router-link :to="`/user/${info.user}`">
        <div>
          {{ info.id }}
        </div>
      </router-link>
      <div class="time">
        {{ info.created }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    info: Object,
  },
  //   computed: {
  //     userInfo() {
  //       return this.$store.state.users;
  //     },
  //   },
};
</script>
<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.user-description {
  padding-left: 8px;
}
.fa-user {
  font-size: 2.5rem;
}
.time {
  font-size: 0.75rem;
}
</style>
