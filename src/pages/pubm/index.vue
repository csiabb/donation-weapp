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
            style="color: #35cf82;font-weight: bold;border: 1px solid #35cf82;background-color: white;border-radius: 16px;font-size: 14px;width: 68px;line-height: 32px;"
          >
            物品
          </button>
        </div>
        <div style="float: left;margin-left: 16px;">
          <button
            style="color: white;font-weight: bold;background-color: #35cf82;border-radius: 16px;font-size: 14px;width: 68px;height: 32px;line-height: 32px;">
            资金
          </button>
        </div>
        <div style="clear: both"></div>
      </div>
    </div>

    <!-- 分隔条   -->
    <div style="border: 6px solid #f3f3f3;"></div>

    <!-- 面板   -->
    <div style="">
      <div
        style="margin-left: 14px;color: #666666;font-size: 16px;line-height: 18px;font-weight: bold;margin-top: 14px;">
        物资详情
      </div>

      <!-- 添加物品  -->
      <div style="margin-top: 16px;margin-left: 14px;">
        <div style="color: #999999;font-size: 14px;line-height: 20px;">填写捐款数额（元）</div>
      </div>
    </div>

    <!--  捐赠证明  -->
    <div style="margin-left: 14px;">
      <div
        style="color: #666666;font-size: 16px;line-height: 18px;font-weight: bold;margin-top: 14px;">
        捐赠证明
      </div>
      <div style="height: 100px;margin-top: 10px;">
        <div style="float: left;width:100px;height: 100px;">
          <img src="/static/images/pub/pic-demo.png" alt="" style="width: 100px;height: 100px;"/>
        </div>
        <div style="float: left;width: 100px;height: 100px;margin-left: 8px;">
          <img alt="" src="/static/images/pub/+.png" style="width: 100px;height: 100px;"/>
        </div>
        <div style="clear: both;"></div>
      </div>
      <div style="color: #999999;font-size: 12px;margin-top: 10px;">上传证明捐赠行为真实性的清晰图片，最多3张</div>
    </div>

    <!-- 分隔条   -->
    <div style="border: 6px solid #f3f3f3;margin-top: 14px;"></div>

    <div>
      <div
        style="margin-left: 14px;color: #666666;font-size: 16px;line-height: 18px;font-weight: bold;margin-top: 14px;">
        捐赠信息
      </div>
      <div>
        <!-- 捐   -->
        <div>
          <div style="color: #999999;font-size: 14px;line-height: 27px;margin-left: 14px;">
            <img src="/static/images/pub/juan.png" style="width: 27px;height: 27px;margin-top: 10px;"/>
          </div>
          <div style="padding-left: 16px;">
            <div style="float: left;color: #666666;font-size: 14px;line-height: 44px;">吴妍珠</div>
            <div style="float: right;margin-right: 14px;height: 44px;line-height: 44px;">
              <div style="float: right;">
                <img alt="" src="/static/images/pubm/vip.png" style="width:15px;height: 15px;"/>
              </div>
              <div style="float: right;color: #999999;font-size: 12px;line-height: 44px;margin-right:6px;">已认证</div>
              <div style="clear: both;"></div>
            </div>
            <div style="clear: both;"></div>
          </div>
          <div style="border-top:1px solid #dddddd;margin-top: 10px;margin-left: 14px;margin-right: 14px;"></div>

        </div>

        <!-- 收   -->
        <div>
          <div style="color: #999999;font-size: 14px;line-height: 27px;margin-left: 14px;">
            <img src="/static/images/pub/shou.png" style="width: 27px;height: 27px;margin-top: 10px;"/>
          </div>
          <!--  选择公益机构    -->
          <div style="padding-left: 16px;">
            <div style="float: left;color: #999999;font-size: 14px;line-height: 44px;">选择公益机构</div>
            <div style="float: right;margin-right: 14px;height: 44px;line-height: 44px;">
              <img alt="" src="/static/images/pub/right_arraw.png" style="width:8px;height: 14px;"/>
            </div>
            <div style="clear: both;"></div>
          </div>
          <div style="color: #999999;font-size: 14px;margin-left: 14px;margin-top: 14px;">填写公益机构接收账号</div>
        </div>


      </div>
    </div>

    <button @click="pclick"
      style="margin-top: 40px;color: white;font-weight: bold;background-color: #35cf82;border-radius: 4px;font-size: 14px;width: 344px;height: 40px;line-height: 40px;">
      发布
    </button>

    <div style="height: 100px;"></div>

  </div>
</template>

<script>
  /* eslint-disable space-before-function-paren */

  export default {
    methods: {
      pclick() {
        console.log('>>>>>>', 'pclick')
        // 发布成功
        wx.navigateTo({
          url: '/pages/pubs/main'
        })
      }
    }
  }
</script>

<style>

</style>
