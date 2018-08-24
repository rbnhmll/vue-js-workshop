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
</style>
