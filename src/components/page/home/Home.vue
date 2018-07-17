<template>
  <div>
    <de-header></de-header>
    <router-view/>
  </div>
</template>

<script>

import Vuex from 'vuex'
import Vue from 'vue'
import DeHeader from '../../core/DeHeader.vue';

Vue.use(Vuex)

export default {
  name: 'App',
  components: {DeHeader},
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style>
</style>
