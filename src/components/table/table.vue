<template>
  <ul class="table_component">
    <li>
      <ul class="table_header">
        <li v-for="header in headers" v-bind:key="header">
          {{header}}
        </li>
      </ul>
    </li>
    <ul v-for="(col, _index) in content" v-bind:key="_index" class="content_col" @click='onClick(col.id)'>
      <li v-for='(item, index) in col.data' v-bind:key="index">
        {{item}}
      </li>
    </ul>
  </ul>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      required: true
    },
    content: {
      type: Array,
      required: true
    },
    onRowClick: {
      type: Function,
      required: true
    }
  },
  methods: {
    onClick (id) {
      this.onRowClick(id)
    }
  }
  // watch: {
  //   content (_content) {
  //     console.log(_content[0] ? _content[0].data : null)
  //     this.content = _content
  //   }
  // }
}
</script>

<style lang="scss">
ul.table_component {
  overflow-y: hidden;
  ul.table_header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    height: 76rpx;
    // border-top: 1rpx solid #ddd;
    // border-bottom: 1rpx solid #ddd;
    > li {
      border-top: 1rpx solid #ddd;
      border-bottom: 1rpx solid #ddd;
      height: 76rpx;
      line-height: 76rpx;
      width: 200rpx;
      flex-shrink: 0;
      color: #999;
      font-size: 26rpx;
      text-align: left;
    }
  }
  ul.content_col{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    height: 80rpx;
    border-bottom: 1rpx solid #ddd;
    > li{
      border-bottom: 1rpx solid #ddd;
      height: 80rpx;
      line-height: 80rpx;
      width: 160rpx;
      padding-left: 40rpx;
      flex-shrink: 0;
      font-size: 28rpx;
      color: #3A3A3A;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      &:first-child{
        padding-left: 0;
      }
    }

  }
}
</style>