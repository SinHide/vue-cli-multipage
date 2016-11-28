<template>
  <div id="list">
    <ul>
      <li v-for="user in userList.data">
        {{user.username}}
        {{user.age}}
        {{user.addr}}
        {{user.nickName}}
      </li>
    </ul>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  #list{
    height: 800px;
    font-size: 16px;
    ul{
      text-align: left;
      margin-top: 100px;
    }
  }
</style>
<script>
  import Vue from 'vue'
  import $http from 'vue-resource'
  Vue.use($http)
  export default {
    data () {
      return {
        userList: {}
      }
    },
    mounted: function () {
      this.getCustomers()
    },
    methods: {
      getCustomers: function () {
        this.$http.get('../../../static/test.json').then((response) => {
          this.$set(this.userList, 'data', response.data.data)
        })
      }
    }
  }
</script>

<style>
  #list {
    display: flex;
  }
</style>
