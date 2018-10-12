<template>
  <div id="mc_embed_signup" class="mc_embed_signup">
    <form
      action="https://robinhamill.us19.list-manage.com/subscribe/post?u=c39fa08c53c3453ac24ae8a66&amp;id=687f088c6f"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      class="validate"
      target="_blank"
      novalidate
    >
      <div id="mc_embed_signup_scroll">
        <h2 class="h4" v-if="eventDetails.event.isLive">Can't make this one?</h2>
        <h2 class="h5">Sign up to be the first to know when the next workshop is announced!</h2>
        <div class="grid">
          <div class="mc-field-group input-group">
            <input
              type="email"
              value=""
              name="EMAIL"
              class="required email"
              id="mce-EMAIL"
              required
              @input="validateEmail($event)"
            >
            <label for="mce-EMAIL">Email Address </label>
          </div>
          <input
            type="submit"
            value="Notify me!"
            name="subscribe"
            id="mc-embedded-subscribe"
            class="btn"
            :disabled="!validEmail"
          >
        </div>
        <div id="mce-responses" class="clear">
          <div class="response" id="mce-error-response" style="display:none"></div>
          <div class="response" id="mce-success-response" style="display:none"></div>
        </div>
        <div
          style="position: absolute; left: -5000px;"
          aria-hidden="true">
          <input
          type="text"
          name="b_c39fa08c53c3453ac24ae8a66_687f088c6f"
          tabindex="-1"
          value="">
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EmailSignupForm',
  props: {
    eventDetails: Object,
  },
  data() {
    return {
      validEmail: false,
    };
  },
  methods: {
    validateEmail(e) {
      const email = e.target.value;
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const result = re.test(email);
      this.validEmail = result;
    },
  },
};
</script>

<style scoped lang="stylus">
@import '../styles/_vars'

.grid
  display grid
  grid-template-columns 1fr min-content
  grid-gap 10px

  @media screen and (max-width: 540px)
    grid-template-columns 1fr

.mc_embed_signup
  display flex
  justify-content center
  text-align center

h2
  // font-size 1em

.input-group
  position relative

  label
    color $dark-grey
    position absolute
    left 1.8rem
    top 50%
    transform translateY(-50%)
    background rgba(255, 255, 225, 0)
    border-radius 3px
    padding 0 5px
    transition all 0.3s

  input
    display block
    width 100%
    padding 15px
    border none
    border-radius 3px
    border 2px solid $dark-grey

    &:hover, &:focus, &:valid
      & + label
        top 0
        background rgba(255, 255, 255, 1)
        font-size 1.6rem
</style>
