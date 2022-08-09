<template>
  <div id="app">
    <tool-bar></tool-bar>
    <!-- router를 등록, main에서 연결, 자동으로 컴포넌트를 반영. -->
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  name: 'App',
  components: {
    ToolBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
