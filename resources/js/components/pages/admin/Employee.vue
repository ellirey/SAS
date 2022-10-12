<template>
     <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Employee <button type="button" class="btn btn-primary" @click="showMdlAddEmployeeBtn()">Add <i class="fa-solid fa-plus"></i></button></h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                    <li class="breadcrumb-item active">Employees</li>
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
                                <h3 class="card-title">List of Employees</h3>
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
                                            <th>School Number</th>
                                            <th>Name</th>
                                            <th>Department</th>
                                            <th>Title</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style="text-align: center;" v-for="(employee ,index) in employees_data.data" :key="index">
                                            <td>{{ employee.school_num }}</td>
                                            <td>{{ employee.fname | upText }} {{ employee.mname | upText }}. {{ employee.lname | upText }}</td>
                                            <td>{{ employee.department }}</td> 
                                            <td>{{ employee.title }}</td> 

                                            <td>
                                                <button type="button" class="btn btn-success" @click="updateEmplopyeeBtn(employee)">
                                                    Edit <i class="fa-solid fa-pen-to-square"></i>
                                                </button>
                                                <button type="button" class="btn btn-danger" @click="deleteEmplopyeeBtn(employee.id)">
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
                                    :data="employees_data"
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
        <b-modal   size="lg" ref="addEmployeeMdl" hide-footer title="Employee adding Form">
            <div class="d-block">
                <div class="container-fluid">
                    <form @submit.prevent="addEmployee">
                        <div class="form-row">

                            <div class="h5 pb-2 mb-2 col-md-12  form-group text-primary border-bottom border-primary">
                                Employee User Account Information
                            </div>

                            <div class="form-group col-md-6">
                                <label for="exampleInputEmail1" class="form-label" >Username</label>
                                <input type="text" class="form-control" placeholder="Enter Username" v-model="employee_form.username" :class="errors.username ? 'is-invalid' : ''">
                                 <div class="invalid-feedback" v-if="errors.username">{{errors.username[0]}}</div>
                            </div>

                            <div class="form-group col-md-6">
                                <label for="exampleInputEmail1" class="form-label" >Email</label>
                                <input type="text" class="form-control" placeholder="Enter Email" v-model="employee_form.email" :class="errors.email ? 'is-invalid' : ''">
                                 <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
                            </div>

                            <div class="form-group col-md-6">
                                <label for="exampleInputEmail1" class="form-label" >Password</label>
                                <input type="password" class="form-control" placeholder="Enter Password" v-model="employee_form.password" :class="errors.password ? 'is-invalid' : ''">
                                 <div class="invalid-feedback" v-if="errors.password">{{errors.password[0]}}</div>
                            </div>

                            <div class="form-group col-md-6">
                                <label for="exampleInputEmail1" class="form-label" >Confirmed password</label>
                                <input type="password" class="form-control" placeholder="Repeat Password" v-model="employee_form.password_confirmation" :class="errors.password_confirmation ? 'is-invalid' : ''">
                                 <div class="invalid-feedback" v-if="errors.password_confirmation">{{errors.password_confirmation[0]}}</div>
                            </div>





                            <div class="h5 pb-2 mb-2 col-md-12  form-group text-primary border-bottom border-primary">
                                Employee Personal Information
                            </div>
                            <div class="form-group col-md-5">
                                <label for="exampleInputEmail1" class="form-label" >First name</label>
                                <input type="text" class="form-control" placeholder="Enter First Name" v-model="employee_form.fname" :class="errors.fname ? 'is-invalid' : ''">
                                 <div class="invalid-feedback" v-if="errors.fname">{{errors.fname[0]}}</div>

                            </div>
                            <div class="form-group col-md-2">
                                <label for="exampleInputPassword1" class="form-label">Middle name</label>
                                <input type="text" class="form-control"  placeholder="Enter Middle Name"  v-model="employee_form.mname" :class="errors.mname ? 'is-invalid' : ''">
                                 <div class="invalid-feedback" v-if="errors.mname">{{errors.mname[0]}}</div>

                            </div>

                            <div class="form-group col-md-5">
                                <label for="exampleInputEmail1" class="form-label" >Last Name</label>
                                <input type="text" class="form-control" placeholder="Enter Last name" v-model="employee_form.lname" :class="errors.lname ? 'is-invalid' : ''">
                                <div class="invalid-feedback" v-if="errors.lname">{{errors.lname[0]}}</div>
                            </div>

                            <div class="form-group col-md-6">
                                <label for="exampleInputEmail1" class="form-label" >Birthday</label>
                                <input type="date" class="form-control"  v-model="employee_form.birthday" :class="errors.birthday ? 'is-invalid' : ''">
                                <div class="invalid-feedback" v-if="errors.birthday">{{errors.birthday[0]}}</div>
                            </div>


                            <div class="form-group col-md-2">
                                <label for="exampleInputEmail1" class="form-label" >Age</label>
                                <input type="text" class="form-control" placeholder="Enter age" v-model="employee_form.age" :class="errors.age ? 'is-invalid' : ''">
                                <div class="invalid-feedback" v-if="errors.age">{{errors.age[0]}}</div>
                            </div>


                            <div class="form-group col-md-4">
                               <label for="selectpos" class="form-label">Gender</label>
                                <select class="custom-select" id="selectpos" v-model="employee_form.gender" :class="errors.gender ? 'is-invalid' : ''">
                                    <option value="" disabled>Select gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                <div class="invalid-feedback" v-if="errors.gender">{{errors.gender[0]}}</div>
                            </div>

                            

                            <div class="form-group col-md-6">
                                <label for="exampleInputEmail1" class="form-label">Employee number</label>
                                <input type="text" class="form-control" placeholder="Enter employee number" v-model="employee_form.school_num" :class="errors.school_num ? 'is-invalid' : ''"> 
                                <div class="invalid-feedback" v-if="errors.school_num">{{errors.school_num[0]}}</div>

                            </div>

                            <div class="form-group col-md-6">
                                <label for="selectpos" class="form-label">Department</label>
                                <select class="custom-select" id="selectpos" v-model="employee_form.department" :class="errors.department ? 'is-invalid' : ''">
                                    <option value="" disabled>Select Department</option>
                                    <option value="TED">TEACHER EDUCATION DEPARTMENT (TED)</option>
                                    <option value="DIT">DEPARTMENT OF INFORMATION TECHNOLOGY  (DIT)</option>
                                    <option value="DAS">DEPARTMENT OF ARTS AND SCIENCE (DAS)</option>
                                    <option value="DOM">DEPARTMENT OF MANAGEMENT(DOM)</option>
                                </select>
                                <div class="invalid-feedback" v-if="errors.department">{{errors.department[0]}}</div>
                            </div>
                        


                          
                            <div class="form-group col-md-12">
                                <label for="exampleInputEmail1" class="form-label">Job title</label>
                                <input type="text" class="form-control" placeholder="Enter job title" v-model="employee_form.title" :class="errors.title ? 'is-invalid' : ''">
                                <div class="invalid-feedback" v-if="errors.title">{{errors.title[0]}}</div>
                            </div>

                       

                            <button type="submit" class="btn btn-primary col-12">Submit</button>
                    
                        </div>
                            
                    </form>
                </div>
            </div>
        </b-modal>





        <!-- update modal -->

        <!-- create modal -->
        <b-modal   size="lg" ref="updateEmployeeMdl" hide-footer title="Employee update Form">
            <div class="d-block">
                <div class="container-fluid">
                    <form @submit.prevent="updateEmployee">
                        <div class="form-row">

                            <div class="h5 pb-2 mb-2 col-md-12  form-group text-primary border-bottom border-primary">
                                Employee User Account Information
                            </div>

                            <div v-if="Object.keys(employee_update_form).length == 0">

                            </div>

                            <div  class="form-row" v-else >
                                <div class="form-group col-md-6">
                                    <label for="exampleInputEmail1" class="form-label" >Username</label>
                                    <input type="text" class="form-control" placeholder="Enter Username" v-model="employee_update_form.user.username" :class="errors.username ? 'is-invalid' : ''">
                                    <div class="invalid-feedback" v-if="errors.username">{{errors.username[0]}}</div>
                                </div>

                                <div class="form-group col-md-6">
                                    <label for="exampleInputEmail1" class="form-label" >Email</label>
                                    <input type="text" class="form-control" placeholder="Enter Email" v-model="employee_update_form.user.email" :class="errors.email ? 'is-invalid' : ''">
                                    <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
                                </div>

                                <div class="form-group col-md-6">
                                    <label for="exampleInputEmail1" class="form-label" >New Password</label>
                                    <input type="password" class="form-control" placeholder="Enter Password" v-model="employee_update_form.user.password" :class="errors.password ? 'is-invalid' : ''">
                                    <div class="invalid-feedback" v-if="errors.password">{{errors.password[0]}}</div>
                                </div>

                                <div class="form-group col-md-6">
                                    <label for="exampleInputEmail1" class="form-label" >Confirmed New password</label>
                                    <input type="password" class="form-control" placeholder="Repeat Password" v-model="employee_update_form.user.password_confirmation" :class="errors.password_confirmation ? 'is-invalid' : ''">
                                    <div class="invalid-feedback" v-if="errors.password_confirmation">{{errors.password_confirmation[0]}}</div>
                                </div>

                            </div>




                            <div class="h5 pb-2 mb-2 col-md-12  form-group text-primary border-bottom border-primary">
                                Employee Personal Information
                            </div>
                            <div class="form-group col-md-5">
                                <label for="exampleInputEmail1" class="form-label" >First name</label>
                                <input type="text" class="form-control" placeholder="Enter First Name" v-model="employee_update_form.fname" :class="errors.fname ? 'is-invalid' : ''">
                                 <div class="invalid-feedback" v-if="errors.fname">{{errors.fname[0]}}</div>

                            </div>
                            <div class="form-group col-md-2">
                                <label for="exampleInputPassword1" class="form-label">Middle name</label>
                                <input type="text" class="form-control"  placeholder="Enter Middle Name"  v-model="employee_update_form.mname" :class="errors.mname ? 'is-invalid' : ''">
                                 <div class="invalid-feedback" v-if="errors.mname">{{errors.mname[0]}}</div>

                            </div>

                            <div class="form-group col-md-5">
                                <label for="exampleInputEmail1" class="form-label" >Last Name</label>
                                <input type="text" class="form-control" placeholder="Enter Last name" v-model="employee_update_form.lname" :class="errors.lname ? 'is-invalid' : ''">
                                <div class="invalid-feedback" v-if="errors.lname">{{errors.lname[0]}}</div>
                            </div>

                            <div class="form-group col-md-6">
                                <label for="exampleInputEmail1" class="form-label" >Birthday</label>
                                <input type="date" class="form-control"  v-model="employee_update_form.birthday" :class="errors.birthday ? 'is-invalid' : ''">
                                <div class="invalid-feedback" v-if="errors.birthday">{{errors.birthday[0]}}</div>
                            </div>


                            <div class="form-group col-md-2">
                                <label for="exampleInputEmail1" class="form-label" >Age</label>
                                <input type="text" class="form-control" placeholder="Enter age" v-model="employee_update_form.age" :class="errors.age ? 'is-invalid' : ''">
                                <div class="invalid-feedback" v-if="errors.age">{{errors.age[0]}}</div>
                            </div>


                            <div class="form-group col-md-4">
                               <label for="selectpos" class="form-label">Gender</label>
                                <select class="custom-select" id="selectpos" v-model="employee_update_form.gender" :class="errors.gender ? 'is-invalid' : ''">
                                    <option value="" disabled>Select gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                <div class="invalid-feedback" v-if="errors.gender">{{errors.gender[0]}}</div>
                            </div>

                            

                            <div class="form-group col-md-6">
                                <label for="exampleInputEmail1" class="form-label">Employee number</label>
                                <input type="text" class="form-control" placeholder="Enter employee number" v-model="employee_update_form.school_num" :class="errors.school_num ? 'is-invalid' : ''"> 
                                <div class="invalid-feedback" v-if="errors.school_num">{{errors.school_num[0]}}</div>

                            </div>

                            <div class="form-group col-md-6">
                                <label for="selectpos" class="form-label">Department</label>
                                <select class="custom-select" id="selectpos" v-model="employee_update_form.department" :class="errors.department ? 'is-invalid' : ''">
                                    <option value="" disabled>Select Department</option>
                                    <option value="TED">TEACHER EDUCATION DEPARTMENT (TED)</option>
                                    <option value="DIT">DEPARTMENT OF INFORMATION TECHNOLOGY  (DIT)</option>
                                    <option value="DAS">DEPARTMENT OF ARTS AND SCIENCE (DAS)</option>
                                    <option value="DOM">DEPARTMENT OF MANAGEMENT(DOM)</option>
                                </select>
                                <div class="invalid-feedback" v-if="errors.department">{{errors.department[0]}}</div>
                            </div>
                        


                          
                            <div class="form-group col-md-12">
                                <label for="exampleInputEmail1" class="form-label">Job title</label>
                                <input type="text" class="form-control" placeholder="Enter job title" v-model="employee_update_form.title" :class="errors.title ? 'is-invalid' : ''">
                                <div class="invalid-feedback" v-if="errors.title">{{errors.title[0]}}</div>
                            </div>

                       

                            <button type="submit" class="btn btn-primary col-12">Submit</button>
                    
                        </div>
                            
                    </form>
                </div>
            </div>
        </b-modal>
       

        
    </div>
