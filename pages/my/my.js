// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myicoItem:[{
      myicoImg:'/assets/images/ico/myico1.png',
      myicoText:'引擎币',
      myicoNum:'0',
      myurl:'/pages/yinqingbi/yinqingbi'
    },
    {
      myicoImg:'/assets/images/ico/myico2.png',
      myicoText:'消息',
      myicoNum:'12',
      myurl:'/pages/message/message'
    },
    {
      myicoImg:'/assets/images/ico/myico3.png',
      myicoText:'订单',
      myicoNum:'2',
      myurl:'/pages/order/order'
    },
    {
      myicoImg:'/assets/images/ico/myico4.png',
      myicoText:'租车',
      myicoNum:'0',
      myurl:'/pages/rental/rental'
    }],
    mylistArray:[{
      mylistIco:'/assets/images/ico/mylistico2.png',
      mylistText:'保养美容',
      mylistUrl:'/pages/maintain/maintain'
    },
    {
      mylistIco:'/assets/images/ico/mylistico3.png',
      mylistText:'我的审车'
    },
    {
      mylistIco:'/assets/images/ico/mylistico4.png',
      mylistText:'我的洗车',
      mylistUrl:'/pages/yuyuexiche/yuyuexiche'
    }]
  },
  returnPre:function(e){
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];
    prevPage.setData({
      discount: e.currentTarget.dataset.discount,
    })
    wx.navigateBack({
      delta: 1,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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