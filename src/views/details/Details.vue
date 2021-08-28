<template>
  <div>
    详情页有待开发
    <p>商品ID：{{iid}}</p>
  </div>
</template>

<script>

export default {
  name: "Details",
  data(){
    return{
      iid:null,
    }
  },
  created() {
    this.iid = this.$route.params;
    // console.log(this.iid);
  },
  methods:{

  },
}
</script>

<style>

</style>