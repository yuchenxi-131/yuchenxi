// 用mockjs模拟生成数据
var Mock = require('mockjs');

let rm = Mock.Random;

let mapData = n => {
  
  let data = [];
  
  for(var i=0;i<=n;i++){
    data.push({
      "id":1000 + i + new Array(20).fill('0').join(''),
      "_id":1000 + i + new Array(20).fill('0').join(''),
      title:"@ctitle(8,12)",
      des:"@csentence(10,12)",
      time:"@integer(1511197952100,1611197952100)",
      detail:{
        auth_icon:rm.image('50x50',rm.color(),rm.cword(1)),
        auth:"@cname",
        content: function(){
          let result='';
          for(var i=0;i<(Math.random()+1)*10;i++){
            result += '<p>' + Mock.Random.cparagraph(3,5) + '</p>'
          }
          return result;
        }
      }
    })
  }
  
  return data;
}

let mapData2 = n => {
  
  let data = [];
  
  for(var i=0;i<=n;i++){
    data.push({
      "id":1000 + i + new Array(20).fill('0').join(''),
      "_id":1000 +  i + new Array(20).fill('0').join(''),
      title: '@ctitle(10,15)',
      sub_title:"@csentence(15,18)",
      banner:rm.image('1680x745',rm.color(),rm.cword(4,10)),
      time: '@integer(1511197952100,1611197952100)',
      detail:{
        auth_icon:rm.image('50x50',rm.color(),rm.cword(1)),
        auth:"@cname",
        content: function(){
          let result='';
          for(var i=0;i<(Math.random()+1)*10;i++){
            result += '<p>' + Mock.Random.cparagraph(3,5) + '</p>'
          }
          return result;
        }
      }
    })
  }
  
  return data;
}

//编程型(app.js) 需要的是一个对象
module.exports = Mock.mock({
  'banner':mapData2(10), 
  "home":mapData(100),
  "follow":mapData(80),
  "column":mapData(60),
  "user":{
    "_id":1000 + new Array(20).fill('0').join(''),
    auth_icon:rm.image('50x50',rm.color(),rm.cword(1)),
    nikename:'@cname',
    fans:'@integer(100,10000)',
    follow:'@integer(100,10000)'
  }
})