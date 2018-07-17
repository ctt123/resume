<template>
  <div class="one">
    <span @click="test">test</span>
  </div>
</template>
<script>
export default {
  name: 'One',
  methods: {
    test () {
      this.$router.push({name: 'signIn'})
    }
  }
}
</script>
<style lang="sass">
  .one
    height: 100vh
</style>
