import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/posts',
            component: ()=> import("../src/components/PostsList.vue")
        },
        {
            path: "/posts/:id",
            component: ()=> import("../src/components/PostDetail.vue")
        }

    ]
})


createApp(App).mount('#app')

app.use(router)