// 引入的不再是 Vue 构造函数，引入是一个名为 createApp 的工厂函数
import {createApp} from 'vue';
import App from './App.vue';

// 创建应用实例对象 -- app（类似于 Vue2.x 中的 vm , 但是 app 比 vm 更轻量）
const app = createApp(App);
// 挂载
app.mount('#app');
