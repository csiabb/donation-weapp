<template>
  <div class="card-center-container">
    <div class="card-content" @click="link ? goToLinkHandle(link) : ''">
      <div class="card-logo">
        <image class="logo" :src="info.logo" />
        <image class="arrow-icon" src="../../static/icons/arrow-right-active.png" />
      </div>
      <div class="card-info">
        <div class="item">
          <div class="item-icon">
            <image src="../../static/icons/income.png" />
          </div>
          <div class="item-info">
            <div>物品: <span>{{ info.income.goods }}笔</span></div>
            <div>资金: <span>{{ info.income.capital }}元</span></div>
          </div>
        </div>
        <div class="item">
          <div class="item-icon">
            <image src="../../static/icons/disburse.png" />
          </div>
          <div class="item-info">
            <div>物品: <span class="active">{{ info.income.goods }}笔</span></div>
            <div>资金: <span class="active">{{ info.income.capital }}元</span></div>
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
.card-center-container{
  background: #fff;
  padding: 20rpx;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  box-shadow:0px 1px 32rpx 0px rgba(0,0,0,0.1);
  .card-content{
    .card-logo{
      display: flex;
      flex: 1;
      width: 100%;
      flex-direction: row;
      justify-content: center;
      position: relative;
      .logo{
        width: 66rpx;
        height: 66rpx;
      }
      .arrow-icon{
        position: absolute;
        right: 0;
        top: 15rpx;
        width: 36rpx;
        height: 36rpx;
      }
    }
    .card-info{
      display: flex;
      flex: 1;
      flex-direction: row;
      margin-top: 28rpx;
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
          font-size: $font-size-28;
          color: $font-color-333;
          font-weight: $font-weight-400;
          span{
            color: $font-color-35CF82;
            font-weight: $font-weight-600;
          }
          .active{
            color: $font-color-F8B400;
          }
        }
      }
    }
  }
}
</style>
