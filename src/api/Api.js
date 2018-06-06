import axios from 'axios'
import { Message } from 'element-ui'
import Labeler from '../core/Labeler'

export const Method = {
  POST: 'post',
  GET: 'get',
  DELETE: 'delete',
  PATCH: 'patch'
}

const Api = {
  post: (url, data) => api(url, data, Method.POST),
  get: (url, params) => api(url, params, Method.GET),
  delete: (url, data) => api(url, data, Method.DELETE),
  patch: (url, data) => api(url, data, Method.PATCH)
}

const api = (url, data, method = 'get') => {
  return new Promise((resolve, reject) => {
    axios({method, url, data, params: method === 'get' ? data : {}}).then((res) => {
      if (res.status <= 200) {
        resolve(res.data)
      } else if (res.status > 200 && res.status < 300) {
        resolve(res.data)
        Message.success(Labeler(res.data.code))
      } else if (res.status > 300 && res.status < 400) {
        reject(res.data)
        Message.error(Labeler(res.data.code))
      } else if (res.status >= 400 && res.status < 500) {
        reject(res.data)
        Message.error(Labeler(res.data.code))
      } else {
        reject(res.data)
        Message.error(Labeler(res.data.code))
      }
    }).catch((error) => {
      reject(error)
    })
  })
}
export default Api
