// pages/LoginPage/index.js
Page({

    /**
     * Page initial data
     */
    data: {
        isUser: false,
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad(options) {

    },

    /**
     * Lifecycle function--Called when page is initially rendered
     */
    onReady() {

    },

    /**
     * Lifecycle function--Called when page show
     */
    onShow() {
        this.getUser();
    },

    /**
     * Lifecycle function--Called when page hide
     */
    onHide() {

    },

    /**
     * Lifecycle function--Called when page unload
     */
    onUnload() {

    },

    /**
     * Page event handler function--Called when user drop down
     */
    onPullDownRefresh() {

    },

    /**
     * Called when page reach bottom
     */
    onReachBottom() {

    },

    /**
     * Called when user click on the top right corner to share
     */
    onShareAppMessage() {
        console.log(111)
        wx.navigateTo({
          url: '../MainPage/index',
        })
    },

    //获取user
    async getUser() {
        await wx.cloud.callFunction({
            name: 'getOpenId'
        }).then(res => {
            if (res.result === getApp().globalData._openidA || res.result === getApp().globalData._openidB) {
                this.setData({
                    isUser: true,
                })
            } else {
                this.setData({
                    isUser: false,
                })
            }
        })
    },
})