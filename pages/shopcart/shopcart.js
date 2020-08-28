// pages/shopcart/shopcart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    delBtnWidth:160,
    windowHeight:0,
    data:[{
      shopcartpic:'/assets/images/other/drink1.png',
      shopcartConTexth3:'草莓珍珠',
      shopcartConTexttext:'夏日冷饮，草莓珍珠奶茶',
      shopcartConTextprice:'12',
      right: 0 
    },
    {
      shopcartpic:'/assets/images/other/drink1.png',
      shopcartConTexth3:'火龙果奶茶',
      shopcartConTexttext:'夏日冷饮，火龙果奶茶',
      shopcartConTextprice:'10',
      right: 0 
    },
    {
      shopcartpic:'/assets/images/other/drink1.png',
      shopcartConTexth3:'草莓珍珠',
      shopcartConTexttext:'夏日冷饮，草莓珍珠奶茶',
      shopcartConTextprice:'13',
      right: 0 
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowHeight: res.windowHeight
        });
      }
    });
  },
  drawStart: function (e) {
    // console.log("drawStart");  
    var touch = e.touches[0]

    for(var index in this.data.data) {
      var item = this.data.data[index]
      item.right = 0
    }
    this.setData({
      data: this.data.data,
      startX: touch.clientX,
    })

  },
  drawMove: function (e) {
    var touch = e.touches[0]
    var item = this.data.data[e.currentTarget.dataset.index]
    var disX = this.data.startX - touch.clientX
    
    if (disX >= 20) {
      if (disX > this.data.delBtnWidth) {
        disX = this.data.delBtnWidth
      }
      item.right = disX
      this.setData({
        isScroll: false,
        data: this.data.data
      })
    } else {
      item.right = 0
      this.setData({
        isScroll: true,
        data: this.data.data
      })
    }
  },  
  drawEnd: function (e) {
    var item = this.data.data[e.currentTarget.dataset.index]
    if (item.right >= this.data.delBtnWidth/2) {
      item.right = this.data.delBtnWidth
      this.setData({
        isScroll: true,
        data: this.data.data,
      })
    } else {
      item.right = 0
      this.setData({
        isScroll: true,
        data: this.data.data,
      })
    }
  },
  
  delItem: function (e) {

  },
 

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})