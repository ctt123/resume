<template>
  <page class="login">
    <div class="content">
      <h3 class="title">登录</h3>
      <el-input v-model="user.account" :placeholder="Labeler('p_login_name')" class="form-row">
        <i slot="prefix" class="el-input__icon el-icon-search"></i></el-input>
      <el-input v-model="user.password" placeholder="请输入密码" class="form-row">
        <i slot="prefix" class="el-input__icon el-icon-setting"></i></el-input>
      <el-button @click="login" class="form-row form-btn"><Label code="l_login"/></el-button>
    </div>
  </page>
</template>
<script>
import Label from '../Label'
import BaseApi from '../../../api/base/BaseApi'

export default {
  name: 'Login',
  components: {Label},
  data () {
    return {
      user: {}
    }
  },
  methods: {
    loginGithub () {
    },
    login () {
      BaseApi.login(this.user).then(data => {

      })
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang="sass">
  @import '@/assets/css/index.sass'
  .login
    background-color: #5cd6c9
    height: 100%
    .content
      width: 300px
      padding: 40px
      text-align: center
      background-color: #fff
      @include box-center
      @include box-corner-shadow
      .form-row
        margin-top: 26px
      .form-btn
        background-color: #5cd6c9
        color: #ffffff
        border: none
</style>
