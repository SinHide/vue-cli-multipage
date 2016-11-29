<template>
  <div class="header">
    <div class="header-container">
      <a class="info" href="info.html">info</a>
      <router-link to="/foo">Add List</router-link>
      <router-link to="/bar">Show List</router-link>
      <a @click="goNext"> > </a>
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
      width: 220px;
      height: 50px;
      line-height: 50px;
      display: inline-block;
      cursor: pointer;
    }
  }
</style>
<script>
  export default{
    props: ['message'],
    data () {
      return {
        msg: 'hello vue',
        index: 0
      }
    },
    mounted: function () {
      console.log(this.message);
    },
    methods: {
      goNext: function () {
        window.location.href = `/module/index.html#/${this.index++}`
      }
    }
  }
</script>
