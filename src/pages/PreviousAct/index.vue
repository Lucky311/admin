<template>
  <div class="advance-act">
    <IndexHeader/>
    <PositionNav/>
    <Carousel/>
    <div class="activity-list">
      <div class="activity-tit">
        <h1>活动列表</h1>
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
      pagePre:"上一页" 
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
/* content */ 
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
