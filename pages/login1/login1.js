// pages/login1/login1.js

Page({
// 页面数据初始化
   data: {
    id:0,
    password:0
   },
  getID(e){
     this.id = e.detail.value

    //  e.detail.value 获取用户输入数据
  },
  getPassword(e){
    this.password = e.detail.value
  },

  Login(){
  if(this.id=="zpk" || this.password=="123"){
    wx.switchTab({
      url:"/pages/index/index"
    });
    // switchTab 跳转主页
    wx.showToast({
      title: '登录成功',
      icon: 'success',
      duration: 2000//持续的时间
    })
// showToast 显示消息提示框


    // 登陆成功后显示窗口
  }else{
     wx.showModal({
        title: '登录失败',
        content: '账号或密码错误！',
      })
  }



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


