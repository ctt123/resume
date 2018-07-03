<template>
  <page class="login">
    <div class="content">
      <h3 class="title">登录</h3>
      <el-input v-model="user.account" :placeholder="Labeler('p_login_name')">
        <i slot="prefix" class="el-input__icon el-icon-search"></i></el-input>
      <el-input v-model="user.password" placeholder="请输入密码">
        <i slot="prefix" class="el-input__icon el-icon-setting"></i></el-input>
      <el-button type="success" @click="login"><Label code="l_login"/></el-button>
      <span @click="test">goHome</span>
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
    },
    test () {
      this.$router.replace({name: 'chat'})
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
    position: relative
    top: 50%
    left: 50%
    width: 300px
    border: 1px solid #eee
    padding: 40px
    text-align: center
    background-color: #fff
    -webkit-transform: translate(-50%, -50%)
    -moz-transform: translate(-50%, -50%)
    -ms-transform: translate(-50%, -50%)
    -o-transform: translate(-50%, -50%)
    transform: translate(-50%, -50%)

</style>
