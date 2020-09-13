<template>
    <div>
        <div class="search">
            <input v-model="keyword" type="text" class="search-input" placeholder="输入城市名或拼音">
        </div>
        <div v-show="keyword" class="search-content" ref="search">
            <ul class="search-list">
                <li class="search-item border-bottom"
                    v-for="item of list"
                    :key="item.id"
                    @click="handleCityClick(item.name)"
                >
                    {{item.name}}
                </li>
                <li v-show="noMatchData" class="search-item search-none-data border-bottom">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>
<script>
import BScroll from '@better-scroll/core';
import { mapMutations } from 'vuex';
export default {
    name: 'CitySearch',
    props: {
        cities: Object
    },
    data () {
        return {
            keyword: '',
            timmer: null,
            list: []
        };
    },
    methods: {
        handleCityClick (city) {
            // this.$store.commit('changeCity', city);
            this.changeCity(city);
            this.$router.push('/');
            this.keyword = '';
        },
        ...mapMutations(['changeCity'])
    },
    computed: {
        noMatchData () {
            return !this.list.length;
        }
    },
    watch: {
        keyword () {
            if (this.timmer) {
                clearTimeout(this.timmer);
            }
            if (!this.keyword) {
                this.list = [];
                return;
            }
            // 防抖
            this.timmer = setTimeout(() => {
                const result = [];
                for (const i in this.cities) {
                    this.cities[i].forEach((item, index) => {
                        if (item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1) {
                            result.push(item);
                        }
                    });
                }
                this.list = result;
            }, 100);
        },
    },
    mounted () {
        this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.search, {
                click: true,
            });
        });
    },
    updated () {
        this.$nextTick(() => {
            this.scroll.refresh();
        });
    },
};
</script>
<style lang="scss" scoped>
    .search {
        height: .72rem;
        background: $bgColor;
        padding: 0 .1rem;
        &-input {
            box-sizing: border-box;
            width: 100%;
            height: .62rem;
            line-height: .62rem;
            text-align: center;
            border-radius: .06rem;
            padding: 0 .2rem;
            color: #666;
        }
        &-content {
            overflow: hidden;
            position: absolute;
            top: 1.58rem;
            left: 0;
            right: 0;
            bottom: 0;
            background: #eee;
            z-index: 1;
        }
        &-item {
            line-height: .62rem;
            padding-left: .2rem;
            background: #fff;
            color: #666;;
        }
        &-none-data {
            text-align: center;
        }
    }
</style>
