// 该文件专门用来创建整个应用的路由器
// 引入 VueRouter
import VueRouter from 'vue-router';
// 创建并暴露一个路由器
const router = new VueRouter({
    mode: 'history', // 默认是 hash
    routes: [
        {
            path: '/about',
            name: 'about', // 给路由命名
            meta: {
                isAuth: false,
                title: '关于'
            },
            component: /* webpackChunkName: "about" */  () => import('@/pages/About')
        },
        {
            path: '/home',
            name: 'home', // 给路由命名
            meta: {
                isAuth: false,
                title: '主页'
            },
            component: /* webpackChunkName: "home" */  () => import('@/pages/Home'),
            children: [ // 通过 children 配置多级路由
                {
                    path: 'news',
                    name: 'news', // 给路由命名
                    meta: {
                        isAuth: true,
                        title: '新闻'
                    },
                    component: /* webpackChunkName: "news" */  () => import('@/pages/News'),
                },
                {
                    path: 'message',
                    name: 'message', // 给路由命名
                    meta: {
                        isAuth: true,
                        title: '消息'
                    },
                    component: /* webpackChunkName: "message" */  () => import('@/pages/Message'),
                    children: [
                        {
                            path: 'detail/:id/:title', // 使用占位符声明接收 params 参数
                            name: 'detail', // 给路由命名
                            component: /* webpackChunkName: "detail" */  () => import('@/pages/Detail'),
                            // 值为布尔值，如果布尔值为 true ，就会把路由组件收到的所有 params 参数，以 props 的形式传递给 Detail 组件
                            props: true
                        },
                    ]
                },
            ]
        },
    ]
});
// 全局前置路由守卫：初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to, from, next) => {
    console.log('全局前置路由守卫', to, from);
    if (to.meta.isAuth) { // 判断是否鉴权
        if (localStorage.getItem('school') === 'suzhoudaxue') {
            next();
        } else {
            alert('学校名称不对，没有权限~');
        }
    } else {
        next();
    }
});

export default router;