<template>
    <div class="gallary" @click="handleBannerClose">
        <div class="gallary-item">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img :src="item" class="gallary-item-img">
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>
import Swiper from '@/components/common/swiper.vue';
import SwiperSlide from '@/components/common/swiper-slide.vue';
export default {
    name: 'Gallary',
    props: {
        imgs: {
            type: Array,
        }
    },
    components: {
        Swiper,
        SwiperSlide
    },
    data () {
        return {
            swiperOptions: {
                containerHeight: 100,
                paginationType: 'fraction',
                loop: false,
                autoplay: false,
                observer: true,
                observeParents: true,
            }
        };
    },
    methods: {
        handleBannerClose () {
            this.$emit('close');
        }
    },
};
</script>
<style lang="scss" scoped>
    .gallary ::v-deep .swiper-pagination {
        color: #fff;
        position: absolute;
        bottom: -1rem;
    }
    .gallary ::v-deep .swiper-container {
        overflow: inherit;
    }
    .gallary {
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 10;
        &-item {
            height: 0;
            width: 100%;
            padding-bottom: 100%;
            &-img {
                width: 100%;
            }
        }
    }
</style>
