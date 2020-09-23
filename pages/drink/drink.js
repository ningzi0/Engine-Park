// pages/drink/drink.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buycart:false,
    datas:[{barText:'大杯500ML',id:0},
           {barText:'中杯400ML',id:1},
           {barText:'小杯300ML',id:2}],
    datas2:[{barText:'是',id:3},
           {barText:'否',id:4}],
    modalHidden:true,
    currentItem:0,
    currentTab: 0, //预设默认选中的栏目
    scrollLeft: 0, //tab滚动条距离左侧距离
    reportarray:[{
      dinktabText:'饮品区',
      index:0
    },
    {
      dinktabText:'酒水区',
      index:1
    }],
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
    }],
    barConArray:[{
      barimg:'/assets/images/other/drink2.jpg',
      barNum:'1',
      barTitle:'草莓珍珠奶茶',
      barP:'夏日冷饮·草莓珍珠奶茶',
      barPrice:'2018',
      id:0,
      active:0,
      barurl:'/pages/drinkshow/drinkshow'
    },
    {
      barimg:'/assets/images/other/drink2.jpg',
      barNum:'2',
      barTitle:'草莓珍珠奶茶',
      barP:'夏日冷饮·草莓珍珠奶茶',
      barPrice:'836',
      id:1,
      active:0,
      barurl:'/pages/drinkshow/drinkshow'
    },
    {
      barimg:'/assets/images/other/drink2.jpg',
      barNum:'3',
      barTitle:'草莓珍珠奶茶',
      barP:'夏日冷饮·草莓珍珠奶茶',
      barPrice:'118',
      id:2,
      active:0,
      barurl:'/pages/drinkshow/drinkshow'
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
    }],
    /*酒水区*/
    jiutitledatas:[{
      drinkText:'威士忌',
      id:0
    },
    {
      drinkText:'朗姆酒',
      id:1
    },
    {
      drinkText:'伏特加',
      id:2
    },
    {
      drinkText:'啤酒',
      id:3
    }],
    jiuConArray:[{
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
      barTitle:'Chivas Regal 25',
      barP:'对1909年第一款芝华士调和威士忌的诚挚礼赞延续传奇人物Charles Howard酿造首瓶芝华士时完全相同的传统配方与工艺',
      barPrice:'836',
      id:1,
      active:0,
      barurl:'/pages/drinkshow/drinkshow'
    },
    {
      barimg:'/assets/images/ico/barico1.png',
      barNum:'3',
      barTitle:'Chivas Regal 25',
      barP:'对1909年第一款芝华士调和威士忌的诚挚礼赞延续传奇人物Charles Howard酿造首瓶芝华士时完全相同的传统配方与工艺',
      barPrice:'118',
      id:2,
      active:0,
      barurl:'/pages/drinkshow/drinkshow'
    }],
    jiuCon:[{
      labelClass:'new',
      drinklabel:'新',
      drinkPic:'/assets/images/ico/barico1.png',
      drinkText:'Chivas Regal 25',
      drinkUrl:'/pages/drinkshow/drinkshow'
    },
    {
      labelClass:'hot',
      drinklabel:'热',
      drinkPic:'/assets/images/ico/barico1.png',
      drinkText:'Chivas Regal 25',
      drinkUrl:'/pages/drinkshow/drinkshow'
    },
    {
      labelClass:'cu',
      drinklabel:'促',
      drinkPic:'/assets/images/ico/barico1.png',
      drinkText:'Chivas Regal 25',
      drinkUrl:'/pages/drinkshow/drinkshow'
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
    swichNav: function (e) {
      var cur = e.currentTarget.dataset.current;
      console.log(e)
      if (this.data.currentTab == cur) {
        return false;
      }
      else {
        this.setData({
          currentTab: cur
        })
      }
    },
    //判断当前滚动超过一屏时，设置tab向左滚动。
    checkCor: function () {
      if (this.data.currentTab > 4) {
        this.setData({
          scrollLeft: 300
        })
      } else {
        this.setData({
          scrollLeft: 0
        })
      }
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
      /**
       * 生命周期函数--监听页面加载
       */
      onLoad: function (options) {
        // let that= this;
        // var query = wx.createSelectorQuery();
        // query.select('#scroll-h0').boundingClientRect()
        // query.exec(function (res) {
        //   console.log(res);
        //   //取高度
        //   console.log(res[0].height);
        //   that.setData({
        //     swiperHeight:res[0].height
        //   })
        // })
        
      },
      switchTab:function(e){
        this.setData({
          currentTab: e.detail.current
        });
        this.checkCor();
        // let that= this;
        // console.log(e)
        // var query = wx.createSelectorQuery();
        // let currentIndex = e.detail.current;
        // console.log(currentIndex)
        // query.select(`#scroll-h${currentIndex}`).boundingClientRect()
        // query.exec(function (res) {
        //   console.log(res);
        //   //取高度
        //   console.log(res[0].height);
        //   that.setData({
        //     swiperHeight:res[0].height
        //   })
        // })
      },
 
      togglebuycart() {
        this.setData({
          buycart: !this.data.buycart
        });
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