<template>
  <div class="hello" viewBox="0 0 50 50">
    <component
      :style="{width: size+'px', height:size+'px', fill: color}"
      :is="iconPath(icon)"
    />
    <!-- hello <Bug class="logo" :style="{width: size, height: size}"/> -->
  </div>
</template>

<script>
import Bug from '../assets/svg/bug.svg'

export default {
  name: 'HelloWorld',
  props: ['icon', 'size', 'color'],
  components: {
    Bug,
  },
  methods: {
    iconPath(icon) {
      console.log("file name", icon)
      return require(`../assets/svg/${icon}.svg`).default;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo path {
  margin-right: 10px;
  color: red;
}
.hello {
  font-size: 30px;
}
</style>
