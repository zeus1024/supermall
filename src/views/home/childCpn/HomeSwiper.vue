<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" :key="banners.acm">
      <a :href="item.link">
        <img :src="item.image" alt='kong' @load ="imageLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>

import {SwiperItem, Swiper} from "components/common/swiper/index.js"

export default {
  name:'HomeSwiper',
  components: {Swiper,SwiperItem,},
  props:{
    banners:{
      type:Array,
      default(){
        return [];
      },
    },
  },
  data(){
    return {
      isLoad:false,
    }
  },
  methods:{
    imageLoad(){
      if(!this.isLoad){
      this.$emit('swiperImageLoad');
      this.isLoad = true;
      }
    }
  }

}

</script>

<style>

</style>