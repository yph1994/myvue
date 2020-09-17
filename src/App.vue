<template>
  <div id="app">
    <router-link to="/helloword">helloworld</router-link>
    <router-link :to="{name:'table',params:{name:1,sex:'aa'}}">表格</router-link>
    <router-link :to="{name:'myapp',query:{id:1,sex:'bb'}}">测试</router-link>
    <router-view modelName="11"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
