import {debounce} from 'common/utils.js'

export const itemListenerMixin = {
  data(){
    return{
      name:100
    }
   
  },
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh,100)
    this.$bus.$on('ImageLoad',() => {
      refresh();
   })
  },
 methods: {
  //  refreshImg(){
  //   const refresh = debounce(this.$refs.scroll.refresh,100)
  //   refresh();

  // }
}
}