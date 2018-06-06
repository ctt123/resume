import Api from '../Api'

export default {
  join: (user) => {
    return Api.post('/api/v1/join', user)
  }
}
