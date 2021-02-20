import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);//安装插件

import Home from '../pages/home.vue';
import Follow from '@/pages/follow.vue';
import Column from '@/pages/column.vue';
import detail from '@/pages/detail.vue';
import user from '@/pages/user.vue';
import Reg from '@/pages/reg.vue';
import Login from '@/pages/login.vue';
import NoPage from '@/pages/no-page.vue';

let routes = [
  {path:'/home',component:Home},
  {path:'/follow',component:Follow},
  {path:'/cOlUmn',component:Column},
  {path:'/detail/:_id',component:detail},
  {path:'/user',component:user},
  {path:'/login',component:Login},
  {path:'/reg',component:Reg},
  {path:'/',redirect:'/home'},
  {path:'*',component:NoPage},
];

export default new VueRouter({
  routes
})