<template>
<div>
  <donation-detail-list 
  :type='type'
  :donorName='donorName'
  :aidName='aidName'
  :suppliesName='suppliesName'
  :suppliesCount='suppliesCount'
  :senderAddress='senderAddress'
  :receiverAddress='receiverAddress'
  :time='time'
  :blockTime='blockTime'
  :blockHeight='blockHeight'
  :blockId='blockId'
  :images='images'
  ></donation-detail-list>
</div>
</template>

<script>
import DonationDetailList from '@/components/donationDetailList/donationDetailList'
import {get} from '../../api/index.js'
import {formatMoney, formatTime} from '../../utils/index.js'

export default {
  components: {
    'donation-detail-list': DonationDetailList
  },
  data () {
    return {
      id: '',
      type: '',
      donorName: '',
      aidName: '',
      suppliesName: '',
      suppliesCount: '',
      senderAddress: '',
      receiverAddress: '',
      time: '',
      blockTime: '',
      blockHeight: '',
      blockId: '',
      images: []
    }
  },
  mounted () {
    const {id, type} = this.getArgs()
    this.id = id
    this.type = type
    if (type === 'supplies') {
      return this.getSuppliesDetail(id)
    }
    if (type === 'money') {
      return this.getFundDetail(id)
    }
  },
  methods: {
    getArgs () {
      const {id, type} = this.$root.$mp.query
      return {id, type}
    },
    getFundDetail (id) {
      const url = `/pub/funds/detail?funds_id=${id}`
      return get(url).then(({code, data, msg}) => {
        if (code !== 0) { return wx.showToast({title: msg, icon: 'none'}) }
        const {
          pub_funds: {
            block_time: blockTime,
            block_height: blockHeight,
            tx_id: blockId,
            name: suppliesName,
            donor_name: donorName,
            amount,
            aid_name: aidName,
            created_at: time
          } = {},
          billing_addr: {
            province, city, district
          } = {},
          shipping_addr: {
            province: shipProvince, city: shipCity, district: shipDistrict
          } = {},
          proof_images: images
        } = data
        this.suppliesName = suppliesName
        this.suppliesCount = `${formatMoney(amount)} 元`
        this.donorName = donorName
        this.aidName = aidName
        this.blockTime = blockTime
        this.blockHeight = blockHeight
        this.blockId = blockId
        this.senderAddress = `${province}-${city}-${district}`
        this.receiverAddress = `${shipProvince}-${shipCity}-${shipDistrict}`
        this.time = formatTime(new Date(time * 1000))
        this.images = images
      })
    },
    getSuppliesDetail (id) {
      const url = `/pub/supplies/detail?supplies_id=${id}`
      return get(url).then(({code, data, msg}) => {
        if (code !== 0) { return wx.showToast({title: msg, icon: 'none'}) }
        const {

          pub_supplies: {
            block_time: blockTime,
            block_height: blockHeight,
            tx_id: blockId,
            name: suppliesName,
            donor_name: donorName,
            number,
            unit,
            aid_name: aidName,
            created_at: time
          } = {},
          billing_addr: {
            province, city, district
          } = {},
          shipping_addr: {
            province: shipProvince, city: shipCity, district: shipDistrict
          } = {},
          proof_images: images
        } = data
        console.log(data)
        this.suppliesName = suppliesName
        this.suppliesCount = `${formatMoney(number)} ${unit}`
        this.donorName = donorName
        this.aidName = aidName
        this.blockTime = blockTime
        this.blockHeight = blockHeight
        this.blockId = blockId
        this.senderAddress = `${province}-${city}-${district}`
        this.receiverAddress = `${shipProvince}-${shipCity}-${shipDistrict}`
        this.time = formatTime(new Date(time * 1000))
        this.images = images
      })
    }
  }
}
</script>

<style lang="scss">

</style>