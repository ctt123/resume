<template>
  <div class="login">
    <span class="login-title"><Label code="l_join"/></span>
    <el-input v-model="user.account"><i slot="prefix" class="el-input__icon el-icon-search"></i></el-input>
    <Label code="l_username"/>
    <el-input v-model="user.password"><i slot="prefix" class="el-input__icon el-icon-setting"></i></el-input>
    <Label code="l_password"/>
    <el-input v-model="user.rePassword"><i slot="prefix" class="el-input__icon el-icon-setting"></i></el-input>
    <el-button type="success" @click="join"><Label code="l_join"/></el-button>
  </div>
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
    join () {
      BaseApi.join(this.user)
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
