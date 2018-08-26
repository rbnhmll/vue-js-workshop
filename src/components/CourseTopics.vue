<template>
  <section>
    <h2>What will I learn?</h2>

    <ul>
      <li v-for="(topic, i) in topics" :key="i">
        {{ topic }}
      </li>
    </ul>

    <h2>Plus</h2>

    <ul>
      <li v-for="(topic, i) in plus" :key="i">
        {{ topic }}
      </li>
    </ul>

    <h2>Experience</h2>

    <p>Participants should be comfortable with HTML and CSS,
      and have a fundamental understanding of JavaScript, the terminal, and npm.
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
  data() {
    return {
      topics: [
        'What is Vue, and why?',
        'Vue CDN',
        'Vue Devtools',
        'The Vue Instance',
        'Declarative Rendering',
        'Directives',
        'Methods',
        'Event handing',
        'Event modifiers',
        'Component Registration',
        'Props',
        'Vue CLI 3',
        'Single File Components',
        'computed properties',
        'Filters',
      ],
      plus: [
        'Gotchas',
        'Tips',
        'Tricks',
      ],
    };
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
