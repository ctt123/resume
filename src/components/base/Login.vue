<template>
  <div class="login">
    <span class="login-title"><Label code="l_login"/><Label code="l_project_name"/></span>
    <Label code="l_username"/>/<Label code="l_email"/>/<Label code="l_phone_num"/>/
    <el-input v-model="user.account"><i slot="prefix" class="el-input__icon el-icon-search"></i></el-input>
    <Label code="l_password"/>
    <el-input v-model="user.password"><i slot="prefix" class="el-input__icon el-icon-setting"></i></el-input>
    <el-button type="success" @click="login"><Label code="l_login"/></el-button>
    <a href="javascript:void(0)" @click="loginGithub">github</a>
  </div>
</template>
<script>
import Label from './Label'
import * as Urler from '../../core/Urler'

export default {
  name: 'Login',
  components: {Label},
  data () {
    return {
      user: {}
    }
  },
  methods: {
    login () {
    },
    loginGithub () {
      const authorizationUrl = 'https://github.com/login/oauth/authorize'
      const github = {
        'client_id': '1c23891103858487501e',
        'client_secret': 'f33376b3bdf95b4c4ef2645b0358b183af8afb42',
        'state': Math.random().toString()
      }
      location.href = encodeURI(Urler.build(authorizationUrl, github))

    }
  },
  mounted () {
  }

}
</script>

<style scoped lang="sass">
  @import '@/assets/css/index.sass'
  .login
    width: 300px
    border: 1px solid #eee
    padding: 40px
    text-align: center
    margin: 200px auto auto
    & > *
      margin-top: 20px
    .login-title
      font-size: 27px
      color: $b_green

</style>
