<template>
  <div id="app">
    <header>
      <ul>
        <li>用户管理系统</li>
        <li><router-link to="/">主页</router-link></li>
        <li><router-link to="/About">关于我们</router-link></li>
      </ul>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
*{margin: 0;padding: 0}
header{border-bottom: 1px #ddd solid}
header ul{width: 80%;margin:0 auto;padding: 10px 0;}
ul li{list-style-type: none;display: inline-block}
  .center{margin: 0 auto;width: 80%}
</style>
