import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/home/Home.vue';
import Error from '../views/error/Error.vue';
import About from '../views/about/About.vue';

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home 
    },
    { 
        path: '/:pathMatch(.*)*',
        component: Error
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: "light",
    linkExactActiveClass: "light"
})

export { 
    router
}