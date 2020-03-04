<template>
<div>
  <tab-menu 
    :tabList="tabList" 
    :current='current'
    @onTabChange='onTabMenuChange'
  ></tab-menu>
  <div class="table_container">
    <table-component
      :headers='headers'
      :content='content'
      :onRowClick='onRowClick'
    ></table-component>
  </div>
  
  </div>
</template>

<script>
import tabMenu from '@/components/tabMenu/tabMenu'
import table from '@/components/table/table'
import { formatTime, formatMoney } from '../../utils/index.js'
import {get} from '../../api/index.js'

export default {
  components: {
    'tab-menu': tabMenu,
    'table-component': table
  },
  data () {
    return {
      current: 0,
      tabContent: null,
      tabList: ['已收物品', '已收资金', '已分发物品', '已分发资金'],
      headers: ['分发者', '物资', '数量', '受赠者', '公示时间'],
      content: []
    }
  },
  mounted () {
    console.log(this.$root.$mp.query)
    this.renderTableByCurrent()
    this.getTableList('supplies', 'donate')
  },
  methods: {
    onTabMenuChange (index) {
      this.current = index
      this.renderTableByCurrent()
    },
    onRowClick (id, type) {
      wx.navigateTo({
        url: `/pages/donationDetail/main?id=${id}&type=${type}`
      })
    },
    getTableList (suppliesType, suppliesStatus) {
      const urlMap = {
        supplies: `/pub/supplies/query?limit=100&uid=&pub_type=${suppliesStatus}`,
        money: `/pub/funds/query?limit=100&uid=&pub_type=${suppliesStatus}`
      }
      get(urlMap[suppliesType]).then(({code, data, msg}) => {
        if (code !== 0) { return wx.showToast(msg) }
        const {results} = data
        const _content = results.map(item => this.formatListItem(item, suppliesType))

        this.content = _content
      })
    },
    formatListItem (listItem, suppliesType) {
      if (suppliesType === 'supplies') {
        const {donor_name: donorName, name, number, unit, aid_name: aidName = '---', created_at: time} = listItem
        return {
          data: [donorName, name, `${formatMoney(number)} ${unit}`, aidName || '---', formatTime(new Date(time * 1000))],
          id: listItem.id,
          type: 'supplies'
        }
      }
      const {donor_name: donorName, amount, aid_name: aidName = '---', created_at: time} = listItem
      return {
        data: [donorName, '资金', formatMoney(amount), aidName || '---', formatTime(new Date(time * 1000))],
        id: listItem.id,
        type: 'money'
      }
    },
    renderTableByCurrent () {
      const { current } = this

      switch (current) {
        case 0:
          return this.getTableList('supplies', 'donate')
        case 1:
          return this.getTableList('money', 'donate')
        case 2:
          return this.getTableList('supplies', 'distribute')
        case 3:
          return this.getTableList('money', 'distribute')
        default:
          return null
      }
    }
  }
}
</script>

<style lang="scss">
.table_container{
  display: block;
  width: 100vw;
  overflow-y: scroll;
  margin-left: 30rpx;
}
</style>