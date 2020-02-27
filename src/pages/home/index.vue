<template>
  <div class="home-container">
    <div class="header-container">
      <cell-list txt="公益机构" link="/pages/organList/main"/>
    </div>
    <scroll-view scroll-x="true" bindscroll="scroll" style="width: 100%">
      <div class="organization-container" >
        <div 
          class="item"
          v-for="(item, index) in list"
          :index="index"
          :key="index"
        >
          <organ-card :info="item" />
        </div>
      </div>
    </scroll-view>
    <space/>
    <div class="header-container">
      <cell-list txt="捐赠者/机构公示" link="/pages/mine/main"/>
    </div>
    <tab-bar :selectNavIndex="0"></tab-bar>
  </div>
</template>

<script>
import tabBar from '@/components/tabbar/tabBar'
import organCard from '@/components/card/organCard'
import cellList from '@/components/cell/cellList'
import space from '@/components/space/space'

export default {
  components: {
    tabBar,
    organCard,
    cellList,
    space
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
    padding: 10rpx 0 30rpx 0;
    .item{
      display: inline-block;
      margin: 0 24rpx;
    }
  }
  .header-container{
    padding: 0 30rpx;
  }
}
</style>
