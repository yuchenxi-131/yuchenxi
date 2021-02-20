module.exports = {
  devServer:{
    //设置代理
    proxy: { //代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
      '/api': { //axios访问 /api ==  target + /api
        target: 'http://localhost:3333',
        changeOrigin: true, //创建虚拟服务器 
        ws: true, //websocket代理
      },
      '/api2': { // axios 访问 /douban == target + '/v2/movie/in_theaters?start=0&count=10'
        target: 'https://douban.uieee.com',
        changeOrigin: true,
        pathRewrite: { //路径替换
          '^/api2': '/api', // axios 访问/douban/v2 == target + /v2
        }
      }
    }
  }
}