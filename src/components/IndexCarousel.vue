<template>
  <div class="banner-index">
    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
      <swiper-slide v-for="(el,index) in bannerData" :key="index" :style="`background:url(${el.url}) center;background-size: 100% 590px;`"></swiper-slide>
    </swiper>
    <!-- swiper2 Thumbs -->
    <div class="thumbnail">
      <div class="swiper-button-next" slot="button-next"></div>
        <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
          <swiper-slide v-for="(el,index) in bannerData" :key="index" :style="`background:url(${el.url}) center no-repeat; background-size: 280px 140px;`">
            <span class="tit">基数大</span>
          </swiper-slide>
        </swiper>
      <div class="swiper-button-prev" slot="button-prev"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "bannerIndex",
  data() {
    return {
      swiperOptionTop: {
        speed:300,
        // autoplay : {
        //   delay:1000
        // },
        spaceBetween: 10,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        slidesPerView: 4,
        touchRatio: 0.2,
        // loopAdditionalSlides : 3,
        centeredSlides: true,
        loop: true,
        // loopFillGroupWithBlank: true,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        slideToClickedSlide: true,
      }
    };
  },
  computed: {
    ...mapGetters(["headerTop", "bannerData"])
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner-index {
  height: 590px;
}
.swiper-container {
  /* position: realtive; */
}
.swiper-slide {
  background-size: 100%;
  
}
.gallery-top {
  height: 590px;
  width: 100%;
}
.thumbnail {
  height: 150px;
  width: 1308px;
  position: absolute;
  margin: 0 auto;
  top: 573px;
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
  width: 280px!important;
  height: 140px;
  margin-top: 10px;
  border: 1px #fff solid;
  border-radius: 4% 4% 0 0;
}
.gallery-thumbs .swiper-slide:hover .tit{
  background: #f00;
  height: 150px!important;
}
.gallery-thumbs .swiper-slide-active {
  background-size: 300px 150px!important;
  margin-top: 0px;
  width: 300px!important;
  height: 150px;
  border-radius: 4% 4% 0 0;
}
.gallery-thumbs .swiper-slide-active .tit{
   width: 100%;
   margin-top:112px;
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
  width: 280px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  color: #fff;
  background: rgba(88,71,193, .5);
  margin-top:102px;
}
/* .swiper-slide:hover .tit{
    height: 100%;
  } */
</style>
