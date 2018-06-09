import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Chat from '@/components/grocery/msg/Chat'
import Login from '@/components/base/Login'
import LoginCallback from '@/components/base/LoginCallback'
import Join from '@/components/base/Join'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/msg/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/join',
      name: 'Join',
      component: Join
    },
    {
      path: '/login/callback',
      name: 'LoginCallback',
      component: LoginCallback
    }
  ]
})
