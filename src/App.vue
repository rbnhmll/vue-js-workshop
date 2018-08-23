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
@import './styles/_setup.styl'
@import './styles/_global.styl'

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
