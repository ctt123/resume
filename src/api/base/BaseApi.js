import Api from '../Api'
import qs from 'qs'

export default {
  join: (user) => Api.post('/api/v1/join', user),
  login (user) {
    const headers = {
      Authorization: 'Basic ' + btoa('eagleeye' + ':' + '12345678')
    }
    const info = {
      grant_type: 'password',
      scope: 'webclient',
      username: user.account,
      password: user.password
    }
    return Api.post('/api/oauth/token', qs.stringify(info), headers)
  },
  githubUser (token) {
    return Api.get(`https://api.github.com/user?access_token=${token}`)
  },
  githubLoginUrl () {
    return Api.get('/api/login/oauth/url/github')
  }
}
