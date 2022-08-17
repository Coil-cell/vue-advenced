<template>
  <div>
    <ul class="news-list">
      <li class="post" v-for="item in this.$store.state.news" :key="item.id">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <a v-bind:href="item.url">{{ item.title }}</a>
          </p>
          <small class="link-text">
            by
            <router-link class="link-text" :to="`/user/${item.user}`">
              {{ item.user }}</router-link
            >
          </small>
        </div>
      </li>
    </ul>
    <!-- <p v-for="item in this.$store.state.news" :key="item.id">
      <a v-bind:href="item.url">{{ item.title }}</a>
      <small>
        {{ item.time_ago }}
        by
        
        <router-link :to="`/user/${item.user}`"> {{ item.user }}</router-link>
      </small>
    </p> -->
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
<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>
