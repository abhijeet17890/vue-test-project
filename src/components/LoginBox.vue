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
import router from '../router'
// import VueResource from 'vue-resource'

export default {
  name: 'Loginbox',
  router,
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: function (event) {
      event.preventDefault()
      // VueResource.http.get(window.location.origin + '/api' + '2.0/auth/login', {username: '7100000016', password: '123456Q'}).then(function (data) {
      // console.log('data', data)
      // }, function (error) {
      // console.log('error', error)
      // })
      router.push('/user/home')
      console.log('login clicked')
    }
  }
}
</script>
