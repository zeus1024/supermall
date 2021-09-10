<template>
  <div id="detail">
    <details-nar-bar class="detail-nav" ></details-nar-bar>
    <scroll class="content"
            ref="scroll"
            :probe-type="0"
            :pull-up-load="false">
    <details-swiper :top-images="topImages"/>
    <details-base-info :goods="goods"/>
    <details-shop-info :shop="shop"/>
    <details-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
    <details-param-info :param-info="paramInfo"/>
    <details-comment :comment="comment"/>
    </scroll>
   
  </div>
</template>

<script>
import DetailsNarBar from './childsCpn/DetailsNarBar.vue'
import DetailsSwiper from './childsCpn/DetailsSwiper.vue'
import DetailsBaseInfo from './childsCpn/DetailsBaseInfo.vue'
import DetailsShopInfo from './childsCpn/DetailsShopInfo.vue'
import DetailsParamInfo from './childsCpn/DetailsParamInfo.vue'
import DetailsGoodsInfo from './childsCpn/DetailsGoodsInfo.vue'
import DetailsComment from './childsCpn/DetailsComment.vue'

import Scroll from 'components/common/scroll/Scroll.vue'


import {getDetails,Goods,Shop,GoodsParam} from 'network/details.js'
import {itemListenerMixin} from 'common/mixins.js'
import {debounce} from 'common/utils.js'



export default {
  components: { DetailsNarBar, DetailsSwiper,DetailsBaseInfo,DetailsShopInfo,DetailsParamInfo, DetailsGoodsInfo,Scroll, DetailsComment, },
  name: "Details",
  data(){
    return{
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo: {},
      comment: {},
    }
  },
  // mixins: [itemListenerMixin],
  created() {
    // 1、获取商品iid
    this.iid = this.$route.params.iid;
    
    // 2、获取商品数据
    getDetails(this.iid)
    .then( res => {
      
      console.log(res);
      const data = res.result;
     // 1.获取顶部的图片轮播数据
      this.topImages = data.itemInfo.topImages;

      // 2.获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

      // 3.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo)

      // 4.保存商品的详情数据
      this.detailInfo = data.detailInfo;
      // 5.获取参数的信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

      //6.获取评论
        if (data.rate.cRate != 0) {
          this.comment = data.rate.list[0];
        }
    })

  },
  mounted() {
  },
  updated: function () {
    this.$nextTick(function (){
      this.$refs.scroll.refresh()
    })
},
  methods:{
    imageLoad(){
    this.$refs.scroll.refresh();
  }
  },
}
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