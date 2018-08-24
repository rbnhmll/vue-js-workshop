<template>
  <header>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Vue JS Workshop</h1>
    <email-signup-form />
  </header>
</template>

<script>
import EmailSignupForm from './EmailSignupForm.vue';

export default {
  name: 'VHeader',
  components: {
    EmailSignupForm,
  },
};
</script>

<style scoped lang="stylus">
header
  text-align center

img
  max-width 150px
  width 100%

h1
  margin-bottom 35px
  font-size 2.5em
</style>
