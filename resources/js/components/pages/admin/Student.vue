<template>
    <div>
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Student <button type="button" class="btn btn-primary" @click="showMdlAddStudent()">Add <i class="fa-solid fa-plus"></i></button></h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                    <li class="breadcrumb-item active">Students</li>
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
                                <h3 class="card-title">List of Students</h3>
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
                                            <th>Student Number</th>
                                            <th>Name</th>
                                            <th>Course</th>
                                            <th>Department</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style="text-align: center;" v-for="(student ,index) in students_data.data" :key="index">
                                            <td>{{ student.school_num }}</td>
                                            <td>{{ student.fname | upText }} {{ student.mname | upText }}. {{ student.lname | upText }}</td>
                                            <td>{{ student.course }}</td> 
                                            <td>{{ student.department }}</td>

                                            <td>
                                                <button type="button" class="btn btn-success" @click="updateEmplopyeeBtn(student)">
                                                    Edit <i class="fa-solid fa-pen-to-square"></i>
                                                </button>
                                                <button type="button" class="btn btn-danger" @click="deleteStudentBtn(student.id)">
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
                                    :data="students_data"
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
        <b-modal   size="lg" ref="addStudentMdl" hide-footer title="Employee adding Form">
            <div class="d-block">
                <div class="container-fluid">
                    <form @submit.prevent="addStudent">
                        <div class="form-row">

                            <div class="h5 pb-2 mb-2 col-md-12  form-group text-primary border-bottom border-primary">
                                Student User Account Information
                            </div>

                            <div class="form-group col-md-6">
                                <label for="exampleInputEmail1" class="form-label" >Username</label>
                                <input type="text" class="form-control" placeholder="Enter Username" v-model="student_form.username" :class="errors.username ? 'is-invalid' : ''">
                                 <div class="invalid-feedback" v-if="errors.username">{{errors.username[0]}}</div>
                            </div>

                            <div class="form-group col-md-6">
                                <label for="exampleInputEmail1" class="form-label" >Email</label>
                                <input type="text" class="form-control" placeholder="Enter Email" v-model="student_form.email" :class="errors.email ? 'is-invalid' : ''">
                                 <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
                            </div>

                            <div class="form-group col-md-6">
                                <label for="exampleInputEmail1" class="form-label" >Password</label>
                                <input type="password" class="form-control" placeholder="Enter Password" v-model="student_form.password" :class="errors.password ? 'is-invalid' : ''">
                                 <div class="invalid-feedback" v-if="errors.password">{{errors.password[0]}}</div>
                            </div>

                            <div class="form-group col-md-6">
                                <label for="exampleInputEmail1" class="form-label" >Confirmed password</label>
                                <input type="password" class="form-control" placeholder="Repeat Password" v-model="student_form.password_confirmation" :class="errors.password_confirmation ? 'is-invalid' : ''">
                                 <div class="invalid-feedback" v-if="errors.password_confirmation">{{errors.password_confirmation[0]}}</div>
                            </div>




                            <div class="h5 pb-2 mb-2 col-md-12  form-group text-primary border-bottom border-primary">
                                Student Personal Information
                            </div>
                            <div class="form-group col-md-5">
                                <label for="exampleInputEmail1" class="form-label" >First name</label>
                                <input type="text" class="form-control" placeholder="Enter First Name" v-model="student_form.fname" :class="errors.fname ? 'is-invalid' : ''">
                                 <div class="invalid-feedback" v-if="errors.fname">{{errors.fname[0]}}</div>

                            </div>
                            <div class="form-group col-md-2">
                                <label for="exampleInputPassword1" class="form-label">Middle name</label>
                                <input type="text" class="form-control"  placeholder="Enter Middle Name"  v-model="student_form.mname" :class="errors.mname ? 'is-invalid' : ''">
                                 <div class="invalid-feedback" v-if="errors.mname">{{errors.mname[0]}}</div>

                            </div>

                            <div class="form-group col-md-5">
                                <label for="exampleInputEmail1" class="form-label" >Last Name</label>
                                <input type="text" class="form-control" placeholder="Enter Last name" v-model="student_form.lname" :class="errors.lname ? 'is-invalid' : ''">
                                <div class="invalid-feedback" v-if="errors.lname">{{errors.lname[0]}}</div>
                            </div>

                            <div class="form-group col-md-6">
                                <label for="exampleInputEmail1" class="form-label" >Birthday</label>
                                <input type="date" class="form-control"  v-model="student_form.birthday" :class="errors.birthday ? 'is-invalid' : ''">
                                <div class="invalid-feedback" v-if="errors.birthday">{{errors.birthday[0]}}</div>
                            </div>


                            <div class="form-group col-md-2">
                                <label for="exampleInputEmail1" class="form-label" >Age</label>
                                <input type="text" class="form-control" placeholder="Enter age" v-model="student_form.age" :class="errors.age ? 'is-invalid' : ''">
                                <div class="invalid-feedback" v-if="errors.age">{{errors.age[0]}}</div>
                            </div>

                            <div class="form-group col-md-4">
                               <label for="selectpos" class="form-label">Gender</label>
                                <select class="custom-select" id="selectpos" v-model="student_form.gender" :class="errors.gender ? 'is-invalid' : ''">
                                    <option value="" disabled>Select gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                <div class="invalid-feedback" v-if="errors.gender">{{errors.gender[0]}}</div>
                            </div>

                            

                            <div class="form-group col-md-6">
                                <label for="exampleInputEmail1" class="form-label">Student number</label>
                                <input type="text" class="form-control" placeholder="Enter employee number" v-model="student_form.school_num" :class="errors.school_num ? 'is-invalid' : ''"> 
                                <div class="invalid-feedback" v-if="errors.school_num">{{errors.school_num[0]}}</div>
                            </div>

                            <div class="form-group col-md-6">
                                <label for="selectpos" class="form-label">Department</label>
                                <select class="custom-select" id="selectpos" v-model="student_form.department" :class="errors.department ? 'is-invalid' : ''">
                                    <option value="" disabled>Select Department</option>
                                    <option value="TED">TEACHER EDUCATION DEPARTMENT (TED)</option>
                                    <option value="DIT">DEPARTMENT OF INFORMATION TECHNOLOGY  (DIT)</option>
                                    <option value="DAS">DEPARTMENT OF ARTS AND SCIENCE (DAS)</option>
                                    <option value="DOM">DEPARTMENT OF MANAGEMENT(DOM)</option>
                                </select>
                                <div class="invalid-feedback" v-if="errors.department">{{errors.department[0]}}</div>
                            </div>
                        
                          
                            <div class="form-group col-md-12">
                                <label for="exampleInputEmail1" class="form-label">Course</label>
                                <input type="text" class="form-control" placeholder="Enter job title" v-model="student_form.course" :class="errors.course ? 'is-invalid' : ''">
                                <div class="invalid-feedback" v-if="errors.course">{{errors.course[0]}}</div>
                            </div>

                            <button type="submit" class="btn btn-primary col-12">Submit</button>
                    
                        </div>
                            
                    </form>
                </div>
            </div>
        </b-modal>






        <!-- update modal -->
        <b-modal   size="lg" ref="updateStudentMdl" hide-footer title="Student Update Form">
            <div class="d-block">
                <div class="container-fluid">
                    <form @submit.prevent="updateEmplopyee">
                        <div class="form-row">

                            <div class="h5 pb-2 mb-2 col-md-12  form-group text-primary border-bottom border-primary">
                                Student User Account Information
                            </div>

                            <div v-if="Object.keys(student_update_form).length == 0">

                            </div>

                            <div  class="form-row" v-else >
                                <div class="form-group col-md-6">
                                    <label for="exampleInputEmail1" class="form-label" >Username</label>
                                    <input type="text" class="form-control" placeholder="Enter Username" v-model="student_update_form.user.username" :class="errors.username ? 'is-invalid' : ''">
                                    <div class="invalid-feedback" v-if="errors.username">{{errors.username[0]}}</div>
                                </div>

                                <div class="form-group col-md-6">
                                    <label for="exampleInputEmail1" class="form-label" >Email</label>
                                    <input type="text" class="form-control" placeholder="Enter Email" v-model="student_update_form.user.email" :class="errors.email ? 'is-invalid' : ''">
                                    <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
                                </div>

                                <div class="form-group col-md-6">
                                    <label for="exampleInputEmail1" class="form-label" >New Password</label>
                                    <input type="password" class="form-control" placeholder="Enter Password" v-model="student_update_form.user.password" :class="errors.password ? 'is-invalid' : ''">
                                    <div class="invalid-feedback" v-if="errors.password">{{errors.password[0]}}</div>
                                </div>

                                <div class="form-group col-md-6">
                                    <label for="exampleInputEmail1" class="form-label" >Confirmed New password</label>
                                    <input type="password" class="form-control" placeholder="Repeat Password" v-model="student_update_form.user.password_confirmation" :class="errors.password_confirmation ? 'is-invalid' : ''">
                                    <div class="invalid-feedback" v-if="errors.password_confirmation">{{errors.password_confirmation[0]}}</div>
                                </div>

                            </div>

                      




                            <div class="h5 pb-2 mb-2 col-md-12  form-group text-primary border-bottom border-primary">
                                Student Personal Information
                            </div>
                            <div class="form-group col-md-5">
                                <label for="exampleInputEmail1" class="form-label" >First name</label>
                                <input type="text" class="form-control" placeholder="Enter First Name" v-model="student_update_form.fname" :class="errors.fname ? 'is-invalid' : ''">
                                 <div class="invalid-feedback" v-if="errors.fname">{{errors.fname[0]}}</div>

                            </div>
                            <div class="form-group col-md-2">
                                <label for="exampleInputPassword1" class="form-label">Middle name</label>
                                <input type="text" class="form-control"  placeholder="Enter Middle Name"  v-model="student_update_form.mname" :class="errors.mname ? 'is-invalid' : ''">
                                 <div class="invalid-feedback" v-if="errors.mname">{{errors.mname[0]}}</div>

                            </div>

                            <div class="form-group col-md-5">
                                <label for="exampleInputEmail1" class="form-label" >Last Name</label>
                                <input type="text" class="form-control" placeholder="Enter Last name" v-model="student_update_form.lname" :class="errors.lname ? 'is-invalid' : ''">
                                <div class="invalid-feedback" v-if="errors.lname">{{errors.lname[0]}}</div>
                            </div>

                            <div class="form-group col-md-6">
                                <label for="exampleInputEmail1" class="form-label" >Birthday</label>
                                <input type="date" class="form-control"  v-model="student_update_form.birthday" :class="errors.birthday ? 'is-invalid' : ''">
                                <div class="invalid-feedback" v-if="errors.birthday">{{errors.birthday[0]}}</div>
                            </div>


                            <div class="form-group col-md-2">
                                <label for="exampleInputEmail1" class="form-label" >Age</label>
                                <input type="text" class="form-control" placeholder="Enter age" v-model="student_update_form.age" :class="errors.age ? 'is-invalid' : ''">
                                <div class="invalid-feedback" v-if="errors.age">{{errors.age[0]}}</div>
                            </div>

                            <div class="form-group col-md-4">
                               <label for="selectpos" class="form-label">Gender</label>
                                <select class="custom-select" id="selectpos" v-model="student_update_form.gender" :class="errors.gender ? 'is-invalid' : ''">
                                    <option value="" disabled>Select gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                <div class="invalid-feedback" v-if="errors.gender">{{errors.gender[0]}}</div>
                            </div>

                            

                            <div class="form-group col-md-6">
                                <label for="exampleInputEmail1" class="form-label">Student number</label>
                                <input type="text" class="form-control" placeholder="Enter employee number" v-model="student_update_form.school_num" :class="errors.school_num ? 'is-invalid' : ''"> 
                                <div class="invalid-feedback" v-if="errors.school_num">{{errors.school_num[0]}}</div>
                            </div>

                            <div class="form-group col-md-6">
                                <label for="selectpos" class="form-label">Department</label>
                                <select class="custom-select" id="selectpos" v-model="student_update_form.department" :class="errors.department ? 'is-invalid' : ''">
                                    <option value="" disabled>Select Department</option>
                                    <option value="TED">TEACHER EDUCATION DEPARTMENT (TED)</option>
                                    <option value="DIT">DEPARTMENT OF INFORMATION TECHNOLOGY  (DIT)</option>
                                    <option value="DAS">DEPARTMENT OF ARTS AND SCIENCE (DAS)</option>
                                    <option value="DOM">DEPARTMENT OF MANAGEMENT(DOM)</option>
                                </select>
                                <div class="invalid-feedback" v-if="errors.department">{{errors.department[0]}}</div>
                            </div>
                        
                          
                            <div class="form-group col-md-12">
                                <label for="exampleInputEmail1" class="form-label">Course</label>
                                <input type="text" class="form-control" placeholder="Enter job title" v-model="student_update_form.course" :class="errors.course ? 'is-invalid' : ''">
                                <div class="invalid-feedback" v-if="errors.course">{{errors.course[0]}}</div>
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
import * as studentService from '../../../services/student_service';

