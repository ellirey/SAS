<template>
     <main>
        <router-view></router-view>
        <!-- <vue-progress-bar></vue-progress-bar> -->
    </main>
</template>

<script>

import Sidebar from './components/layouts/admin/Sidebar.vue'
import Footer from './components/layouts/admin/Footer.vue'
import Navbar from './components/layouts/admin/Navbar.vue'
export default {
    components: {
        Navbar,
        Sidebar,
        Footer
    },
    data() {
        return { 
            
        }    
    },
}
</script>

