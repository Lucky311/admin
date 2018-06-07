<template>
  <div class="banner-index">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(el,index) in bannerData" :key="index" :style="`background:url(${el.url}) center;background-size: 100% 590px;`"></swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "bannerIndex",
  data() {
    return {
      swiperOption: {
        // speed: 300,
        // autoplay: {
        //   delay: 1000
        // },
        pagination: {
            el: '.swiper-pagination',
        },
        spaceBetween: 10,
        loop: true,
        slideToClickedSlide: true
      }
    };
  },
  computed: {
    ...mapGetters(["bannerData"])
  },
  methods: {
    ...mapActions(["getHeaderData"])
  },
  mounted() {
    this.getHeaderData()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner-index {
  height: 590px;
}
.swiper-container {
  position: realtive;
    height: 590px;
}
.swiper-slide {
  background-size: cover;
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
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 0;
  height: 150px;
  box-sizing: border-box;
}
.gallery-thumbs .swiper-slide {
  width: 280px !important;
  height: 140px;
  margin-top: 10px;
  border: 1px #fff solid;
  border-radius: 4% 4% 0 0;
}
.gallery-thumbs .swiper-slide:hover .tit {
  background: #f00;
  height: 150px !important;
}
.gallery-thumbs .swiper-slide-active {
  background-size: 300px 150px !important;
  margin-top: 0px;
  width: 300px !important;
  height: 150px;
  border-radius: 4% 4% 0 0;
}
.gallery-thumbs .swiper-slide-active .tit {
  width: 100%;
  margin-top: 112px;
}
.swiper-button-next,
.swiper-button-prev {
  width: 24px;
  height: 42px;
}
.swiper-button-next {
  background: url(/static/images/thumb-right.png);
}
.swiper-button-prev {
  background: url(/static/images/thumb-left.png);
}
.tit {
  display: block;
  width: 280px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  color: #fff;
  background: rgba(88, 71, 193, 0.5);
  margin-top: 102px;
}
/* .swiper-slide:hover .tit{
    height: 100%;
  } */
</style>
