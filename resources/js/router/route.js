import Vue from 'vue';
import VueRouter from 'vue-router';
import Admin from './admin';
import store from '../store/index';


Vue.use(VueRouter)

const routes = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        ...Admin,

          // Auth-route
          {
            path: '/register',
            name: 'register',
            component: () => import("../components/auth/register.vue"),

            meta:{
                requiresAuth:false,
            }

            },

            {
                path: '/sign-in',
                name: 'login',
                component: () => import("../components/auth/login.vue"),

                meta:{
                    requiresAuth:false,
                }
            },
            {
                path: '/auth/:provider/callback',
                name: 'auth-profile',
                component: () => import("../components/auth/profile.vue"),
            },

    ]
});

export default routes;

