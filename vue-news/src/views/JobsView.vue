<template lang="">
  <div>
    <ul class="jobs-list">
      <li class="post" v-for="item in this.$store.state.jobs" :key="item.id">
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <div>
          <p class="jobs-title">
            <a :href="item.url">{{ item.title }}</a>
          </p>
          <small class="link-text"
            >{{ item.time_ago }} ,
            <a :href="item.url">{{ item.domain }} </a></small
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },
};
</script>

<style scoped>
.jobs-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.jobs-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
</style>
