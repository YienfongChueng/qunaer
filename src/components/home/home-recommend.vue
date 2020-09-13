<template>
    <div class="recommend">
        <div class="recommend-title">
            <i class="iconfont icon-xihuan"></i>
            <span class="recommend-title-text">猜你喜欢</span>
        </div>
        <ul class="recommend-list">
            <!-- <router-link to="/detail"> -->
                <router-link
                    class="recommend-item"
                    tag="li"
                    v-for="item of recommendList"
                    :key="item.id"
                    :to="'/detail/' + item.id"
                >
                    <div class="item-img-wrap">
                        <img :src="item.imgUrl" :alt="item.title" class="item-img">
                    </div>
                    <div class="item-tag-wrap" v-if="item.tag">
                        <span class="item-tag">{{item.tag}}</span>
                    </div>
                    <div class="item-info-wrap">
                        <div class="item-info-title">{{item.title}}</div>
                        <div class="item-info-review">
                            <span class="item-info-review-left" >
                                <i class="iconfont icon-xingji" v-for="i in item.star" :key="i" />
                            </span>
                            <span class="item-info-review-right">
                                {{item.reviewCount}}条评论
                            </span>
                        </div>
                        <div class="item-info-price">
                            <span class="item-info-price-left">
                                <span class="item-info-price-unit">¥</span>
                                <span class="item-info-price-number">{{item.price}}</span>
                                起
                            </span>
                            <span class="item-info-price-right">{{item.address}}</span>
                        </div>
                    </div>
                </router-link>
            <!-- </router-link> -->
        </ul>
        <div class="recommend-more">
            查看所有产品
        </div>
    </div>
</template>
<script>
export default {
    name: 'HomeRecommend',
    props: {
        recommendList: Array
    },
};
</script>
<style lang='scss' scoped>
    .recommend {
        background: #fff;
        margin-top: .2rem;
        &-title {
            padding: .24rem 0 .26rem;
            &-text {
                font-size: 18px;
                font-weight: bold;
                padding: 0 0.1rem;
            }
        }
        &-list {
            margin-left: .24rem;
        }
        &-item {
            position: relative;
            overflow: hidden;
            padding: .2rem 0;
            border-bottom: 1px solid #f6f4f4;
        }
        &-more {
            padding: .2rem 0;
            color: #00afc7;
            font-size: .28rem;
            line-height: .4rem;
            text-align: center;
        }
    }
    .recommend-title .iconfont {
         color: #ff6052;
         font-size: 20px;
         margin-left: 0.2rem;
    }
    .item-img-wrap {
        float: left;
        overflow: hidden;
        width: 2rem;
        height: 2rem;
    }
    .item-img {
        width: 100%;
    }
    .item-tag-wrap {
        position: absolute;
        top: 0.2rem;
        left: 0;
        z-index: 2;
        background: orange;
        color: #fff;
        padding: 0.05rem;
        font-weight: bold;
    }
    .item-info {
        &-wrap {
            overflow: hidden;
            padding-left: .22rem;
        }
        &-title {
            margin-top: .26rem;
            height: .44rem;
            color: #212121;
            font-size: 16px;
            line-height: .44rem;
            font-weight: bold;
            @include ellipse;
        }
        &-review {
            margin-top: .14rem;
            height: .34rem;
            &-left {
                color: #ffb436;
            }
            &-right {
                color: #616161;
                font-size: .24rem;
                line-height: .34rem;
                vertical-align: text-bottom;
                margin-left: .2rem;
            }
        }
        &-price {
            position: relative;
            margin-top: .22rem;
            color: #616161;
            font-size: 13px;
            line-height: .4rem;
            &-unit {
                color:$orangeColor;
                font-weight: bold;
            }
            &-number {
                color:$orangeColor;
                font-size: 18px;
                font-weight: bold;
            }
            &-right {
                position: absolute;
                width: 1.5rem;
                right: .1rem;
                bottom: 0;
                text-align: center;
                @include ellipse;
            }
        }
    }
    .item-info-review-left .iconfont {
        font-size: 14px;
    }
</style>
