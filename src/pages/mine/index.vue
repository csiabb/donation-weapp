<!--suppress HtmlUnknownAttribute, CheckTagEmptyBody, HtmlDeprecatedTag -->
<template>
  <div>
    <view class="home-container">
      <!-- 头部 -->
      <view class="head-title">
        <image src="/static/images/mine/head_sec_bg.png" alt="背景图" class="head-bg-img"></image>
        <view class="title-content">
          <!-- 头像 &名称 -->
          <view class="mine-info">
            <image src="/static/images/mine/user_img.png" alt="头像" class="head-mine-img"></image>
            <text class="info-name">孟希婷</text>
          </view>
          <!-- 公示物品&公示资金 tab -->
          <view class="head-tab">
            <view class="tab-left">
              <view class="tab-num"> 13</view>
              <view class="tab-dec">公示物品</view>
            </view>
            <view class="tab-right">
              <view class="tab-num"> 6</view>
              <view class="tab-dec">公示资金</view>
            </view>
          </view>
        </view>
      </view>

      <!-- 事件节点 -->
      <view class="event-contenet">
        <view class="line-contnet">
          <image src="/static/images/mine/heart.png" alt class="left-img"></image>
        </view>
        <view class="event-rec">
          <view class="event-time">2020-02-10</view>
          <view class="event-detail">
            <view class="event-item">
              <image src="/static/images/mine/juan.png" alt class="event-type"></image>
              <view class="event-title">
                <view class="event-name">孟希婷</view>
                <view class="event-num">捐助物资：N95 口罩</view>
              </view>
            </view>
            <view class="event-item">
              <image src="/static/images/mine/shou.png" alt class="event-type"></image>
              <view class="event-title">
                <view class="event-name">
                  <text>韩红爱心基金会</text>
                  <image src="/static/images/mine/vip.png" class="icon-dec"></image>
                </view>
              </view>
            </view>

          </view>
        </view>
      </view>
      <view class="event-contenet">
        <view class="line-contnet">
          <image src="/static/images/mine/heart.png" alt class="left-img"></image>
        </view>
        <view class="event-rec">
          <view class="event-time">2020-02-10</view>
          <view class="event-detail">
            <view class="event-item">
              <image src="/static/images/mine/juan.png" alt class="event-type"></image>
              <view class="event-title">
                <view class="event-name">孟希婷</view>
                <view class="event-num">捐助物资：
                  <text>N95 口罩 300个</text>
                  <view class="other-desc">手套 300双</view>
                </view>
              </view>
            </view>
            <view class="event-item">
              <image src="/static/images/mine/shou.png" alt class="event-type"></image>
              <view class="event-title">
                <view class="event-name">
                  <text>韩红爱心基金会</text>
                  <image src="/static/images/mine/vip.png" class="icon-dec"></image>
                </view>
              </view>
            </view>

          </view>
        </view>
      </view>
      <view class="event-contenet">
        <view class="line-contnet">
          <image src="/static/images/mine/heart.png" alt class="left-img"></image>
        </view>
        <view class="event-rec">
          <view class="event-time">2020-02-10</view>
          <view class="event-detail">
            <view class="event-item">
              <image src="/static/images/mine/juan.png" alt class="event-type"></image>
              <view class="event-title">
                <view class="event-name">孟希婷</view>
                <view class="event-num">捐助物资：N95 口罩</view>
              </view>
            </view>
            <view class="event-item">
              <image src="/static/images/mine/shou.png" alt class="event-type"></image>
              <view class="event-title">
                <view class="event-name">
                  <text>韩红爱心基金会</text>
                  <image src="/static/images/mine/vip.png" class="icon-dec"></image>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <tab-bar :selectNavIndex="2"/>
  </div>
</template>

<!--suppress NpmUsedModulesInstalled -->
<script>
  import tabBar from '@/components/tabbar/tabBar'

  export default {
    components: {
      tabBar
    },
    created() {
      console.log('page index created', this)
    },
    mounted() {
      console.log('mounted', this)
    },
    onLoad() {
      console.log('page index onLoad', this)
    },
    onReady() {
      console.log('page index onReady', this)
    },
    onShow() {
      console.log('onShow', this)
    },
    onUnload() {
      console.log('onUnload', this)
    },
    onHide() {
      console.log('onHide', this)
    }
  }
</script>

<!--suppress CssUnknownTarget, CssInvalidPropertyValue -->
<style scoped>
  .home-container {
    padding-bottom: 98rpx;
    overflow: hidden;
    height: fit-content;
  }

  /* 头部 */
  .head-title {
    position: relative;
    height: 320rpx;
  }

  .head-bg-img {
    width: 100%;
    height: 314rpx;
  }

  .title-content {
    position: absolute;
    top: 0;
    width: 100%;
  }

  .mine-info {
    display: flex;
    justify-content: left;
    align-items: center;
    width: 100%;
    height: 100rpx;
    margin-left: 56rpx;
  }

  .head-mine-img {
    width: 100rpx;
    height: 100rpx;
    border-radius: 50rpx;
  }

  .info-name {
    display: inline-block;
    line-height: 100rpx;
    margin-left: 20rpx;
    color: #fff;
  }

  /* 头部tab */
  .head-tab {
    width: 640rpx;
    height: 140rpx;
    margin: 30rpx auto;
    background: rgba(255, 255, 255, 1);
    border-radius: 16rpx;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .tab-left {
    height: 86rpx;
    width: 318rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #ddd;
  }

  .tab-right {
    height: 86rpx;
    width: 318rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .tab-num {
    font-size: 40rpx;
    font-weight: 600;
    color: rgba(53, 207, 130, 1);
    line-height: 48rpx;
  }

  .tab-dec {
    font-size: 26rpx;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 32rpx;
    margin-top: 10rpx;
  }

  /* 流水记录 */
  .event-contenet {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 684rpx;
    margin-left: 32rpx;
    height: fit-content;
  }

  .line-contnet {
    display: flex;
    width: 48rpx;
    height: 290rpx;
    max-height: 380rpx;
    justify-content: center;
    position: relative;

  }

  .line-contnet::before {
    content: "";
    width: 4rpx;
    height: 320rpx;
    background: #35cf82;
    left: 50%;
    top: 0;
  }

  .left-img {
    position: absolute;
    top: 0;
    width: 48rpx;
    height: 48rpx;
  }

  .event-rec {
    width: 672rpx;
    height: 100%;
    margin-left: 20rpx;
    text-align: left;
  }

  .event-time {
    height: 48rpx;
    line-height: 48rpx;
    font-size: 24rpx;
    color: #333;
  }

  .event-detail {
    width: 620rpx;
    background-color: #f8f8f8;
    border-radius: 8rpx;
    padding-top: 28rpx;
    padding-bottom: 28rpx;
  }

  .event-item {
    display: flex;
    flex-direction: row;
    margin-left: 30rpx;
    margin-top: 10rpx;
  }

  .event-type {
    width: 54rpx;
    height: 54rpx;
  }

  .event-title {
    margin-left: 20rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 4rpx;
  }

  .event-name {
    font-size: 28rpx;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 40rpx;
    display: flex;
    align-items: center;
  }

  .event-num {
    margin-top: 20rpx;
    font-size: 24rpx;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 33rpx;
  }

  .icon-dec {
    margin-top: 4rpx;
    width: 28rpx;
    height: 28rpx;
    margin-left: 10rpx;
  }

  .other-desc {
    margin-left: 120rpx;
  }
</style>
