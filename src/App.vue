<template>
  <div id="app" class="app">
    <div class="wrapper">
      <card>
        <v-header />
      </card>
      <card>
        <description />
      </card>
      <card>
        <course-topics />
      </card>
      <card>
        <host-bio />
      </card>
      <card>
        <event-details />
      </card>
      <card>
        <email-signup-form />
      </card>
      <v-footer />
    </div>
  </div>
</template>

<script>
import Card from './components/Card.vue';
import VHeader from './components/VHeader.vue';
import EmailSignupForm from './components/EmailSignupForm.vue';
import Description from './components/Description.vue';
import CourseTopics from './components/CourseTopics.vue';
import EventDetails from './components/EventDetails.vue';
import HostBio from './components/HostBio.vue';
import VFooter from './components/VFooter.vue';

export default {
  name: 'app',
  components: {
    Card,
    VHeader,
    EmailSignupForm,
    Description,
    CourseTopics,
    EventDetails,
    HostBio,
    VFooter,
  },
};
</script>
<style lang="stylus">
@import './styles/_setup.styl'
@import './styles/_vars.styl'
@import './styles/_global.styl'
</style>
