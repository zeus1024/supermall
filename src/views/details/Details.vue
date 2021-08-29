<template>
  <div class="details">
    <details-nar-bar></details-nar-bar>
    <details-swiper :top-images="topImages"></details-swiper>
    详情页有待开发
    <p>商品ID：{{iid}}</p>
  </div>
</template>

<script>
import DetailsNarBar from './childsCpn/DetailsNarBar.vue';
import DetailsSwiper from './childsCpn/DetailsSwiper.vue';

import {getDetails} from 'network/details.js'

export default {
  components: { DetailsNarBar, DetailsSwiper },
  name: "Details",
  data(){
    return{
      iid:null,
      topImages:[],
    }
  },
  created() {
    // 1、获取商品iid
    this.iid = this.$route.params.iid;
    
    // 2、获取商品数据
    getDetails(this.iid)
    .then( res => {
      console.log(res);
      this.topImages = res.result.itemInfo.topImages;
    })

  },
  methods:{

  },
}
</script>

<style>

</style>