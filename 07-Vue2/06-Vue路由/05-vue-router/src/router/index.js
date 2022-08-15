// 该文件专门用来创建整个应用的路由器
// 引入 VueRouter
import VueRouter from 'vue-router';
// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            name: 'about', // 命名路由
            component: /* webpackChunkName: "about" */  () => import('@/pages/About')
        },
        {
            path: '/home',
            name: 'home', // 命名路由
            component: /* webpackChunkName: "home" */  () => import('@/pages/Home'),
            children: [ // 通过 children 配置多级路由
                {
                    path: 'news', // 此处一定不要写 /news
                    name: 'news', // 命名路由
                    component: /* webpackChunkName: "news" */  () => import('@/pages/News'),
                },
                {
                    path: 'message', // 此处一定不要写 /message
                    name: 'message', // 命名路由
                    component: /* webpackChunkName: "message" */  () => import('@/pages/Message'),
                    children: [
                        {
                            path: 'detail', // 此处一定不要写 /detail
                            name: 'detail', // 命名路由
                            component: /* webpackChunkName: "detail" */  () => import('@/pages/Detail'),
                        },
                    ]
                },
            ]
        },
    ]
});