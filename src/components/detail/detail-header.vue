<template>
    <div class="header">
        <div v-show="isShowAbs" class="header-abs">
            <router-link tag="div" to="/" class="header-abs-wrapper">
                <i class="iconfont icon-back"></i>
            </router-link>
        </div>
        <div v-show="!isShowAbs" :style="opacityStyle" class="header-fixed">
            <router-link to="/">
                <div class="header-fixed-back">
                    <i class="iconfont icon-back"></i>
                </div>
            </router-link>
            <div class="header-fixed-title">景点详情</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DetailHeader',
    data () {
        return {
            isShowAbs: true,
            opacityStyle: {
                opacity: 0
            }
        };
    },
    methods: {
        handleScroll () {
            const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
            if (top > 60) {
                let opacity = top / 140;
                opacity = opacity > 1 ? 1 : opacity;
                this.opacityStyle.opacity = opacity;
                this.isShowAbs = false;
            } else {
                this.isShowAbs = true;
            }
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
};
</script>
<style lang="scss" scoped>
    .header-abs-wrapper .iconfont {
        font-size: .4rem;
    }
    .header {
        position: relative;
        &-abs {
            position: absolute;
            left: .2rem;
            top: .2rem;
            width: .8rem;
            height: .8rem;
            border-radius: .4rem;
            background: rgba(0, 0, 0, 0.5);
            z-index: 11;
            &-wrapper {
                color: #fff;
                line-height: .8rem;
                text-align: center;
                font-weight: bold;
            }
        }
        &-fixed {
            height: $headerHeight;
            line-height: $headerHeight;
            background: $bgColor;
            color: #fff;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            font-size: .32rem;
            text-align: center;
            overflow: hidden;
            z-index: 12;
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
    }

</style>
