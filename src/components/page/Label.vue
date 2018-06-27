<template>
  <span>{{label}}</span>
</template>

<script>
import Labeler from '@/core/Labeler.js'

export default {
  name: 'Label',
  props: {
    code: {
      type: String,
      require: true
    }
  },
  computed: {
    label () {
      return Labeler(this.code)
    }
  }
}
</script>
