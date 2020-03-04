<template>
  <scroll-view class="organ-container" scroll-y="true" bindscroll="scroll" style="width: 100%">
    <div 
      class="organization-item"
      v-for="(item, index) in list"
      :index="index"
      :key="index"
    >
      <organ-card-left :info="item" :link="'/pages/organDetail/main?id=' + item.id + '&count='+ item.receive.supplies + '-' + item.receive.funds + '-' + item.distribute.supplies+ '-' + item.distribute.funds" />
    </div>
  </scroll-view>
</template>

<script>
import organCardLeft from '@/components/card/organCardLeft'
import { orgCharities } from '@/api/organ'
import { formatMoney } from '@/utils/index'
export default {
  components: {
    organCardLeft
  },
  data () {
    return {
      listQuery: {
        page_num: 1,
        page_limit: 50
      },
      list: []
    }
  },
  onShow () {
    this.getOrgCharities()
  },
  methods: {
    getOrgCharities () {
      const query = {
        page_num: this.listQuery.page_num,
        page_limit: this.listQuery.page_limit
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
    }
  }
}
</script>

<style lang="scss">
@import "@/style/common.scss";
.organ-container{
  padding: 12rpx 0;
  .organization-item{
    padding: 12rpx 24rpx;
    box-sizing: border-box;
  }
}
</style>
