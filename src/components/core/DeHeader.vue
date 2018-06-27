<template>
  <el-header class="header">
    <nav class="menu-bar">
      <router-link to="/" class="logo">{{$t('menu.us')}}</router-link>
      <router-link to="/">{{$t('menu.index')}}</router-link>
      <router-link to="/note">{{$t('menu.diary')}}</router-link>
      <router-link to="/msg/chat">{{$t('menu.chat')}}</router-link>
      <router-link to="/store">{{$t('menu.store')}}</router-link>
      <router-link to="/about">{{$t('menu.aboutUs')}}</router-link>
      <a href="javascript: void(0)"><i class="el-icon-search"></i></a>
      <div class="menu-right">
        <span v-if="isLogin">
          <img class="avatar" height="40" width="40" :src="loginUser.avatar"/>
          <span>{{loginUser.nickname}}</span>
          <a href="javascript:void(0)" @click="logout">{{$t('menu.logout')}}</a>
        </span>
        <span v-else>
          <router-link to="/signIn">{{$t('menu.signIn')}}</router-link>
          <router-link to="/signUp">{{$t('menu.signUp')}}</router-link>
        </span>
      </div>
    </nav>
  </el-header>
</template>

<script>
import LoginUserRepository from '../../core/model/LoginUserRepository'

export default {
  name: 'DeHeader',
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
  body, html {
    height: 100%;
    width: 100%;
  }

  * {
    margin: 0;
    padding: 0;
  }

  .header {
    background-color: #161718;
    line-height: 60px;
  }

  .menu-bar {
    /*margin-left: 500px;*/
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

  .menu-right {
    float:right;
  }
</style>
