<template>
  <div class="position-nav">
    <div class="max-width">
      <router-link to="/" active-class="nav-active" exact>首页</router-link>
      <router-link to="/activitying" active-class="nav-active">正在进行</router-link>
      <router-link to="/advanceact" active-class="nav-active">活动预告</router-link>
      <router-link to="/previousact" active-class="nav-active">往期活动</router-link>
      <router-link to="/">历届作品</router-link>
      <router-link to="/">我的全部作品</router-link>
      <span>评课管理</span>
    </div>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
import IndexHeader from "./IndexHeader";
export default {
  name: "layOut",
  data() {
    return {
      // topNav:[]
       
    };
  },

  computed:{
    ...mapGetters(["topNav"])
  },
  methods:{
    ...mapActions(["getHeaderData"])
  },
  mounted(){
    this.getHeaderData()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .position-nav{
    height: 56px;
    line-height: 56px;
    font-size: 18px;
    background: rgba(88,71,193, .5);
    position: absolute;
    left: 0;
    top:133px;
    right: 0;
    bottom: 0;
    z-index: 2;
  }
  .position-nav a{
    display: block;
    float: left;
    color: #fff;
    padding: 0 25px;
  }
  .position-nav a:hover{
    background: #5847c1
  }
  /* top导航 */
  .max-width {
    width: 1200px;
    margin: 0 auto;
  }
  .nav-active{
   background: #5847c1
  }
  .position-nav span{
    display: block;
    background: #c1c1e8;
    width: 86px;
    height: 30px;
    font-size: 14px;
    color: #fff;
    text-align: center;
    line-height: 30px;
    float: right;
    margin-top: 12px;
    border-radius: 4px
  }
</style>
