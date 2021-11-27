
require('./bootstrap');
window.Vue = require('vue').default;
import router from './router/route';
import store from './store/index';
import moment from 'moment';

Vue.component('pagination', require('laravel-vue-pagination'));

//  Global Components
Vue.component('app-component', require('./App.vue').default);

Vue.component(
    'ContentLoading', () => import('./components/assets/loadingAnimation.vue')
    );
Vue.component(
    'LoadingBg', () => import('./components/assets/loadingbg.vue')
    );
Vue.component(
    'Toast', () => import('./components/assets/toast.vue')
    );


//Vue Filter to make first letter Capital
Vue.filter("strToUpper", function(text) {
	return text.charAt(0).toUpperCase() + text.slice(1);
});

Vue.filter('currency', value=> {
    return '$' + parseFloat(value).toFixed(2);
});

Vue.filter('trim', value=> {
    if (!value) return ''
    return value.substring(0, 40) + '...'
});

Vue.filter('trimpost', value=> {
    if (!value) return ''
    return value.substring(0, 30) + '...'
});


Vue.filter('dateformat', value=> {
    if (!value) return ''
    return moment(String(value)).format('LL')
});




// mixin
Vue.mixin
   ({
    computed:{
            Authenticated(){
                return  this.$store.getters.getAuthenticated;
            },

            AuthUser(){
                return  this.$store.getters.getUser;
            },

            Loading(){
                return  this.$store.getters.get_Loading;
            },
            websiteaddress(){
                return  'http://ecommerce.test/';
            },
            url(){
                return  'http://ecommerce.test/';
            },

            // Tost(){
            //     return  this.$store.getters.Get_TOST;
            // },
        },

    })

//Nagivation Gard Authentication

function Isauth() {
    return store.getters.getAuthenticated;
}



router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!Isauth()) {
            next({
                name: 'login',
            })
        } else {
            next()
        }
    }else if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (Isauth()) {
            next({
                name: 'home',
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
});




let auth = localStorage.getItem("token");

if(auth){
    // Load With Auth systm
    store.dispatch('authUser').then(() => {
        const app = new Vue({
            el: '#app',
            router : router,
            store,
        });
    });
}else {

    const app = new Vue({
        el: '#app',
        router : router,
        store,
    });
}


router.beforeEach((to, from, next) => {
    store.commit('SET_LOADING', true)
      next();
  });

  router.afterEach(() => {

    setTimeout(() => {
      store.commit('SET_LOADING', false)
    }, 1000)

  });



