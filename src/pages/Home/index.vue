<template>
  <div class="layout">
<!--            header-Top             -->
    <IndexHeader></IndexHeader>
    <!-- topnav -->
      <PositionNav />
    <!-- banner-->
    <IndexCarousel></IndexCarousel>
    <div class="new-index">
        <div class="news-tit">
          <p class="new-tit">最新公告<span> / News</span></p><router-link to="/">更多</router-link>
        </div>
        <div class="news">
        <!-- swiper -->
        <div class="swiper-prev" slot="button-prev"></div> 
          <swiper :options="swiperOption" class="swiper-option">
            <swiper-slide v-for="(el,index) in newData" :key="index">
              <div>
                <span class="news-time"><b>{{el.time}}</b><i>{{el.year}}</i></span>
                <h3>{{el.tit}}</h3>
                <p>{{el.content}}</p>
              </div>
            </swiper-slide>
          </swiper>
        <div class="swiper-next" slot="button-next"></div>
      </div>
    </div>
    <Affix :offset-top="0" @on-change="change">
      <div class="topnav-fixed" v-if="status">
        <div class="max-width">
          <router-link to="/">首页</router-link>
          <router-link to="/">正在进行</router-link>
          <router-link to="/">活动预告</router-link>
          <router-link to="/">往期活动</router-link>
          <router-link to="/">历届作品</router-link>
          <router-link to="/">我的全部作品</router-link>
        </div>
      </div>
    </Affix>
    <!-- content -->
    <div class="content">
      <div class="content-tit new-activity">最新活动</div>
      <NewActivity/>
      <div class="content-tit old-activity">往期精品活动</div>
      <OldActivity/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import IndexHeader from "@/components/IndexHeader";
import IndexCarousel from "@/components/IndexCarousel";
import NewActivity from "@/components/NewActivity";
import OldActivity from "@/components/OldActivity";
import Footer from "@/components/Footer";
import PositionNav from "@/components/PositionNav";



import { mapGetters, mapActions } from "vuex";
export default {
  name: "layOut",
  data() {
    return {
      status: false,
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev'
        }
      }
    }
  },
  components: {
    IndexHeader,
    IndexCarousel,
    NewActivity,
    OldActivity,
    Footer,
    PositionNav
  },
  computed: {
    ...mapGetters(["newData"])
  },
  methods: {
    ...mapActions(["getHeaderData"]),
    change(status) {
      this.status = status;
      console.log(this.status);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout {
  /* margin: 0 auto; */
  position: relative;
}
.topnav {
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
.nav-active{
  background: #5847c1
}
.topnav-fixed{
  height: 56px;
  line-height: 56px;
  font-size: 18px;
  background:#fff;
  box-shadow: 0 1px 20px #000
}
.topnav-fixed a{
  display: block;
  float: left;
  color: #333;
  padding: 0 25px;
}
.topnav a {
  display: block;
  float: left;
  color: #fff;
  padding: 0 25px;
}
.max-width {
  width: 1200px;
  margin: 0 auto;
}
/*              最新公告              */ 
.new-index{
  height: 248px;
  background: #fafafa;
  padding-top: 10px;
}
.swiper-option{
  width: 1200px;
  margin: 0 auto;
  float: left;
  margin: 0 20px
}
.swiper-slide{
  padding-right: 25px;
  background: url(/static/images/border-right.png) no-repeat right;
}
.swiper-slide:last-of-type{
  background:none;
}
.swiper-slide h3{
  text-align: left;
  margin-bottom:10px; 
}
.swiper-slide h3:hover{
  color:#15a4ff;
  text-decoration: underline
}
.swiper-slide p{
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  height: 60px;
  text-align: left;
  line-height: 20px;
  font-size: 14px;
  color: #999
}
.news{
  width: 1308px;
  margin: 0 auto;
  text-align: center;
  height: 174px;
  padding: 0 10px
}
.news-tit{
  padding: 20px 0;
  height: 64px;
    width: 1200px;
  margin: 0 auto;
}
.news-tit a{
  float: right;
  color: #aaa;
  font-size: 14px;
}
.news-tit a:hover{
  color:#15a4ff;
  text-decoration: underline
}
.new-tit{
  float: left;
  font-size: 24px;
  color: #333;
}
.new-tit span{
  color: #aaa;
  font-family: Arial;
}
.swiper-next,
.swiper-prev{
  width: 24px;
  height: 42px;
  margin-top: 30px;
  cursor: pointer;
}
.swiper-next {
  float: right;
  background: url(/static/images/new-right.png) center
}
.swiper-prev {
    float: left;
  background: url(/static/images/new-left.png) center
}
.news-time{
  display: block;
  width: 68px;
  height: 48px;
  color: #333;
  border:1px solid #5847c1;
  /* padding-top: 5px; */
  margin-bottom: 20px
}
.news-time b{
  display: block;
  margin: 5px 0 
}
/* content */ 
.content{
  width: 1200px;
  margin: 0 auto;
}
.content-tit{
  font-size: 24px;
  color: #333;
  padding: 50px 0 20px;
  margin: 0 auto;
  padding-bottom: 10px;
  border-bottom: 2px solid #5847c1
}
.new-activity{
  width: 96px;
}
.old-activity{
  width: 144px;
  margin-bottom: 20px
}
</style>
