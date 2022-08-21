<template lang="">
  <div>
    <list-item></list-item>
    <!-- <ul class="jobs-list">
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
    </ul> -->
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
// import bus from '../utils/bus.js';
import ListMixin from '../mixins/ListMixin';

export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin],
  // created() {
  //   bus.$emit('start:spinner');
  //   setTimeout(() => {
  //     this.$store
  //       .dispatch('FETCH_JOBS')
  //       .then(() => {
  //         console.log('fetched..jobs');
  //         bus.$emit('end:spinner');
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, 2000);
  // },
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
