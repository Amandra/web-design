/*
* 该文件是整个项目的入口文件
*/
// 引入 Vue
import Vue from 'vue';
// 引入 App 组件，它是所有组件的父组件
import App from '@/App.vue';
// 阻止 Vue 在启动时生成生产提示
Vue.config.productionTip = false;
/*
* 关于不同版本的 Vue ：
* 1. vue.js 和 vue.runtime.xxx.js 的区别：
*   ① vue.js 是完整版的 Vue，包含：核心功能+模板解析器。
*   ② vue.runtime.xxx.js 是运行版的Vue，只包含：核心功能，不包含：模板解析器。
* 2. 因为 vue.runtime.xxx.js 没有模板解析器，所以不能使用 template 配置项，需要使用 render 函数接受到的 createElement 函数去指定具体的内容。
*/
// 创建 Vue 实例对象 -- vm
new Vue({
    render: h => h(App), // 将 App 组件放入到容器中
}).$mount('#app');
