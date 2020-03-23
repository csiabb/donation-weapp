<template>
  <div class="card-item-container" @click="goToLinkHandle(link)">
    <van-cell  size="large" is-link link-type="navigateTo" :url="link">
      <view slot="title">
        <view class="van-cell-text">
          <img :src="info.logo" alt="" class="logo"  mode='widthFix' />
          <span class="title">{{info.title}}</span>
        </view>
      </view>
    </van-cell>
    <div class="item-content">
      <div>
        <img src="/static/images/receiver_icon.png" alt="" mode='widthFix' />
        <div class="item-row">
          <span>物品{{info.receive.supplies}}笔</span>
          <span>资金{{info.receive.funds}}元</span>
        </div>
      </div>
      <div class="space-lf">
        <img src="/static/images/sender_icon.png" alt="" mode='widthFix' />
        <div class="item-row">
          <span>物品{{info.distribute.supplies}}笔</span>
          <span>资金{{info.distribute.funds}}元</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: {}
    },
    link: {
      type: String,
      default: ''
    }
  },
  methods: {
    goToLinkHandle (url) {
      console.log(url)
      wx.navigateTo({
        url
      })
    }
  }
}
</script>

<style lang="scss">
@import "@/style/common.scss";
.card-item-container{
  background:rgba(255,255,255,1);
  box-shadow:-1rpx 6rpx 16rpx 0rpx rgba(0,0,0,0.1);
  border-radius:16rpx;
  padding: 0 22rpx 30rpx;
  margin-bottom: 35rpx;
  .van-cell{
    line-height: 30rpx;
    font-size: 30rpx;
    color: #717171 ;
    padding: 30rpx 0rpx;
    &:after{
      border: none;
    }
  }
  .van-cell__left-icon-wrap,.van-cell__right-icon-wrap{
    height: 36rpx;
  }
  .van-hairline--top-bottom::after{
    border-top-width:0 ;
    border-bottom-width: 1rpx;
    border-color: #ddd;
  }
  .logo{
    width: 54rpx;
    vertical-align: center;
  }
  .van-cell-text{
    line-height: 52rpx;
    display: flex;
    align-items: center;
  }
  .title{
    display: inline-block;
    margin-left: 30rpx;
    font-size: 28rpx;
    color: #3A3A3A;
    font-weight:500;
  }
  .item-content{
    display: flex;
    flex-direction: row;
    justify-content: center;
    >div{
      display: flex;
      flex-direction: row;
      align-items: center;
      img{
        width: 54rpx;
        margin-right: 15rpx;
      }
    }
    .item-row{
      display: flex;
      flex-direction: column;
      font-size: 24rpx;
      color: #666;
      span{
        display: inline-block;
        line-height: 38rpx;
      }
    }
  }
  .space-lf{
    margin-left: 50rpx;
  }
}
</style>
