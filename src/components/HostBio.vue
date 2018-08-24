<template>
  <section>
    <h2>About the Instructor</h2>
    <div class="description">
      <div class="headshot">
        <img
          src="../assets/robinHeadshotSquare.jpg"
          alt="Robin Hamill headshot"
        >
      </div>
      <h3>Robin Hamill is an independent developer that works with merchants to create
        unique buying experiencesby adding Vue.js (amongst other tools) to Shopify themes.</h3>
    </div>
    <social-icons />
  </section>
</template>

<script>
import SocialIcons from './SocialIcons.vue';

export default {
  name: 'HostBio',
  components: {
    SocialIcons,
  },
};
</script>

<style scoped lang="stylus">
@import '../styles/_vars'

h2
  text-align center

p, .headshot
  text-align center

img
  width 200px
  border-radius 50%

.description
  margin-bottom 25px
  display grid
  grid-template-columns repeat(auto-fit, minmax(250px, 1fr))
  align-items center
  justify-content flex-start
  grid-gap 20px
</style>
