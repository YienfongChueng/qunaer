<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont icon-back"></i>
    </div>
    <div class="header-input">
      <i class="header-input__icon iconfont icon-sousu"></i>
      <input type="text" class="header-input__search" placeholder="请输入城市/经典/游玩主题">
    </div>
    <router-link to="/city">
      <div class="header-right">
        <span>{{city}}</span>
        <i class="iconfont icon-arrow-down"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'HomeHeader',
    computed: {
        ...mapState(['city'])
    }

};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.header {
  height: $headerHeight;
  line-height: $headerHeight;
  background: $bgColor;
  color:#fff;
  display: flex;
  &-left {
    width: .64rem;
    float: left;
    .icon-back {
      font-size: .5rem;
    }
  }
  &-input {
    flex: 1 1 auto;
    height: .64rem;
    line-height: .64rem;
    margin-left: .2rem;
    margin-top: .12rem;
    background: #fff;
    border-radius: .1rem;
    color: #ccc;
    &__icon {
      width: .64rem;
      float: left;
      font-size: 0.5rem;
    }
    &__search {
      height: 100%;
      color: #000;
      float: left;
      width: 85%;
    }
  }
  &-right {
    padding-left: .1rem;
    float: right;
    text-align: center;
    color: #fff;
  }
}
</style>
