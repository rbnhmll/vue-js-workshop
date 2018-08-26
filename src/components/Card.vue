<template functional>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped lang="stylus">
.card
  background #fff
  box-shadow inset 0 0 2px rgba(0, 0, 0, 0.1)
  border-radius 5px
  padding 40px 15%

  @media screen and (max-width: 480px)
    padding 20px 10%
</style>
