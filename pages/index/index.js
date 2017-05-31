//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 进入找老师界面
  findTeacher:function(){
    console.log('findTeacher')
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    this.setData({
      userInfo: wx.getStorageSync('userInfo')
    })
    // var userInfo =wx.getStorage('userInfo')
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
  },
  goToHello:function(){
    console.log('to hello')
    wx.navigateTo({
      url: '../test/hello',
    })
  }
})
