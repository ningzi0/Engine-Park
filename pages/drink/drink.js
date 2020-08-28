// pages/drink/drink.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    drinktitledatas:[{
      drinkText:'田园漂香',
      id:0
    },
    {
      drinkText:'风味双皮奶',
      id:1
    },
    {
      drinkText:'冰沙风暴',
      id:2
    },
    {
      drinkText:'滴滴香浓',
      id:3
    },
    {
      drinkText:'异国之恋',
      id:4
    },
    {
      drinkText:'梦幻雪泡',
      id:5
    }],
    drinkCon:[{
      labelClass:'new',
      drinklabel:'新',
      drinkPic:'/assets/images/other/drink1.png',
      drinkText:'草莓珍珠奶茶',
      drinkUrl:'/pages/drinkshow/drinkshow'
    },
    {
      labelClass:'hot',
      drinklabel:'热',
      drinkPic:'/assets/images/other/drink1.png',
      drinkText:'草莓珍珠奶茶',
      drinkUrl:'/pages/drinkshow/drinkshow'
    },
    {
      labelClass:'cu',
      drinklabel:'促',
      drinkPic:'/assets/images/other/drink1.png',
      drinkText:'草莓珍珠奶茶',
      drinkUrl:'/pages/drinkshow/drinkshow'
    },
    {
      drinklabel:'',
      drinkPic:'/assets/images/other/drink1.png',
      drinkText:'草莓珍珠奶茶',
      drinkUrl:'/pages/drinkshow/drinkshow'
    },
    {
      drinklabel:'',
      drinkPic:'/assets/images/other/drink1.png',
      drinkText:'草莓珍珠奶茶',
      drinkUrl:'/pages/drinkshow/drinkshow'
    }],
    drinkrecomCon:[{
      drinkrecomPic:'/assets/images/other/drink2.jpg',
      drinkrecomTexth3:'草莓珍珠',
      drinkrecomTexttext:'夏日冷饮·草莓珍珠奶茶',
      drinkrecomNum:'12',
      drinkrecomUrl:'/pages/drinkshow/drinkshow'
    },
    {
      drinkrecomPic:'/assets/images/other/drink2.jpg',
      drinkrecomTexth3:'草莓珍珠',
      drinkrecomTexttext:'夏日冷饮·草莓珍珠奶茶',
      drinkrecomNum:'10',
      drinkrecomUrl:'/pages/drinkshow/drinkshow'
    },
    {
      drinkrecomPic:'/assets/images/other/drink2.jpg',
      drinkrecomTexth3:'草莓珍珠',
      drinkrecomTexttext:'夏日冷饮·草莓珍珠奶茶',
      drinkrecomNum:'12',
      drinkrecomUrl:'/pages/drinkshow/drinkshow'
    }],
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