<template>
    <div class="nav">
        <div class="nav-banner-wrapper">
            <swiper v-if="showBanner">
                <swiper-slide v-for="item of bannerList" :key="item.id">
                    <img :src="item.imgUrl" :alt="item.id" class="swiper-img">
                </swiper-slide>
            </swiper>
        </div>
        <div class="nav-icon-wrapper">
            <swiper v-if="showIcon" :options="swiperOptions">
                <swiper-slide v-for="(page,index) of pages" :key="index">
                    <div class="nav-icon-list" v-for="item of page" :key="item.id">
                        <div class="nav-icon-item">
                            <img :src="item.iconUrl" :alt="item.desc" class="nav-icon-link">
                        </div>
                        <p class="nav-icon-desc">{{item.desc}}</p>
                    </div>
                </swiper-slide>
            </swiper>
        </div>

    </div>
</template>
<script>
import Swiper from '@/components/common/swiper.vue';
import SwiperSlide from '@/components/common/swiper-slide.vue';
export default {
    name: 'HomeNav',
    props: {
        bannerList: Array,
        iconList: Array,
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    data () {
        return {
            swiperOptions: {
                direction: 'horizontal',
                isPagination: true,
                autoplay: false,
                loop: false,
                containerHeight: 57
            },
        };
    },
    computed: {
        pages () {
            const pages = [];
            this.iconList.forEach((item, index) => {
                const page = Math.floor(index / 8);
                if (!pages[page]) {
                    pages[page] = [];
                }
                pages[page].push(item);
            });
            return pages;
        },
        showBanner () {
            return this.bannerList.length;
        },
        showIcon () {
            return this.iconList.length;
        }
    },
};
</script>
<style lang="scss" scoped>
    .nav {
        background: #fff;
    }
    .nav-icon-wrapper {
        width: 100%;
        height: 0;
        padding-bottom: 57%;
        margin-top: 2%;
    }
    .nav-icon-list {
        position: relative;
        overflow: hidden;
        float: left;
        width: 25%;
        padding-bottom: 25%;
    }
    .nav-icon-item {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0.44rem;
        box-sizing: border-box;
        padding: .1rem;
    }
    .nav-icon-link {
        height: 100%;
        display: block;
        margin: 0 auto;
    }
    .nav-icon-desc {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: .44rem;
        line-height: .44rem;
        text-align: center;
        padding: 0 .1rem;
        color: $darkTextColor;
        @include ellipse;
    }
    .swiper-img {
        width: 100%;
    }
</style>
