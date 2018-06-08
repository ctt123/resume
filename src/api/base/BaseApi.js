import Api from '../Api'

export default {
  join: (user) => Api.post('/v1/join', user),
  login (user) {
    const headers = {Authorization: 'Basic ' + btoa(user.account + ':' + user.password)}
    console.log(user)
    return Api.get('/user', {}, headers)
  },
  githubReg () {
    return Api.get('/oauth2/authorization/github')
  }
}
