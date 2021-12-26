import app from '../app'
import store from '../store/index';
export default [
    {
        path: '/',
        name: 'admin-dashboard',
        component: () => import("../components/backend/backend"),

        beforeEnter: (to, from, next) => {

            if(store.state.authenticated == true){
                next();
            }else{
                return next({ name: 'login'});
            }
        },

        children:
        [
            {
                path: '/users',
                name: 'all-users',
                component: () => import("../components/backend/pages/user/index.vue"),
            },

             // This route for products category
             {
                path: '/category',
                name: 'category',
                component: () => import("../components/backend/pages/ecommerce/category/index.vue"),
            },

             // This route for products
             {
                path: '/products',
                name: 'product-lists',
                component: () => import("../components/backend/pages/ecommerce/product/index.vue"),
            },
             {
                path: '/product/create',
                name: 'product-create',
                component: () => import("../components/backend/pages/ecommerce/product/create.vue"),
            },
             {
                path: '/product/edit/:id',
                name: 'product-edit',
                component: () => import("../components/backend/pages/ecommerce/product/edit.vue"),
            },
             {
                path: '/orders',
                name: 'orders',
                component: () => import("../components/backend/pages/ecommerce/order/index.vue"),

            },
             {
                path: '/order/:id',
                name: 'order-edit',
                component: () => import("../components/backend/pages/ecommerce/order/edit.vue"),

            },
             {
                path: '/coupon',
                name: 'coupon',
                component: () => import("../components/backend/pages/ecommerce/coupon/coupon.vue"),

            },
             {
                path: '/slider',
                name: 'slider',
                component: () => import("../components/backend/pages/slider/index.vue"),

            },
        ]
    },
]
