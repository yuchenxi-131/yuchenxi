import Vue from 'vue'
import App from './layouts/App.vue'

Vue.config.productionTip = false

//引入视口字体比例控制
import './assets/js/font.js'
//引入全局基础样式
import './assets/css/base.css'


//引入路由配置
import router from './plugins/router.js'

//引入axios的配置
import './plugins/axios.js'

//引入过滤器的配置
import './filters'

let vm=new Vue({
  data:{
    bNav:true,
    bFoot:true,
    bLoading:false
  },
  render: h => h(App),
  router
}).$mount('#app');

export default vm;
