<template>
  <section>
    <div class="content">
      <h2>Event Details</h2>
      <date-location />
      <div v-if="eventLive">
        <div :class="['pricing', {isEarlyBird: earlyBird }]">
          <span class="price" v-if="earlyBird">{{ pricing.earlyBird | money }}</span>
          <span v-if="earlyBird" class="early-bird label">Early Bird!</span>

          <span :class="['regular', {strike: earlyBird, price: !earlyBird }]">{{ pricing.regular | money }}</span>
          <span class="label" v-if="earlyBird">Regular</span>
        </div>
        <div>
          <v-button url="https://ti.to/robin-hamill/vue-js-workshop">Get Tickets!</v-button>
        </div>
      </div>
      <div v-else>
        <p>More info coming soon. Sign up to learn more.</p>
      </div>
    </div>
  </section>
</template>

<script>
import DateLocation from './DateLocation.vue';
import VButton from './VButton.vue';

export default {
  name: 'EventDetails',
  components: {
    DateLocation,
    VButton,
  },
  data() {
    return {
      eventLive: false,
      earlyBird: true,
      pricing: {
        earlyBird: 75,
        regular: 100,
      },
    };
  },
};
</script>

<style scoped lang="stylus">
@import '../styles/_vars'

.content
  text-align center

.strike
  text-decoration none
  position relative
  display inline-block
  color lighten(#000, 60%)

  &:before
    content ''
    position absolute
    width 100%
    left 0
    top 0.45em
    height 1px
    display block
    border-top 0.125em solid #F0A08F
    transform rotate(7deg)

.pricing
  display grid
  grid-gap 10px
  grid-template-columns min-content max-content
  align-items center
  justify-content center

.price
  display inline-flex
  align-items center
  font-size 2.8rem
  position relative
  font-weight bold

.early-bird
  text-rendering optimizeLegibility
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  -webkit-text-size-adjust 100%
  position relative
  display inline-block
  background $green
  width auto
  height 30px
  line-height 32px
  font-size 14px
  font-weight bold
  color #fff
  text-align center
  border-radius 4px
  padding 0 15px
  margin-left 15px

  &:after
    content ' '
    height 22px
    width 22px
    background $green
    position absolute
    top 4px
    left -9px
    border-radius 4px
    -moz-transform rotate(45deg)
    -o-transform rotate(45deg)
    -ms-transform rotate(45deg)
    -webkit-transform rotate(45deg)
    transform rotate(45deg)

  &:before
    content ''
    width 7px
    height 7px
    background #fff
    position absolute
    top 12px
    left 0px
    z-index 1
    border-radius 10px

.regular
  .isEarlyBird &
    font-size 1.6rem
</style>
