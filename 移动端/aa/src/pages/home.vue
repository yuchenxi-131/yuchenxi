<template>
  <div class="home mtb">
    <div class="banner">
      <ul class="clearfix">
        <router-link :to="`/detail/${item._id}?collectionName=banner`" v-for="(item,index) of banner" :key="item._id" tag="li">
          <img :src="item.banner" alt=""/>
          <div class="text-box">
            <h2>{{item.title}}</h2>
            <p>{{item.sub_title}}</p>
          </div>
        </router-link>
      </ul>
    </div>
    <div class="newsList">
      <ul>
        <router-link :to="`/detail/${item._id}?collectionName=home`" v-for="(item,index) of home" :key="item._id" tag="li">
          <a href="javascript:;">
            <h2>{{index+1}}.{{item.title}}</h2>
            <p>{{item.des}}</p>
          </a>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';// npm i xx -S
  import Swipe from '../assets/js/swipe.js';
  
  export default {
    name:'home',
    props:{},
    data(){
      return {
        home:[],
        banner:[]
      }
    },
    components:{},
    mounted(){
      this.getData();
    },
    updated(){
      this.initSwipe();
    },
    methods:{
      getData(){
        this.$axios({
          url:'/api/home',
          params:{_page:1,_limit:30}
        }).then(
          res=>this.home=res.data.data
        )
        
        this.$axios({
          url:'/api/banner',
          params:{_page:1,_limit:3}
        }).then(
          res=>{
            console.log('数据回来')
            this.banner=res.data.data
          }
        )
        
      },
      initSwipe(){
        console.log('initswiper')
        var mySwipe=new Swipe($('.banner')[0],{
          auto:2000,
          continuous:true,
          stopPropation:true,
          callback:function (index,element){
            $('.banner ol li').removeClass('active');
            $('.banner ol li').eq(index).addClass('active');
          }
        })
      }
    },
    computed: {
    }
  }
</script>

<style scoped>
  .home{max-width:6.4rem; margin:0 auto; margin-bottom:0.8rem;}
  .home .banner{margin-top:0.6rem;position: relative;overflow: hidden; z-index: 1}
  .banner ul li{width:6.4rem;float:left;position: relative;}
  .banner ul li img{width:100%; display:block;}
  .banner ul li .text-box{width:5.8rem; padding:0 0.3rem;height:1.24rem; position:absolute; left:0; bottom:0; color:#fff; background:rgba(0,0,0,0.5);}
  .text-box h2{ font-size:0.3rem; font-weight:normal; margin-top:0.22rem; line-height:100%; margin-bottom:0.22rem; overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
  .text-box p{ line-height:100%;}
  
  .banner ol{position:absolute; right:0.2rem;bottom:0.2rem;}
  .banner ol li{width:0.15rem;height:0.15rem; background:#5477b2; float:left; border-radius:50%; margin-right:0.08rem;}
  .banner ol li.active{ background:#fff;}
  
  .newsList ul{ padding:0 0.4rem;}
  .newsList ul li{ color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;}
  .newsList ul li h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
  .newsList ul li p{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;}
  
</style>
