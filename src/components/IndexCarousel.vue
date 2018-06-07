<template>
  <div>
      <div class="conner" >
       <!-- swiper1 -->
<!--        
          <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
            <swiper-slide v-for="(el,index) in bannerData" :key="index" :style="`background:url(${el.url}) center;background-size: 100% 590px;`"></swiper-slide>
          </swiper> -->
       
      <!-- swiper2 Thumbs -->
      <!-- <div class="swiper2">
        <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
          <swiper-slide v-for="(el,index) in bannerData" :key="index" :style="`background:url(${el.url}) center;background-size: 100% 140px;`"><span class="tit">基数大</span></swiper-slide>
        </swiper>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      </div> -->
    <!--  -->
              <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
            <swiper-slide style="background-image:url(http://castic.xiaoxiaotong.org/images/banners/b1.jpg)"></swiper-slide>
            <swiper-slide style="background-image:url(http://castic.xiaoxiaotong.org/images/banners/b2.jpg)"></swiper-slide>
            <swiper-slide style="background-image:url(http://castic.xiaoxiaotong.org/images/banners/b3.jpg)"></swiper-slide>
            <swiper-slide style="background-image:url(http://castic.xiaoxiaotong.org/images/banners/b5.jpg)"></swiper-slide>
            <swiper-slide style="background-image:url(http://castic.xiaoxiaotong.org/images/banners/b4.jpg)"></swiper-slide>
          </swiper>
       
      <!-- swiper2 Thumbs -->
      <div class="swiper2">
        <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
          <swiper-slide style="background-image:url(http://castic.xiaoxiaotong.org/images/banners/b1.jpg)" ><span class="tit">基数大</span></swiper-slide>
          <swiper-slide style="background-image:url(http://castic.xiaoxiaotong.org/images/banners/b2.jpg)"><span class="tit">基数大</span></swiper-slide>
          <swiper-slide style="background-image:url(http://castic.xiaoxiaotong.org/images/banners/b3.jpg)"><span class="tit">基数大</span></swiper-slide>
          <swiper-slide style="background-image:url(http://castic.xiaoxiaotong.org/images/banners/b5.jpg)"><span class="tit">基数大</span></swiper-slide>
          <swiper-slide style="background-image:url(http://castic.xiaoxiaotong.org/images/banners/b4.jpg)"><span class="tit">基数大</span></swiper-slide>
        </swiper>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  name:"news",
   data() {
       return {
        content: '<h1>咨询管理</h1>',
        swiperOptionTop: {
          autoplay : {
            delay:3000
          },
          spaceBetween: 11,
          loop: true,
          loopedSlides: 5, //looped slides should be the same
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        swiperOptionThumbs: {
          spaceBetween: 11,
          slidesPerView: 4,
          touchRatio: 0.2,
          loop: true,
          // centeredSlides: true,
          loopedSlides: 5, //looped slides should be the same
          slideToClickedSlide: true,
        }
        
      }
    },
    computed: {
      ...mapGetters([ "bannerData","bannerData1"])
    },
    methods: {
      ...mapActions(["getHeaderData"])
    },
    mounted() {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.swiper
        const swiperThumbs = this.$refs.swiperThumbs.swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
    }
  }
</script>
<style scoped>
.conner{
  /* width: 1200px; */
  position: relative;
  /* margin: 0 auto; */
}
  .swiper-container {
    /* background-color: #000; */
  }
  .swiper-slide {
    background-size: cover;
    /* background-position: 50%!important; */

  }
  .gallery-top {
    height: 590px;
    width: 100%;
  }
  .swiper2{
    height: 150px;
    width: 1308px;
    position: absolute;
    margin: 0 auto;
    /* top: 440px; */
    right: 0;
    left: 0;
    bottom: 0;
  }
  .gallery-thumbs {
    width: 1200px;
    height: 150px;
    box-sizing: border-box;
  }
  .gallery-thumbs .swiper-slide {
    width: 280px;
    height: 140px;
    margin-top: 10px;
    border: 1px #fff solid;
    border-radius: 4% 4% 0 0;
  }
  .gallery-thumbs .swiper-slide:hover .tit{
    height: 150px;
  }
  .gallery-thumbs .swiper-slide-active {
    background-size: 300px 150px!important;
    margin-top: 0px;
    width: 300px!important;
    height: 150px;
    border-radius: 4% 4% 0 0;
    
  }
  .gallery-thumbs .swiper-slide-active .tit{
    width: 298px;
    margin-top:112px
  }
  .gallery-thumbs .swiper-slide:hover .tit{
    margin-top:0px;
    line-height: 140px;
    font-size: 24px
    
  }
  .gallery-thumbs .swiper-slide-active:hover .tit{
    width: 298px;
    line-height: 150px;
    margin-top:0px;
    font-size: 24px
  }
  .swiper-button-next,
  .swiper-button-prev {
    width: 24px;
    height: 42px;
  }
  .swiper-button-next {
    background: url(/static/images/thumb-right.png)
  }
  .swiper-button-prev {
    background: url(/static/images/thumb-left.png)
  }
 .tit {
  display: block;
  width: 100%;
  height: 38px;
  line-height: 38px;
  text-align: center;
  color: #fff;
  background: rgba(88,71,193, .5);
  margin-top:102px;
  border-radius: 4% 4% 0 0;
}
  /* .swiper-slide:hover .tit{
    height: 150px;
  } */
</style>