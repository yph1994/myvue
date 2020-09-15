<template>
  <div>
      <mytext></mytext>
      <mytext2>mytext2的插槽</mytext2>
  </div>
</template>

<script>

  export default {
    name:'name',
    mounted(){
      console.log(this.$route.query)
    },
    data() {
      return {
      }
    },
    methods: {
    
    }
  }
</script>