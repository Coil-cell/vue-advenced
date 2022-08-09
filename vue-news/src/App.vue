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
body {
  padding: 0;
  margin: 0;
}
</style>
