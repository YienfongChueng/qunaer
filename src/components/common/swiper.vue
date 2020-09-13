<template>
    <!-- Slider main container -->
    <div class="swiper-container" ref="swiper-container">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <slot></slot>
        </div>
        <!-- If we need pagination -->
        <div v-if="this.allSwiperOptions.isPagination" class="swiper-pagination" ref="swiper-pagination"></div>

        <!-- If we need navigation buttons -->
        <div v-if="this.allSwiperOptions.isNavigation"  class="swiper-button-prev" ref="swiper-button-prev"></div>
        <div v-if="this.allSwiperOptions.isNavigation"  class="swiper-button-next" ref="swiper-button-next"></div>

        <!-- If we need scrollbar -->
        <div v-if="this.allSwiperOptions.isScrollbar" class="swiper-scrollbar" ref="swiper-scrollbar"></div>
    </div>
</template>
<script>
// swiper下的分页，焦点，自动播放等需要import，否则无效
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

// 注册组件到swiper，并实例化swiper
Swiper.use([Navigation, Pagination, Autoplay]);
const swiper = new Swiper();

export default {
    name: 'Swiper',
    props: {
        options: {
            type: Object,
        }
    },
    data () {
        return {

        };
    },
    computed: {
        allSwiperOptions () {
            var defaultOpts = {
                direction: 'horizontal',
                speed: 300,
                loop: true,
                autoplay: 3000,
                isPagination: true,
                paginationType: 'bullets',
                isNavigation: false,
                isScrollbar: false,
            };
            return Object.assign({}, defaultOpts, this.options);
        }
    },
    methods: {
        isNumber (val) {
            var reg = /^\d+$/;
            var flag = false;
            if (reg.test(val)) {
                flag = true;
            }
            return flag;
        },
        mySwiper () {
            // 设置容器的padding-bottom
            var swiperOptions = this.allSwiperOptions;
            var conEl = this.$refs['swiper-container'];
            if (swiperOptions.containerHeight !== undefined && this.isNumber(swiperOptions.containerHeight)) {
                conEl.style.paddingBottom = swiperOptions.containerHeight + '%';
            }
            // 选项配置
            var opts = {
                direction: swiperOptions.direction,
                loop: swiperOptions.loop,
                speed: swiperOptions.speed,
                autoplay: this.isNumber(swiperOptions.autoplay) ? { delay: swiperOptions.autoplay } : !((swiperOptions.autoplay !== undefined && swiperOptions.autoplay === false)),
                observer: swiperOptions.observer || false,
                observeParents: swiperOptions.observeParents || false,
            };

            // If we need pagination
            var pagination = {
                pagination: {
                    el: this.$refs['swiper-pagination'],
                    type: this.allSwiperOptions.paginationType
                }
            };
            // Navigation arrows
            var navigation = {
                navigation: {
                    nextEl: this.$refs['swiper-button-next'],
                    prevEl: this.$refs['swiper-button-prev'],
                }
            };
            // And if we need scrollbar
            var scrollbar = {
                scrollbar: {
                    el: this.$refs['swiper-scrollbar'],
                },
            };
            if (swiperOptions.isPagination) {
                opts = Object.assign({}, opts, pagination);
            }
            if (swiperOptions.isNavigation) {
                opts = Object.assign({}, opts, navigation);
            }
            if (swiperOptions.isScrollbar) {
                opts = Object.assign({}, opts, scrollbar);
            }
            var mySwiper = new Swiper(this.$refs['swiper-container'], opts);
        }
    },
    mounted () {
        this.$nextTick(() => {
            this.mySwiper();
        });
    },
    updated () {
        this.$nextTick(() => {
            this.mySwiper();
        });
    },

};
</script>
<style lang="scss" scoped>
    .swiper-container {
        width: 100%;
        // 设置图片宽高比,padding-top/bottom 根据父元素的width来设定百分比
        height: 0;
        overflow: hidden;
        padding-bottom: 31.25%;
    }
</style>
