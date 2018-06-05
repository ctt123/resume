<template>
  <div class="chat">
    <div class="chat-container">
      <el-row>
        <el-col :span="6">
          <div>nihao</div>
        </el-col>
        <el-col :span="18" :gutter="20">
          <!--<div class="chat-box">-->
            <el-row class="chat-message" v-for="m in messages" :key="m.id">
              <el-row>
                <el-col :span="18" class="chat-message-left">
                  <el-col :span="2" class="chat-message-avatar">
                    <p>
                      {{m.fromName}}
                    </p>
                  </el-col>
                  <el-col :span="22">
                    <p class="chat-message-content">
                      {{m.content}}
                    </p>
                  </el-col>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="18" :offset="6" class="chat-message-right">
                  <el-col :span="22">
                    <p class="chat-message-content right">{{m.content}}</p>
                  </el-col>
                  <el-col :span="2" class="chat-message-avatar">
                    <p>
                      {{m.fromName}}
                    </p></el-col>
                </el-col>
              </el-row>
            </el-row>
            <el-row class="chat-send">
              <el-col :span="18">
                <el-input type="textarea" v-model="message.content"></el-input>
              </el-col>
              <el-col :span="6">
                <el-button @click="sendMsg" type="primary">发送</el-button>
              </el-col>
            </el-row>
          <!--</div>-->
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ws: null,
        message: {
          toId: 1,
          fromId: 3
        },
        messages: []
      }
    },
    methods: {
      sendMsg() {
        if (!this.ws) {
          this.connect()
        }
        this.ws.send(JSON.stringify(this.message))
      },
      connect() {
        this.ws = new WebSocket('ws://192.168.27.254:11111/myHandler')
      },
      listMessages() {
        this.axios.get('/api/v1/chat/3/messages').then((data) => {
          this.messages = data.data
          console.log(data)
        })
      }
    },
    mounted() {
      this.connect()
      this.listMessages()
      this.ws.onmessage = (resp) => {
        this.listMessages()
      }
    }
  }
</script>

<style scoped lang="sass">
  .chat
    background-color: #eef0f5
    padding: 20px
    .chat-container
      width: 1000px
      background-color: #fff
      margin: auto
      .chat-message
        .chat-message-left
          margin: 10px 0
          .chat-message-avatar
            padding: 10px 0
          .chat-message-content
            display: inline-block
            background-color: #eef0f5
            padding: 10px 0
        .chat-message-right
          margin: 10px 0
          .chat-message-avatar
            padding: 10px 0
          text-align: right
          .chat-message-content
            display: inline-block
            padding: 10px 0
            background-color: #8ef54b
            float: right
  .chat-box
    display: flex
</style>
