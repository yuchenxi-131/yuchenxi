const jsonServer = require('json-server');//在node里面使用json-server包
const db = require('./sql/db.js');//引入mockjs配置模块(数据,需要识别的接口名)
const path = require('path');//node 系统模块
const Mock = require('mockjs');//随机数据 

let mock='/api';//定义路由根别名

//创建服务器
const server = jsonServer.create();//创建jsonserver 服务对象


//配置jsonserver服务器 中间件
// app.use(express.static('./public'))
// app.use(express.static(path.join(__dirname, 'public'))
// app.use(bodyPrase({opts}))  //手动搭建的的express服务器，要获取非地址栏数据,需要安装 中间件body-parser

server.use(jsonServer.defaults({
  static:path.join(__dirname, 'public'),//静态资源托管  __dirname
}));

server.use(jsonServer.bodyParser);//抓取body数据使用json-server中间件


//响应
server.use((req, res, next) => {//可选 统一修改请求方式
  // console.log(1)
  // req.method = 'GET';
  let token = req.headers.token || req.query.token || req.body.token;
  // console.log(token);
  if(req.url.includes('login') || req.url.includes('reg')){
    next()
  }else{
    if(token && token.length===16){
      next();
    }else{
      res.jsonp({
        err:2,
        msg:'token有误，或者过期'
      })
    }
  }
});


//登录注册校验
let mr = Mock.Random;//提取mock的随机对象

server.get(mock+'/login', (req, res) => {
  // console.log(req.query, req.body);//抓取提交过来的query和body
  let username=req.query.username;
  let password=req.query.password;
  (username === 'aa' && password === 'aa123')?
    res.jsonp({//好比 res.send({})
      "err": 0,
      "msg": "登录成功",
      "data": {
        "follow": mr.integer(1,5),
        "fans": mr.integer(1,5),
        "nikename": mr.cname(),
        "icon": mr.image('20x20',mr.color(),mr.cword(1)),
        "time": mr.integer(13,13)
      },
      token: '' + mr.integer(17)
    }) :
    res.jsonp({
      "err": 1,
      "msg": "登录失败",
    })

});
server.post(mock+'/reg', (req, res) => {
  let username=req.body.username;
  (username !== 'aa') ?
    res.jsonp({
      "err": 0,
      "msg": "注册成功",
      "data": {
        "follow": mr.integer(0,0),
        "fans": mr.integer(0,0),
        "nikename": mr.cname(),
        "icon": mr.image('20x20',mr.color(),mr.cword(1)),
        "time": mr.integer(13,13)
      }
    }) :
    res.jsonp({
      "err": 1,
      "msg": "注册失败",
    })
});

//响应外部的 json|js 数据接口
const router = jsonServer.router(db);//创建路由对象 db为mock接口路由配置  db==object

//自定义返回结构
router.render = (req, res) => {
  //数据 返回是，都会经过这个函数  req 请求时携带  res响应携带
  let len = Object.keys(res.locals.data).length; //判断数据是不是空数组和空对象
  // console.log(len);

  setTimeout(()=>{//模拟服务器延时
    res.jsonp({
      err: len !== 0 ? 0 : 1,
      msg: len !== 0 ? '成功' : '失败',
      data: res.locals.data
    })
  },1000)
  // res.jsonp(res.locals.data)
};

//路由自定义别名
server.use(jsonServer.rewriter({
  [mock+"/*"]: "/$1",
  "/course/check\\?id=:id" : "/course/:id",  
  "/course/add" : "/course",  
  "/course/del?id=:id" : "/course/:id" 
}));

server.use(router);//安装路由配置到server服务器上
//开启jsonserver服务
server.listen(3333, () => {
  console.log('mock server is running')
});