import Vue from 'vue';
import Router from 'vue-router';
import * as auth from './services/auth_service';
Vue.use(Router);

const routes = [ 
    {
        path : '/',
        component : () => import('./components/pages/landing/Home.vue'),
        children: [
            {
                path : '',
                name : 'about',
                component : () => import('./components/pages/landing/Dashboard.vue'), 
            }, 

            {
                path : 'schedule',
                name : 'schedule',
                component : () => import('./components/pages/landing/Schedule.vue'), 
            }, 

        ],
    },



    {
        path : '/admin',
        component : () => import('./components/pages/admin/Home.vue'),
        children: [
            {
                path : '',
                name : 'dashboard',
                component : () => import('./components/pages/admin/Dashboard.vue'), 
            },

            {
                path : 'students',
                name : 'students',
                component : () => import('./components/pages/admin/Student.vue'), 
            },


            {
                path : 'employees',
                name : 'employees',
                component : () => import('./components/pages/admin/Employee.vue'), 
            },


            {
                path : 'guests',
                name : 'guests',
                component : () => import('./components/pages/admin/Guest.vue'), 
            },



            

            // {
            //     path : 'shipments',
            //     name : 'shipments',
            //     component : () => import('./components/pages/admin/Shipment.vue'), 
            // },

            // {
            //     path : 'boxes',
            //     name : 'boxes',
            //     component : () => import('./components/pages/admin/Boxes.vue'), 
            // },
    
        ],
        beforeEnter(to, from, next){
            if(!auth.isLoggedIn()){
                next('login');
            } else {
                if(auth.getUserRole() == 'admin'){
                    next();
                } else if(auth.getUserRole() == 'employee'){
                    next();
                } else {
                    next('/')
                }
            }
        }
    },

    
    {
        path : '/login',
        name : 'login',
        component : () => import('./components/pages/landing/Login.vue'),
    }

    
    


]

const router = new Router({
    mode: 'history',
    routes: routes,
    linkActiveClass: 'active'
});

export default router;