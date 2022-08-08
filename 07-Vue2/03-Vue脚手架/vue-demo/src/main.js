/*
* 该文件是整个项目的入口文件
*/
// 引入 Vue
import Vue from 'vue';
// 引入 App 组件，它是所有组件的父组件
import App from './App.vue';
// 阻止 Vue 在启动时生成生产提示
Vue.config.productionTip = false;

// 创建 Vue 实例对象 -- vm
new Vue({
    render: h => h(App), // 将 App 组件放入到容器中
}).$mount('#app');
