import Axios from 'axios';
export const Home = {
    getHomeData (city) {
        return Axios.get('/api/index.json?city=' + city)
            .then(res => res.data);
    }
};

export const City = {
    getCities () {
        return Axios.get('/api/city.json')
            .then(res => res.data);
    }
};

export const Detail = {
    getDetailInfo (id) {
        return Axios.get('/api/detail.json', {
            params: {
                id: id
            }
        }).then(res => res.data);
    }
};
