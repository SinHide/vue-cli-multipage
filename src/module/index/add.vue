<template>
  <div id="add">
    <div class="form-container">
      <div class="input-area">
        <span>userName: </span>
        <input type="text" v-model="username">
      </div>
      <div class="input-area">
        <span>nickName: </span>
        <input type="text" v-model="nickname">
      </div>
      <div class="input-area">
        <span>addr: </span>
        <select v-model="addr">
          <option value="杭州">杭州</option>
          <option value="嘉兴">嘉兴</option>
          <option value="宁波">宁波</option>
        </select>
      </div>
      <div class="input-area">
        <button @click="addList">submit</button>
      </div>
    </div>
    <ul>
      <li v-for="(user, index) in userList">
        {{user.username}}
        {{user.age}}
        {{user.addr}}
        {{user.nickname}}
        <a @click="deleteItem(index)"> delete </a>
      </li>
    </ul>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  #add {
    height: 800px;
    font-size: 16px;
    margin-left: 100px;
    .form-container {
      margin-top: 100px;
      .input-area {
        text-align: left;
        font-size: 16px;
        span {
          width: 100px;
          display: inline-block;
        }
        input {
          height: 30px;
          width: 300px;
          margin-bottom: 20px;
        }
        select {
          border: 1px solid;
          width: 100px;
        }
        button {
          height: 30px;
          background: #bf1f2e;
          color: #fff;
          border: 0;
          margin-top: 20px;
          width: 100px;
        }
      }
    }
    ul{
      text-align: left;
      margin-top: 100px;
    }
  }
</style>
<script>
  export default {
    data () {
      return {
        addr: '杭州',
        userList: []
      }
    },
    methods: {
      addList: function () {
        this.userList.push({
          username: this.username,
          nickname: this.nickname,
          addr: this.addr
        })
      },
      deleteItem: function (i) {
        this.userList.splice(i, 1)
      }
    }
  }
</script>
