<template>
    <div class="hot">
        <div class="hot-title">
            <div class="hot-title-left">
                <i class="iconfont icon-liebiaoye-remenxuanxiang"></i>
                <span class="hot-title-text">本周热门榜单</span>
            </div>
            <div class="hot-title-right">
                <span class="hot-more-text">全部榜单</span>
                <i class="iconfont icon-qianjin"></i>
            </div>
        </div>
        <div class="hot-list">
            <div class="hot-list-wrapper" >
                <div class="hot-list-item" v-for="item of hotList" :key="item.id">
                    <div class="item-tag" v-if="item.rankTag">
                        <img :src="item.rankTag" alt="" class="item-tag-img">
                    </div>
                    <div class="item-img">
                        <img :src="item.imgUrl" :alt="item.title" class="item-img-link">
                    </div>
                    <div class="item-desc">
                        <div class="item-desc-title">{{item.title}}</div>
                        <div class="item-desc-price">
                            <span class="item-desc-price-number">¥{{item.price}}</span>起
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'home-hot',
    props: {
        hotList: Array
    },
};
</script>
<style lang="scss" scoped>
    .hot {
        background: #fff;
        margin-top: .2rem;
        &-title {
            height: 1.175rem;
            line-height: 1.175rem;
            &-left {
                float: left;
            }
            &-right {
                float: right;
            }
        }
        &-list {
            width: 100%;
            height: 0;
            padding: 0 .24rem 3.3rem;
            box-sizing: border-box;
            overflow-y: hidden;
            overflow-x: scroll;
            &-wrapper {
                width: 100%;
                display: flex;
                flex-wrap:nowrap;
                justify-content: space-between;
            }
            &-item {
                flex-shrink: 0;
                width: 2.5rem;
                position: relative;
            }
        }
    }
    .item-tag {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        overflow: hidden;
        width: .84rem;
        height: .4rem;
        &-img {
            width: 100%;
        }
    }
    .item-img {
        width: 90%;
        &-link {
            width: 100%;
        }
    }
    .item-desc {
        text-align: center;
        &-title {
            padding: 0.125rem;
            @include ellipse;
        }
        &-price-number {
            color: $orangeColor;
            font-weight: bold;
        }
    }
    /**热销标题 **/
    .hot-title-text {
        font-size: 18px;
        font-weight: bold;
        color: $darkTextColor;
        padding: 0 0.2rem;
    }
    .hot-more-text {
        color: $darkTextColor;
        padding: 0 0.2rem;
    }
    .hot-title-left .iconfont {
        color: $orangeColor;
        margin-left: 0.2rem;
    }
    .hot-title-right .iconfont {
        margin-right: 0.2rem;
    }
</style>
