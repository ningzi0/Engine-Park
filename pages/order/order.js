var app = getApp();
Page({
  data: {
    winHeight: "",//窗口高度
    currentTab: 0, //预设默认选中的栏目
    scrollLeft: 0, //tab滚动条距离左侧距离
    newsTab: ["全部订单", "退款"],
    orderArray:[{
      ordernum:'YP202009021124',
      orderimg:'http://www.ncjmcc.com/uploads/allimg/161112/6-1611121036191K.jpg',
      orderTName:'冰布丁奶茶',
      orderTNum:'1',
      orderTDate:'2020-09-02 11：24',
      orderTprice:'36.6',
      orderUrl:'/pages/ordershow/ordershow'
    },
    {
      ordernum:'YP202009021124',
      orderimg:'http://www.ncjmcc.com/uploads/allimg/161112/6-1611121036191K.jpg',
      orderTName:'冰布丁奶茶',
      orderTNum:'1',
      orderTDate:'2020-09-02 11：24',
      orderTprice:'36.6',
      orderUrl:'/pages/ordershow/ordershow'
    },
    {
      ordernum:'YP202009021124',
      orderimg:'http://www.ncjmcc.com/uploads/allimg/161112/6-1611121036191K.jpg',
      orderTName:'冰布丁奶茶',
      orderTNum:'1',
      orderTDate:'2020-09-02 11：24',
      orderTprice:'36.6',
      orderUrl:'/pages/ordershow/ordershow'
    }],
    retreatArray:[{
      ordernum:'YP202009021124',
      orderimg:'http://www.ncjmcc.com/uploads/allimg/161112/6-1611121036191K.jpg',
      orderTName:'冰布丁奶茶',
      orderTNum:'1',
      orderTDate:'2020-09-02 11：24',
      orderTprice:'36.6',
      orderUrl:'/pages/ordershow/ordershow'
    }]
  },
  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击tab切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
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
  onLoad: function () {
    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 800 / clientWidth;
        var calc = clientHeight * rpxR - 180;
        that.setData({
          winHeight: calc
        });
      }
    });
  }
})