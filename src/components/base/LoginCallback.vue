<template>

  <div>
    跳转中=======请稍后===
  </div>
</template>

<script>

import BaseApi from '../../api/base/BaseApi'
import LoginUserRepository from '../../core/model/LoginUserRepository'
import LoginUser from '../../core/model/LoginUser'

export default {
  name: 'LoginCallback',
  mounted () {
    let token = this.$route.query.token
    BaseApi.githubUser(token).then(data => {
      LoginUserRepository.save(new LoginUser(data.id, data.name, data.avatar_url, data.access_token, new Date()))
    })
  }
}
</script>

<style scoped>

</style>
