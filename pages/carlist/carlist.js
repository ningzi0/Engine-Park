



// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    change: false, // 当两个slider在最右端重合时，将change设置为true，从而隐藏slider2，才能继续操作slider1
    max: 100, // 两个slider所能达到的最大值
    min: 0, // 两个slider所能取的最小值
    rate: 1, // slider的最大最小值之差和100（或1000）之间的比率
    scale: 1, // 比例系数。页面显示值的时候，需要将slider1Value(slider2Value)乘以比例系数scale
    slider1Max: 100, // slider1的最大取值
    slider1Value: 0, // slider1的值
    slider2Value: 100, // slider2的值
    slider2Min: 0, // slider2的最小取值
    slider1W: 100, // slider1的宽度
    slider2W: 0, // slider2的宽度
    leftSliderPriceWidthX: '-1.5%',
    rightSliderPriceWidthX: '-3%',


    chooseSize:false,
    animationData:{},
    array: ['智能排序', '最新上架', '价格最低', '价格最高', '车龄最短', '里程最少'],
    objectArray: [
      {
        id: 0,
        name: '智能排序'
      },
      {
        id: 1,
        name: '最新上架'
      },
      {
        id: 2,
        name: '价格最低'
      },
      {
        id: 3,
        name: '价格最高'
      },
      {
        id: 4,
        name: '车龄最短'
      },
      {
        id: 5,
        name: '里程最少'
      }
    ],
    carlistArray:[{
      imgSrc:'/assets/images/other/carshow4.jpg',
      name:'雷克萨斯GS2016款300H领先版',
      info:'2018年|2.0万公里|国五',
      delprice:'42.8',
      price:'38.18'
    },
    {
      imgSrc:'/assets/images/other/mytopbg.jpg',
      name:'雷克萨斯ES 2014款 300h 精英版',
      info:'2014年|5.0万公里|国五',
      delprice:'34.8',
      price:'24.88'
    },
    {
      imgSrc:'/assets/images/other/jeep.jpg',
      name:'Jeep 牧马人 2014款 3.0L 四门版 Sahara',
      info:'2015年|5.0万公里|国五',
      delprice:'52.3',
      price:'38.8'
    },
    {
      imgSrc:'/assets/images/other/jeep2.jpg',
      name:'Jeep 指南者 2017款 200T 自动驭享版',
      info:'2017年|5.0万公里|国五',
      delprice:'45.8',
      price:'21.8'
    }],
    indexpx: 0,
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      indexpx: e.detail.value
    })
  },


  // 品牌筛选
  chooseSezi:function(e){
    var that = this;
    console.log(e);
    let index = e.currentTarget.dataset.index;
    
    var animation  = wx.createAnimation({
        duration:300,
        timingFunction:'linear'
      })
    that.animation = animation
    animation.translateY(200).step()
    that.setData({
      animationData: animation.export(),
      chooseSize:true,
      index:index
    })
    setTimeout(function(){
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export()
      })
    },50)
  },
  hideModal:function(e){
    var that = this;
    var animation = wx.createAnimation({
      duration:1000,
      timingFunction:'linear'
    })
    that.animation = animation
    animation.translateY(200).step()
    that.setData({
      animationData:animation.export()
      
    })
    setTimeout(function () {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export(),
        chooseSize: false,
        index:0
      })
    }, 50)
  },

// 开始滑动
changeStart: function (e) {
  var idx = parseInt(e.currentTarget.dataset.idx)
  if (idx === 1) {
    // dW是当前操作的slider所能占据的最大宽度百分数
    var dW = (this.data.slider2Value - this.data.min) / this.data.rate
    this.setData({
      slider1W: dW,
      slider2W: 100 - dW,
      slider1Max: this.data.slider2Value,
      slider2Min: this.data.slider2Value,
      change: false
    })
  } else if (idx === 2) {
    var dw = (this.data.max - this.data.slider1Value) / this.data.rate
    this.setData({
      slider2W: dw,
      slider1W: 100 - dw,
      slider1Max: this.data.slider1Value,
      slider2Min: this.data.slider1Value,
      change: false
    })
  }
},

// 正在滑动
changing: function (e) {
  var idx = parseInt(e.currentTarget.dataset.idx)
  var value = e.detail.value
  let rightSliderPriceWidthX = (this.data.max-value)/116-5
  let leftSliderPriceWidthX = value/116
  if (idx === 1) {
    this.setData({
      slider1Value: value,
      leftSliderPriceWidthX:leftSliderPriceWidthX+'%'
    })
  } else if (idx === 2) {
    this.setData({
      slider2Value: value,
      rightSliderPriceWidthX: rightSliderPriceWidthX+'%'
    })
  }
},
changed: function (e) {
  if (this.data.slider1Value === this.data.slider2Value && this.data.slider2Value === this.data.max) {
    this.setData({
      change: true
    })
  }
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