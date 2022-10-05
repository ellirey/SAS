<template>
  <div class="wrapper">
    <Navbar/>
    <Sidebar/>
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../../layouts/admin/Navbar.vue';
import Footer from '../../layouts/admin/Footer.vue';
import Sidebar from '../../layouts/admin/Sidebar.vue';


export default {
    // created(){
    //     document.querySelector('body').classList.remove('bg-gradient-primary')
    // },

    
  components: { 
    Navbar,
    Sidebar,
    Footer 
  },
    data() {
        return {

        } 
    },
    methods: {

    },
    mounted(){
        
    }
}
</script>

<style>
/* .bg-gradient-primary {
    background: #102156 !important;
} */

</style>