<template>
  <div class="summary-container">
    <!--   机构物资发放   -->
    <div class="summary-logo">
      <img :src="info.logo" alt="" mode='widthFix' />
    </div>

    <!--   机构地址信息  -->
    <div class="summary-list">
      <div class="summary-item" v-for="(item,index) in info.content" :key="index">
        {{item}}
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        info: {
          id: 1,
          logo: '/static/images/img2.png',
          title: '武汉红十字会',
          content: '韩红爱心慈善基金会由韩红女士发起，于2012年5月9日在北京市民政局登记注册成立，于2019年8月8日正式获得慈善组织公开募捐资格，是具有独立法人资格的地方性公募基金会。\n多年来坚持关注偏远地区的医疗卫生建设和重大自然灾害应急救援，致力于帮助缩小中国东西部医疗卫生水平的差距，将先进的医疗理念和医疗技术以落地形式应用到边远地区，改变其西部地区医疗环境，使贫困急症、重症患者得到有效治疗。\n2015年12月，韩红爱心慈善基金会荣获北京市民政局颁发的“2015年度社会组织评估等级”4A级基金会认证；\n2016年11月1日—2018年11月1日，中国基金会透明指数排行榜发布，在全国5233家基金会中，北京韩红爱心慈善基金会以满分100分并列排名第一。'
        }
      }
    },
    created () {
      this.info.content = this.info.content.split('\n')
      console.log(this.info)
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  @import "@/style/common.scss";
  .summary-container{
    margin-bottom: 20rpx;
    padding:30rpx;
    box-sizing: border-box;
    .summary-logo{
      text-align: center;
      img{
        width: 160rpx;
        margin-top: 40rpx;
      }
    }
    .summary-item{
      font-size: 28rpx;
      color: #333;
      line-height: 38rpx;
      margin-top: 30rpx;
      font-weight:400;
    }

  }

</style>
