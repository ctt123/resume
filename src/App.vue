<template>
  <div id="app">
    <el-header class="header">
      <nav class="menu-bar">
        <router-link to="/" class="logo"><Label code="l_us"/></router-link>
        <router-link to="/"><Label code="l_index"/></router-link>
        <router-link to="/note"><Label code="l_diary"/></router-link>
        <router-link to="/msg/chat"><Label code="l_chat"/></router-link>
        <router-link to="/store"><Label code="l_store"/></router-link>
        <router-link to="/about"><Label code="l_about_us"/></router-link>
        <a href="javascript: void(0)"><i class="el-icon-search"></i></a>
        <span v-if="isLogin">
          <img class="avatar" height="40" width="40" :src="loginUser.avatar"/>
          <span>{{loginUser.nickname}}</span>
          <a href="javascript:void(0)" @click="logout"><Label code="l_logout"/></a>
        </span>
        <span v-else>
          <a :href="BaseConfig.LOGIN_URL"><Label code="l_login"/></a>
          <router-link to="/join"><Label code="l_join"/></router-link>
        </span>
      </nav>
    </el-header>
    <router-view/>
  </div>
</template>

<script>
import LoginUserRepository from './core/model/LoginUserRepository'
import Label from './components/base/Label'

export default {
  name: 'App',
  components: {Label},
  data () {
    return {
      isLogin: LoginUserRepository.isSaved(),
      loginUser: LoginUserRepository.get()
    }
  },
  methods: {
    logout () {
      LoginUserRepository.remove()
      this.isLogin = false
    }
  }
}
</script>
<style>

  * {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .header {
    background-color: #161718;
    line-height: 60px;
  }

  .menu-bar {
    margin-left: 500px;
  }

  .menu-bar * {
    color: #fff;
    font-size: 12px;
    font-family: 'Montserrat', sans-serif;
    text-underline: none;
    text-decoration: none;
    vertical-align: middle;
    margin-left: 20px;
  }

  .menu-bar a.logo {
    color: #f85252;
    font-size: 20px;
  }

  .menu-bar a:hover {
    color: #57c654;
  }

  .avatar {
    border-radius: 50%;
  }

  .login {

  }
</style>
