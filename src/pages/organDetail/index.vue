<template>
  <div class="orgn-detail-container">
    <div class="header-container">
      <organ-card-center :info="organ" />
      <div class="info">
        <div class="item">
          <div>
            收款账号：<span>6225 7845 4875 4857 454</span>
          </div>
        </div>
        <div class="item">
          <div>
            捐赠地址：<span>北京市东城区56号楼3层</span>
          </div>
        </div>
        <div class="item">
          <div>
            联系电话：<span class="phone">010-87658909</span>
          </div>
          <div>
            <div class="cell-phone" @click="phoneHandle('010-87658909')">立刻拨打</div>
          </div>
        </div>
      </div>
    </div>
    <space/>
    <div class="table-container">
      <div class="table-header">
        <tab-menu 
          :tabList="tabList" 
          :current='current'
          @onTabChange='onTabMenuChange'
        ></tab-menu>
      </div>
      <table-component
        :headers='headers'
        :content='content'
      ></table-component>
    </div>
  </div>
</template>

<script>
import organCardCenter from '@/components/card/organCardCenter'
import cellList from '@/components/cell/cellList'
import space from '@/components/space/space'
import tabMenu from '@/components/tabMenu/tabMenu'
import table from '@/components/table/table'
import { pubList } from '@/api/home'

export default {
  components: {
    organCardCenter,
    cellList,
    space,
    tabMenu,
    'table-component': table
  },
  data () {
    return {
      current: 0,
      tabList: ['已接收物资', '已发放物资'],
      headers: ['捐赠者', '物资', '数量/金额', '接受者', '公示时间'],
      content: [],
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
    wx.setNavigationBarTitle({
      title: '韩红基金会'
    })
    this.getOrganizationList()
    this.renderTableByCurrent()
  },
  methods: {
    getOrganizationList () {
      // TODO 获取组织机构列表
      console.log('获取组织机构列表')
      const query = {
        user_type: 'org'
      }
      pubList(query).then(resp => {
        console.log(resp)
      })
    },
    onTabMenuChange (index) {
      this.current = index
      this.renderTableByCurrent()
    },
    renderTableByCurrent () {
      const { current, tabList } = this

      let content = []
      switch (current) {
        case 0:
        default:
          content = [
            [tabList[current], '3M口罩', '100,000', '韩红基金', '2020/02/02 13:00:26'],
            [tabList[current], '3M口罩', '100,000', '韩红基金', '2020/02/02 13:00:26']
          ]
          break
      }
      this.content = content
    },
    phoneHandle (phone) {
      wx.makePhoneCall({
        phoneNumber: phone
      })
    }
  }
}
</script>

<style lang="scss">
@import "@/style/common.scss";
.orgn-detail-container{
  .header-container{
    padding: 30rpx;
    .info{
      padding-top: 20rpx;
      color: $font-color-999;
      font-size: $font-size-28;
      position: relative;
      .item{
        padding-top: 10rpx;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
      span{
        color: $font-color-3A3A3A;
      }
      .phone{
        color: $font-color-5790FF
      }
      .cell-phone{
        position: absolute;
        right: 0;
        bottom: -4rpx;
        padding: 8rpx 34rpx;
        border: 2rpx solid $font-color-35CF82;
        color: $font-color-35CF82;
        border-radius: 50rpx;
        font-weight: $font-weight-400;
      }
    }
  }
  .table-container{
    padding: 0 30rpx 30rpx 20rpx;
  }
  .table-header{
    padding: 0 140rpx;
  }
}
</style>
