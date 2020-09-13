<template>
    <div class="weekend">
        <div class="weekend-title">
            周末去哪儿
        </div>
        <ul class="weekend-list">
            <li class="weekend-item" v-for="item of weekendList" :key="item.id">
                <div class="weekend-item-img-wrap">
                    <img :src="item.imgUrl" :alt="item.title" class="weekend-item-img">
                </div>
                <div class="weekend-item-info">
                    <div class="weekend-item-info-title">{{item.title}}</div>
                    <div class="weekend-item-info-desc">{{item.desc}}</div>
                </div>

            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'HomeWeekend',
    props: {
        weekendList: Array
    }
};
</script>
<style lang="scss" scoped>
    .weekend {
        &-title {
            height: .8rem;
            padding-left: .26rem;
            line-height: .8rem;
            color: #212121;
            text-align: left;
        }
        &-item {
            margin-bottom: .1rem;
            background: #fff;
            &-img {
                width: 100%;
            }
            &-img-wrap {
                width: 100%;
                overflow: hidden;
                height: 0;
                padding-bottom: 36.53%;
            }
            &-info {
                padding: .14rem .2rem .2rem .2rem;
                &-title {
                    padding-right: 1.4rem;
                    color: #212121;
                    line-height: .48rem;
                    font-size: 16px;
                    @include ellipse;
                }
                &-desc {
                    padding-right: 1.4rem;
                    color: #616161;
                    font-size: 14px;
                    line-height: .42rem;
                    @include ellipse;
                }
            }
        }
    }
</style>
