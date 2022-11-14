<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <router-link to="/" >
            <img src="/img/stiilogo.png" alt="" height="40px"> <a class="navbar-brand" style="font-weight:bold;">CavSuApp</a>
                
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    

                    <li class="nav-item">
                        <router-link to="/" exact>
                            <a class="nav-link" >About</a>
                        </router-link>
                    </li>



                    <li class="nav-item">
                        <router-link to="/appointment" exact>
                            <a class="nav-link" >Appointment</a>
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/profile" exact>
                            <a class="nav-link" >Profile</a>
                        </router-link>
                    </li>
                    

                    <!-- <li class="nav-item" v-if="this.$store.state.user_profile.role == 'applicant' || this.$store.state.user_profile.role == 'admin'">
                        <router-link to="/application" >
                            <a class="nav-link" >Application</a>
                        </router-link>
                    </li>

                    <li class="nav-item" v-if="this.$store.state.user_profile.role == 'applicant' || this.$store.state.user_profile.role == 'admin'">
                        <router-link to="/profile" >
                            <a class="nav-link" >Profile</a>
                        </router-link>
                    </li>
                    


                    <li class="nav-item" v-if="this.$store.state.user_profile.role == 'employeer' || this.$store.state.user_profile.role == 'admin'">
                        <router-link to="/applicants" >
                            <a class="nav-link" >Applicants</a>
                        </router-link>
                    </li>

                    <li class="nav-item" v-if="this.$store.state.user_profile.role == 'employeer' || this.$store.state.user_profile.role == 'admin'">
                        <router-link to="/admin" >
                            <a class="nav-link" >Admin</a>
                        </router-link>
                    </li> -->


                    <li class="nav-item" v-if="this.$store.state.user_profile.id">
                        <a class="nav-link" style="cursor: pointer;" v-on:click="logout">
                            Logout
                        </a>
                    </li>
                    <li class="nav-item" v-else>
                        <router-link to="/login" >
                            <a class="nav-link" >Login</a>
                        </router-link>
                    </li> 
                   
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
            
import * as authService from '../../../services/auth_service';
export default {
    data() {
        return {

        }   
    },
    methods: {
        logout: async function(){
            try {
                authService.checkerLogout();
                this.$router.push('/login');
            } catch(e) {

            }
        }
    }, 
    mounted(){
        
    }
}
</script>