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
          <organ-card :info="item" :link="'/pages/organDetail/main?id=' + item.id + '&count='+ item.receive.supplies + '-' + item.receive.funds + '-' + item.distribute.supplies+ '-' + item.distribute.funds" />
        </div>
      </div>
    </scroll-view>
    <space/>
    <div class="header-container">
      <cell-list txt="捐赠者/机构公示" link="/pages/publicDisplayDetail/main"/>
    </div>
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
    <tab-bar :selectNavIndex="0"></tab-bar>
  </div>
</template>

<script>
import tabBar from '@/components/tabbar/tabBar'
import organCard from '@/components/card/organCard'
import cellList from '@/components/cell/cellList'
import space from '@/components/space/space'
import tabMenu from '@/components/tabMenu/tabMenu'
import table from '@/components/table/table'
import { pubList } from '@/api/home'
import { orgCharities } from '@/api/organ'
import { formatTime, formatMoney } from '@/utils/index'

export default {
  components: {
    tabBar,
    organCard,
    cellList,
    space,
    tabMenu,
    'table-component': table
  },
  data () {
    return {
      current: 0,
      tabList: ['个人捐赠', '机构捐赠'],
      headers: ['捐赠者', '物资', '数量/金额', '受赠者', '公示时间'],
      content: [],
      list: [],
      listQuery: {
        page_num: 1,
        page_limit: 50
      }
    }
  },
  onShow () {
    this.getOrganizationList()
    this.renderTableByCurrent()
  },
  methods: {
    getOrganizationList () {
      // TODO 获取组织机构列表
      const query = {
        page_num: 1,
        page_limit: 10
      }
      orgCharities(query).then(resp => {
        if (resp.code === 0) {
          const data = resp.data.results && resp.data.results.length > 0 ? resp.data.results : []
          const list = []
          for (let i in data) {
            const tmp = data[i]
            list.push({
              id: tmp.uid,
              logo: tmp.url,
              title: tmp.nick_name,
              grant_count: tmp.distributed_supplies,
              distribute: {
                supplies: formatMoney(tmp.distributed_supplies),
                funds: formatMoney(tmp.distributed_funds)
              },
              receive: {
                supplies: formatMoney(tmp.received_supplies),
                funds: formatMoney(tmp.received_funds)
              }
            })
          }
          this.list = list
        }
      })
    },
    onTabMenuChange (index) {
      this.current = index
      this.renderTableByCurrent()
    },
    renderTableByCurrent () {
      const query = {
        user_type: this.current === 0 ? 'normal' : 'org',
        page_num: this.listQuery.page_num,
        page_limit: this.listQuery.page_limit
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
  .table-container{
    padding: 0 30rpx 30rpx 20rpx;
  }
  .table-header{
    padding: 0 160rpx;
  }
}
</style>
