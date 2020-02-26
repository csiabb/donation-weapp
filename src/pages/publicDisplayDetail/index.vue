<template>
  <tab-menu 
    :tabList="['已收物品','已收资金','已分发物品','已分发资金']" 
    :current='current'
    @onTabChange='onTabMenuChange'
  ></tab-menu>
</template>

<script>
import tabMenu from '@/components/tabMenu/tabMenu'
export default {
  components: {
    tabMenu
  },
  data () {
    return {current: 0}
  },
  methods: {
    onTabMenuChange: index => {
      this.current = 0
      console.log(this)
    }
  }
}
</script>