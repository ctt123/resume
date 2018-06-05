<template>
  <div class="hello">
    <el-row :gutter="10">
      <el-col :span="8">
        <div class="grid-content bg-purple-dark left">
          <div class="avatar-box">
            <div class="avatar">
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="16"><div class="grid-content bg-purple-dark">right</div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="stylus" scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
   margin-bottom: 0;
 }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.avatar-box{
  width:100%;
  background-color: #fff;
  position:relative;
}
.avatar-box:before {
  content: '';
  height: 0;
  display: inline-block;
  padding-top: 100%;
}
.avatar{
  width: 100px;
  height: 100px;
  background-color: grey;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  border:10px solid #fff;
  position:absolute;
  top:50%;
  left:50%;
  margin-left:50px;
  margin-top:50px;
}
</style>
