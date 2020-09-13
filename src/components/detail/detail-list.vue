<template>
    <div class="list">
        <div
            class="list-item"
            v-for="(item,index) of list"
            :key="index"
        >
            <div class="list-item-title border-bottom">
                <i class="iconfont icon-piaoquan"></i>
                <span class="list-item-title-text">{{item.title}}</span>
            </div>
            <div class="list-item-child" v-if="item.children">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'DetailList',
    props: {
        list: Array
    }
};
</script>
<style lang="scss" scoped>
    .list-item-title .iconfont {
        display: inline-block;
        width: .36rem;
        height: .36rem;
        margin-right: .1rem;
        color: $bgColor;
    }
    .list {
        &-item {
            &-title {
                line-height: .8rem;
                font-size: .32rem;
                padding: 0 .2rem;
                &-text {
                    padding-left: .2rem;
                }
            }
            &-child {
                padding-left: .2rem;
            }
        }
    }
</style>
