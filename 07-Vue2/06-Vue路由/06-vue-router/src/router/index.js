// 该文件专门用来创建整个应用的路由器
// 引入 VueRouter
import VueRouter from 'vue-router';
// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            name: 'about', // 给路由命名
            component: /* webpackChunkName: "about" */  () => import('@/pages/About')
        },
        {
            path: '/home',
            name: 'home', // 给路由命名
            component: /* webpackChunkName: "home" */  () => import('@/pages/Home'),
            children: [ // 通过 children 配置多级路由
                {
                    path: 'news',
                    name: 'news', // 给路由命名
                    component: /* webpackChunkName: "news" */  () => import('@/pages/News'),
                },
                {
                    path: 'message',
                    name: 'message', // 给路由命名
                    component: /* webpackChunkName: "message" */  () => import('@/pages/Message'),
                    children: [
                        {
                            path: 'detail/:id/:title', // 使用占位符声明接收params参数
                            name: 'detail', // 给路由命名
                            component: /* webpackChunkName: "detail" */  () => import('@/pages/Detail'),
                        },
                    ]
                },
            ]
        },
    ]
});