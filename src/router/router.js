import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '../components/Views/Login.vue';
import SignIn from '../components/Views/Register.vue';

import Home from '../components/Views/Home.vue';
import Chinese from '../components/Views/Chinese.vue';
import Japanese_and_Korean from '../components/Views/JapaneseAndKorean.vue';
import New from '../components/MusicRanking/New.vue';
import Hot from '../components/MusicRanking/Hot.vue';
import Month from '../components/MusicRanking/Month.vue';
import Week from '../components/MusicRanking/Week.vue';
import Day from '../components/MusicRanking/Day.vue';

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
                name: 'New',
                component: New,
            },
            {
                path: 'Hot',
                name: 'Hot',
                component: Hot,
            },
            {
                path: 'Month',
                name: 'Month',
                component: Month,
            },
            {
                path: 'Week',
                name: 'Week',
                component: Week,
            },
            {
                path: 'Day',
                name: 'Day',
                component: Day,
            },
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
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/Register',
        name: 'Register',
        component: SignIn
    }
];



const router = new VueRouter({
    routes
});

export default router;
