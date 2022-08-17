<template>
  <div id="app">
    <!-- vscode 에서 컴포넌트는 케밥스타일 -->
    <tool-bar></tool-bar>
    <!-- router를 등록, main에서 연결, 자동으로 컴포넌트를 반영. -->
    <transition name="page">
      <router-view></router-view>
    </transition>
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

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
