<template>
    <div>
        <detail-header></detail-header>
        <detail-banner
            :sightName="sightName"
            :bannerImg="bannerImg"
            :gallaryImgs="gallaryImgs"
        >
        </detail-banner>
        <div class="content">
            <detail-list :list="categoryList"></detail-list>
        </div>
    </div>
</template>
<script>
import DetailBanner from '@/components/detail/detail-banner.vue';
import DetailHeader from '@/components/detail/detail-header.vue';
import DetailList from '@/components/detail/detail-list.vue';
import * as Api from '@/api';
export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data () {
        return {
            sightName: '',
            bannerImg: '',
            categoryList: [],
            gallaryImgs: []
        };
    },
    methods: {
        getDetailInfoById () {
            Api.Detail.getDetailInfo(this.$route.params.id)
                .then(res => {
                    if (res.status === 'success') {
                        this.categoryList = res.data.categoryList;
                        this.sightName = res.data.sightName;
                        this.bannerImg = res.data.bannerImg;
                        this.gallaryImgs = res.data.gallaryImgs;
                    }
                });
        }
    },
    mounted () {
        this.getDetailInfoById();
    },

};
</script>
<style lang="scss" scoped>
    .content {
        height: 50rem;
    }
</style>
