<template>
  <div id="app" >
    <div class="vc-wrap">
        <v-header :title="title" :menu-display="menuDisplay"></v-header>
        <v-loading :show="loadingShow"></v-loading> 
        <router-view></router-view>

    </div>
  </div>
</template>
<script>
import header from '@/components/header'
import load from '@/components/com/loading'
import {  mapState, mapGetters, mapAcitons } from 'vuex'
export default {
  name: 'App',
  data(){
    return {
      
    }
  },
  components:{
    'v-header': header,
    'v-loading': load,   //加载效果

  },
  created:function(){

  },
  methods:{
   ...mapGetters(['leftbaron']),
  },
  computed: {
    ...mapState({
        loadingShow: state => state.com.loadingShow
    }),
    ...mapGetters(['transitionshow']),
    title () {
      switch (this.$route.path.split('/')[1]){
        case '':
          return "VC-UI";
        case 'home':
          return "HOME";
        case 'lists':
          return '列表页'
      }
    },
    menuDisplay () {
      if (this.$route.path.split('/')[1] == "home" ) {
        return true
      }
    }


  }
}
</script>

<style>

    #app{width:100%;height:100%; position:absolute;overflow-x:hidden;overflow-y:auto;}
    .vc-wrap{width:100%;height:100%;position:relative;top:0;left:0;}

    .clearfix:after {content: "."; display: block; height:0; clear:both; visibility: hidden;}
    .clearfix { *zoom:1; }
    .left-0{left:0;}
    .top-0{top:0;}
    .right-0{right:0;}

.content-box{position: absolute;width:100%;height:100%;overflow:hidden;  transition: transform .38s ease-in-out,visibility .38s,-webkit-transform .38s ease-in-out;background:#fff;z-index:1001;}

    
</style>
