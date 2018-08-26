<template>
  <a class="btn" :href="url">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    url: String,
  },
};
</script>

<style scoped lang="stylus">
@import '../styles/_vars'

a
  display inline-block
  margin-top 30px
</style>