export default {
    data() {
        return {
            search: '',
            errors: '',
            student_form: {
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
                course : '',
                department : '',
            },

            student_update_form: {},
            students_data: {},

            page : 1,
            nextPage: 0,
        }
    },
    methods: {
        showMdlAddStudent(){
            this.$refs.addStudentMdl.show()
        },

        loadStudents:async function(){
            try {
                this.$Progress.start()
                const response = await studentService.get_all_students()
                this.students_data = response.data
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
                    const response = await studentService.student_page(page)
                    this.students_data = response.data;
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


        addStudent: async function(){
            try { 
                var current_page = this.students_data.current_page;

                this.$Progress.start()
                let formData = new FormData();
                formData.append("username", this.student_form.username);
                formData.append("email", this.student_form.email);
                formData.append("password", this.student_form.password);
                formData.append("password_confirmation", this.student_form.password_confirmation);

                formData.append("school_num", this.student_form.school_num);
                formData.append("fname", this.student_form.fname);
                formData.append("mname", this.student_form.mname);
                formData.append("lname", this.student_form.lname);
                formData.append("gender", this.student_form.gender);
                formData.append("age", this.student_form.age);
                formData.append("birthday", this.student_form.birthday);
                formData.append("course", this.student_form.course);
                formData.append("department", this.student_form.department);

                const response = await studentService.create_student(formData);   

                this.loadPage(current_page);        
                this.$refs.addStudentMdl.hide();
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
            this.student_update_form = {...data}
            this.$refs.updateStudentMdl.show();
        },

        updateEmplopyee: async function(){
            try {
                var current_page = this.students_data.current_page;

                this.$Progress.start()
                let formData = new FormData();
                formData.append("user_id", this.student_update_form.user.id);
                formData.append("username", this.student_update_form.user.username);
                formData.append("email", this.student_update_form.user.email);
                formData.append("password", this.student_update_form.user.password);
                formData.append("password_confirmation", this.student_update_form.user.password_confirmation);

                formData.append("school_num", this.student_update_form.school_num);
                formData.append("fname", this.student_update_form.fname);
                formData.append("mname", this.student_update_form.mname);
                formData.append("lname", this.student_update_form.lname);
                formData.append("gender", this.student_update_form.gender);
                formData.append("age", this.student_update_form.age);
                formData.append("birthday", this.student_update_form.birthday);
                formData.append("course", this.student_update_form.course);
                formData.append("department", this.student_update_form.department);
                formData.append("_method", "put");

                const response = await studentService.update_student(this.student_update_form.id, formData);      
                this.loadPage(current_page);        

                this.$refs.updateStudentMdl.hide();
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
            this.$Progress.finish();

        },



        deleteStudentBtn: async function(id){
            try {
                var current_page = this.students_data.current_page;

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
                        studentService.delete_student(id)
                        Toast.fire({
                            icon: "success",
                            title: "Student successfully Deleted"
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
        this.loadStudents()
    }
}
</script>