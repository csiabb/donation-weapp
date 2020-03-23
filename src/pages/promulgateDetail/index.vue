<template>
  <div class="promulgate-container">
    <van-cell title="捐赠者/机构公示" size="large" is-link link-type="navigateTo" url="/pages/publicDisplayDetail/main"/>
    <van-tabs :active="avtiveTab" @change="tabChangeHanlder" line-width="28" color="#35CF82">
      <van-tab title="已收物品" />
      <van-tab title="已收资金" />
      <van-tab title="已分发物品" />
      <van-tab title="已分发资金" />
    </van-tabs>
    <scroll-view scroll-x="true" style="width: 100%">
      <table-component :headers='headers'
                       :content='content'
                       :onRowClick='onRowClickHandle' />

    </scroll-view>

  </div>
</template>
<script>
  import table from '@/components/table/table'
  export default {
    components: {
      'table-component': table
    },
    data () {
      return {
        avtiveTab: 0,
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
      }
    }
  }
</script>

<style lang="scss">
  @import "@/style/common.scss";

  .promulgate-container {
    background: #fff;
    padding: 0 30rpx;
    box-sizing: border-box;
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
  }


</style>
