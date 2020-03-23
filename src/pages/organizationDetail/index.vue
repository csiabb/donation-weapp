<template>
  <div class="organization-detail-container">
    <!--   机构物资发放   -->
    <div class="organization-detail-info">
      <organ-card-item-center :info = "info" :link="'/pages/summary/main'" />
    </div>

    <!--   机构地址信息  -->
    <div class="org-cell-list">
      <div class="org-cell-item">
        <span>收款账号：</span>
        <span class="org-cell-val">6225 7845 4875 4857 454</span>
      </div>
      <div class="org-cell-item">
        <span>捐赠地址：</span>
        <span class="org-cell-val">北京市东城区56号楼3层</span>
      </div>
      <div class="org-cell-item">
        <span>联系电话：</span>
        <span class="org-cell-val phone">010-87658909</span>
        <van-button plain type="primary" color="#35CF82" :round="true">立刻拨打</van-button>
      </div>
    </div>
    <space :height="'16'"/>
    <!-- 捐赠者/机构公示   -->
    <div class="promulgate-container">
      <van-tabs :active="avtiveTab" @change="tabChangeHanlder" line-width="28" color="#35CF82">
        <van-tab title="已接收物资" />
        <van-tab title="已分发物资" />
      </van-tabs>
      <scroll-view scroll-x="true" style="width: 100%">
        <table-component :headers='headers'
                         :content='content'
                         :onRowClick='onRowClickHandle' />

      </scroll-view>

    </div>
  </div>
</template>
<script>
  import { formatMoney } from '@/utils/index'
  import organCardItemCenter from '@/components/card/organCardItemCenter'
  import space from '@/components/space/space'
  import table from '@/components/table/table'
  export default {
    components: {
      organCardItemCenter,
      space,
      'table-component': table
    },
    data () {
      return {
        info: {
          id: 1,
          logo: '/static/images/img2.png',
          title: '武汉红十字会',
          distribute: {
            supplies: formatMoney(111, 0),
            funds: formatMoney(1212)
          },
          receive: {
            supplies: formatMoney(23244, 0),
            funds: formatMoney(123334)
          }

        },
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
    created () {
      // wx.setNavigationBarTitle({
      //   title: '韩红公益基金'
      // })
    },
    methods: {
      goOrganDetailPage () {
        console.log('去基金详情页')
      },
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
      }
    }
  }
</script>

<style lang="scss">
  @import "@/style/common.scss";
  .organization-detail-container{
    margin-bottom: 20rpx;
    padding:30rpx 0;
    box-sizing: border-box;
    .organization-detail-info{
      padding: 0 30rpx;
    }
    .org-cell-list{
      font-size: 28rpx;
      padding:0 30rpx 30rpx;
      color:#999999 ;
      .org-cell-item{
        height: 52rpx;
        line-height: 52rpx;
        .org-cell-val{
          color: #3A3A3A;
        }
      }
    }
    .van-button--plain{
      float: right;
      font-size:24rpx;
      padding: 13rpx 36rpx;
      color:#35CF82 !important;
      border-color: #35CF82;
      height: auto;
      line-height:1 ;
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
    .promulgate-container{
      padding: 0 30rpx;
    }
  }

</style>
<style>
  .organization-container .van-icon{
    color: #6299E6;
  }
</style>
