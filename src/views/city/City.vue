<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list
            :cities = "cities"
            :hot = "hotCities"
            :letter = "letter">
        </city-list>
        <city-alphabet
            :cities = "cities"
            @change = "handleLetterChange">
        </city-alphabet>
    </div>
</template>
<script>
import CityHeader from '@/components/city/city-header.vue';
import CitySearch from '@/components/city/city-search.vue';
import CityList from '@/components/city/city-list.vue';
import CityAlphabet from '@/components/city/city-alphabet.vue';
import * as Api from '@api';
export default {
    name: 'City',
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data () {
        return {
            cities: {},
            hotCities: [],
            letter: ''
        };
    },
    methods: {
        getCity () {
            Api.City.getCities()
                .then(res => {
                    if (res.status === 'success') {
                        const data = res.data;
                        this.cities = data.cities;
                        this.hotCities = data.hotCities;
                    }
                });
        },
        handleLetterChange (letter) {
            this.letter = letter;
        }
    },
    mounted () {
        this.getCity();
    },
};
</script>
<style lang="scss" scoped>

</style>
