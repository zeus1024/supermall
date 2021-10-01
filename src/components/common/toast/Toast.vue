<template>
  <div class="toast" v-show="show">
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name:"Toast",
    data () {
      return {
        message:'',
        show:false,
      }
    },
    methods: {
      isshow(message="默认文字",durations=2000) {
        this.message = message;
        this.show = true;
        
        setTimeout(() => {this.show = false;},durations)
      }
    }
  }
</script>

<style scoped>
  .toast {
    position:fixed;
    top:40%;
    left:50%;
    width:70%;
    height:10%;
    padding-top:5%;
    transform:translate(-50%,-50%);
    text-align: center;
    color:white;
    background-color:rgba(0,0,0,0.75);
    z-index: 999;
  }
</style>