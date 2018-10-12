<template>
  <div class="sold-out">
    <h2>Workshop Sold out!</h2>
  </div>
</template>

<script>
export default {
  name: 'SoldOut',
  data() {
    return {
    };
  },
};
</script>

<style scoped lang="stylus">
@import '../styles/_vars'

h2
  color $green
</style>
