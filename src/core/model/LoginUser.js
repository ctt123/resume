export default class LoginUser {
  constructor (id, nickname, avatar, accessToken,loginTime) {
    this.nickname = nickname
    this.avatar = avatar
    this.accessToken = accessToken
    this.id = id
    this.loginTime = loginTime
  }
}
