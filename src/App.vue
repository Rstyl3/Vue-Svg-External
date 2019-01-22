<template>
  <div id="app">
     <XIcon size="20" icon="checkbox-marked" color="blue" />
     <XIcon size="36" icon="upload" color="darkorchid" />
     <XIcon size="24" icon="timelapse" color="darkorchid" />
     <XIcon size="24" icon="settings" color="darkorchid" />
     <XIcon size="16" icon="pencil" color="darkorchid" />
     <XIcon size="16" icon="bookmark" color="darkorchid" />
     <XIcon size="24" icon="menu-down" color="darkorchid" />
     <XIcon size="24" icon="folder" color="darkorchid" />
     <XIcon size="24" icon="cart-plus" color="darkorchid" />
     <XIcon size="24" icon="menu" color="darkorchid" />
     <XIcon size="25" icon="magnify-plus-outline" color="darkorchid" />
     <XIcon size="25" icon="magnify-minus-outline" color="darkorchid" />
     <XIcon size="24" icon="grid" color="darkorchid" />
     <XIcon size="24" icon="bug" color="darkorchid" />
     <XIcon size="24" icon="chevron-down" color="darkorchid" />
     <XIcon size="24" icon="keyboard-return" color="darkorchid" />
     <XIcon size="24" icon="content-save" color="darkorchid" />
     <XIcon size="16" icon="alert-decagram" color="darkorchid" />
     <button @click="hdlclick">Switch icon</button>
     <XIcon v-if="toggle" size="50" icon="truck-delivery" color="darkorchid" />
     <XIcon v-else size="50" icon="cart-plus" color="darkorchid" />

  </div>
</template>

<script>
import XIcon from './components/XIcon.vue'

export default {
  name: 'app',
  components: {
    XIcon
  },
  data() {
    return{
      toggle: true
    }
  },
  methods: {
    hdlclick() {
       this.toggle = !this.toggle
    }
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
  display: flex;
  justify-content: center;
}
</style>
