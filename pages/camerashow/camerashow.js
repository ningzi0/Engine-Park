// pages/camerashow/camerashow.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    extraClasses: '',
    cur:0,
    camerashowArray:[{
      pic:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599046410883&di=d9f389fd86fca10345a141531b4e7417&imgtype=0&src=http%3A%2F%2Fd.paper.i4.cn%2Fmax%2F2016%2F11%2F16%2F13%2F1479275254159_497988.jpg',
      text:'内容1111111',
      extraClasses:""
    },
    {
      pic:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599046410900&di=ab3fee9c66fe3942addd884e06a3f349&imgtype=0&src=http%3A%2F%2Ffile.ipadown.com%2Fuploads%2Fbmw%2Fwximgs%2Fc648cc675ee7281e3ac14f1c6543a845.jpg',
      text:'内容22222222',
      extraClasses:""
    },
    {
      pic:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599046410886&di=6734e6b1c63452b1e07536f0d05a8d40&imgtype=0&src=http%3A%2F%2F07img.mopimg.cn%2Fmobile%2F20180312%2F20180312103104_49b9753c9ad9a3c48748f324235c0957_3.jpeg',
      text:'内容33333333',
      extraClasses:""
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let current =0;
     let arrayIndex = `camerashowArray[${current}].extraClasses`
     if (this.data.camerashowArray[current].extraClasses == '') {
      this.setData({
        [arrayIndex]: 'box-transition box-moved'
      })
    } 
  },
  swiperChange:function(e){
   let current = e.detail.current;
   let arrayIndex = `camerashowArray[${current}].extraClasses`
   if (this.data.camerashowArray[current].extraClasses == ''||this.data.camerashowArray[current].extraClasses=="box-transition" ) {
    this.setData({
      [arrayIndex]: 'box-transition box-moved'
    })
    console.log(this.data.camerashowArray[current].extraClasses)
  }else if(this.data.camerashowArray[current].extraClasses == 'box-transition box-moved'){
    this.setData({
      [arrayIndex]: 'box-transition'
    })
  } 
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