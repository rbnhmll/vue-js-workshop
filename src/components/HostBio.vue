<template>
  <section>
    <h2>Meet the Instructor</h2>
    <div class="description">
      <div class="headshot">
        <img
          src="@/assets/robinHeadshotSquare.jpg"
          alt="Robin Hamill headshot"
        >
      </div>
      <h3 class="h4">Robin Hamill is a lead instructor at <a href="https://junocollege.com/" target="_blank" rel="noopener noreferrer">Juno College</a> in Toronto, and an independent E-commerce consultant that works with merchants to create
        unique buying experiences by adding Vue.js (amongst other tools) to Shopify themes.</h3>
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
  width 100%
  max-width 150px
  border-radius 50%

.description
  margin-bottom 25px
  display grid
  grid-template-columns 150px 1fr
  align-items center
  justify-content flex-start
  grid-gap 0 50px

  @media screen and (max-width: 680px)
    grid-template-columns 1fr
</style>
