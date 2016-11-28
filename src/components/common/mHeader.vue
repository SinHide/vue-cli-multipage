<template>
  <div class="header">
    <div class="header-container">
      <a class="info" href="info.html">info</a>
      <router-link to="/foo">Add List</router-link>
      <router-link to="/bar">Show List</router-link>
    </div>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  *{
    margin: 0;
  }
  body {
    background-color: #fff;
    .header{
      width: 100%;
      height: 50px;
      background: #fffccc;
      .header-container{
        width: 910px;
        margin: 0 auto;
      }
    }
    a{
      width: 300px;
      height: 50px;
      line-height: 50px;
      display: inline-block;
    }
  }
</style>
<script>
  export default{
    data () {
      return {
        msg: 'hello vue'
      }
    }
  }
</script>
