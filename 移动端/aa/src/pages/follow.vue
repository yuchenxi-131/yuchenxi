<template>
  <div class="follow mtb">
    
    <div class="newsList">
      <ul>
        <router-link :to="`/detail/${item._id}?collectionName=follow`" v-for="(item,index) of follow" :key="item._id" tag="li">
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
  export default {
    name:'follow',
    props:{},
    data(){
      return {
        follow:[],
      }
    },
    components:{},
    mounted(){
      this.$axios({
        url:'/api/follow',
        params:{_page:1,_limit:20}
      }).then(
        res=>this.follow=res.data.data
      )
    },
    updated(){},
    methods:{},
    computed: {
    }
  }
</script>

<style scoped>
  .newsList ul{ padding:0 0.4rem;}
  .newsList ul li{ color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;}
  .newsList ul li h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
  .newsList ul li p{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;}
  .newsList{clear: both;margin-bottom:1rem;}
</style>
