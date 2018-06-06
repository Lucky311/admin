<template>
  <div class="footer-page">
    <!-- top导航 -->
    <div class="footer">
      CopyRight©2018 伟东云教育集团 版权所有
      <div class="tel-footer"><img src="/static/images/tel-footer.png"></div>
    </div>
    
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
  .footer-page{
    height: 98px;
    line-height: 98px;
    background: #f2f2f2;
  }
  .footer{
    width: 1200px;
    margin: 0 auto;
    color: #666;
    padding-left: 50px;
    position: relative;
  }
  .tel-footer{
    position: absolute;
    top:-15px;
    right: 0;
  }
  
</style>
