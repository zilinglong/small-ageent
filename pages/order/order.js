// 模块化--引入公共函数
var utils = require('../../utils/util.js');
Page({
  data: {
    pageName: 'order',
    array: [1, 2, 3, 4, 5],
    view: 'webview',
    count: 0
  },
  onLoad() {
    // 全局变量
    console.log(getApp().globalData.count);
    getApp().globalData.count++;
    console.log(getApp().globalData.count);
    // 模块化--使用公共函数
    utils.sayHello('mengmingxiu');
  },
  // 数字+1
  addCount() {
    this.setData({
      count: this.data.count + 10
    });
    console.log(this.data.count);
  },
  onTabItemTap(item) {
    console.log('112234');
    console.log(item.index);
    console.log(item.pagePath);
    console.log(item.text);
  }
});