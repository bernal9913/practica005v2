import VueRouter from "vue-router";
import {Vue} from "vue";

Vue.use(VueRouter);

const routes = [

    {
        path: "/posts/:id",
        name: "Post",
        component: () => import("../components/PostDetail.vue"),
    },
    {
        path: "/posts/",
        name: "Posts",
        component: () => import("../components/PostsList.vue"),
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;