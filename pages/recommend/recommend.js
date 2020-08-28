// pages/recommend/recommend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper:{
      swiperH:'',//swiper高度
      nowIdx:0,//当前swiper索引
      imgList:[
        {"bigImage":"/assets/images/other/carshow1.jpg","smallImage":"/assets/images/other/carshow2.png"},
        {"bigImage":"/assets/images/other/carshow1.jpg","smallImage":"/assets/images/other/carshow2.png"},
        {"bigImage":"/assets/images/other/carshow1.jpg","smallImage":"/assets/images/other/carshow2.png"}
        ],
        current: 0
    }
  },
  swiperChange:function(e){
    this.setData({
      'swiper.nowIdx':e.detail.current
    })
  },
  prevImg: function() {
    var swiper = this.data.swiper;
    var current = swiper.current;
    swiper.current = current > 0 ? current - 1 : swiper.imgList.length - 1;
    this.setData({
      swiper: swiper,
    })
  },

  nextImg: function() {
    console.log(2);
    var swiper = this.data.swiper;
    var current = swiper.current;
    swiper.current = current < (swiper.imgList.length - 1) ? current + 1 : 0;
    this.setData({
      swiper: swiper,
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