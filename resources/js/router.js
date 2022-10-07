import Vue from 'vue';
import Router from 'vue-router';

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
    }
]

const router = new Router({
    mode: 'history',
    routes: routes,
    linkActiveClass: 'active'
});

export default router;