<template>
  <div class="wrapper">
    <Navbar/>
    <Sidebar/>
      <router-view v-slot="{ Component }">
        <transition 
          enter-active-class="animate__animated animate__fadeInLeft"
          leave-active-class="animate__animated animate__fadeOutLeft"  
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>

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
   


    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.5s ease;
    }
    .fade-enter-from,
    .fade-leave-to {
      opacity: 0;
    }

</style>