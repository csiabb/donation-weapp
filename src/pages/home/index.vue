<template>
  <div class="home-container">
    <scroll-view scroll-x="true" bindscroll="scroll" style="width: 100%">
      <div class="organization-container" >
        <div 
          class="item"
          v-for="(item, index) in list"
          :index="index"
          :key="index"
        >
          <organ :info="item" />
        </div>
      </div>
    </scroll-view>
    <organ type="icon-left" :info="organ" />
    <organ type="icon-center" :info="organ" />
    <tab-bar :selectNavIndex="0"></tab-bar>
  </div>
</template>

<script>
import tabBar from '@/components/tabbar/tabBar'
import organ from '@/components/card/organ'

export default {
  components: {
    tabBar,
    organ
  },
  data () {
    return {
      list: [
        {
          id: '1',
          logo: '../../static/images/img1.png',
          title: '武汉红十字会',
          grant_count: 8991212,
          link: '/pages/mine/main'
        },
        {
          id: '2',
          logo: '../../static/images/img1.png',
          title: '壹基金',
          grant_count: 1213234
        },
        {
          id: '3',
          logo: '../../static/images/img1.png',
          title: '韩红基金',
          grant_count: 243
        },
        {
          id: '4',
          logo: '../../static/images/img1.png',
          title: '水滴基金',
          grant_count: 628
        },
        {
          id: '5',
          logo: '../../static/images/img1.png',
          title: '壹基金',
          grant_count: 1213234
        }
      ],
      organ: {
        id: '5',
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
    }
  },
  onShow () {
    this.getOrganizationList()
  },
  methods: {
    getOrganizationList () {
      // TODO 获取组织机构列表
      console.log('获取组织机构列表')
    }
  }
}
</script>

<style lang="scss">
@import "@/style/common.scss";
.home-container{
  padding-bottom: $tabbar-height;
  .organization-container{
    white-space: nowrap;
    overflow-x: scroll;
    padding: 20rpx 0;
    .item{
      display: inline-block;
      margin: 0 24rpx;
    }
  }
}
</style>
