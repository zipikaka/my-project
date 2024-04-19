// pages/inter/inter.js
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})