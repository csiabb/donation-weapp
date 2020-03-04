<template>
  <scroll-view class="organ-container" scroll-y="true" bindscroll="scroll" style="width: 100%">
    <div 
      class="organization-item"
      v-for="(item, index) in list"
      :index="index"
      :key="index"
    >
      <organ-card-left :info="item" :link="'/pages/organDetail/main?id=' + item.id" />
    </div>
  </scroll-view>
</template>

<script>
import organCardLeft from '@/components/card/organCardLeft'
export default {
  components: {
    organCardLeft
  },
  data () {
    return {
      list: [
        {
          id: '1',
          logo: '../../static/images/img1.png',
          title: '武汉红十字会',
          grant_count: 8991212,
          income: {
            goods: 1212234,
            capital: 3434341
          },
          disburse: {
            goods: 3434341,
            capital: 1212234
          }
        },
        {
          id: '2',
          logo: '../../static/images/img1.png',
          title: '壹基金',
          grant_count: 1213234,
          income: {
            goods: 1212234,
            capital: 3434341
          },
          disburse: {
            goods: 3434341,
            capital: 1212234
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "@/style/common.scss";
.organ-container{
  padding: 12rpx 0;
  .organization-item{
    padding: 12rpx 24rpx;
    box-sizing: border-box;
  }
}
</style>
