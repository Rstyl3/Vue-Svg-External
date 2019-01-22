<template>
  <div class="host" viewBox="0 0 50 50">
    <component :style="{width: size+'px', height:size+'px', fill: color}" :is="iconPath(icon)" />
  </div>
</template>

<script>

export default {
  name: 'XIcon',
  props: ['icon', 'size', 'color'],
  components: {
  },
  methods: {
    iconPath(icon) {
      return require(`../assets/svg/${icon}.svg`).default;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.host {
  position: relative;
}
</style>
