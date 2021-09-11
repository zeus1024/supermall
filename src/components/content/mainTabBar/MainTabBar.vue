<template>
  <div v-if="showTabBar">
     <tab-bar>
      <tab-bar-item path='/home'>
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="wffff">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart'>
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>

import TabBarItem from "components/common/tabbar/TabBarItem.vue"
import TabBar from "components/common/tabbar/TabBar.vue"

export default {
  name: 'MainTabBar',
  components:{
    TabBar,
    TabBarItem,

  },
  data() {
    return{
      
    }
  },
  computed: {
    showTabBar: function(){
     if(this.$route.path.indexOf('/detail') == -1 && this.$route.path.indexOf('/error') == -1)
      {return true}
      else
      {return false}
    }
  }
}
</script>

<style>

</style>