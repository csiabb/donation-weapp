<template>
<div>
  {{id}}
  <donation-detail-list></donation-detail-list>
</div>
</template>

<script>
import DonationDetailList from '@/components/donationDetailList/donationDetailList'
export default {
  components: {
    'donation-detail-list': DonationDetailList
  },
  data () {
    return {id: ''}
  },
  onShow () {
    const id = this.getId()
    this.id = id
  },
  methods: {
    getId () {
      const {id} = this.$root.$mp.query
      return id
    }
  }
}
</script>

<style lang="scss">

</style>