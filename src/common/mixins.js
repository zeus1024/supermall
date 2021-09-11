import {debounce} from 'common/utils.js'

export const itemListenerMixin = {
  data(){
    return{
      refresh:null
    }
   
  },
  mounted(){
    this.refresh = debounce(this.$refs.scroll.refresh,100)
    this.$bus.$on('ImageLoad',() => {
      this.refresh();
   })
  },
 methods: {
  //  refreshImg(){
  //   const refresh = debounce(this.$refs.scroll.refresh,100)
  //   refresh();

  // }
}
}