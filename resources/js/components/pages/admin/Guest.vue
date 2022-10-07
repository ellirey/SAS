<template>
    <div>
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Guest <button type="button" class="btn btn-primary" @click="showMdlAddGuestBtn()">Add <i class="fa-solid fa-plus"></i></button></h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                    <li class="breadcrumb-item active">Guests</li>
                    </ol>
                </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>


        <section class="content">
            <div class="container-fluid">
                <div class="row">

                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">List of Guests</h3>
                                <div class="card-tools">
                                    <div class="input-group input-group-sm" style="width: 150px;">
                                        <input type="text" name="table_search" class="form-control float-right" placeholder="Search" v-model="search">
                                        <div class="input-group-append">
                                            <button type="submit" class="btn btn-default">
                                                <i class="fas fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card-body table-responsive p-0">
                                <table class="table table-hover text-nowrap">
                                    <thead>
                                        <tr style="text-align: center;">
                                            <th>Guest Number</th>
                                            <th>Name</th>
                                            <th>Ocupation</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style="text-align: center;" v-for="(guest ,index) in guest_form.data" :key="index">
                                            <td>{{ guest.guest_code }}</td>
                                            <td>{{ guest.fname || upText }} {{ guest.mname || upText }}. {{ guest.lname || upText }}</td>
                                            <td>{{ guest.ocupation }}</td> 

                                            <td>
                                                <button type="button" class="btn btn-success" @click="updateGuestBtn(guest)">
                                                    Edit <i class="fa-solid fa-pen-to-square"></i>
                                                </button>
                                                <button type="button" class="btn btn-danger" @click="deleteGuestBtn(guest.id)">
                                                    Delete <i class="fa-solid fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <div class="card-footer justify-content-md-center">
                                <pagination
                                    :limit="10"
                                    :data="guests_data"
                                    @pagination-change-page="loadPage"
                                ></pagination>
                            </div>  

                        </div>

                    </div>
                </div>
            </div>
        </section>

    



        <!-- Modal -->
        <!-- create modal -->
        <b-modal   size="lg" ref="addGuestMdl" hide-footer title="Guest adding Form">
            <div class="d-block">
                <div class="container-fluid">
                    <form @submit.prevent="addGuest">
                        <div class="form-row">
                            <!-- <div class="h5 pb-2 mb-2 col-md-12  form-group text-primary border-bottom border-primary">
                                Employee Personal Information
                            </div>
                            <div class="form-group col-md-5">
                                <label for="exampleInputEmail1" class="form-label" >First name</label>
                                <input type="text" class="form-control" placeholder="Enter first name" v-model="employee_form.fname">
                            </div>
                            <div class="form-group col-md-2">
                                <label for="exampleInputPassword1" class="form-label">Middle name</label>
                                <input type="text" class="form-control"  placeholder="Enter middle name"  v-model="employee_form.mname">
                            </div>

                            <div class="form-group col-md-5">
                                <label for="exampleInputEmail1" class="form-label" >Last Name</label>
                                <input type="text" class="form-control" placeholder="enter last name" v-model="employee_form.lname">
                            </div>


                            <div class="h5 pb-2 mt-4 mb-2 col-md-12  form-group text-primary border-bottom border-primary">
                                Office info
                            </div>

                            <div class="form-group col-md-12">
                                <label for="exampleInputEmail1" class="form-label">Employee number</label>
                                <input type="text" class="form-control" placeholder="Enter employee number" v-model="employee_form.employee_num">
                            </div>
                        


                          
                            <div class="form-group col-md-6">
                                <label for="selectpos" class="form-label">Position</label>
                                <select class="custom-select" id="selectpos" v-model="employee_form.position" :class="errors.position ? 'is-invalid' : ''">
                                    <option value="" disabled>Position</option>
                                    <option value="Project Assistant I">Project Assistant I</option>
                                    <option value="Science Research Assistant">Science Research Assistant</option>
                                    <option value="Science Research Specialist">Science Research Specialist</option>
                                    <option value="Computer Operator I">Computer Operator I</option>
                                    <option value="Computer Operator II">Computer Operator II</option>
                                    <option value="Computer Operator III">Computer Operator III</option>
                                    <option value="Computer Operator IV">Computer Operator IV</option>
                                </select>
                            </div>



                            <div class="form-group col-md-6">
                                <label for="selectpos" class="form-label">Position</label>
                                <select class="custom-select" id="selectpos" v-model="employee_form.division" :class="errors.division ? 'is-invalid' : ''">
                                    <option value="" disabled>Division</option>
                                    <option value="HR">HR</option>
                                    <option value="OD-MISPS">OD-MISPS</option>
                                    <option value="IRAD">IRAD</option>
                                    <option value="CRPD">CRPD</option>
                                </select>
                            </div> -->

                       

                            <button type="submit" class="btn btn-primary col-12">Submit</button>
                    
                        </div>
                            
                    </form>
                </div>
            </div>
        </b-modal>





        <!-- update modal -->
       

        
    </div>
