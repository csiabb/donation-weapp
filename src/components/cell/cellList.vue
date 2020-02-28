<template>
  <div>
    <div class="cell-container" @click="link ? goToLinkHandle(link) : ''">
      <image v-if="icon" class="icon" :src="icon" />
      <div>
        {{ txt }}
      </div>
      <div v-if="arrow !== 'none'" class="arrow-right">
        <image class="arrow-icon" src="../../static/icons/arrow-right-active.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    txt: {
      type: String,
      default: ''
    },
    arrow: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    goToLinkHandle (url) {
      wx.navigateTo({
        url
      })
    }
  }
}
</script>

<style lang="scss">
@import "@/style/common.scss";
$font-color-717171: #717171;;
.cell-container{
  padding: 20rpx 0;
  color: $font-color-717171;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  div{
    font-size: $font-size-30;
    font-weight: $font-weight-400;
  }
  .icon{
    width: 52rpx;
    height: 52rpx;
    margin-right: 16rpx;
  }
  .arrow-right{
    position: absolute;
    right: 0;
    top: 50%;
    width: 36rpx;
    height: 36rpx;
    transform: translate(0, -50%);
    .arrow-icon{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
