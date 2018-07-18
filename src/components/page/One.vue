<template>
  <div class="one">
    <button @click="test" id="test">test</button>
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
