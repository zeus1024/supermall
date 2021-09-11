<template>
  <div class="error">
    <div>
      <img src="~assets/img/404.png">
      <p>您所访问的商品不存在 </p>
      <p>{{errorTime}}  秒以后自动返回首页</p>
      </p>
      或者您可以
        <span class="goHome"  @click="goHome"> 点击这里 </span>返回首页
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name:'Error',
  data(){
    return {
      errorTime:10,
      countDown:null,
    }
  },
  created() {
   this.countdown()
  },
  methods:{
    countdown(){
      this.countDown = window.setInterval(() => {this.errorTime--;} ,1000)
      setTimeout(() => { 
      if(this.$route.path.indexOf('/error') == 0){
      window.clearInterval(this.countDown);
      this.goHome();
      }
      else { window.clearInterval(this.countDown);}
       },10000) 
    },
    goHome(){
      this.$router.push('/home')
    }
  
  }
}
</script>

<style scoped>
.error  {
  text-align: center;
  line-height: 30px;
}
 .goHome {
   color:blue;
 }
 
</style>