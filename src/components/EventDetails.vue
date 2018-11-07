<template>
  <section>
    <div class="content">
      <h2>Workshop Details</h2>
      <DateLocation :eventDetails="eventDetails" />
      <SoldOut v-if="eventDetails.event.isSoldOut" />
      <Signup v-if="eventDetails.event.isLive" :eventDetails="eventDetails" />
      <template v-else>
        <p>The next workshop is coming soon. Sign up below to be notified.</p>
      </template>
    </div>
  </section>
</template>

<script>
import DateLocation from './DateLocation.vue';
import Signup from './Signup.vue';
import SoldOut from './SoldOut.vue';

export default {
  name: 'EventDetails',
  props: {
    eventDetails: Object,
  },
  components: {
    DateLocation,
    Signup,
    SoldOut,
  },
};
</script>

<style scoped lang="stylus">
@import '../styles/_vars'

.content
  text-align center
</style>
