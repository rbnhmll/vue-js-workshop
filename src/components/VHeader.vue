<template>
  <header>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Vue JS Workshop</h1>
    <date-location />
    <email-signup-form />
  </header>
</template>

<script>
import DateLocation from './DateLocation.vue';
import EmailSignupForm from './EmailSignupForm.vue';

export default {
  name: 'VHeader',
  components: {
    DateLocation,
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

  @media screen and (max-width: 480px)
    max-width 100px
</style>
