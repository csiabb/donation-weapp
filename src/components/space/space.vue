<template>
  <div class="space-container" :style="{ 'height': height + 'rpx' }">
  </div>
</template>
<script>
export default {
  props: {
    height: String,
    default: '16'
  }
}
</script>

<style lang="scss">
@import "@/style/common.scss";
.space-container{
  width: 100%;
  background: $background-F3F3F3;
  height: 16rpx;
}
</style>

