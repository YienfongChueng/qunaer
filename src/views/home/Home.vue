<template>
  <div class='home'>
    <home-header></home-header>
    <home-nav :bannerList="bannerList" :iconList="iconList"></home-nav>
    <home-hot :hotList="hotList"></home-hot>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/home/home-header.vue';
import HomeNav from '@/components/home/home-nav.vue';
import HomeHot from '@/components/home/home-hot.vue';
import HomeRecommend from '@/components/home/home-recommend.vue';
import HomeWeekend from '@/components/home/home-weekend.vue';
import * as Api from '@api';

import { mapState } from 'vuex';
export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeNav,
        HomeHot,
        HomeRecommend,
        HomeWeekend
    },
    data () {
        return {
            bannerList: [],
            iconList: [],
            hotList: [],
            recommendList: [],
            weekendList: [],
            lastCity: ''
        };
    },
    computed: {
        ...mapState(['city'])
    },
    methods: {
        getHomeData () {
            Api.Home.getHomeData(this.city)
                .then(res => {
                    if (res.status === 'success') {
                        const data = res.data;
                        this.bannerList = data.bannerList;
                        this.iconList = data.iconList;
                        this.hotList = data.hotList;
                        this.recommendList = data.recommendList;
                        this.weekendList = data.weekendList;
                    }
                });
        }
    },
    mounted () {
        this.lastCity = this.city;
        this.getHomeData();
    },
    activated () {
        if (this.city !== this.lastCity) {
            this.getHomeData();
            this.lastCity = this.city;
        }
    },
};
</script>
<style scoped>
  .home {
    background: #eee;
  }
</style>
