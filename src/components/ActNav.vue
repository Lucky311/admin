<template>
  <div class="act-nav">
    <div class="max-width">
      <router-link to="/" active-class="nav-active" exact>首页</router-link>
      <router-link to="/activitying" active-class="nav-active">正在进行</router-link>
      <router-link to="/advanceact" active-class="nav-active">活动预告</router-link>
      <router-link to="/previousact" active-class="nav-active">往期活动</router-link>
      <router-link to="/">历届作品</router-link>
      <router-link to="/">我的全部作品</router-link>
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
  .act-nav{
    height: 56px;
    line-height: 56px;
    font-size: 18px;
    background: #7a81df;
  }
  .act-nav a{
    display: block;
    float: left;
    color: #fff;
    padding: 0 25px;
  }
  /* top导航 */
  .max-width {
    width: 1200px;
    margin: 0 auto;
  }
  .nav-active{
   background: #5847c1
  }
</style>
