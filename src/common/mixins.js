import {debounce} from 'common/utils.js'
import BackTop from 'components/content/backTop/BackTop.vue'

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

export const BackTopMixin = {
  data () {
    return {
      isShowBackTop:false,  
    }
  },
  components: {
    BackTop,
  },
  methods:{
    backTopClick(){
      this.$refs.scroll.scrollTo(0,0,1000)
    },

  }

}