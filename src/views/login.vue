<template>
     <div class="all-screen">
        <div class="login">
           <div class="login-item">
             <el-alert v-if="loginStatus"
             title="账号密码错误"
             type="error"
             effect="dark">
           </el-alert>
           </div>
           <div class="login-item">
               <el-input 
              placeholder="账号"
              v-model="account">
              <i slot="suffix" class="el-input__icon el-icon-user"></i>
               </el-input>
           </div>
           <div class="login-item">
               <el-input
               type="password"
              placeholder="密码" 
              v-model="password" minlength="4" maxlength="8" size="8">
              <i slot="suffix" class="el-input__icon el-icon-lock"></i>
              </el-input>
           </div>
           <div class="login-item">
              <el-button @click="login"  type="primary"> 登录 </el-button>
           </div>
        </div>

      </div>   
</template>

<script>
        export default {
                data() {
                        return {
                                account: "",
                                password:"",
                                loginStatus:false,
                                timer:null,
                        }
                },
                methods: {
                        login() {
                           if(this.account=="admin"&&this.password=="123456"){
                                     console.log('this.account',this.account,this.password)
                                     this.loginStatus = false
                                     localStorage.setItem('loginSuccess',"login");
                                     this.$router.push({name:'main'})
                           }else{
                                this.loginStatus  = true
                                clearTimeout(this.timer)
                                this.timer = setTimeout(() => {
                                     this.loginStatus = false
                                }, 2000);
                           }
                        }
                },
        }
</script>

<style lang="scss" scoped>
.all-screen{
        width: 100%;
        height: 100vh;
        background-image: url("../assets/img/zimuge.jpg") ;
        background-repeat: no-repeat;
        background-size: 100% 100%;
}
.login{
        height: 400px;
        width: 400px;
        background: gray;
        opacity: 0.8;
        border-radius: 10px;
        //position: absolute;
        // top: 0;
        // left: 0;
        // bottom: 0;
        // right: 0;
        // margin: auto;
        //2
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -200px;//一半
        margin-left: -200px;

}

.login-item{
  margin: 20px;
  .el-button {
    width: 100%;
  }
}
.login-item:first-child{
  margin-top: 100px;
}

</style>