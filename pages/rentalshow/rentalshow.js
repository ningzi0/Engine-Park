// pages/rentalshow/rentalshow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0, //预设默认选中的栏目
    scrollLeft: 0, //tab滚动条距离左侧距离
    newsTab: ["租车须知", "退改规则","补充说明"],
    modalHidden:true,
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


// 滚动切换标签样式
// switchTab: function (e) {
//   this.setData({
//     currentTab: e.detail.current
//   });
//   this.checkCor();
// },
// 点击tab切换当前页时改变样式
swichNav: function (e) {
  var cur = e.target.dataset.current;
  console.log(e);
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
    let that= this;
    var query = wx.createSelectorQuery();
    query.select('#scroll-h0').boundingClientRect()
    query.exec(function (res) {
      console.log(res);
      //取高度
      console.log(res[0].height);
      that.setData({
        swiperHeight:res[0].height
      })
    })
    
  },
  switchTab:function(e){
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
    let that= this;
    console.log(e)
    var query = wx.createSelectorQuery();
    let currentIndex = e.detail.current;
    console.log(currentIndex)
    query.select(`#scroll-h${currentIndex}`).boundingClientRect()
    query.exec(function (res) {
      console.log(res);
      //取高度
      console.log(res[0].height);
      that.setData({
        swiperHeight:res[0].height
      })
    })
  },

  baoxian:function(){
		wx.showModal({
			title: '',
      content: '基本保险费：基本保障服务包括：车辆损失险（1500以内的损失由客户承担）；第三责任险（50万）；详细信息以门店须知为准',
      showCancel:false,
      confirmColor:'#f3610c',
			success: function(res) {
				if (res.confirm) {
				console.log('用户点击确定')
				} else if (res.cancel) {
				console.log('用户点击取消')
				}
			}
		})
  },
  
  fuwu:function(){
		wx.showModal({
			title: '',
      content: '1.本车车损5000元以内（包含5000元）不收任何费用（玻璃及轮胎的单独破损不包含）。2.若本车车损超过5000元，按照实际定损金额30%收取车辆折旧费。停运费则按照维修天数收取停运费（当日价格的租车费+基础服务费，不含增值服务）。3.发生事故第一时间联系门店，未联系门店擅自处理会导致拒赔。4.发生事故不论是否客户责任，都需要客户去对接第三方。',
      showCancel:false,
      confirmColor:'#f3610c',
			success: function(res) {
				if (res.confirm) {
				console.log('用户点击确定')
				} else if (res.cancel) {
				console.log('用户点击取消')
				}
			}
		})
  },
  ertong:function(){
		wx.showModal({
			title: '',
      content: '儿童座椅：适用于9周岁以下儿童，数量有限，如未能提供将不会收取费用',
      showCancel:false,
      confirmColor:'#f3610c',
			success: function(res) {
				if (res.confirm) {
				console.log('用户点击确定')
				} else if (res.cancel) {
				console.log('用户点击取消')
				}
			}
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