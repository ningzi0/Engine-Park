// pages/drinkshow/drinkshow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas:[{barText:'大杯500ML',id:0},
           {barText:'中杯400ML',id:1},
           {barText:'小杯300ML',id:2}],
    datas2:[{barText:'是',id:3},
           {barText:'否',id:4}],
    modalHidden:true,
    currentItem:0

  },
  tagChoose:function(options){
    var that = this
    var id = options.currentTarget.dataset.id;
    // console.log(id)
    //设置当前样式
    that.setData({
    'currentItem':id
    })
    },
// 模态框点击
showModal:function(){
  this.setData({
    modalHidden:!this.data.modalHidden
  })
},
// 绑定事件开始
modalBindaconfirm:function(){
  this.setData({
    modalHidden:!this.data.modalHidden,
    show:!this.data.show,
    tips:'【确认】',
  })
},
modalBindcancel:function(){
  this.setData({
    modalHidden:!this.data.modalHidden,
    this:'【取消】！'
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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