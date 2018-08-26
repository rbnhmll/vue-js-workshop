<template>
  <section>
    <h2>What will I learn?</h2>

    <ul>
      <li>What is Vue, and why?</li>
      <li>Vue CDN</li>
      <li>Vue Devtools</li>
      <li>The Vue Instance</li>
      <li>Declarative Rendering</li>
      <li>Directives</li>
      <li>Methods</li>
      <li>Event handing</li>
      <li>Event modifiers</li>
      <li>Component Registration</li>
      <li>Props</li>
      <li>Vue CLI 3</li>
      <li>Single File Components</li>
      <li>computed properties</li>
      <li>Filters</li>
    </ul>

    <h2>Plus</h2>

    <ul>
      <li>Gotchas</li>
      <li>Tips</li>
      <li>Tricks</li>
    </ul>

    <h2>Experience</h2>

    <p>As a prerequisite, participants should be experienced with HTML and CSS,
      and have a fundamental understanding of JavaScript, the terminal and npm.
      Experience with other reactive libraries like React or Angular is a bonus,
      but not required.</p>
  </section>
</template>

<script>
import IconVue from './icons/IconVue.vue';

export default {
  name: 'CourseTopics',
  components: {
    IconVue,
  },
};
</script>

<style scoped lang="stylus">
@import '../styles/_vars'

h2
  text-align center

ul
  display grid
  grid-template-columns repeat(auto-fit, minmax(200px, 1fr))
  padding 0
  margin 0
  grid-gap 15px 50px

  li
    text-transform uppercase
    list-style-image url('../assets/vuejs-brands.svg')
    list-style-position inside
    font-weight bold
</style>
