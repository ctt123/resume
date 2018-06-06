const labeler = new Map(
  [
    ['l_project_name', '/2'],
    ['l_login', '登录'],
    ['l_join', '注册'],
    ['l_username', '用户名'],
    ['l_password', '密码'],
    ['l_email', '邮箱'],
    ['l_phone_num', '手机号']
  ]
)

const Labeler = code => {
  const label = labeler.get(code)
  if (label) {
    return label
  } else {
    console.warn('you don\'t set the key of [' + code + '] a label')
    return code
  }
}
export default Labeler
