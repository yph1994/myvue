<template>
  <el-button type="success" @click=redirect()>测试</el-button>
</template>

<script>
  export default {
    name:'mytext',
    data() {
      return {
      }
    },
    methods: {
     redirect(){
         this.$router.replace('/table')
         console.log("aa")
     }
    }
  }
</script>