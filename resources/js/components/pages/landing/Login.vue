<template>

    <div class="row no-gutter login-content">
        <div class="col-md-9 d-none d-md-flex bg-image">
            <div>
                <h3 class="text-center image-text-banner">
                <span>
                    CVSU Online Appointment Portal
                </span>
                </h3>
            </div>
        </div>

      

        <div class="col-md-3 login-pannel" style="background-color:#EEEDED;">
            <div class=" d-flex align-items-center py-5">
                
                <!-- Demo content-->
                <div class="container py-5" >
                    <div class="row ">
                        <div class="col-lg-10 col-xl-10 mx-auto py-5" >
                            
                            <div class="row justify-content-md-center ">
    
                            <div class=" mx-auto logo-image">
                                
                            </div>
                            

                            </div>
                            
                            <br>
                            <h5 class="display-4 text-center ">
                            Login
                            </h5>

                            <br>


                            <form @submit.prevent="login">
                                <div class="form-group mb-3">
                                    <input type="text" placeholder="Email address or Username" v-model="user.username"  class="form-control" :class="errors.username ? 'is-invalid' : ''">
                                    <div class="invalid-feedback" v-if="errors.username">{{errors.username[0]}}</div>

                                </div>
                                <div class="form-group mb-3">
                                    <input type="password" placeholder="Password" class="form-control  " v-model="user.password" :class="errors.password ? 'is-invalid' : ''">
                                    <div class="invalid-feedback" v-if="errors.password">{{errors.password[0]}}</div>
                                </div>
                                <div class="custom-control custom-checkbox mb-1">

                                </div>
                                <input type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" value="Login">
                                <input type="submit" class="btn btn-success btn-block text-uppercase mb-2 rounded-pill shadow-sm" value="Register">
                            
                            </form>
                        </div>
                    </div>
                </div><!-- End -->
            </div>
        </div>


    </div>
 <!-- The content half -->
         


</template>



<script>
import * as authServices from '../../../services/auth_service';

export default {
    data() {
         return {
            user : {
                username: '',
                password: '',
                remember_me: false,
            },
           
            errors : '',
        }  
    },

    methods:{ 
         login: async function(){
            try { 
                const response = await authServices.login(this.user);
                console.log(response);
                // if(response.token_scope == 'admin' || response.token_scope == 'employeer'){ 
                //     Toast.fire({
                //         icon: 'success',
                //         title: "Successfully Login"
                //     }); 
                //     this.$router.push('/admin');
                // } else {
                //     Toast.fire({
                //         icon: 'success',
                //         title: "Successfully Login"
                //     });
                //     // alert(response.token_scope)
                //     this.$router.push('/');
                // }

            } catch(e) {
                switch(e.response.status){
                    case 422:
                        this.errors = e.response.data.errors;
                        Toast.fire({
                            icon: "error",
                            title: e.response.data.message
                        });
                    break;
                    default: 
                        Toast.fire({
                            icon: "error",
                            title: "Server error, Please try again!"
                        });
                    break;
                }
            }
        }
    },

    mounted() {
        
    }
}
</script>

<style>
/*
*
* ==========================================
* CUSTOM UTIL CLASSES
* ==========================================
*
*/
@import url('https://fonts.googleapis.com/css?family=Red+Hat+Display:900&display=swap');

.bg-image {
  background-image: url('https://cvsu.edu.ph/wp-content/uploads/2018/01/AerialView.jpg');
  background-size: cover;
  background-position: center center;
}
.login-content{
    min-height: 100vh;
}


.image-text-banner{
  margin: auto;
  width: 100%;
  padding: 10px;
  color:white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h3{
  display: table;
  margin-right: auto;
  margin-left: auto;
  padding: 0.5em;
  font-size: 3.5vw;
  color: #DEDBDA;
  background-color: rgba(2, 2, 1, 0.7);
  font-family: "Red Hat Display", Times, serif;
}


.login-pannel{
   box-shadow: 0 0 20px 3px #d0d0d0;
}
.logo-image{
    
  width:150px;
  height:120px;
  background-image: url('https://cvsu-rosario.edu.ph/cvsur_website/ccat_website/CVSU_Portal/images/sidebar-logo.png');
  background-size: cover;
  background-position: center center;
  
  
}
/* 
.login,
.image {
  min-height: 100vh;
  
}




 */


</style>