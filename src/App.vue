<template>
  <div id="app">
    <div class="wrapper">
     <XIcon size="36" icon="check-all" color="darkorchid" />
     <XIcon size="20" icon="checkbox-blank-outline" color="red" />
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
     <XIcon size="36" icon="arrow-down" color="darkorchid" />
     <XIcon size="36" icon="arrow-up" color="darkorchid" />
     <XIcon size="36" icon="arrow-left" color="darkorchid" />
     <XIcon size="36" icon="arrow-right" color="darkorchid" />
    </div>
    <div class="wrapper">
     <XIcon size="24" icon="paperclip" color="darkorchid" />
     <XIcon size="24" icon="message-reply-text" color="darkorchid" />
     <XIcon size="24" icon="launch" color="darkorchid" />
     <XIcon size="24" icon="chevron-left" color="darkorchid" />
     <XIcon size="24" icon="chevron-right" color="darkorchid" />
     <XIcon size="24" icon="plus" color="#3fb9d5" />
     <XIcon size="24" icon="filter-variant" color="darkorchid" />
     <XIcon size="24" icon="send" color="darkorchid" />
     <XIcon size="24" icon="close" color="darkorchid" />
     <XIcon size="24" icon="forward" color="darkorchid" />
     <XIcon size="24" icon="pause" color="darkorchid" />
     <XIcon size="24" icon="undo" color="darkorchid" />
     <XIcon size="24" icon="clipboard-alert" color="darkorchid" />
     <XIcon size="24" icon="exclamation" color="darkorchid" />
     <XIcon size="24" icon="account-multiple" color="darkorchid" />
     <XIcon size="24" icon="history" color="darkorchid" />
     <XIcon size="24" icon="magnify" color="darkorchid" />
     <XIcon size="24" icon="calendar" color="darkorchid" />
     <XIcon size="24" icon="inbox" color="darkorchid" />
     <XIcon size="24" icon="account" color="darkorchid" />
     <XIcon size="24" icon="file-document-box-multiple" color="darkorchid" />
     <XIcon size="24" icon="bell-outline" color="darkorchid" />
     <XIcon size="24" icon="comment-outline" color="darkorchid" />
     <XIcon size="24" icon="domain" color="darkorchid" />
     <XIcon size="16" icon="alert-decagram" color="deeppink" />
    </div>
    <div class="wrapper">
      <XIcon size="24"  icon="sort-variant" color="darkorchid"></XIcon>
      <XIcon size="24"  icon="view-headline" color="darkorchid"></XIcon>
      <XIcon size="24"  icon="view-column" color="darkorchid"></XIcon>
      <XIcon size="24"  icon="refresh" color="darkorchid"></XIcon>
      <XIcon size="24"  icon="subdirectory-arrow-left" color="darkorchid"></XIcon>
      <XIcon size="24"  icon="radiobox-blank" color="darkorchid"></XIcon>
      <XIcon size="24"  icon="radiobox-marked" color="darkorchid"></XIcon>
      <XIcon size="24"  icon="settings-box" color="darkorchid"></XIcon>
      <XIcon size="24"  icon="view-list" color="darkorchid"></XIcon>
     <button @click="hdlclick">Switch icon</button>
     <XIcon v-if="toggle" size="50" icon="truck-delivery" color="darkorchid" />
     <XIcon v-else size="50" icon="cart-plus" color="darkorchid" />
    </div>


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
  flex-direction: column;
  flex-wrap: wrap;
}
.wrapper{
  margin-top: 10px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
