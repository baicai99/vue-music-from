import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/Home.vue';
import Chinese from '../components/Chinese.vue';
import Japanese_and_Korean from '../components/Japanese_and_Korean.vue';
import hot from '../components/hot.vue';

Vue.use(VueRouter);

const routes = [
    // 配置主页路由
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '',
                name: 'hot',
                component: hot,
            }
        ]
    },
    {
        path: '/Chinese',
        name: 'Chinese',
        component: Chinese
    },
    {
        path: '/Japanese_and_Korean',
        name: 'Japanese_and_Korean',
        component: Japanese_and_Korean
    }
];



const router = new VueRouter({
    routes
});

export default router;
