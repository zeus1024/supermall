<template>
  <div class="DetailsNarbar">
    <nav-bar>
      <div slot="left" class="back" @click="goBack">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="titles">
        <div v-for=" (item, index) in titles"
             class="item-titles"
             :class="{ active: index === currentIndex }"
             @click="titleClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
    
  </div>
</template>

<script>


import NavBar from 'components/common/navbar/NavBar.vue'

export default {
  name: 'DetailsNarbar',
  components: {
    NavBar,
  },
  data(){
    return {
      titles: ['商品','详情','评论','推荐'],
      currentIndex:0,
    }
  },
  methods:{
    titleClick(index){
      this.currentIndex = index;
      this.$emit('tab-click',index);
    },
    goBack(){
      this.$router.back(-1);
    }
  }
}
</script>

<style scoped>
  .titles {
    display: flex;
    font-size: 14px;
  }

  .item-titles {
    flex: 1;
  }

  .active{
   color: var(--color-high-text)
  }

  .back img{
    margin-top:20%;
    height:30%;
    width:30%;
  }

  
</style>