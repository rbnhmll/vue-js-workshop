<template>
  <div>
    <template v-if="!location.TBD">
      <h2 class="h4 heading">At <a :href="location.venue.mapLink" target="_blank">{{ location.venue.name }}</a> &bull; {{ location.date }}</h2>
      <p>{{ location.time }}</p>
    </template>
    <template v-else>
      <h2 class="h4 heading">Toronto &bull; January 2019</h2>
    </template>
  </div>
</template>

<script>
export default {
  name: 'DateLocation',
  props: {
    eventDetails: Object,
  },
  computed: {
    location() {
      return this.eventDetails.event.location;
    },
  },
};
</script>

<style scoped lang="stylus">
.heading
  margin-bottom 0

p
  font-size 1.4rem
  margin-top 5px
  margin-bottom 30px
</style>
