// pages/report/report.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0, //预设默认选中的栏目
    scrollLeft: 0, //tab滚动条距离左侧距离
    reportarray:[{
      images:'/assets/images/baogao/gujia.png',
      reportText:'车辆骨架',
      index:0
    },
    {
      images:'/assets/images/baogao/waiguan.png',
      reportText:'车辆外观',
      index:1
    },
    {
      images:'/assets/images/baogao/bujian.png',
      reportText:'功能部件',
      index:2
    },
    {
      images:'/assets/images/baogao/fangxiangpan.png',
      reportText:'启动检查',
      index:3
    }
    ,
    {
      images:'/assets/images/baogao/dipan.png',
      reportText:'底盘检查',
      index:4
    },
    {
      images:'/assets/images/baogao/lushi.png',
      reportText:'路试检查',
      index:5
    },
    {
      images:'/assets/images/baogao/jiashicang.png',
      reportText:'驾驶舱',
      index:6
    },
    {
      images:'/assets/images/baogao/fadongji.png',
      reportText:'发动机',
      index:7
    }],
    reportArray:[{
      reportTitle:'车辆骨架',
      reportItem:[{
        reportext:'车辆整体对称性',
      },
      {
        reportext:'后防撞梁',
      },
      {
        reportext:'右C柱',
      },
      {
        reportext:'行李箱底板',
      },
      {
        reportext:'左后纵梁',
      },
      {
        reportext:'右前减震器悬挂部位',
      },
      {
        reportext:'驾驶舱底板',
      },
      {
        reportext:'右底大边',
      },
      {
        reportext:'驾驶舱底板梁',
      },
      {
        reportext:'左C柱',
      }]
    },{
      reportTitle:'车辆外观',
      reportItem:[{
        reportext:'右后翼子板',
      },{
        reportext:'右前轮',
      },{
        reportext:'雾灯',
      },{
        reportext:'左后视镜',
      },{
        reportext:'右后车门',
      },{
        reportext:'左后轮',
      },{
        reportext:'左前翼子板',
      },{
        reportext:'发动机舱盖表面',
      },{
        reportext:'右后视镜',
      },{
        reportext:'左后车门',
      },{
        reportext:'轮胎',
      },{
        reportext:'行李舱盖附件',
      }]
    },{
      reportTitle:'功能部件',
      reportItem:[{
        reportext:'全套钥匙',
      },{
        reportext:'轮胎扳手及随车钥匙',
      },{
        reportext:'中央集控',
      },{
        reportext:'遥控器及功能',
      },{
        reportext:'三角警示牌',
      },{
        reportext:'排气管及消音器',
      },{
        reportext:'发动机舱盖锁止',
      },{
        reportext:'车内后视镜',
      },{
        reportext:'千斤顶',
      },{
        reportext:'灭火器',
      },{
        reportext:'喇叭高低音色',
      },{
        reportext:'备胎',
      },{
        reportext:'各车门锁止',
      },{
        reportext:'前后雨刮器',
      }]
    },{
      reportTitle:'启动检查',
      reportItem:[{
        reportext:'前翼子板内缘、水箱框架、横拉梁有无凹凸或修复痕迹',
      }]
    },{
      reportTitle:'底盘检查',
      reportItem:[{
        reportext:'前翼子板内缘、水箱框架、横拉梁有无凹凸或修复痕迹',
       }]
    },{
      reportTitle:'路试检查',
      reportItem:[{
        reportext:'前翼子板内缘、水箱框架、横拉梁有无凹凸或修复痕迹',
       }]
    },{
      reportTitle:'驾驶舱',
      reportItem:[{
        reportext:'前翼子板内缘、水箱框架、横拉梁有无凹凸或修复痕迹',
       }]
    },{
      reportTitle:'发动机',
      reportItem:[{
        reportext:'前翼子板内缘、水箱框架、横拉梁有无凹凸或修复痕迹',
       }]
    }]
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