<template>
  <div>
      <mytext></mytext>
      <mytext2>mytext2的插槽</mytext2>
      <div>{{modelName}}</div>
      <el-button @click="go">test</el-button>
      <el-button @click="go2">test2222</el-button>
      <div>wode </div>
      <!-- <router-link to="/myapp/text">my</router-link> -->
      <div>
      <router-view ></router-view>
      </div>
  </div>
</template>

<script>

  export default {
    props:{
      modelName:{
        type:String,
        validator (value) {   return (value.length >1)  } 
      }
    },
    name:'name',
    mounted(){
      console.log(this.$route.query)
     console.log("this.$route.query",this.modelName)
    },
    data() {
      return {
      }
    },
    methods: {
      //router-view 可以props传参
      //路由嵌套就可以实现局部刷
      // 不会，
      go(){
        console.log(" this.$route",this.$route)
        console.log(" this.$router",this.$router)
        this.$router.replace({
          path:"/myapp/text2"
          }
        )
      },
      // 会添加history
       go2(){
        console.log(" this.$route",this.$route)
        console.log(" this.$router",this.$router)
        this.$router.push({
          path:"/myapp/text"
          }
        )
      }
    }
  }
</script>