</template>


<script>
import * as employeeService from '../../../services/employee_service';

export default {
    data() {
        return {
            search: '',
            errors: '',
            employee_form: {
                username: '',
                email: '',
                password: '',
                password_confirmation : '',
                school_num: '',
                fname : '',
                mname : '',
                lname : '',
                gender : '',
                age : '',
                birthday : '',
                title : '',
                department : '',
            },

            employee_update_form: {},
            employees_data: {},

            page : 1,
            nextPage: 0,
        }
    },
    methods: {
        showMdlAddEmployeeBtn(){
            this.$refs.addEmployeeMdl.show()
        },

        loadEmployees:async function(){
            try {
                this.$Progress.start()
                const response = await employeeService.get_all_employees()
                this.employees_data = response.data;

            } catch (e) {

            }
            this.$Progress.finish()
        },

        loadPage: async function(page = 1){
            this.$Progress.start();
            let searchQuery = this.search;
            let searchPage = 0;

            if (searchQuery == "") {
                try {
                    const response = await employeeService.employee_page(page)
                    this.employees_data = response.data;
                    this.$Progress.finish(); 
                } catch (e) {
                    this.$Progress.fail();
                }
                this.$Progress.finish();
            } else {
                try {
                    // const response = await praiseService.praise_search_page(page, searchQuery)
                    // this.praise_datas = response.data
                } catch (e){
                    this.$Progress.fail();  
                }
                this.$Progress.finish();
            }
        },


        addEmployee: async function(){
            try { 
                this.$Progress.start()
                let formData = new FormData();
                formData.append("username", this.employee_form.username);
                formData.append("email", this.employee_form.email);
                formData.append("password", this.employee_form.password);
                formData.append("password_confirmation", this.employee_form.password_confirmation);
                formData.append("school_num", this.employee_form.school_num);
                formData.append("fname", this.employee_form.fname);
                formData.append("mname", this.employee_form.mname);
                formData.append("lname", this.employee_form.lname);
                formData.append("gender", this.employee_form.gender);
                formData.append("age", this.employee_form.age);
                formData.append("birthday", this.employee_form.birthday);
                formData.append("title", this.employee_form.title);
                formData.append("department", this.employee_form.department);


                const response = await employeeService.create_employee(formData);      
                this.loadEmployees();
                this.$refs.addEmployeeMdl.hide();
                Toast.fire({
                    icon: "success",
                    title: "Successfully added!"
                });
            } catch(e) {
                  switch(e.response.status){
                    case 422:
                        this.errors = e.response.data.errors;
                        Toast.fire({
                            icon: "error",
                            title: "Please check your Input form"
                        });
                    break;
                    default: 
                        Toast.fire({
                            icon: "error",
                            title: "Server error, Please try again!"
                        });
                    break;
                }
                this.$Progress.fail();  
            }
            this.$Progress.finish()
        },


        updateEmplopyeeBtn(data){
            this.employee_update_form = {...data}
            this.$refs.updateEmployeeMdl.show();
        },

        updateEmployee: async function(){
            try{
                var current_page = this.employees_data.current_page;

                this.$Progress.start()
                let formData = new FormData();
                formData.append("user_id", this.employee_update_form.user.id);
                formData.append("username", this.employee_update_form.user.username);
                formData.append("email", this.employee_update_form.user.email);
                formData.append("password", this.employee_update_form.user.password);
                formData.append("password_confirmation", this.employee_update_form.user.password_confirmation);


                formData.append("school_num", this.employee_update_form.school_num);
                formData.append("fname", this.employee_update_form.fname);
                formData.append("mname", this.employee_update_form.mname);
                formData.append("lname", this.employee_update_form.lname);
                formData.append("gender", this.employee_update_form.gender);
                formData.append("age", this.employee_update_form.age);
                formData.append("birthday", this.employee_update_form.birthday);
                formData.append("title", this.employee_update_form.title);
                formData.append("department", this.employee_update_form.department);
                formData.append("_method", "put");

                const response = await employeeService.update_employee(this.employee_update_form.id, formData); 
                this.loadPage(current_page);        
                this.$refs.updateEmployeeMdl.hide();
                Toast.fire({
                    icon: "success",
                    title: "Updated successfully!"
                });

            } catch(e) {
                switch(e.response.status){
                    case 422:
                        this.errors = e.response.data.errors;
                        Toast.fire({
                            icon: "error",
                            title: "Please check your Input form"
                        });
                    break;
                    default: 
                        Toast.fire({
                            icon: "error",
                            title: "Server error, Please try again!"
                        });
                    break;
                }
                this.$Progress.fail();  
            }
            this.$Progress.finish()

        },



        deleteEmplopyeeBtn: async function(id){
            try {
                var current_page = this.employees_data.current_page;

                await Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.$Progress.start();
                        employeeService.delete_employee(id)
                        Toast.fire({
                            icon: "success",
                            title: "employee successfully Deleted"
                        });
                         this.loadPage(current_page);        
                    } else {
                        Toast.fire({
                            icon: "warning",
                            title: "Delete Canceled"
                        });
                    }
                })
                
            } catch(e) {
                this.$Progress.finish();
            }
        },
        
    },

    mounted(){
        this.loadEmployees()
    }
}
</script>