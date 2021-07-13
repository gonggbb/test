<template>
  <div id="app-main">
    <div id="nav">
      <router-link to="/main/home">组件使用</router-link> 
      <router-link to="/main/element">elemnt ui使用</router-link> 
      <router-link to="/main/echart">echart使用</router-link>
      <router-link to="/main/audio">音频使用</router-link>
      <router-link to="/main/video">视频使用</router-link>
      <router-link to="/main/probice3D">3D地图省级使用</router-link>
      <router-link to="/main/city3D">3D地图市级使用</router-link>
      <router-link to="/login" style="position: absolute;right: 5px;"> {{user.name}} 退出</router-link>
    </div>
    <div id="nav-body">
       <router-view/>
   
    </div>
  </div>
</template>

<script>
        import { mapState,  } from 'vuex'
        export default {
          computed: {
          	...mapState(['user',]),
          },
        }
</script>

<style lang="scss">
#app-main{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  width: 100%;
  height:100%;
}

#nav {
  display: flex;
  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 10px ;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#nav-body{
  // background: rgb(194, 196, 204);
}
</style>
