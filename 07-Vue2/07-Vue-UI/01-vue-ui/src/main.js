import Vue from 'vue';
import App from '@/App.vue';
//引入 ElementUI 组件库
import ElementUI from 'element-ui';
// 引入 ElementUI 全部样式
import 'element-ui/lib/theme-chalk/index.css';
// 阻止 Vue 在启动时生成生产提示
Vue.config.productionTip = false;

// 应用ElementUI
Vue.use(ElementUI);

new Vue({
    render: h => h(App),
}).$mount('#app');
