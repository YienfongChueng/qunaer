<template>
    <div class="header">
        <router-link to="/">
            <div class="header-back">
                <i class="iconfont icon-back"></i>
            </div>
        </router-link>
        <div class="header-title">城市选择</div>
    </div>
</template>
<script>
export default {
    name: 'CityHeader',
};
</script>
<style lang="scss" scoped>
    .header {
        height: $headerHeight;
        line-height: $headerHeight;
        background: $bgColor;
        color: #fff;
        position: relative;
        font-size: .32rem;
        text-align: center;
        &-back {
            position: absolute;
            top: 0;
            left: 0;
            width: .64rem;
            text-align: center;
            font-size: .4rem;
            color: #fff;
        }
    }
</style>
