import {createRouter, createWebHistory} from "vue-router";

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'posts',
            component: ()=> import("../src/components/PostsList.vue")
        },
        {
            path: "/post/:id",
            name: "post",
            component: ()=> import("../src/components/PostDetail.vue")
        }

    ]
})