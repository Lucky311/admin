<template>
  <div class="activity-page">
    <div class="old-activity" v-for="(el,index) in oldActivity" :key="index">
      <dl class="wonderful-activity">
        <dt><img :src="el.thumb"></dt>
        <dd class="old-activity-tit">{{el.tit}}</dd>
        <dd class="old-activity-time">{{el.time}}</dd>
        <dd class="detail"><i>参赛作品</i><span>{{el.zuopin}}</span></dd>
        <dd class="detail"><i>参赛人数</i><span>{{el.peoNum}}</span></dd>
      </dl>
      <ul>
        <li v-for="(el,index) in el.productions" :key="index">
          <img :src="el.url">
          <span class="introduce">
            <h4>{{el.name}}</h4>
            <div><i><img :src="el.url"></i><p><span class="people"><b>{{el.people}}</b><b>{{el.subject}}</b></span><span class="school">{{el.school}}</span></p></div>
          </span>
        </li>
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
    ...mapGetters(["oldActivity"])
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
.activity-page{
  margin-bottom: 50px
}
.old-activity{
  width: 1180px;
  height: 364px;
  border: 1px solid #e4e4e4;
  border-radius: 8px;
  margin-bottom: 20px
}
.wonderful-activity{
  width: 300px;
  height: 150px;
  float: left;
}
.wonderful-activity dd{
  padding-left: 10px
}
.wonderful-activity dd i{
  display: block;
  width: 86px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  border-radius: 14px;
  float: left;
  background: #5847c1;
  color: #fff;
}
.wonderful-activity dd span{
  float: left;
  color: #5847c1;
  margin-left: 20px
}
.detail{
  height: 28px;
  line-height: 28px;
  margin-bottom: 20px
}
.old-activity ul{
  width: 855.5px;
  float: left;
  margin-left: 22.5px;
  /* margin-right: 2.5px; */
  margin-top:10px;
}
.old-activity ul li{
    float: left;
    margin: 0 17.5px;
    margin-bottom: 10px;
    position: relative;
}
.old-activity ul img{
  display: block;
  width: 250px;
  height: 166px;
  border-radius: 8px;
}
.old-activity-tit{
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 20px;
  color: #333;
}
.old-activity-time{
  font-size: 14px;
  color: #999;
  margin-bottom: 20px;
}
.old-activity ul li:hover .introduce{
  display: block;
}
.introduce{
  display: block;
  width: 250px;
  height: 166px;
  display: none;
  color: #fff;
  text-align: center;
  background: #5847c1;
  position: absolute;
  left: 0;
  top:0;
  border-radius: 8px;
  background: -webkit-linear-gradient(left top, rgba(212,128,235, .75), rgba(251,201,143, .75)); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(bottom right, rgba(212,128,235, .75), rgba(251,201,143, .75)); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(bottom right, rgba(212,128,235, .75), rgba(251,201,143, .75)); /* Firefox 3.6 - 15 */
  background: linear-gradient(to bottom right, rgba(212,128,235, .75), rgba(251,201,143, .75)); /* 标准的语法（必须放在最后） */
  
}
.introduce h4{
  font-size: 18px;
  padding: 40px 0 20px;
}
.introduce div{
  height: 48px;
  text-align: left
}
.introduce div i{
  display: block;
  float: left;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-left: 15px;
}
.introduce div i img{
  width: 48px;
  height: 48px;
  border:1px #fff solid;
  border-radius: 50%;
}
.introduce div p{
  width: 180px;
  float: left;
}
.people{
  display: block;
  padding-left:5px; 
  margin-top: 4px;
  
}
.people b{
  padding-right: 20px
}
.school{
  margin-top: 10px;
  display: block;
  padding-left:5px; 
  font-size: 14px
}
</style>
