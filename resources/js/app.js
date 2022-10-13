import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';


import 'bootstrap-vue/dist/bootstrap-vue.css'
import  BootstrapVue  from 'bootstrap-vue'
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

require('./bootstrap');


Vue.component('pagination', require('laravel-vue-pagination'));

// Sweet alert library
import Swal from 'sweetalert2'
window.Swal = Swal;

const Toast = Swal.mixin(
  {
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  }
)
window.Toast = Toast;


import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
  color: 'rgba(41, 255, 48, 1)',
  failedColor: 'red',
  height: '2px'   
})

Vue.filter('upText', function(text){
  return text.charAt(0).toUpperCase() + text.slice(1);
});


import datePicker from 'vue-bootstrap-datetimepicker';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';

Vue.use(datePicker)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
  