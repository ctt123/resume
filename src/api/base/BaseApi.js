import Api from '../Api'

export default {
  join: (user) => Api.post('/api/v1/join', user),
  login(user) {
    const headers = {Authorization: 'Basic ' + btoa('elagleye' + ':' + '12345678')}
    console.log(user)
    const info = {
      grant_type: 'password',
      scope: 'webclient',
      username: user.account,
      password: user.password
    }
    return Api.get('/api/user', info, headers)
  },
  githubUser(token) {
    return Api.get(`https://api.github.com/user?access_token=${token}`)
  },
  githubLoginUrl() {
    return Api.get('/api/login/oauth/url/github')
  }
}
