<template>
  <div id="app">
     <XIcon icon="Bug" size="30" color="darkOrchid" />
  </div>
</template>

<script>
import XIcon from './components/XIcon.vue'

export default {
  name: 'app',
  components: {
    XIcon
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