</template>


<script>
// import * as employeeService from '../../../services/employees_service';

export default {
    data() {
        return {
            search: '',
            errors: '',
            guest_form: {
                guest_code: '',
                fname : '',
                mname : '',
                lname : '',
                gender : '',
                age : '',
                birthdaty : '',
                course : '',
                department : '',
            },

            guest_update_form: {},
            guests_data: {},

            page : 1,
            nextPage: 0,
        }
    },
    methods: {
        showMdlAddGuestBtn(){
            this.$refs.addStudentMdl.show()
        },

        // loadEmployees:async function(){
        //     try {
        //         this.$Progress.start()
        //         const response = await employeeService.get_all_employees()
        //         this.employees_data = response.data

        //     } catch (e) {

        //     }
        //     this.$Progress.finish()
        // },

        // loadPage: async function(page = 1){
        //     this.$Progress.start();
        //     let searchQuery = this.search;
        //     let searchPage = 0;

        //     if (searchQuery == "") {
        //         try {
        //             const response = await employeeService.employee_page(page)
        //             this.employees_data = response.data;
        //             this.$Progress.finish(); 
        //         } catch (e) {
        //             this.$Progress.fail();
        //         }
        //         this.$Progress.finish();
        //     } else {
        //         try {
        //             // const response = await praiseService.praise_search_page(page, searchQuery)
        //             // this.praise_datas = response.data
        //         } catch (e){
        //             this.$Progress.fail();  
        //         }
        //         this.$Progress.finish();
        //     }
        // },


        addGuest: async function(){
            try { 
        //         this.$Progress.start()
        //         let formData = new FormData();
        //         formData.append("fname", this.employee_form.fname);
        //         formData.append("mname", this.employee_form.mname);
        //         formData.append("lname", this.employee_form.lname);
        //         formData.append("employee_num", this.employee_form.employee_num);
        //         formData.append("position", this.employee_form.position);
        //         formData.append("division", this.employee_form.division);

        //         const response = await employeeService.create_employee(formData);      
        //         this.loadEmployees();
        //         this.$refs.addEmployeeMdl.hide();
        //         Toast.fire({
        //             icon: "success",
        //             title: "Successfully added!"
                // });
            } catch(e) {

            }
            this.$Progress.finish()
        },


        updateGuestBtn(data){
            this.guest_update_form = {...data}
            // this.$refs.updateEmployeeMdl.show();
        },

        // updateEmplopyee: async function(){
        //     try{
        //         this.$Progress.start()
        //         let formData = new FormData();
        //         formData.append("fname", this.employee_update_form.fname);
        //         formData.append("mname", this.employee_update_form.mname);
        //         formData.append("lname", this.employee_update_form.lname);
        //         formData.append("employee_num", this.employee_update_form.employee_num);
        //         formData.append("position", this.employee_update_form.position);
        //         formData.append("division", this.employee_update_form.division);
        //         formData.append("_method", "put");

        //         const response = await employeeService.update_employee(this.employee_update_form.id, formData);      
        //         this.loadEmployees();
        //         this.$refs.updateEmployeeMdl.hide();

        //         Toast.fire({
        //             icon: "success",
        //             title: "Updated successfully!"
        //         });


        //     } catch(e) {

        //     }
        //     this.$Progress.finish()

        // },



        // deleteEmplopyeeBtn: async function(id){
        //     try {
        //         await Swal.fire({
        //         title: 'Are you sure?',
        //         text: "You won't be able to revert this!",
        //         icon: 'warning',
        //         showCancelButton: true,
        //         confirmButtonColor: '#3085d6',
        //         cancelButtonColor: '#d33',
        //         confirmButtonText: 'Yes, delete it!'
        //         }).then((result) => {
        //             if (result.isConfirmed) {
        //                 this.$Progress.start();
        //                 employeeService.delete_employee(id)
        //                 Toast.fire({
        //                     icon: "success",
        //                     title: "employee successfully Deleted"
        //                 });
        //                 this.loadEmployees();
        //             } else {
        //                 Toast.fire({
        //                     icon: "warning",
        //                     title: "Delete Canceled"
        //                 });
        //             }
        //         })

                
        //     } catch(e) {
        //         this.$Progress.finish();
        //     }
        // },



       
        
    },

    mounted(){
        this.loadEmployees()
    }
}
</script>