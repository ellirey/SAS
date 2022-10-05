<template>
    <div>


        <aside  class="main-sidebar sidebar-dark-primary elevation-4">
            <a style="" class="brand-link"> 
                <img src="/imgs/cavsu-logo2.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
                <h4 class="brand-text font-weight-bold" style="margin-left: 2%;">CavSuAppS</h4>
            </a>

            
            <div class="sidebar">
                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div class="image">
                        <img src="/imgs/student.png" class="img-circle elevation-2" alt="User Image">
                    </div>
                    <div class="info">
                        <a  class="d-block">Elli Rey</a>
                    </div>
                </div>

           

                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">


           
                        
                        <li class="nav-item">
                            <router-link to="/admin" class="nav-link dashboard-nav" exact>
                                <i class="nav-icon fa-solid fa-gauge"></i>
                                <p>Dashboard</p>
                            </router-link>
                        </li>


                        <li class="nav-item">
                            <router-link to="/admin/students" class="nav-link" exact>
                                <i class="nav-icon fa-solid fa-user-graduate"></i>
                                <p>Students</p>
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="/admin/students" class="nav-link" exact>
                                <i class="nav-icon fa-solid fa-user-tie"></i>
                                <p>Employee</p>
                            </router-link>
                        </li>


<!-- 
                        <li class="nav-item">
                            <router-link to="/admin/praise" class="nav-link" exact>
                                <i class="nav-icon fa-solid fa-user-group"></i>
                                <p>Patients</p>
                            </router-link>
                        </li>




                        <li class="nav-header">Administrative</li>   

                        <li class="nav-item">
                            <router-link to="/admin/awards" class="nav-link" exact>
                                <i class="nav-icon  fa-solid fa-user-doctor"></i>
                                <p>Doctors</p>
                            </router-link>
                        </li>
                 


                        <li class="nav-item">
                            <router-link to="/admin/employees" class="nav-link" exact>
                                <i class="nav-icon fa-solid fa-chart-line"></i>
                                <p>Reports</p>
                            </router-link>
                        </li>   -->




                    </ul>
                </nav>


            </div>

          
            
        </aside>
    </div>
</template>

<script>
export default {
    data() {
        return { 

        }
        
    },
}
</script>