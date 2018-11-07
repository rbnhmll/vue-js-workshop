<template>
  <header>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Vue JS Workshop</h1>
    <date-location :eventDetails="eventDetails" />
    <SoldOut v-if="eventDetails.event.isSoldOut" />
    <component :is="ctaComp" :eventDetails="eventDetails" />
  </header>
</template>

<script>
import DateLocation from './DateLocation.vue';
import Signup from './Signup.vue';
import EmailSignupForm from './EmailSignupForm.vue';
import SoldOut from './SoldOut.vue';

export default {
  name: 'VHeader',
  components: {
    DateLocation,
    Signup,
    EmailSignupForm,
    SoldOut,
  },
  props: {
    eventDetails: Object,
  },
  computed: {
    ctaComp() {
      return this.eventDetails.event.isLive ? Signup : EmailSignupForm;
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
