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
    <ul>
      <li>
        <a href="https://twitter.com/rbnhmll" aria-label="Twitter" title="Twitter" target="_blank">
          <icon-twitter />
        </a>
      </li>
      <li>
        <a href="https://github.com/rbnhmll" aria-label="Github" title="Github" target="_blank">
          <icon-github />
        </a>
      </li>
      <li>
        <a href="https://robinhamill.com" aria-label="Website" title="Website" target="_blank">
          <icon-website />
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import IconTwitter from './icons/IconTwitter.vue';
import IconGithub from './icons/IconGithub.vue';
import IconWebsite from './icons/IconWebsite.vue';

export default {
  name: 'HostBio',
  components: {
    IconTwitter,
    IconGithub,
    IconWebsite,
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

ul
  margin 0
  padding 0
  list-style-type none
  display flex
  justify-content space-between
  width 4em
  margin 0 auto

svg
  height 1em

.description
  margin-bottom 25px
  display grid
  grid-template-columns repeat(auto-fit, minmax(250px, 1fr))
  align-items center
  justify-content flex-start
  grid-gap 20px
</style>
