// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    InTtiarray: [{
      Intit: '保养',
      Intext:'汽车保养',
      Inurl:'/pages/maintain/maintain'
    }, {
      Intit: '洗车',
      Intext:'车辆精洗',
      Inurl:'/pages/yuyuexiche/yuyuexiche'
    }, {
      Intit: '审车',
      Intext:'CIAS专业认证'
    }],
    bImgArray: [{
      src: '/assets/images/other/car.jpg',
    }, {
      src: '/assets/images/other/car2.jpg',
    }],
    tabArray:[{
      tabText:'引擎币',
      tabUrl:'/pages/no/no'
    },{
      tabText:'抽奖活动',
      tabUrl:'/pages/no/no'
    },{
      tabText:'租车服务',
      tabUrl:'/pages/rental/rental'
    }],
    menuArray:[{
      menuSrc:'/assets/images/ico/online.png',
      menuText:'线上展车厅',
      url:'/pages/recommend/recommend'
    },{
      menuSrc:'/assets/images/ico/look.png',
      menuText:'预约看车',
      url:'/pages/lookcar/lookcar'
    },{
      menuSrc:'/assets/images/ico/xiangji.png',
      menuText:'拍摄影棚',
      url:'/pages/camera/camera'
    },{
      menuSrc:'/assets/images/ico/yinliao.png',
      menuText:'引擎饮品',
      url:'/pages/drink/drink'
    }]
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