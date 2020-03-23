<template>
  <div class="homel-container">
    <div class="banner-con" @click="goAboutUsPage">
      <img src="/static/images/zx_banner1.png" alt="" />
    </div>
    <div class="organization-container">
      <!--   机构标题   -->
      <van-cell title="公益机构" size="large" is-link link-type="navigateTo" url="/pages/organizationList/main"/>
      <scroll-view scroll-x="true" style="width: 100%">
        <div class="organization-box">
          <div
            class="item"
            v-for="(item, index) in organizationList"
            :index="index"
            :key="index"
          >
            <organ-card :info="item" :link="'/pages/organizationDetail/main'" />
          </div>
        </div>
      </scroll-view>
    </div>
    <space :height="'16'"/>
    <!-- 捐赠者/机构公示   -->
    <div class="promulgate-container">
      <van-cell title="捐赠者/机构公示" size="large" is-link link-type="navigateTo" url="/pages/promulgateList/main"/>
      <van-tabs :active="avtiveTab" @change="tabChangeHanlder" line-width="28" color="#35CF82">
        <van-tab title="个人捐赠" />
        <van-tab title="机构捐赠" />
      </van-tabs>
      <scroll-view scroll-x="true" style="width: 100%">
        <table-component :headers='headers'
                         :content='content'
                         :onRowClick='onRowClickHandle' />

      </scroll-view>

    </div>
    <tab-bar :selectNavIndex="0"></tab-bar>
  </div>
</template>
<script>
  import organCard from '@/components/card/organCard'
  import space from '@/components/space/space'
  import table from '@/components/table/table'
  import tabBar from '@/components/tabbar/tabBar'
  export default {
    components: {
      organCard,
      space,
      'table-component': table,
      tabBar
    },
    data () {
      return {
        avtiveTab: 0,
        organizationList: [
          {
            logo: '/static/images/img1.png',
            title: '武汉红十字会',
            grant_count: 12322
          },
          {
            logo: '/static/images/img1.png',
            title: '武汉红十字会',
            grant_count: 12322
          },
          {
            logo: '/static/images/img1.png',
            title: '武汉红十字会',
            grant_count: 12322
          },
          {
            logo: '/static/images/img1.png',
            title: '武汉红十字会',
            grant_count: 12322
          },
          {
            logo: '/static/images/img1.png',
            title: '武汉红十字会',
            grant_count: 12322
          },
          {
            logo: '/static/images/img1.png',
            title: '武汉红十字会',
            grant_count: 12322
          }
        ],
        headers: ['捐赠者', '物资', '数量/金额', '受赠者', '公示时间'],
        content: [
          {
            id: 1,
            type: 2,
            data: [ '1155***6436', '3M口罩', '1,000个', '武汉疾控中…', '2020/2/20' ]
          },
          {
            id: 1,
            type: 2,
            data: [ '1155***6436', '3M口罩', '1,000个', '武汉疾控中…', '2020/2/20' ]
          },
          {
            id: 1,
            type: 2,
            data: [ '1155***6436', '3M口罩', '1,000个', '武汉疾控中…', '2020/2/20' ]
          },
          {
            id: 1,
            type: 2,
            data: [ '1155***6436', '3M口罩', '1,000个', '武汉疾控中…', '2020/2/20' ]
          },
          {
            id: 1,
            type: 2,
            data: [ '1155***6436', '3M口罩', '1,000个', '武汉疾控中…', '2020/2/20' ]
          },
          {
            id: 1,
            type: 2,
            data: [ '1155***6436', '3M口罩', '1,000个', '武汉疾控中…', '2020/2/20' ]
          },
          {
            id: 1,
            type: 2,
            data: [ '1155***6436', '3M口罩', '1,000个', '武汉疾控中…', '2020/2/20' ]
          }
        ]
      }
    },
    methods: {
      tabChangeHanlder (e) {
        console.log(e)
        this.avtiveTab = e.target.index
        console.log(this.avtiveTab)
      },
      onRowClickHandle (id, type) {
        console.log(id + ',' + type)
        // wx.navigateTo({
        //   url: '/pages/promulgateDetail/main'
        // })
      },
      goAboutUsPage () {
        wx.navigateTo({
          url: '/pages/organList/main'
        })
      }
    }
  }
</script>

<style lang="scss">
  @import "@/style/common.scss";

  .homel-container {
    background: #fff;
    .organization-container{
      margin-bottom: 20rpx;
      padding: 0 30rpx;
      box-sizing: border-box;
    }
    .organization-box{
      display: flex;
      flex-direction: row;
      padding:10rpx 0 20rpx;
      .item{
        margin-right: 40rpx;
      }
    }
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
    .promulgate-container{
      padding: 0 30rpx;
      box-sizing: border-box;
    }
    .van-tabs__line{
      height: 4px;
    }
    .van-tabs--line .van-tabs__wrap{
      height: 70rpx;
    }
    .van-tab{
      line-height: 70rpx;
      font-size: 30rpx;
      color: #666;
      font-weight: 500;
    }
    .van-tabs--line{
      padding-top: 70rpx;
    }
    .banner-con{
      width: 100%;
      img{
        width: 100%;
        height: 320rpx;
      }
    }
  }


</style>
<style>
  .homel-container .van-icon{
    color: #6299E6;
  }
</style>
