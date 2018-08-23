<template>
  <div class="wrapper">
    <main id="app">
      <img alt="Vue logo" src="./assets/logo.png">
      <h1>Vue JS Workshop</h1>
      <h2>Coming soon!</h2>
      <email-signup-form />
    </main>
  </div>
</template>

<script>
import EmailSignupForm from './components/EmailSignupForm.vue';

export default {
  name: 'app',
  components: {
    EmailSignupForm,
  },
};
</script>
<style lang="stylus">
.wrapper
  max-width 1000px
  width 100%
  margin 0 auto

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
