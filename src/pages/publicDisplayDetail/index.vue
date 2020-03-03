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
import { formatMoney } from '../../utils/index.js'
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
    this.getTableList()
  },
  methods: {
    onTabMenuChange (index) {
      this.current = index
      this.renderTableByCurrent()
    },
    onRowClick (id) {
      wx.navigateTo({
        url: `/pages/donationDetail/main?id=${id}`
      })
    },
    getTableList () {
      get(`/pub/supplies/query?limit=50&uid=`).then(({code, data, msg}) => {
        if (code !== 0) { return wx.showToast(msg) }
        const {results} = data
        const _content = results.map(item => this.formatListItem(item))
        console.log(_content)
        this.content = _content
      })
    },
    formatListItem (listItem) {
      const {uid, name, number, unit, aid_uid: aidUid, create_at: time} = listItem
      return {
        data: [uid, name, `${number} ${unit}`, aidUid, time],
        id: listItem.id
      }
    },
    renderTableByCurrent () {
      const { current, tabList } = this

      let content = []
      switch (current) {
        case 0:
        default:
          content = [
            {
              data: [tabList[current], '0', formatMoney(100000), '韩红基金', '2020/02/02 13:00:26'],
              id: 1
            },
            {
              data: [tabList[current], '3M口罩', '100,000', '韩红基金', '2020/02/02 13:00:26'],
              id: 2
            }
          ]
          break
      }
      this.content = content
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