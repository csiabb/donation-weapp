<template>
  <div class="j-pic-upload" style="height: 100px;">
    <img alt="" @click="previewImg(index)" v-for="(src,index) in urls" :key="src" :src="src"
         :style="{'width':width || '120px','height':height || '120px'}" class="img"/>
    <div style="float: left;background-color: #ADADAD;" class="j-upload-btn" @click="uploadImg()"
         :style="{'width':width || '120px','height':height || '120px'}">
      <img alt="" src="/static/images/pub/+.png" style="width: 100px;height: 100px;"/>
    </div>
  </div>
</template>

<script>
  /* eslint-disable space-before-function-paren,space-before-blocks,key-spacing,semi */

  export default {
    props: ['width', 'height', 'max', 'srcs'],
    data() {
      return {
        urls: [],
        total: 3 // 全部几张图片
      }
    },
    mounted() {
      this.urls = this.srcs || [];
    },
    methods: {
      uploadImg() {
        let that = this;

        // 如果超过最大图片数量直接返回
        if (that.urls.length >= that.total) {
          wx.showToast({title: '超出最大图片数量', duration: 1000});
        } else {
          wx.chooseImage({
            count: that.max || 3, // 一次最多几张
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success: function (res) {
              res.tempFilePaths.forEach(v => {
                that.urls.push(v); // 获取图片临时路径
              });
              that.$emit('choosed', {all: that.urls, currentUpload: res.tempFilePaths}); // 出发自定义事件
            }
          })
        }
      },
      previewImg(index) {
        let that = this;
        // 弹出菜单
        wx.showActionSheet({
          itemList: ['预览', '删除'],
          success: function (res) {
            if (res.tapIndex === 0) {
              wx.previewImage({
                current: that.urls[index],
                urls: that.urls
              });
            } else {
              that.urls.splice(index, 1); // 删除
              that.$emit('delete', that.urls);
            }
          }
        });
      }
    }
  }
</script>

<style scoped>
  .j-pic-upload {
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    flex-wrap: nowrap;
  }

  .j-upload-btn {
    /*border: 1px solid #ddd;*/
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
  }

  .j-upload-add {
    font-size: 40px;
    font-weight: bold;
    color: #C9C9C9;
  }

  .img {
    width: 100px;
    height: 100px;
    margin-right: 8px;
    float: left;
  }
</style>
