<template>
  <div id="home" class="wrapper" >
    <nav-bar id="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
     <tab-control 
    :titles="['流行', '新款', '精选']"
    @tabClick="tabClick"
    class="tab-control"
    ref="tabcontrol1"
    v-show="isTabFixed"
    ></tab-control>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @pullingUp="loadMore"
            @scrollPosition="scrollPosition"
    >
    <home-swiper 
    :banners="banners"
    @swiperImageLoad="swiperImageLoad"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <feature-view/>
   <tab-control 
    :titles="['流行', '新款', '精选']"
    @tabClick="tabClick"
    ref="tabcontrol2"
    ></tab-control>
   
    <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>

import HomeSwiper from './childCpn/HomeSwiper.vue'
import HomeRecommendView from './childCpn/HomeRecommendView.vue'
import FeatureView from './childCpn/FeatureView.vue'


import NavBar from 'components/common/navbar/NavBar.vue'
import Scroll from 'components/common/scroll/Scroll.vue'

import TabControl from 'components/content/tabcontrol/TabControl.vue'
import GoodsList from 'components/content/goodslist/GoodsList.vue'
import BackTop from 'components/content/backTop/BackTop.vue'

import {getHomeMultidata,getHomeGoods} from 'network/home'
import {debounce} from 'common/utils.js'




export default {
  name: "home",
  components:{HomeSwiper,HomeRecommendView,FeatureView,NavBar,Scroll,TabControl,GoodsList, Scroll,BackTop, BackTop},
  data(){
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currentType:'pop',
      isShowBackTop:false,
      isTabFixed:false,
      tabOffsetTop:0,
      scrollY:0,
    }
  },
  created(){
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
   
  },

  activated () {
    this.$refs.scroll.scrollTo(0,this.scrollY,0);
    this.$refs.scroll.refresh();
  },
  deactivated () {
    this.scrollY =this.$refs.scroll.getScrollY();
  },
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh,50)
    this.$bus.$on('GoodsImageLoad',() => {
      refresh();
    })
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  methods:{
    // 事件监听方法
    tabClick(index){
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      };
       this.$refs.scroll.scrollTo(0,-this.tabOffsetTop,0);
      this.$refs.tabcontrol1.currentIndex = index;
      this.$refs.tabcontrol2.currentIndex = index;
     
      
    },
    swiperImageLoad(){
     
     this.tabOffsetTop = this.$refs.tabcontrol2.$el.offsetTop;
     
    },
     // 滚动相关方法
    loadMore(){
      this.getHomeGoods(this.currentType);
    },
    
    // 网络请求相关的函数
    getHomeMultidata(){
      getHomeMultidata()
    .then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page)
      .then(res => {
         this.goods[type].list.push(...res.data.list);
        //  处理重复数据
         let newArr = new Set(this.goods[type].list);
         this.goods[type].list = Array.from(newArr);	
        //  
         this.goods[type].page += 1;
         this.$refs.scroll.finishPullUp();
        
      })
    },
    

    
    // 获取位置
    scrollPosition(position){
      // 1、判断backtop是否显示
      this.isShowBackTop = (-position.y) > 1000;

      // 2、控制tabcontrol是否吸顶
      this.isTabFixed = (-position.y) > this.tabOffsetTop;
    },

   
    // 返回顶部
    backTopClick(){
      this.$refs.scroll.scrollTo(0,0,1000)
    },

    


  }
}
</script>

<style scoped>

#home {
   height: 100vh;
   position: relative;
}
#home-nav{
  background-color: var(--color-tint);
  color: #fff;

  /* 在使用浏览器原生滚动时, 为了让导航不跟随一起滚动*/ 
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
}
.content {
    overflow: hidden;
   
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
.tab-control{
    position: relative;
    z-index:9;
    top:-2px;
  }
</style>