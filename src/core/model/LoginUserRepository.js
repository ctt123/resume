import LoginUser from './LoginUser'

const LOGIN_USER = 'LOGIN_USER'
const LoginUserRepository = {
  save (loginUser) {
    if (!(loginUser instanceof LoginUser)) throw new Error('you must save a login user entity , see class LoginUser')
    localStorage.setItem(LOGIN_USER, JSON.stringify(loginUser))
  },
  remove () {
    localStorage.removeItem(LOGIN_USER)
  },
  get () {
    return JSON.parse(localStorage.getItem(LOGIN_USER))
  },
  isSaved () {
    return localStorage.getItem(LOGIN_USER) !== null
  },
  isNotSaved () {
    return !this.isSaved()
  }
}
export default LoginUserRepository
