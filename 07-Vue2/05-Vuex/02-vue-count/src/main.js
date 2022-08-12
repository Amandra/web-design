import Vue from 'vue';
import App from '@/App.vue';
// 引入 Vuex
import Vuex from 'vuex';
// 引入 store
import store from '@/store';

Vue.config.productionTip = false;
// 使用插件
Vue.use(Vuex);

new Vue({
    render: h => h(App),
    store,
}).$mount('#app');

