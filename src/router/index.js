import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/Home.vue';
import Error from '../views/Error.vue';

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

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export { 
    router
}