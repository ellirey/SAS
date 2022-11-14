<template>
    <div>
        <!-- <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <Header />   
                    <router-view></router-view>
                </div>
                <Footer />

            </div>
        </div> -->
        <Header />   
        


        <router-view></router-view>

    </div>    
</template>

<script>
import Header from '../../layouts/landing/Header.vue';
// import Footer from '../../layouts/admin/Footer.vue';
// import Sidebar from '../../layouts/admin/Sidebar.vue';


export default {
    created(){
        document.querySelector('body').classList.remove('bg-gradient-primary')
    },
  components: { 
    Header,
    // Sidebar,
    // Footer 
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
@font-face {
    font-family: 'Montserrat';
    src: url('/public/fonts/montserrat/Montserrat-Regular.ttf');
    font-size: normal;
}

body {
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    /* background: fffff; */
     /* font-weight: 480; */
  
}
</style>