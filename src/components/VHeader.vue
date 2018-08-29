<template>
  <header>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Vue JS Workshop</h1>
    <date-location />
    <component :is="ctaComp" :eventDetails="eventDetails" />
  </header>
</template>

<script>
import DateLocation from './DateLocation.vue';
import Signup from './Signup.vue';
import EmailSignupForm from './EmailSignupForm.vue';

export default {
  name: 'VHeader',
  components: {
    DateLocation,
    Signup,
    EmailSignupForm,
  },
  props: {
    eventDetails: Object,
  },
  computed: {
    ctaComp() {
      return this.eventDetails.eventLive ? Signup : EmailSignupForm;
    },
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
