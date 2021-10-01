<template>
  <div class="cart">
    <nav-bar id="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>

    <scroll class="content" ref="scroll">
      <cart-list
      v-for="(item, index) in list" :key="index"
      :item="item"/>
    </scroll>
    
    <cart-total></cart-total>
  </div>
</template>

<script>
import CartList from './childCpn/CartList.vue'
import CartTotal from './childCpn/CartTotal.vue'

import NavBar from 'components/common/navbar/NavBar.vue'
import Scroll from 'components/common/scroll/Scroll.vue'


import {mapGetters} from 'vuex'

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    Scroll,
    CartTotal,
  },
  computed: {
    ...mapGetters({
      length:'cartNumber',
      list: 'cartList',
    })
  },
  activated () {
    this.$refs.scroll.refresh();
  }
}
</script>

<style scoped>
 .cart{
   height:100vh;
 }
 #nav-bar {
   background-color: var(--color-tint);
   color:#fff;
 }
 .content{
   height:calc(100% - 44px - 49px - 35px);
   overflow: hidden;
 }
</style>