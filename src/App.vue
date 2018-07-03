<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default {
  name: 'App',
  data () {
    return {}
  },
  methods: {}
}
</script>
<style>

  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
  }
</style>
