<template>
  <div class="login">
    <span class="login-title"><Label code="l_login"/><Label code="l_project_name"/></span>
    <Label code="l_username"/>/<Label code="l_email"/>/<Label code="l_phone_num"/>/
    <el-input v-model="user.account"><i slot="prefix" class="el-input__icon el-icon-search"></i></el-input>
    <Label code="l_password"/>
    <el-input v-model="user.password"><i slot="prefix" class="el-input__icon el-icon-setting"></i></el-input>
    <el-button type="success" @click="login"><Label code="l_login"/></el-button>
  </div>
</template>
<script>
import Label from './Label'

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
      console.log('登录了')
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
    margin: auto
    border: 1px solid #eee
    padding: 40px
    text-align: center
    margin-top: 200px
    & > *
      margin-top: 20px
    .login-title
      font-size: 27px
      color: $b_green

</style>
