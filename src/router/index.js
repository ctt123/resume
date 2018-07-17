import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/page/home/Home.vue'
import Chat from '../components/page/grocery/msg/Chat'
import SignIn from '../components/page/login/SignIn.vue'
import SignUp from '../components/page/login/SignUp.vue'
import Exam from '../components/page/Exam'
import LoginUserRepository from '../core/model/LoginUserRepository'
// import Test from '@/components/page/Home'
import One from '../components/page/One'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [{
        path: '',
        name: 'one',
        component: One
      }, {
        path: '/msg/chat',
        name: 'chat',
        component: Chat
      }, {
        path: '/exam',
        name: 'exam',
        component: Exam
      }]
    }, {
      path: '/signIn',
      name: 'signIn',
      component: SignIn,
      beforeEnter: (to, from, next) => {
        if (LoginUserRepository.isNotSaved()) {
          next()
        } else {
          next(from.path)
        }
      }
    }, {
      path: '/signUp',
      name: 'signUp',
      component: SignUp
    }
  ]
})
