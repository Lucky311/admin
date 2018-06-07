<template>
  <div class="advance-act">
    <IndexHeader/>
    <PositionNav/>
    <Carousel/>
    <div class="activity-list">
      <div class="activity-tit">
        <h1>活动列表</h1>
      </div>
      <div class="old-year">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(el,index) in PreviousAct" :id="el.title" :key="index">{{el.title}}</swiper-slide>
        </swiper>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
      </div>
      <OldActivity />
      <Page :total="pageTotal" :page-size="pageSize" show-elevator show-total :styles="styles" :prev-text="pagePre"></Page>
    </div>
    
    <Footer/>
  </div>
</template>

<script>
import IndexHeader from "@/components/IndexHeader";
import Footer from "@/components/Footer";
import PositionNav from "@/components/PositionNav";
import Carousel from "@/components/Carousel";
import OldActivity from "@/components/OldActivity";


import { mapGetters, mapActions } from "vuex";
export default {
  name: "AdvanceAct",
  data() {
    return {
      status: false,
      pageTotal: 10,
      pageSize: 3,
      styles:{
        "background":""
      },
      pagePre:"上一页",
      swiperOption:{
        slidesPerView: 6,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
      on:{
        click: function(event){
          console.log(event.target.id);
        },
      },
      }
    }
  },
  components: {
    IndexHeader,
    Footer,
    PositionNav,
    Carousel,
    OldActivity
  },
  computed: {
    ...mapGetters(["PreviousAct"])
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
  .old-year{
    clear: both;
    width: 1102px;
    margin: 0 auto;
    position: relative;
    border: 1px solid #5745c0;
    margin-bottom: 20px;
  }
  .swiper-container {
    height: 46px;
    line-height: 46px;
    text-align: center;
    width: 1010px;
    
    /* border: 1px solid #5745c0 */
  }
  .swiper-slide{
    border-right: 1px solid #5745c0
  }
  .swiper-button-next,
  .swiper-button-prev {
    top:22px;
    width: 46px;
    height: 46px;
    border-right: 1px solid #5745c0
    /* background: #7a81df; */

  }
    .swiper-button-next {
    
    right: 0;
    background: #7a81df url(/static/images/old-right.png) no-repeat center;
  }
  .swiper-button-prev {
    left:0;
    border-right: 1px solid #5745c0;
    background: #7a81df url(/static/images/old-left.png) no-repeat center;
  }
.activity-list{
  width: 1180px;
  margin: 0 auto;
  margin-bottom: 50px
}
.activity-list ul{
  text-align: center;
  margin-top: 20px;
}
.activity-tit{
  font-size: 24px;
  color: #333;
  padding-bottom: 10px;
  text-align: center;
  margin: 50px 0 20px;
  height: 34px;
  border-bottom: 1px solid #e4e4e4;
}
.activity-tit h1{
  width: 126px;
  margin: 0 auto;
  padding-bottom: 8px;
  border-bottom: 2px solid #5847c1
}

</style>
