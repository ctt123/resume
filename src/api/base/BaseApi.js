import Api from '../Api'

export default {
  join: (user) => Api.post('/api/v1/join', user),
  login (user) {
    const headers = {Authorization: 'Basic ' + btoa(user.account + ':' + user.password)}
    console.log(user)
    return Api.get('/api/user', {}, headers)
  },
  githubUser (token) {
    return Api.get(`https://api.github.com/user?access_token=${token}`)
  },
  githubLoginUrl () {
    return Api.get('/api/login/oauth/url/github')
  }
}
