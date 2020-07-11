<template>
  <div id="app">
    <head-bar></head-bar>
    <div class="app-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import router from './router';
import headBar from './components/head-bar/head-bar.vue';

export default {
  name: 'App',
  components: {
    headBar,
  },
  router,
};
</script>

<style lang="less">
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
body {
  font-family: 'Rubik', 'sans serif';
  margin: 0;
  font-size: @font-size-body;
  color: @text-color-body;
}

.app-body {
  margin-top: 122px;
  padding: 24px;
}
</style>
