// 该文件专门用来创建整个应用的路由器
// 引入 VueRouter
import VueRouter from 'vue-router';
// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: /* webpackChunkName: "about" */  () => import('@/pages/About')
        },
        {
            path: '/home',
            component: /* webpackChunkName: "home" */  () => import('@/pages/Home'),
            children: [ // 通过 children 配置多级路由
                {
                    path: 'news', // 此处一定不要写 /news
                    component: /* webpackChunkName: "news" */  () => import('@/pages/News'),
                },
                {
                    path: 'message', // 此处一定不要写 /message
                    component: /* webpackChunkName: "message" */  () => import('@/pages/Message'),
                    children: [
                        {
                            path: 'detail', // 此处一定不要写 /detail
                            component: /* webpackChunkName: "detail" */  () => import('@/pages/Detail'),
                        },
                    ]
                },
            ]
        },
    ]
});