<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'


 BScroll.use(Pullup);

export default {
  name:'Scroll',
  props: {
    pullUpLoad:{
      type: Boolean,
      default: false,
    },
    probeType:{
      type: Number,
      default:0,
    },
  },
  data(){
    return {
      scroll:null,
    }
  },
  mounted(){
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper,{
       click:true,
       pullUpLoad: this.pullUpLoad,
       probeType: this.probeType,
       disableTouch:false,
       disableMouse:true,
    })
    
    // 2、监听滚动的位置
    if(this.probeType ==1 || this.probeType === 2 || this.probeType === 3) {
      this.scroll.on('scroll',(position) => {
        this.$emit('scrollPosition', position);
        // console.log(position);
      })

      // 3、上拉加载更多
      if(this.pullUpLoad){
        this.scroll.on('pullingUp',() => {
          this.$emit('pullingUp');
        })
      }
     
    }
  },

  methods: {
    scrollTo(x,y,time = 500) {
      this.scroll.scrollTo(x,y,time);
    },
    finishPullUp(){
      this.scroll.finishPullUp();
    }, 
    refresh(){
      this.scroll.refresh();
      //  console.log("refresh");
    }, 
    getScrollY(){
      return this.scroll ? this.scroll.y : 0
    },
  }

}
</script>

<style>

</style>