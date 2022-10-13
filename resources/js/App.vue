<template>
     <main>
        <router-view></router-view>
        <vue-progress-bar></vue-progress-bar>
    </main>
</template>

<script>

import * as authService from './services/auth_service';

export default {
   
    data() {
        return { 
            
        }    
    },
    beforeCreate: async function () {
        try {
            if(authService.isLoggedIn()) {
                const response = await authService.getUserProfile();
                console.log(response.data)
                this.$store.dispatch('authenticate', response.data);
            }
        } catch (error) {

        }
    },
    methods:{

    },
    mounted(){

    }
}
</script>

