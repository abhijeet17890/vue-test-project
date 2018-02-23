<template>
  <div class="ff-card shape-rounded bg-white shadow-soft margin-bottom-small login-card" style="padding: 32px;">
    <h6 class="margin-bottom-small">Sign in</h6>
    <form class="ff-form" >
      <div class="ff-form-unit">
        <input class="ff-input js-untouched"  v-model="username"  type="text" id="userName" name="userName" placeholder=" "  />
        <label for="userName">Username</label>
      </div>
      <div class="ff-form-unit ">
        <input class="ff-input js-untouched" name="password" v-model="password" type="password" id="password" placeholder=" "  />
        <label for="password">Password</label>
      </div>
      <div class="ff-form-unit margin-bottom-tiny">
        <input id="login-btn" class="ff-button shape-rounded bg-ezeGradient shadow-soft text-white text-bold pull-right" type="submit" @click="login" value="LOGIN"  />
      </div>
      <div class="clear-both"></div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Loginbox',
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: function (event) {
      event.preventDefault()
      this.$router.push('/user/home')
      console.log('login clicked')
    }
  }
}
</script>
