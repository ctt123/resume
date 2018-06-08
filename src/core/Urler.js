export const build = (url, params) => {
  url += '?'
  for (let param in params) {
    url += param + '=' + params[param] + '&'
  }
  return url
}
