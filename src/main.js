import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/reset.css';
import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from './components/HomePage';
import ErrorView from './components/ErrorPage';
import CreateView from './components/CreatePage';
import ShowView from './components/ShowPage';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/create',
            name: 'create',
            component: CreateView
        },
        {
            path: '/show',
            name: 'show',
            component: ShowView
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'error',
            component: ErrorView
        }
    ]
});

const app = createApp(App);

app.use(router).use(Antd).mount('#app');