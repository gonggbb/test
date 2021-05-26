<template>
  <div>
      <el-alert
         title="欢迎使用element"
         type="success"
         effect="dark">
     </el-alert>
  </div>
</template>

<script>
  export default {
    mounted () {
       this.$axios({
                method:"get",
                url:"/text.json",
                dataType:'json'
            }).then(res=>{
              console.log("!!!!!!!!!!!",res)
            }).catch(err=>{
              console.log(err)
            })
    }
    
  }
</script>

<style lang="scss" scoped>

</style>
