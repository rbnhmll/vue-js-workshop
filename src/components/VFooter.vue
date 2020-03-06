<template>
  <footer>
    <p><span>Made with <icon-vue /></span> by <a href="https://www.robinhamill.com">Robin Hamill</a> &bull; {{year}}</p>
  </footer>
</template>

<script>
import IconVue from './icons/IconVue.vue';

export default {
  name: 'VFooter',
  components: {
    IconVue,
  },
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped lang="stylus">
footer
  text-align center
  font-size 1.4rem
  color #fff

  a
    color inherit

  svg
    width 1em
    margin-left 3px

  span
    display inline-flex
    align-items center
</style>
