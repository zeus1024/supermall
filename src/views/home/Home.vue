<template>
  <div id="home">
    <nav-bar id="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <feature-view/>
    <tab-control 
    :titles="['流行', '新款', '精选']"
    @tabClick="tabClick"
    ></tab-control>
    <goods-list :goods="showGoods"></goods-list>
  </div>
</template>

<script>

import HomeSwiper from './childCpn/HomeSwiper.vue'
import HomeRecommendView from './childCpn/HomeRecommendView.vue'
import FeatureView from './childCpn/FeatureView.vue'


import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabcontrol/TabControl.vue'
import GoodsList from 'components/content/goodslist/GoodsList.vue'

import {getHomeMultidata,getHomeGoods} from 'network/home'



export default {
  name: "home",
  components:{HomeSwiper,HomeRecommendView,FeatureView,NavBar,TabControl,GoodsList, GoodsList},
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
    }
  },
  created(){
    this.getHomeMultidata()

    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  
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
      }
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
         this.goods[type].page += 1
      })
    }
  }
}
</script>

<style scoped>

#home {
  padding-top: 44px;
}
#home-nav{
  background-color: var(--color-tint);
  color: #fff;

  /* 在使用浏览器原生滚动时, 为了让导航不跟随一起滚动*/ 
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
}

.tab-control {
    position: relative;
    z-index:9;
  }
</style>