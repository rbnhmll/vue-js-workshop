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
        <div class="mc-field-group input-group">
          <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
          <label for="mce-EMAIL">Email Address </label>
        </div>
        <div id="mce-responses" class="clear">
          <div class="response" id="mce-error-response" style="display:none"></div>
          <div class="response" id="mce-success-response" style="display:none"></div>
        </div>
        <div
          style="position: absolute; left: -5000px;"
          aria-hidden="true"><input
          type="text"
          name="b_c39fa08c53c3453ac24ae8a66_687f088c6f"
          tabindex="-1"
          value=""></div>
        <div class="clear">
          <input
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
            class="button">
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EmailSignupForm',
};
</script>

<style scoped lang="stylus">
.mc_embed_signup
  display flex
  justify-content center

form
  max-width 600px
  width 100%

.input-group
  position relative

  label
    font-size 2rem
    color #ccc
    position absolute
    left 2rem
    top 50%
    transform translateY(-50%)
    background rgba(255, 255, 225, 0)
    border-radius 3px
    padding 0 5px
    transition all 0.3s

  input
    font-size 2rem
    display block
    width 100%
    padding 20px
    border none
    border-radius 3px
    border 2px solid #ccc

    &:hover, &:focus, &:valid
      & + label
        top 0
        background rgba(255, 255, 255, 1)
        font-size 1.6rem

.button
  border 2px solid #ccc
  margin-top 30px
  font-size 2rem
  border-radius 10px
  padding 10px 40px
</style>
