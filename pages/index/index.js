// index.js
Page({
  data:{
  a:"通知公告",
  pb1:"block",
  pb2:"none",
  pb3:"none",
  // block：设置为display的默认值
      // none：隐藏对象
  },
  
  notice1(){
    this.setData({
      a:"通知公告",
      pb1:"block",
      pb2:"none",
      pb3:"none"
  
    })
  
  },
  notice2(){
    this.setData({
      a:"综合信息",
      pb1:"none",
      pb2:"block",
      pb3:"none",
      
  
    })
  },
  notice3(){
    // this.setDate :修改页面数据的函数
    this.setData({
      a:"学术动态",
      pb1:"none",
      pb2:"none",
      pb3:"block"
    })
  },
  onLoad(options){
    
  }
  
  
  
  
  })
  