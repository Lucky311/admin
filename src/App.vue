<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  // import 'iview/dist/styles/iview.css'
export default {
  name: 'App'
}
</script>

<style>
  @import './assets/css/reset.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
.ivu-page-item-active {
  background: #7a81df
}
</style>
