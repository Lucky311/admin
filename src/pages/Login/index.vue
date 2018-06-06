<template>
  <div class="login-page">
    <!-- top导航 -->
      <IndexHeader/>
      <ActNav/>
      <div class="login">
        <div class="login-form">
          <h1>用户登录</h1>
          <p class="user"><input v-model="value1"  placeholder="请输入账号"/></p>
          <span></span>
          <p class="password"><input v-model="value2"  placeholder="请输入密码"/></p>
          <span></span>
          <!-- @click="handleSubmit" -->
          <h2   @click="renderFunc">登录</h2>
        </div>
        
       
      </div>
      <Footer/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import IndexHeader from "@/components/IndexHeader";
import ActNav from "@/components/ActNav";
import Footer from "@/components/Footer";
export default {
  name: "Login",
  data() {
    return {
      value1: "",
      value2: ""
    };
  },
  components: {
    IndexHeader,
    ActNav,
    Footer
  },
  methods: {
    renderFunc() {
      this.$Message.config({
        top: 300,
        duration: 3
      });
      if (this.value1 == "") {
        console.log("请输入账号");
        this.$Message.info({
          // top: 50,
          duration: 30,
          render: h => {
            return h("span", ["请输入账号 "]);
          }
        });
      } else if (this.value2 == "") {
        console.log("请输入密码");
        this.$Message.error({
          render: h => {
            return h("span", ["请输入密码 "]);
          }
        });
      }

      // console.log(this.value1)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  width: 1200px;
  margin: 0 auto;
  background: url(/static/images/act-login.png) no-repeat left;
  /* background-size: 100%; */
  overflow: hidden;
  margin-bottom: 50px;
}
.login-form {
  margin-left: 677px;
  /* float: right; */
  margin-top: 214px;
  margin-bottom: 328px;
  padding-left: 75px;
}
.login-form h1 {
  font-size: 20px;
  text-align: center;
  margin-bottom: 30px;
}
.login-form p {
  width: 360px;
  border: 1px #ddd solid;
  border-radius: 4px;
  margin: 0 auto;
  /* background: url(/static/images/user.png) no-repeat left; */
  margin-bottom: 20px;
}
.user{
  background: url(/static/images/user.png) no-repeat 10px;
}
.password{
  background: url(/static/images/password.png) no-repeat 10px;
}
.login-form h2 {
  width: 360px;
  height: 38px;
  color: #fff;
  background: #7a81df;
  text-align: center;
  line-height: 38px;
  border-radius: 4px;
  margin: 0 auto;
}
.login-form input {
  width: 324px;
  height: 38px;
  margin-left: 34px;
  border: none;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #999;
  font-size: 14px;
}

::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #999;
  font-size: 14px;
}

input:-ms-input-placeholder {
  color: #999;
  font-size: 14px;
}

input::-webkit-input-placeholder {
  color: #999;
  font-size: 14px;
}
.ivu-message {
  top: 200px !important;
}
</style>
