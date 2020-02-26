<template>
  <ul class="tabMenu">
    <li
      v-for="item in tabList"
      v-bind:key="item"
      :class="active === index ? 'active' : ''"
      @click="onTabChange(index)"
    >
      {{item}}
      <div class="active_line" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      required: true
    },
    tabList: {
      type: [String],
      required: true
    }
    // onTabChange: {
    //   type: Function,
    //   required: false
    // }
  },
  data () {
    return {
      active: this.current
    }
  },
  methods: {
    onTabChange (index) {
      this.$emit('onTabChange', index)
    }
  },
  watch: {
    current (newCurrent) {
      this.active = newCurrent
    }
  },
  created () {
    console.log('Created')
  },
  beforeUpdate () {
    console.log('beforeUpdate', this)
  }
}
</script>

<style lang="scss">
@import "@/style/common.scss";

$tabMenuColor: #888;

.tabMenu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30rpx;
  height: 70rpx;
  background-color: $tabbar-background-color;

  > li {
    display: block;
    color: $tabMenuColor;
    font-weight: 500;
    font-size: 30rpx;
    height: 70rpx;
    line-height: 70rpx;
    position: relative;

    > .active_line {
      width: 50rpx;
      height: 6rpx;
      left: 50%;

      background-color: transparent;
      margin: 0 auto;
      margin-top: 4rpx;
      margin-left: -25rpx;
      position: absolute;
      bottom: 0;
    }
    &.active{
      color: $active-text-color;
      > .active_line {
      background-color: $active-text-color;
    }
    }
  }
}
</style>
