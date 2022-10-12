<template>
    <div>
        <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light" style="background-color: #007f00 !important;">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <span class="nav-link " style="color:#ffffff !important; font-weight: bold;">Cavite State University Appointment System</span>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <!-- Navbar Search -->
     
      <li class="nav-item">
        <a class="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" href="#" role="button" v-on:click="logout">
          <i class="fa-solid fa-power-off" style="color:#ffffff;"></i>
        </a>
      </li>
    </ul>
  </nav>
  <!-- /.navbar -->
    </div>
</template>

<script>
import * as authService from '../../../services/auth_service';
export default {
    data() {
        return { 

        }
        
    },
    methods:{
      logout: async function(){
        try {
          authService.checkerLogout();
            Toast.fire({
              icon: "success",
              title: "Successfully Logout"
            });
          this.$router.push('/login');
        } catch(e) {

        }
      }
    }
}
</script>