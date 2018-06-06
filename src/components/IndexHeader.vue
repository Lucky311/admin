<template>
  <div class="hd-header">
    <!-- top导航 -->
    <div class="top-header">
      <div class="max-width">
        <ul>
          <li v-for="(el,index) in topNav" :key="index"><img :src="el.url" >{{el.tit}}</li>
        </ul>
        <router-link to="/login"><p><img src="/static/images/login-top.png">登陆</p></router-link>
      </div>
    </div>
    <!-- logo -->
    <div class="index-logo"><img src="/static/images/top-logo.png"></div>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
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
  .hd-header{
    /* height: 113px; */
  }
  /* top导航 */
  .top-header{
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    color:#666;
    background: #f7f7f7;
  }
  .max-width{
    width: 1200px;
    height: 44px;
    margin: 0 auto;
  }
  .max-width p{
    font-size: 14px;
    color: #666;
    float: right;
    margin-right: 8px;
  }
  .top-header li{
    font-size: 16px;
    padding: 0 15px;
    float: left;
  }
  .top-header img{
    vertical-align: middle;
    margin-right: 5px;
  }
  /* logo */
  .index-logo{
    height: 89px;
    width: 1200px;
    line-height: 89px;
    padding-left:10px; 
    margin: 0 auto;
    background: #fff;
  }
</style>
