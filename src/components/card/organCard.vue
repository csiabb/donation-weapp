<template>
  <div class="card-container">
    <div class="card-content" @click="link ? goToLinkHandle(link) : ''">
      <div class="card-logo">
        <image :src="info.logo ? info.logo : '../../static/icons/logo.png'"  />
      </div>
      <div class="card-title">
        {{ info.title }}
      </div>
      <div class="card-sub-title">
        已分发
      </div>
      <div class="card-desc-info">
        <span>{{ info.grant_count }}</span>笔物资
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
.card-container{
  max-width: 190rpx;
  .card-content{
    text-align: center;
    font-size: $font-size-28;
    color: $font-color-3A3A3A;
    .card-logo{
      height: 70rpx;
      image{
        width: 70rpx;
        height: 70rpx;
      }
    }
    .card-title{
      width: 100%;
      margin-top: 11rpx;
      font-weight: $font-weight-500;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
    .card-sub-title{
      font-size: $font-size-24;
      color: $font-color-ADADAD;
      font-weight: $font-weight-400;
    }
    .card-desc-info{
      font-size: $font-size-24;
      color: $font-color-333;
      font-weight: $font-weight-500;
      span{
        color: $font-color-5790FF;
      }
    }
  }
}
</style>
