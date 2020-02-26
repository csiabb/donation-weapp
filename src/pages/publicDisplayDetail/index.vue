<template>
<div>
  <tab-menu 
    :tabList="tabList" 
    :current='current'
    @onTabChange='onTabMenuChange'
  ></tab-menu>
  <div>{{tabContent}}</div>
  </div>
</template>

<script>
import tabMenu from '@/components/tabMenu/tabMenu'
export default {
  components: {
    tabMenu
  },
  data () {
    return {
      current: 0,
      tabContent: null,
      tabList: ['已收物品', '已收资金', '已分发物品', '已分发资金']
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
      const {tabList, current} = this
      this.tabContent = tabList[current]
    }
  }
}
</script>