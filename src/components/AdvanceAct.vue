<template>
  <div class="previous-acti">
    <div class="new-activity" v-for="(el,index) in Activitying" :key="index">
      <img :src="el.url" class="new-activity-img">
      <p v-if="el.status==1" class="status status1">可参加<span>距离截稿还有10天</span></p>
      <p v-if="el.status==0" class="status status0">作品评比中</p>
      <ul>
        <li class="new-activity-tit">{{el.tit}}</li>
        <li class="new-activity-time">活动时间：{{el.time}}</li>
        <li class="new-activity-intro">简&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;介：<span>{{el.intro}}</span></li>
        <li><router-link to="/">{{el.zhinan}}</router-link><router-link to="/">{{el.zhanshi}}</router-link><router-link to="/">{{el.fabu}}</router-link></li>
      </ul>

    </div>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  name: "layOut",
  data() {
    return {
      status:0
       
    };
  },
  computed:{
    ...mapGetters(["Activitying"])
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
.new-activity{
  width: 1180px;
  height: 300px;
  border: 1px solid #e4e4e4;
  border-radius: 8px;
  margin-top: 20px;
  position: relative;
}
.new-activity ul{
  width: 506px;
  float: left;
  margin-left: 20px;
  margin-right: 52px
}
.new-activity ul a{
  display: block;
  width: 106px;
  height: 48px;
  line-height: 48px;
  border: 1px #5874c1 solid;
  border-radius: 8px;
  text-align: center;
  float: left;
  margin-top: 30px;
  margin-right: 30px;
}
.new-activity ul a:hover{
  background: #5874c1;
  color: #fff;
}
.new-activity-img{
  width: 600px;
  height: 300px;
  float: left;
}
.new-activity-tit{
  margin: 30px 0 50px;
  font-size: 22px;
  color: #333;
}
.new-activity-tit:hover{
  color: #15a4ff;
}
.new-activity-time{
  margin-bottom: 20px;
}
.new-activity-intro{

}
.new-activity-intro span{
  color: #999;
  line-height: 1.4
}
.status{
  height: 32px;
  line-height: 32px;
  color: #fff;
  position: absolute;
  top:5px;
  left: 0;
}
.status1{
  width: 166px;
  background: url(/static/images/join.png) no-repeat;
  background-size: 100%
}
.status1 span{
  font-size: 12px
}
.status0{
  width: 100px;
  background: url(/static/images/joining.png) no-repeat;
  background-size: 100%
}
</style>
