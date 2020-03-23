<template>
  <div class="organization-container">
    <!--   机构列表   -->
    <div class="item" v-for="(item,index) in list" :key="index">
      <organ-card-item :info = "item" :link="'/pages/organizationDetail/main?id=' + item.id + '&count='+ item.receive.supplies + '-' + item.receive.funds + '-' + item.distribute.supplies+ '-' + item.distribute.funds" />
    </div>

  </div>
</template>
<script>
  import { formatMoney } from '@/utils/index'
  import organCardItem from '@/components/card/organCardItem'
  export default {
    components: {
      organCardItem
    },
    data () {
      return {
        list: [
          {
            id: 1,
            logo: '/static/images/img2.png',
            title: '武汉红十字会',
            distribute: {
              supplies: formatMoney(111, 0),
              funds: formatMoney(1212)
            },
            receive: {
              supplies: formatMoney(23244, 0),
              funds: formatMoney(123334)
            }

          },
          {
            id: 1,
            logo: '/static/images/img1.png',
            title: '壹基金',
            distribute: {
              supplies: formatMoney(111, 0),
              funds: formatMoney(1212)
            },
            receive: {
              supplies: formatMoney(23244, 0),
              funds: formatMoney(123334)
            }

          },
          {
            id: 1,
            logo: '/static/images/img2.png',
            title: '韩红基金会',
            distribute: {
              supplies: formatMoney(111, 0),
              funds: formatMoney(1212)
            },
            receive: {
              supplies: formatMoney(23244, 0),
              funds: formatMoney(123334)
            }

          },
          {
            id: 1,
            logo: '/static/images/img1.png',
            title: '水滴基金会',
            distribute: {
              supplies: formatMoney(111, 0),
              funds: formatMoney(1212)
            },
            receive: {
              supplies: formatMoney(23244, 0),
              funds: formatMoney(123334)
            }

          }
        ]
      }
    },
    methods: {
      goOrganDetailPage () {
        console.log('去基金详情页')
      }
    }
  }
</script>

<style lang="scss">
  @import "@/style/common.scss";
  .organization-container{
    margin-bottom: 20rpx;
    padding:30rpx ;
    box-sizing: border-box;
  }

</style>
<style>
  .organization-container .van-icon{
    color: #6299E6;
  }
</style>
