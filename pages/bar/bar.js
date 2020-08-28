// pages/bar/bar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas:[{
      barico:'/assets/images/ico/barico1.png',
      barText:'威士忌',
      id:0
    },
    {
      barico:'/assets/images/ico/barico2.png',
      barText:'朗姆酒',
      id:1
    },
    {
      barico:'/assets/images/ico/barico3.png',
      barText:'伏特加',
      id:2
    },
    {
      barico:'/assets/images/ico/barico4.png',
      barText:'啤酒',
      id:3
    }],
    barConArray:[{
      barimg:'/assets/images/ico/barico1.png',
      barNum:'1',
      barTitle:'Chivas Regal 25',
      barP:'对1909年第一款芝华士调和威士忌的诚挚礼赞延续传奇人物Charles Howard酿造首瓶芝华士时完全相同的传统配方与工艺',
      barPrice:'2018',
      id:0,
      active:0,
      barurl:'/pages/drinkshow/drinkshow'
    },
    {
      barimg:'/assets/images/ico/barico1.png',
      barNum:'2',
      barTitle:'Angels Envy',
      barP:'对1909年第一款芝华士调和威士忌的诚挚礼赞延续传奇人物Charles Howard酿造首瓶芝华士时完全相同的传统配方与工艺',
      barPrice:'836',
      id:1,
      active:0,
      barurl:'/pages/drinkshow/drinkshow'
    },
    {
      barimg:'/assets/images/ico/barico1.png',
      barNum:'3',
      barTitle:'Southern Comfort Sweet',
      barP:'对1909年第一款芝华士调和威士忌的诚挚礼赞延续传奇人物Charles Howard酿造首瓶芝华士时完全相同的传统配方与工艺',
      barPrice:'118',
      id:2,
      active:0,
      barurl:'/pages/drinkshow/drinkshow'
    },
    {
      barimg:'/assets/images/ico/barico1.png',
      barNum:'4',
      barTitle:'Angels Envy',
      barP:'对1909年第一款芝华士调和威士忌的诚挚礼赞延续传奇人物Charles Howard酿造首瓶芝华士时完全相同的传统配方与工艺',
      barPrice:'836',
      id:3,
      active:0,
      barurl:'/pages/drinkshow/drinkshow'
    },
    {
      barimg:'/assets/images/ico/barico1.png',
      barNum:'5',
      barTitle:'Southern Comfort Sweet',
      barP:'对1909年第一款芝华士调和威士忌的诚挚礼赞延续传奇人物Charles Howard酿造首瓶芝华士时完全相同的传统配方与工艺',
      barPrice:'118',
      id:4,
      active:0,
      barurl:'/pages/drinkshow/drinkshow'
    }],
    currentItem:0
  },
  other:{
    switch_page:false
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
    
    menuClick:function(e){
      let _num = e.currentTarget.dataset.num
        let arrayName = `barConArray[${_num}].active`;
        console.log(this.other.switch_page)
      if(!this.other.switch_page){
        console.log(arrayName);
        this.setData({
          [arrayName]:1
        })
        this.other.switch_page =true;
      }else{
        console.log(arrayName);
        this.setData({
          [arrayName]:0
        })
        this.other.switch_page =false;
      }
      
    
      console.log(this.data)
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