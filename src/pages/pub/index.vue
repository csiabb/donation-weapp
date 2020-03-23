<!--suppress CheckTagEmptyBody, HtmlUnknownAttribute, EqualityComparisonWithCoercionJS, HtmlDeprecatedTag, HtmlUnknownTag, JSUnresolvedVariable, HtmlExtraClosingTag, HtmlFormInputWithoutLabel -->
<template>
  <div>

    <div style="padding-bottom: 16px;">
      <!-- title   -->
      <div
        style="font-size: 16px;color: #666666;font-weight: bold;margin-top: 14px;margin-left: 14px;">
        捐赠类型
      </div>
      <!-- 按钮   -->
      <div style="margin-left: 14px;margin-top: 14px;">
        <div style="float:left;">
          <button
            style="color: white;font-weight: bold;background-color: #35cf82;border-radius: 16px;font-size: 14px;width: 68px;height: 32px;line-height: 32px;">
            物品
          </button>
        </div>
        <div style="float: left;margin-left: 16px;">
          <button @click="mclick"
                  style="color: #35cf82;font-weight: bold;border: 1px solid #35cf82;background-color: white;border-radius: 16px;font-size: 14px;width: 68px;line-height: 32px;">
            资金
          </button>
        </div>
        <div style="display: none;margin-left:10px;float:left;">
          <navigator url="/pages/pubm/main" hover-class="navigator-hover">跳转到新页面</navigator>
        </div>
        <div style="clear: both"></div>
      </div>
    </div>

    <!-- 分隔条   -->
    <div style="border: 6px solid #f3f3f3;"></div>

    <!-- 面板 物资详情   -->
    <div>
      <div
        style="margin-left: 14px;color: #666666;font-size: 16px;line-height: 18px;font-weight: bold;margin-top: 14px;">
        物资详情
      </div>
      <!-- setction  选择物品  -->
      <Pper :title="p.title" :index="p.index" :array="p.array" v-for="(p,i) in ppkerList" :key="i"></Pper>
      <!-- 添加物品  -->
      <div style="display:none;margin-top: 16px;margin-left: 14px;">
        <div style="float: left;height: 20px;line-height: 20px;padding-top: 2px;">
          <img alt="" src="/static/images/pub/add.png" style="width: 17px;height: 17px;"/>
        </div>
        <div style="float: left;color: #35cf82;font-size: 14px;margin-left: 6px;line-height: 20px;">添加物品</div>
        <div style="clear: both;"></div>
      </div>
    </div>

    <!--  捐赠证明  -->
    <div style="margin-left: 14px;">
      <div
        style="color: #666666;font-size: 16px;line-height: 18px;font-weight: bold;margin-top: 14px;">
        捐赠证明
      </div>
      <!--  上传证明    -->
      <div style="display: none;height: 100px;margin-top: 10px;">
        <div style="float: left;width:100px;height: 100px;">
          <img src="/static/images/pub/pic-demo.png" alt="" style="width: 100px;height: 100px;"/>
        </div>
        <div style="float: left;width: 100px;height: 100px;margin-left: 8px;">
          <img alt="" src="/static/images/pub/+.png" style="width: 100px;height: 100px;"/>
        </div>
        <div style="clear: both;"></div>
      </div>
      <!--  上传证明    -->
      <div style="display: block;height: 100px;margin-top: 10px;">
        <upload width="100px" height="100px" max="3" @choosed="choosed"
                @delete="" :srcs="['/static/images/pub/pic-demo.png']"
        >
        </upload>
      </div>
      <div style="color: #999999;font-size: 12px;margin-top: 10px;">上传证明捐赠行为真实性的清晰图片，最多3张</div>
    </div>

    <!-- 分隔条   -->
    <div style="border: 6px solid #f3f3f3;margin-top: 14px;"></div>

    <!-- 捐赠信息 -->
    <view class="info">
      <view class="title">捐赠信息</view>
      <view class="desc_info" v-for="(item,index) in givingInfo" :key="index">
        <image class="label" v-if="item.givingFlag == 0" src="/static/images/pub/juan.png"></image>
        <image class="label" v-if="item.givingFlag == 1" src="/static/images/pub/shou.png"></image>
        <view class="tel" v-if="item.telNum">{{item.telNum}}</view>
        <picker v-if="item.charityData" :data-idx="index" class="choose_charity" @change="charityChoose"
                :value="item.charityData.charity_index" :range="item.charityData.charityArray" range-key="name">
          <view class="picker">
            <label>选择公益机构</label>
            <text :wx:if="!item.charity_province">
              : {{item.charityData.charityArray[item.charityData.charity_index].name}}
            </text>
            <image class="arrow" src="/static/images/pub/right_arraw.png"></image>
          </view>
        </picker>
        <picker mode="region" :data-idx="index" class="choose_charity" @change="bindRegionChange"
                :value="item.region" :custom-item="customItem">
          <view class="picker">
            <label>选择省市 : </label>
            <text :wx:if="item.region.length > 0">{{item.region[0]}}，{{item.region[1]}}，{{item.region[2]}}</text>
            <image class="arrow" src="/static/images/pub/right_arraw.png"></image>
          </view>
        </picker>
        <textarea class="textarea" :value="item.addressDesc" placeholder="详细地址"></textarea>
        <input :wx:if="item.orderId" type="text" placeholder="填写物流单号" class="input"></input>
      </view>
    </view>

    <button @click="pclick"
            style="margin-top: 40px;color: white;font-weight: bold;background-color: #35cf82;border-radius: 4px;font-size: 14px;width: 344px;height: 40px;line-height: 40px;">
      发布
    </button>

    <div style="height: 100px;"></div>

    <!--suppress CheckTagEmptyBody -->
    <tab-bar :selectNavIndex="1"></tab-bar>
  </div>
