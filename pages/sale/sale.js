Page({
  data: {
    pageName: '销售统计'
  },
  onLoad() {
    // 访问全局变量
    console.log(getApp().globalData.count);
  }
});