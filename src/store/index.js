import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let defaultCity = '广州';
try {
    if (localStorage.city) {
        defaultCity = localStorage.city;
    }
} catch (error) {
    console.log(error);
}
export default new Vuex.Store({
    state: {
        city: defaultCity
    },
    mutations: {
        // 同步
        changeCity (state, city) {
            state.city = city;
            try {
                localStorage.city = city;
            } catch (error) {
                console.log(error);
            }
        }
    },
    actions: {
        // 异步
        // changeCity (ctx, city) {
        //     ctx.commit('changeCity', city);
        // }
    },
    modules: {
    },
});