</template>

<!--suppress NpmUsedModulesInstalled, UnterminatedStatementJS, JSUnusedLocalSymbols -->
<script>
  /* eslint-disable no-unused-vars */


  import tabBar from '@/components/tabbar/tabBar'
  import Upload from '@/components/upload/upload'
  import Pper from '@/components/ppker/pper'

  export default {
    components: {
      tabBar,
      Upload,
      Pper
    },
    data() {
      return {
        array: ['口罩', '医用帽(个)', '免洗洗手液(瓶)', '医用酒精(瓶)', '含氯消毒剂', '其他', '和和'],
        ppkerList: [
          {title: '物品1', index: 0, array: this.array},
          // {title: '物品2', index: 1, array: this.array}
        ],
        givingInfo: [
          {
            givingFlag: 0, // 捐赠标签，0代表捐，1代表赠
            telNum: '13836087755',//电话号码
            region: [],//地址本
            addressDesc: ''
          },
          {
            givingFlag: 1,//捐赠标签，0代表捐，1代表赠
            telNum: '',//电话号码,
            charityData: {
              charity_index: 0,
              charityArray: [
                {
                  name: "武汉红十字会",
                  id: 1
                },
                {
                  name: "黑龙江红十字会",
                  id: 2
                }
              ]
            },//慈善机构数据
            charity_province: true,
            region: [],//地址本
            addressDesc: '人民广场',
            orderId: '填写物流单号',
          }
        ]
      }
    },
    methods: {
      clickHandle() {
        console.log('>>>>>>', 'click')
        this.msg = 'Clicked!!!!!!'
      },
      mclick() {
        console.log('>>>>>>', 'mclick')
        // 跳转到资金页
        wx.navigateTo({
          url: '/pages/pubm/main'
        })
      },
      pclick() {
        console.log('>>>>>>', 'pclick')
        // 发布成功
        wx.navigateTo({
          url: '/pages/pubs/main'
        })
      },
      bindRegionChange(e) {
        let that = this;

        let idx = e.currentTarget.dataset.idx;
        that.$data['givingInfo'][idx].region = e.mp.detail.value;
      },
      charityChoose(e) {
        let that = this;

        console.log(e);
        // let charityData = that.$data.charityData;
        let idx = e.currentTarget.dataset.idx;
        console.log(idx);
        console.log(e.mp.detail.value);
        that.givingInfo[idx].charityData.charity_index = e.mp.detail.value;
        that.givingInfo[idx].charity_province = false;
      }
    },
    created() {
      console.log('page index created', this)
    },
    onLoad() {
      console.log('page index onLoad', this)
    },
    onShow() {
      console.log('onShow', this)
    },
    onReady() {
      console.log('page index onReady', this)
    },
    mounted() {
      console.log('mounted', this)
    },
    onUnload() {
      console.log('onUnload', this)
    },
    onHide() {
      console.log('onHide', this)
    }
  }
</script>

<!--suppress CssInvalidPropertyValue, CssUnusedSymbol -->
<style scoped>
  .info {
    background: #fff;
    position: relative;
    border-top: 12rpx solid #f3f3f3;
  }

  .title {
    margin-left: 28rpx;
    color: #666666;
    font-size: 32rpx;
    line-height: 36rpx;
    font-weight: bold;
    margin-top: 28rpx;
  }

  .desc_info {
    position: relative;
    padding-bottom: 20rpx;
    margin: 0 28rpx;
    border-bottom: 1rpx solid #dddddd;
  }

  .desc_info:last-child {
    border-bottom: none;
  }

  .desc_info .label {
    width: 27px;
    height: 27px;
    margin-top: 10px;
    display: block;
  }

  .desc_info .tel {
    color: #807b7b;
    font-size: 28rpx;
    line-height: 54rpx;
  }

  .desc_info .choose_charity {
    height: 100rpx;
    width: 100%;
    float: left;
    color: #999999;
    font-size: 28rpx;
    line-height: 88rpx;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
  }

  .desc_info .choose_province {
    height: 100rpx;
    width: 100%;
    float: left;
    color: #999999;
    font-size: 28rpx;
    line-height: 88rpx;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
  }

  .desc_info .choose_province .arrow, .desc_info .choose_charity .arrow {
    position: absolute;
    top: 50%;
    right: 0rpx;
    width: 16rpx;
    height: 28rpx;
    transform: translateY(-50%);
  }

  .desc_info .textarea {
    color: #999999;
    font-size: 28rpx;
    padding-left: 20rpx;
    padding-top: 20rpx;
    margin-right: 28rpx;
    height: 168rpx;
    background-color: #f3f3f3;
    border-radius: 8rpx;
    width: 694rpx;
    box-sizing: border-box;
  }

  .input {
    color: #999999;
    font-size: 28rpx;
    margin-top: 40rpx;
  }


</style>
