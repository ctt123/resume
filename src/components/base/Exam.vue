<template>
  <div class="exam">
    <button @click="addPrice">add a price</button>
    <div v-for="(p,index) in prices" :key="index">
      <label>
        price:
        <input type="text" v-model="prices[index]"/>
      </label>
      <button @click="removePrice(index)">remove</button>
    </div>
    <div>
      <label>
        expression
        <textarea @input="exChange" v-model="expression"></textarea>
      </label>
    </div>
    <div>total: {{total}}</div>

    <div style="display: flex">
      <div style="width: 40%;">
        <div style="margin-top: 10px;" v-for="(v,k) in github" :key="k">
          {{k}}:
          <input @input="editUrl" style="width: 300px" type="text" v-model="github[k]">
        </div>
      </div>

      <div>
        <textarea @input="editJson" rows="40" cols="120" v-model="githubJson"></textarea>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Exam',
  data () {
    return {
      prices: [0],
      expression: '',
      github: {},
      githubJson: ''
    }
  },
  computed: {
    total () {
      return this.prices.reduce((a, b) => parseInt(a) + parseInt(b), 0)
    }
  },
  watch: {
    prices () {
      if (this.prices.length > 0) {
        this.expression = this.prices.reduce((a, b) => a + '+' + b)
      } else {
        this.expression = ''
      }
    }

  },
  methods: {
    addPrice () {
      this.prices.push(0)
    },
    removePrice (i) {
      this.prices.splice(i, 1)
    },
    exChange (event) {
      let val = event.target.value
      this.prices = val.split('+')
    },
    editUrl () {
      this.githubJson = JSON.stringify(this.github, null, '\t')
    },
    editJson () {
      this.github = JSON.parse(this.githubJson)
    }
  },
  mounted () {
    this.axios.get('https://api.github.com').then(resp => {
      this.github = resp.data
      this.githubJson = JSON.stringify(this.github, null, '\t')
    })
  }
}
</script>

<style scoped>
  .exam > * {
    margin-top: 20px;
  }
</style>
