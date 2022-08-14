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
            children: [
                {
                    path: '/news',
                    component: /* webpackChunkName: "news" */  () => import('@/pages/News'),
                },
                {
                    path: '/message',
                    component: /* webpackChunkName: "message" */  () => import('@/pages/Message'),
                },
            ]
        },
    ]
});