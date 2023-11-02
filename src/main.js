import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";

import PostDetail from "../src/components/PostDetail.vue";
import PostList from "../src/components/PostsList.vue";
import App from "../src/App.vue";



const routes = [
    {
        path: '/',
        component: App
    }
    {
        path: '/posts',
        component: PostList
    },
    {
        path: "/posts/:id",
        component: PostDetail
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, 
})

createApp(App).mount('#app')

app.use(router)
app.mount('#app')