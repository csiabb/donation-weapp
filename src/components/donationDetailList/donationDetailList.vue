<template>
  <view class="donation_detail">
    <view class="block_info">
      <h1>区块信息</h1>
      <view class="block_info_content">
        <ul>
          <li>
            <span>区块高度</span>
            <span>{{blockHeight}}</span>
          </li>
          <li>
            <span>存证唯一标识</span>
            <span>{{blockId}}</span>
          </li>
          <li>
            <span>上链时间</span>
            <span>{{blockTime}}</span>
          </li>
        </ul>
        <image :src="block_icon" class="block_icon" v-if='blockId'/>
      </view>
    </view>

    <view class="sender_info">
      <image :src="sender_icon" class="sender_icon"></image>
      <ul class="sender_info_content">
        <li>
          <span>名称</span>
          <span>{{donorName}}</span>
        </li>
        <li>
          <span>所在地区</span>
          <span>{{senderAddress}}</span>
        </li>
        <li>
          <span>发布时间</span>
          <span>{{time}}</span>
        </li>
      </ul>
    </view>

    <view class="receiver_info">
      <image :src='receiver_icon' class="receiver_icon"></image>
        <ul class="receiver_info_content">
          <li>
            <span>收件人</span>
            <span>{{aidName}}</span>
          </li>
          <li v-if="type === 'supplies'">
            <span>收件地址</span>
            <span>{{receiverAddress}}</span>
          </li>
          <li v-if="type === 'money'">
            <span>收款账号</span>
            <span>{{receiverAccount}}</span>
          </li>
      </ul>
    </view>

    <view class="donation_info">
      <h1>物资详情</h1>
      <ul class="donation_list">
        <li>
          <span v-if="type === 'supplies'">{{suppliesName}}</span>
          <span v-if="type === 'money'">资金</span>
          <span>{{suppliesCount}}</span>
        </li>
      </ul>
    </view>

    <view class="donation_proof" v-if='images && images.length > 0'>
      <h1>捐赠证明</h1>
      <ul class="proof_image_list">
        <li v-for='(img,index) in images' :key='index'>
          <image :src='img.url'></image>
        </li>
      </ul>
    </view>

    <view class="transporter_info" v-if="type === 'supplies'">
      <h1>物流信息</h1>
      <view class="transporter_detail">
        <span>运单号</span>
        <span>{{transporterNum}}</span>
      </view>
    </view>
  </view>
</template>

<script>

export default {
  props: {
    type: {
      type: String,
      required: true
    },
    donorName: String,
    aidName: String,
    suppliesName: String,
    suppliesCount: String,
    senderAddress: String,
    receiverAddress: String,
    receiverAccount: String,
    time: String,
    blockTime: String,
    blockHeight: String | Number,
    blockId: String,
    images: Array,
    transporterNum: String

  },
  data () {
    return {
      block_icon: '../../static/images/block_confirm_proof.png',
      sender_icon: '../../static/images/sender_icon.png',
      receiver_icon: '../../static/images/receiver_icon.png',
      suppliesName: ''
    }
  },
  watch: {
    suppliesName (_name) {
      console.log(_name)
      this.suppliesName = _name
    }
  }
}
</script>

<style lang="scss">
.donation_detail {
  background-color: #f3f3f3;
  .block_info {
    background-color: #fff;
    overflow: hidden;
    h1 {
      color: #666;
      font-weight: 600;
      font-size: 30rpx;
      margin-top: 30rpx;
      margin-left: 30rpx;
    }
    .block_info_content {
      margin: 20rpx 30rpx;
      background-color: #f3f3f3;
      overflow: hidden;
      position: relative;
      > ul {
        margin: 20rpx;

        > li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 24rpx;
          height: 34rpx;
          margin-bottom: 10rpx;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      > ul li span:first-child {
        color: #999;
      }

      >image.block_icon{
        width: 160rpx;
        height: 130rpx;
        position: absolute;
        right: 0;
        top: 0;
        margin-right: 20rpx;
        margin-top: 20rpx;
      }
    }
  }
  .sender_info{
    background-color: #FFF;
    margin-top: 20rpx;
    overflow: hidden;
    image.sender_icon{
      width: 54rpx;
      height: 54rpx;
      margin-top: 24rpx;
      margin-left: 30rpx;
      margin-bottom: 14rpx;
    }
    ul.sender_info_content{
      overflow: hidden;
      margin: 0 30rpx;
      margin-bottom: 30rpx;
      border-top: 1rpx solid #DDD;
      > li{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10rpx;
        > span{
          font-weight: 400;
          font-size: 28rpx;
        }
        > span:first-child{
          color: #999;
        }
        &:first-child{
          margin-top: 20rpx;
        }
      }
    }
  }
  .receiver_info{
    background-color: #FFF;
    overflow: hidden;
    margin-top: 20rpx;
    image.receiver_icon{
      width: 54rpx;
      height: 54rpx;
      margin-top: 24rpx;
      margin-left: 30rpx;
      margin-bottom: 14rpx;
    }
    ul.receiver_info_content{
      overflow: hidden;
      margin: 0 30rpx;
      margin-bottom: 30rpx;
      border-top: 1rpx solid #DDD;
      > li{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10rpx;
        > span{
          font-weight: 400;
          font-size: 28rpx;
        }
        > span:first-child{
          color: #999;
        }
        &:first-child{
          margin-top: 20rpx;
        }
      }
    }
  }
  .donation_info{
    background-color: #FFF;
    overflow: hidden;
    margin-top: 16rpx;
    > h1{
      font-size: 30rpx;
      font-weight: 600;
      margin-top: 30rpx;
      margin-bottom: 20rpx;
      margin-left: 30rpx;
      color: #666;
    }
    > ul.donation_list{
      margin: 0 30rpx;
      border-top: 1rpx solid #DDD;
      padding-bottom: 20rpx;
      > li{
        margin-top: 20rpx;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 28rpx;
        > span:first-child{
          color: #999;
        }
      }
    }
  }
  .donation_proof{
    background-color: #FFF;
    overflow: hidden;
    margin-top: 16rpx;
    > h1{
      font-size: 30rpx;
      font-weight: 600;
      margin-top: 30rpx;
      margin-bottom: 20rpx;
      margin-left: 30rpx;
      color: #666;
    }
    > ul.proof_image_list{
      margin: 0 30rpx;
      border-top: 1rpx solid #DDD;
      display: flex;
      align-items: center;
      justify-content: space-between;
      overflow: hidden;
      > li{
        margin: 20rpx 0;
      }
      > li image{
        width: 180rpx;
        height: 180rpx;
      }
    }
  }
  .transporter_info{
    overflow: hidden;
    background-color: #FFF;
    margin-top: 16rpx;
    > h1{
      font-size: 30rpx;
      font-weight: 600;
      margin-top: 30rpx;
      margin-bottom: 20rpx;
      margin-left: 30rpx;
      color: #666;
    }
    > .transporter_detail{
      margin: 0 30rpx;
      border-top: 1rpx solid #DDD;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 20rpx;
      padding-bottom: 30rpx;
      > span{
        font-size: 28rpx;
        font-weight: 400;
        &:first-child{
          color: #999;
        }
      }
    }
  }
}
</style>