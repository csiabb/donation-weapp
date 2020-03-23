<!-- 捐赠物品选择器 -->
<template>
  <div>
    <div style="border: 1px solid #dddddd;border-radius: 4px;margin-right: 16px;margin-left: 14px;margin-top: 14px;">
      <div style="background-color:#eafaf2;">
        <div style="float: left;padding-left:16px;line-height: 40px;height: 40px;color:#35cf82;font-size: 16px;">
          {{pTitle}}
        </div>
        <div style="display: none;float: right;margin-right: 14px;height: 40px;line-height: 40px;padding-top: 8px;">
          <img @click="close" src="/static/images/pub/x.png" alt="" style="width: 20px;height:20px;"/>
        </div>
        <div style="clear: both;"></div>
      </div>
      <div style="padding-left: 16px;color: #999999;font-size: 14px;">
        <!--suppress HtmlUnknownTag -->
        <picker @change="pickerChange" :value="pIndex" :range="pArray">
          <div>
            <div style="float: left;line-height: 44px;height: 44px;">
              选择物品：{{pArray[pIndex]}}
            </div>
            <div style="float: right;margin-right: 14px;height: 44px;line-height: 44px;">
              <img alt="" src="/static/images/pub/right_arraw.png" style="width:8px;height: 14px;"/>
            </div>
            <div style="clear:both"></div>
          </div>
        </picker>
      </div>
      <div style="line-height: 44px;padding-left: 16px;">
        <label>
          <input type="text" placeholder="填写数量" style="height: 44px;color: #999999;font-size: 14px;"/>
        </label>
      </div>
    </div>
  </div>
</template>
<!--suppress JSUnusedGlobalSymbols -->
<script>
  export default {
    props: ['index', 'title', 'array'],
    data() {
      return {
        pArray: this.array || ['口罩', '医用帽(个)', '免洗洗手液(瓶)', '医用酒精(瓶)', '含氯消毒剂', '其他'],
        pIndex: this.index || 0,
        pTitle: this.title || '物品1'
      };
    },
    mounted() {
    },
    methods: {
      pickerChange(e) {
        let that = this;
        console.log('pickerChange');
        console.log('picker发送选择改变，携带值为', e.mp.detail.value);
        this.$data['pIndex'] = e.mp.detail.value;

        this.$emit('change', {index: that.pIndex, dname: that.pArray[that.pIndex]}); // 自定义事件
      },
      close(e) {
        // let that = this;
        console.log('close');
        console.log(e);
      }
    }

  }
</script>
<!--suppress CheckTagEmptyBody -->
<style scoped></style>
