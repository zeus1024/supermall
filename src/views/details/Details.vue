<template>
  <div id="detail">
    <details-nar-bar class="detail-nav" ref="narbar" @tab-click="tabClick" />
    <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="false" @scrollPosition="tabTitleChange">
      <details-swiper :top-images="topImages" ref="swiper" />
      <details-base-info :goods="goods" />
      <details-shop-info :shop="shop" />
      <details-goods-info :detail-info="detailInfo" @ImageLoad="imageLoad" />
      <details-param-info :param-info="paramInfo" ref="paramInfo" />
      <details-comment :comment="comment" ref="comment" />
      <goods-list :goods="recommend" ref="recommend" />
    </scroll>
  </div>
</template>

<script>
import DetailsNarBar from "./childsCpn/DetailsNarBar.vue";
import DetailsSwiper from "./childsCpn/DetailsSwiper.vue";
import DetailsBaseInfo from "./childsCpn/DetailsBaseInfo.vue";
import DetailsShopInfo from "./childsCpn/DetailsShopInfo.vue";
import DetailsParamInfo from "./childsCpn/DetailsParamInfo.vue";
import DetailsGoodsInfo from "./childsCpn/DetailsGoodsInfo.vue";
import DetailsComment from "./childsCpn/DetailsComment.vue";

import GoodsList from "components/content/goodslist/GoodsList.vue"

import Scroll from "components/common/scroll/Scroll.vue";

import { getDetails,getDetailsRecommend, Goods, Shop, GoodsParam } from "network/details.js";
import { itemListenerMixin } from "common/mixins.js";
import { debounce } from "common/utils.js";

export default {
  components: {
    DetailsNarBar,
    DetailsSwiper,
    DetailsBaseInfo,
    DetailsShopInfo,
    DetailsParamInfo,
    DetailsGoodsInfo,
    DetailsComment,

    GoodsList,
    Scroll,

    
    
  },
  name: "Details",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      comment: {},
      recommend: [],
      themeOffsetY: [],
      currentIndex:0,
    };
  },
  mixins: [itemListenerMixin],
  created() {
    // 1、获取商品iid
    this.iid = this.$route.params.iid;

    // 2、获取商品数据
    getDetails(this.iid).then((res) => {
      // console.log(res);
      const data = res.result;
      // 1.获取顶部的图片轮播数据
      this.topImages = data.itemInfo.topImages;

      // 2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      // 3.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo);

      // 4.保存商品的详情数据
      this.detailInfo = data.detailInfo;
      // 5.获取参数的信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      //6.获取评论
      if (data.rate.cRate != 0) {
        this.comment = data.rate.list[0];
      }
    });

    //获取推荐商品
    getDetailsRecommend().then((res) => {
      this.recommend = res.data.list
    }) ;
  },
  mounted() {
    
  },
  updated: function() {
    this.$nextTick(function() {
      this.$refs.scroll.refresh();
    });
  },
  methods: {
    tabClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeOffsetY[index], 500);
    },

    imageLoad() {
      this.refresh();
      this.themeOffsetY = [];
     
      this.themeOffsetY.push(this.$refs.swiper.$el.offsetTop-44);
      this.themeOffsetY.push(this.$refs.paramInfo.$el.offsetTop-44);
      this.themeOffsetY.push(this.$refs.comment.$el.offsetTop-44);
      this.themeOffsetY.push(this.$refs.recommend.$el.offsetTop-44);
      this.themeOffsetY.push(Number.MAX_VALUE);
    },

    tabTitleChange(position) {
      for(let i = 0; i< this.themeOffsetY.length-1; i++) {
        if(i != this.currentIndex){
          if(-position.y >= this.themeOffsetY[i] && -position.y <= this.themeOffsetY[i+1])
            {
             this.currentIndex = i; 
             this.$refs.narbar.currentIndex = this.currentIndex;
            }
        }
       
      }
    }
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.content {
  height: calc(100% - 44px);
}
</style>
