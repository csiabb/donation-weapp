<template>
  <div class="orgn-detail-container">
    <div class="header-container">
      <organ-card-center :info="organ" />
      <div class="info">
        <div class="item">
          <div>
            收款账号：<span>{{ organ.cardNum }}</span>
          </div>
        </div>
        <div class="item">
          <div>
            捐赠地址：<span>{{ organ.address }}</span>
          </div>
        </div>
        <div class="item">
          <div>
            联系电话：<span class="phone">{{ organ.phone }}</span>
          </div>
          <div>
            <div class="cell-phone" @click="phoneHandle(organ.phone)">立刻拨打</div>
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
        :onRowClick='onRowClickHandle'
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
import { formatTime, formatMoney } from '@/utils/index'
import { pubList } from '@/api/home'
import { orgDetail } from '@/api/organ'

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
      organ: {
        id: '',
        logo: '',
        title: '',
        grant_count: 0,
        distribute: {
          supplies: 0,
          funds: 0
        },
        receive: {
          supplies: 0,
          funds: 0
        }
      },
      uid: '',
      count: [],
      listQuery: {
        page_num: 1,
        page_limit: 50
      }
    }
  },
  onLoad (params) {
    this.count = params.count.split('-')
    this.uid = params.id
    this.getOrganDetail(params.id)
    this.renderTableByCurrent(params.id)
  },
  methods: {
    getOrganDetail (id) {
      orgDetail({ uid: id }).then(resp => {
        if (resp.code === 0) {
          const data = resp.data
          wx.setNavigationBarTitle({
            title: data.nick_name
          })
          this.organ = {
            id: data.uid,
            title: data.nick_name,
            logo: data.url,
            cardNum: data.bank_card_num,
            address: data.address,
            phone: data.phone,
            distribute: {
              supplies: this.count[0],
              funds: this.count[1]
            },
            receive: {
              supplies: this.count[2],
              funds: this.count[3]
            }
          }
        }
      })
    },
    onTabMenuChange (index) {
      this.current = index
      this.renderTableByCurrent(this.uid)
    },
    renderTableByCurrent (uid) {
      const query = {
        page_num: this.listQuery.page_num,
        page_limit: this.listQuery.page_limit,
        target_uid: uid,
        pub_type: this.current === 0 ? 'donate' : 'distribute'
      }
      pubList(query).then(resp => {
        if (resp.code === 0) {
          const { results } = resp.data
          const content = results.map(item => this.formatListItem(item))
          this.content = content
        }
      })
    },
    formatListItem (listItem) {
      const {donor_name: donorName, name, number, unit, aid_name: aidName, created_at: time} = listItem
      return {
        data: [donorName || '---', name, `${formatMoney(number)} ${unit}`, aidName || '---', formatTime(new Date(time * 1000))],
        id: listItem.id,
        type: 'supplies'
      }
    },
    onRowClickHandle (id, type) {
      console.log(id, type)
      wx.navigateTo({
        url: `/pages/donationDetail/main?id=${id}&type=${type}`
      })
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
