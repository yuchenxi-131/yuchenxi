<template>
  <div class="foot-btn" >
    <ul>
      <router-link to="/home" tag="li" class="home" active-class="home--active"><a href="javascript:;"></a></router-link>
      <router-link to="/shop-car" tag="li" class="write" active-class="write--active"><a href="javascript:;"></a></router-link>
      <router-link to="/user" tag="li" class="my" active-class="my--active"><a href="javascript:;"></a></router-link>
      <!-- <li class="home"><a href="javascript:;"></a></li> -->
      <!-- <li class="write"><a href="javascript:;"></a></li> -->
      <!-- <li class="my"><a href="javascript:;"></a></li> -->
    </ul>
  </div>
</template>

<script>
  export default {
    name:'app-footer',
    props:{},
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{},
    computed: {
    }
  }
</script>

<style>
  
  .foot-btn{width:100%;height:0.8rem; background:#fff; position:fixed; left:0; bottom:0; border-top:1px solid #9e9a95;}
  .foot-btn ul{width:4.08rem; margin:0 auto;}
  .foot-btn ul li{ float:left;}
  .foot-btn ul li a{ display:block; width:100%;height:100%;}
  
  .foot-btn ul .home{width:0.44rem;height:0.59rem; background:url(../assets/img/home.png) no-repeat 0 0; background-size:100%; margin-top:0.1rem;}
  .foot-btn ul .write{width:0.82rem;height:0.81rem; background:url(../assets/img/write.png) no-repeat 0 0; background-size:100%; margin-left:1.18rem;}
  .foot-btn ul .my{width:0.39rem;height:0.63rem; background:url(../assets/img/my.png) no-repeat 0 0;background-size:100%; margin-left:1.18rem; margin-top:0.07rem;}
  
  .foot-btn ul .home--active{width:0.44rem;height:0.59rem; background:url(../assets/img/home-active.png) no-repeat 0 0; background-size:100%; margin-top:0.1rem;}
  .foot-btn ul .write--active{width:0.82rem;height:0.81rem; background:url(../assets/img/write-active.png) no-repeat 0 0; background-size:100%; margin-left:1.18rem;}
  .foot-btn ul .my--active{width:0.39rem;height:0.63rem; background:url(../assets/img/my-active.png) no-repeat 0 0;background-size:100%; margin-left:1.18rem; margin-top:0.07rem;}
  
  
</style>
