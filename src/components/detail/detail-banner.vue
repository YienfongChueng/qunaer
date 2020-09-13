<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img :src="bannerImg" alt="" class="banner-img">
            <div class="banner-info">
                <div class="banner-info-title">{{sightName}}</div>
                <div class="banner-info-number">
                    <i class="iconfont icon-tupian-xianxing"></i>
                    <span class="banner-info-number-count">{{gallaryImgsCount}}</span>
                </div>
            </div>
        </div>
        <fade-transition>
            <gallary
                :imgs="gallaryImgs"
                v-show="showGallary"
                @close="handleBannerClose"
            >
            </gallary>
        </fade-transition>
    </div>
</template>
<script>
import Gallary from '@/components/common/gallary.vue';
import FadeTransition from '@/components/common/fade-transition.vue';
export default {
    name: 'DetailBanner',
    props: {
        sightName: String,
        bannerImg: String,
        gallaryImgs: Array
    },
    components: {
        Gallary,
        FadeTransition
    },
    data () {
        return {
            showGallary: false
        };
    },
    computed: {
        gallaryImgsCount () {
            return this.gallaryImgs.length;
        }
    },
    methods: {
        handleBannerClick () {
            this.showGallary = true;
        },
        handleBannerClose () {
            this.showGallary = false;
        }
    },

};
</script>
<style lang="scss" scoped>
    .banner {
        width: 100%;
        overflow: hidden;
        position: relative;
        height: 0;
        padding-bottom: 55%;
        &-img {
            width: 100%;
        }
        &-info {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 0 .2rem .36rem .2rem;
            color: #fff;
            min-height: .4rem;
            background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.8));
            &-title {
                float: left;
                line-height: .4rem;
                font-size: .36rem;
                font-weight: bold;
                text-shadow: 0 1px 2px rgba(0,0,0,0.7);
            }
            &-number {
                float: right;
                width: 1.2rem;
                height: .4rem;
                background: rgba(0,0,0,0.5);
                border-radius: .2rem;
                font-size: .24rem;
                line-height: .4rem;
                text-align: center;
                &-count {
                    vertical-align: top;;
                }
            }

        }
    }
</style>
