<template>
<div>
  <el-button type="success" @click=redirect()>测试2</el-button>
  <slot></slot>
</div>
</template>

<script>
  export default {
    name:'mytext2',
    data() {
      return {
      }
    },
    methods: {
     redirect(){
         this.$router.push('/table')
     }
    }
  }
</script>