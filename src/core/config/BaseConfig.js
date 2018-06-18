const BaseConfig = {
  install(Vue, options){
    // 1. 添加全局方法或属性
    Vue.prototype.BaseConfig = {
      LOGIN_URL: 'http://localhost:12222/login?reidrectUri=http://localhost:8080/#/login/callback'
    }
  }
}
export default BaseConfig
