<template>
  <div class="home-container">
    <div>我的</div>
    <tab-bar :selectNavIndex="2"></tab-bar>
  </div>
</template>

<script>
import tabBar from '@/components/tabbar/tabBar'

export default {
  components: {
    tabBar
  }
}
</script>

<style lang="scss">
@import "@/style/common.scss";
.home-container{
  padding-bottom: $tabbar-height;
}
</style>
