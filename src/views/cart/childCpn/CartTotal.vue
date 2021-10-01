<template>
  <div class="cart_total">
    <div class="left">
    <check-button :isChecked="chooseAll" @click.native="checkClick"></check-button>
    <span>全选</span>
    </div>
    

    <div class="price">
      <p>共计：{{totalPrice}}</p>
    </div>
    <div class="calculated" @click="calculated">
      <p>结算 {{totalNumber}}</p>
    </div>
  </div>
</template>

<script>

import CheckButton from 'components/content/checkButton/CheckButton.vue'
import {mapGetters} from 'vuex'

export default {
  components: { CheckButton },
  name: 'CartTotal',

  computed: {
    ...mapGetters(['cartList']),
    totalPrice(){
      return this.cartList.filter(item => {return item.choose;})
      .reduce((preValue, item) =>{
        return preValue + item.count * item.price ;
      },0).toFixed(2);
    },
    totalNumber(){
      return this.cartList.filter(item =>{return item.choose}).length;
    },
    chooseAll(){
      if(this.cartList.length == 0) return false;

      // for( let item of this.cartList){
      //   if(!item.choose) {return false;}
      // }
      // return true;

      // return !(this.cartList.filter(item =>!item.choose).length)
      
      return !this.cartList.find(item => !item.choose)
    }
  },
  methods: {
    checkClick(){
      if(this.chooseAll){
        this.cartList.forEach(item =>{item.choose=false} )
      }
      else {this.cartList.forEach(item => {item.choose=true})}
    },
    calculated(){
      if(!this.chooseAll){this.$toast.isshow('请先选择商品',3000)}
      if(this.cartList.length == 0) {this.$toast.isshow('请先添加商品到购物车内',3000)
}
    }
  }
}
</script>

<style scoped>
  .cart_total {
    display: flex;
    height: 35px;
    color: black;
    background-color: #eee;
  }
  .left {
    display: flex;
    width:30%;
    margin-left: 10px;
   
  }
  .left span {
   margin-top:7px;
    margin-left: 4px;
  }
  .price{
    margin-top:7px;
    flex: 1;
  }
 .calculated{
  
   width:30%;
   background-color:var(--color-tint);
   text-align: center;
   padding-top:7px;
   color: black;
 }
</style>