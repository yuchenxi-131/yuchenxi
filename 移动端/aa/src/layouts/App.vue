<template>
  <div id="app">
    <Loading v-show="$root.bLoading"/>
    <Header v-if="$root.bNav"/>
    <router-view></router-view>
    <app-footer v-show="$root.bFoot"/>
  </div>
</template>

<script>
import Header from '../components/header.vue'
import AppFooter from '../components/footer.vue'
import Loading from '../components/loading.vue'

// import axios from '../plugins/axios.js';
  
export default {
  
  name: 'app',
  components: {
    Header,AppFooter,Loading
  },
  //路由观测,属性监听,watch监听
  watch:{
    $route:{
      handler(newValue){
        let path = newValue.path;
        if(/home|follow|column/.test(path)){
          this.$root.bNav=this.$root.bFoot=true;
        }
        if(/login|reg|detail/.test(path)){
          this.$root.bNav=this.$root.bFoot=false;
        }
        if(path.includes('user')){
          this.$root.bNav=false;
          this.$root.bFoot=true;
        }
      },
      immediate: true //首次运行
    }
  }
}
</script>

<style scoped>

</style>
