<template>
  <div class="card-left-container">
    <div class="card-content" @click="info.link ? goToLinkHandle(info.link) : ''">
      <div class="card-logo">
        <div class="logo">
          <image :src="info.logo" />
          <div>{{ info.title }}</div>
        </div>
        <image class="arrow-icon" src="../../static/icons/arrow-right-active.png" />
      </div>
      <div class="card-info">
        <div class="item">
          <div class="item-icon">
            <image src="../../static/icons/income.png" />
          </div>
          <div class="item-info">
            <div>物品: {{ info.income.goods }}笔</div>
            <div>资金: {{ info.income.capital }}元</div>
          </div>
        </div>
        <div class="item">
          <div class="item-icon">
            <image src="../../static/icons/disburse.png" />
          </div>
          <div class="item-info">
            <div>物品: {{ info.income.goods }}笔</div>
            <div>资金: {{ info.income.capital }}元</div>
          </div>
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
.card-left-container{
  background: #fff;
  padding: 26rpx;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 20rpx 5rpx rgba(204, 204, 204, 0.4);
  border-radius: 16rpx;
  .card-content{
    .card-logo{
      display: flex;
      flex: 1;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .logo{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: $font-size-28;
        color: $font-color-3A3A3A;
        font-weight: $font-weight-500;
        image{
          width: 54rpx;
          height: 54rpx;
          margin-right: 14rpx;
        }
      }
      .arrow-icon{
        width: 36rpx;
        height: 36rpx;
      }
    }
    .card-info{
      display: flex;
      flex: 1;
      flex-direction: row;
      margin-top: 28rpx;
      padding-left: 68rpx;
      box-sizing: border-box;
      .item{
        display: flex;
        flex: 1;
        flex-direction: row;
        align-items: center;
        image{
          width: 54rpx;
          height: 54rpx;
        }
        .item-icon{
          display: flex;
          width: 64rpx;
        }
        .item-info{
          display: flex;
          flex: 1;
          flex-direction: column;
          font-size: $font-size-24;
          color: $font-color-666;
        }
      }
    }
  }
}
</style>
