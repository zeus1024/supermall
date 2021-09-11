<template>
  <div class="feature" @click="godetail">
   <!-- <a href="https://act.mogujie.com/zzlx67"> -->
   <a>
      <img src="~assets/img/home/recommend_bg.jpg" alt="">
   </a>
  </div>
</template>

<script>
export default {
  name:"FeatureView",
  methods: {
    godetail(){
      this.$router.push('/details/1m70y5k');
    }
  }
}
</script>

<style scoped>
.feature img{
  width:100%;
}
</style>