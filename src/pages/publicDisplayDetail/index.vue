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
    ></table-component>
  </div>
  
  </div>
</template>

<script>
import tabMenu from '@/components/tabMenu/tabMenu'
import table from '@/components/table/table'

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
    this.renderTableByCurrent()
  },
  methods: {
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