import axios from 'axios'
import { Message } from 'element-ui'
import Labeler from '../core/Labeler'
import i18n from '../i18n'

export const Method = {
  POST: 'post',
  GET: 'get',
  DELETE: 'delete',
  PATCH: 'patch'
}

const Api = {
  post: (url, data, headers) => api(url, data, Method.POST, headers),
  get: (url, params, headers) => api(url, params, Method.GET, headers),
  delete: (url, data) => api(url, data, Method.DELETE),
  patch: (url, data) => api(url, data, Method.PATCH)
}

const api = (url, data, method = 'get', headers) => {
  return new Promise((resolve, reject) => {
    axios({method, url: url, data, params: method === 'get' ? data : {}, headers: headers}).then((res) => {
      if (res.status <= 200) {
        resolve(res.data)
      } else if (res.status > 200 && res.status < 300) {
        resolve(res.data)
        Message.success(Labeler(res.data.code))
      } else {
        resolve(res.data)
      }
    }).catch((error) => {
      const res = error.response
      if (res.status >= 400 && res.status < 500) {
        resolve(res.data)
        Message.error(i18n.t('error.' + res.data.error))
      } else {
        resolve(res.data)
        i18n.$t('')
        Message.error(Labeler('e_' + res.data.error))
      }
    })
  })
}
export default Api
