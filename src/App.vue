<template>
  <div id="app">
    <el-header class="header">
      <nav class="menu-bar">
        <router-link to="/" class="logo">/2</router-link>
        <router-link to="/">首页</router-link>
        <router-link to="/note">日记</router-link>
        <router-link to="/msg/chat">聊天</router-link>
        <router-link to="/store">小店</router-link>
        <router-link to="/about">关于我们</router-link>
        <a href="javascript: void(0)"><i class="el-icon-search"></i></a>
        <span v-if="isLogin">
          <img class="avatar" height="40" width="40" :src="loginUser.avatar"/>
          <span>{{loginUser.nickname}}</span>
        </span>
        <span v-else>
          <router-link to="/login">登录</router-link>
          <router-link to="/join">注册</router-link>
        </span>

      </nav>
    </el-header>
    <router-view/>
  </div>
</template>

<script>
import LoginUserRepository from './core/model/LoginUserRepository'

export default {
  name: 'App',
  data () {
    return {
      isLogin: LoginUserRepository.isSaved(),
      loginUser: LoginUserRepository.get()
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
