<template>
  <view class="login">
    <view class="login_feedback">{{feedback}}</view>
    <view class="login_input">
      <input type="text" v-model="username">
      <input type="text" v-model="password">
    </view>
    <view class="login_btn" @click="handleLogin">登录</view>
  </view>
</template>

<script>
export default {
    data(){
        return {
            username:"",
            password:"",
            feedback:""
        }
    },
    methods:{
        handleLogin() {
            var that = this;
            this.request({
                method:"POST",
                url:"http://localhost/login",
                header:{'content-type':'application/json'},
                data:{"username":this.username,"password":this.password}
            }).then(res=>{
                that.feedback = res.data.token;
                this.token = res.data.token;
                console.log(res)
            })
        }
    }
}
</script>

<style lang="scss">
view.login {
  view.login_feedback {

  }

  view.login_input {
    input {

    }
  }

  view.login_btn {

  }
}

// .login{
//     width: 20%;
//     .login_feedback{}
//     .login_input{}
//     .login_btn{
//         background-color: aqua;
//         color: white;
//         border: 5rpx solid white;;
//     }
// }
</style>