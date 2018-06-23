import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Chat from '@/components/grocery/msg/Chat'
import Login from '@/components/base/Login'
import LoginCallback from '@/components/base/LoginCallback'
import Join from '@/components/base/Join'
import Exam from '@/components/base/Exam'
import LoginUserRepository from '../core/model/LoginUserRepository'

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
      component: Login,
      beforeEnter: (to, from, next) => {
        if (LoginUserRepository.isNotSaved()) {
          next()
        } else {
          next(from.path)
        }
      }
    },
    {
      path: '/exam',
      name: 'Exam',
      component: Exam
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
