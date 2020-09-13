<template>
    <div class="list" ref="wrapper">
        <div class="content">
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button current-btn">{{currentCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper"
                        v-for="item of hot"
                        :key="item.id"
                        @click="handleCityClick(item.name)"
                    >
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area"
                v-for="(items,key) of cities"
                :key="key"
                :ref="key"
            >
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list"
                    v-for="innerItem of items"
                    :key="innerItem.id"
                    @click="handleCityClick(innerItem.name)"
                >
                    <div class="item border-bottom">{{innerItem.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BScroll from '@better-scroll/core';
import { mapState, mapMutations } from 'vuex';
export default {
    name: 'CityList',
    props: {
        hot: Array,
        cities: Object,
        letter: String
    },
    methods: {
        handleCityClick (city) {
            // this.$store.dispatch('changeCity', city);
            // this.$store.commit('changeCity', city);
            this.changeCity(city);
            this.$router.push('/');
        },
        ...mapMutations(['changeCity'])
    },
    computed: {
        ...mapState({
            currentCity: 'city'
        })
    },
    watch: {
        letter () {
            if (this.letter) {
                const ele = this.$refs[this.letter][0];
                this.scroll.scrollToElement(ele);
            }
        }
    },
    mounted () {
        this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.wrapper, {
                click: true,
                // bounce: false,
                // tap: true,
                // mouseWheel: true,
            });
        });
    },
    updated () {
        this.$nextTick(() => {
            // 因为数据是调用接口传给该子组件的，所以在数据发生变化时重新渲染时，刷新一下scroll
            this.scroll.refresh();
        });
    },
};
</script>
<style lang="scss" scoped>
    .border-topbottom {
        &::before {
            border-color: #ccc;
        }
        &::after {
            border-color: #ccc;
        }
    }
    .border-bottom {
        &::before {
            border-color: #ccc;
        }
    }
    .list {
        overflow: hidden;
        position: absolute;
        top: 1.58rem;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .title {
        line-height: .54rem;
        background: #eee;
        padding-left: .2rem;
        color: #666;
        font-size: .26rem;
    }
    .button-list {
        padding: .1rem .6rem .1rem .1rem;
        overflow: hidden;
    }
    .button-wrapper {
        float: left;
        width: 33.33%;
    }
    .button {
        text-align: center;
        margin: .1rem;
        border: .02rem solid #ccc;
        padding: .1rem 0;
        border-radius: .06rem;
    }
    .current-btn{
        border-color: $bgColor;
    }
    .item-list {
        line-height: .76rem;
        color: #666;
        padding-left: .2rem;
    }
</style>
