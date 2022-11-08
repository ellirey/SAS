<template>
    <div>

    
        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Schedule for this Semester  <button type="button" class="btn btn-primary" @click="addScheduleBtn()">Add <i class="fa-solid fa-plus"></i></button></h3>
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
                                            <th>#</th>
                                            <th>Day</th>
                                            <th>School Year</th>
                                            <th>Appointments</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr style="text-align: center;" v-for="(schedule ,index) in schedules_data.data" :key="index">
                               
                                            <td>{{index+1}}</td>
                                            <td>{{schedule.day}}</td>
                                            <td>{{schedule.school_year}}</td>
                                            <td>
                                                <button type="button" class="btn btn-primary">
                                                    Appointments <span class="badge text-bg-secondary">4</span>
                                                </button>
                                            </td> 

                                            <td>
                                           

                                                <button type="button" class="btn btn-success" @click="updateSchedule(schedule)">
                                                    Edit <i class="fa-solid fa-pen-to-square"></i>
                                                </button>
                                                <button type="button" class="btn btn-danger" @click="deleteSchedule(schedule.id)">
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
                                    :data="schedules_data"
                                    @pagination-change-page="loadPage"
                                ></pagination>
                            </div>  

                        </div>

                    </div>
                </div>
            </div>



        </section>



        <!-- create modal -->
        <b-modal   size="lg" ref="addScheduleMdl" hide-footer title="Scheduling Form">
            <div class="d-block">
                <div class="container-fluid">
                    <form @submit.prevent="addSchedule">
                        <div class="form-row">

                             <div class="form-group col-md-6">
                               <label for="selectpos" class="form-label">Day</label>
                                 <select class="custom-select" v-model="schudule_form.name_day" :class="errors.name_days ? 'is-invalid' : ''">
                                    <option selected value="" disabled>Select day</option>
                                    <option v-for="(day, index) in days_data" :key="index" :value="day.name_day">{{day.name_day}}</option>
                                </select>
                                <div class="invalid-feedback" v-if="errors.name_days">{{errors.name_days[0]}}</div>
                            </div>

                            <div class="form-group col-md-6">
                                <label for="exampleInputEmail1" class="form-label" >School Year</label>
                                <date-picker v-model="schudule_form.year" :config="options" placeholder="Select School year"  :class="errors.year ? 'is-invalid' : ''"></date-picker>
                                <div class="invalid-feedback" v-if="errors.year">{{errors.year[0]}}</div>

                            </div>
                            


                            <button type="submit" class="btn btn-primary col-12">Submit</button>
                    
                        </div> 
                            
                    </form>
                </div>
            </div>
        </b-modal>



        <!-- update modal -->
        <b-modal   size="lg" ref="updateScheduleMdl" hide-footer title="Scheduling update Form">
            <div class="d-block">
                <div class="container-fluid">
                    <form @submit.prevent="updateShechedule">


                        <div class="form-row">

                            <div class="form-group col-md-6">
                               <label for="selectpos" class="form-label">Day</label>
                                 <select class="custom-select" v-model="schudule_update_form.day" :class="errors.day_id ? 'is-invalid' : ''">
                                    <option selected value="" disabled>Select day</option>
                                    <option v-for="(day, index) in days_data" :key="index" :value="day.name_day">{{day.name_day}}</option>
                                </select>
                                <div class="invalid-feedback" v-if="errors.day_id">{{errors.day_id[0]}}</div>
                            </div>

                            <div class="form-group col-md-6">
                                <label for="exampleInputEmail1" class="form-label" >School Year</label>
                                <date-picker  v-model="schudule_update_form.school_year" :config="options"  placeholder="Select School year"  :class="errors.school_year ? 'is-invalid' : ''"></date-picker>
                                <div class="invalid-feedback" v-if="errors.school_year">{{errors.school_year[0]}}</div>
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

import * as scheduleService from '../../../services/schedule_service';
export default {
    data() {
        return {
            schedules_data : {},
            search: '',
            errors: '',
            page : 1,
            nextPage: 0,

            schudule_form: {
                year:"",
                name_day: "",
                day_id: "",
            },
            schudule_update_form: {},

            options: {
                format: 'YYYY',
                useCurrent: false,
            },
            dates:"2022",

        
            days_data : {},

        }
    },
    methods: {

        addScheduleBtn(){
            this.$refs.addScheduleMdl.show();
        },


        loadSchedules:async function(){
            try {
                this.$Progress.start()
                const response = await scheduleService.get_all_schedule()
                this.schedules_data = response.data;

            } catch (e) {

            }
            this.$Progress.finish()
        },

        loadDays:async function(){
            try {
                this.$Progress.start()
                const response = await scheduleService.get_all_days()
                this.days_data = response.data;

            } catch (e) {

            }
            this.$Progress.finish()
        },
        loadPage: async function(){

        },


        addSchedule: async function(){
            const schedules = this.schedules_data.data;
            const input_schedule = this.schudule_form;
            const ifScheduleExists = schedules.some(schedules => schedules.day == input_schedule.name_day  && schedules.school_year == input_schedule.year)

            if(ifScheduleExists) {
                Toast.fire({
                    icon: "error",
                    title: "Schedule already included!"
                });
            } else {

                try {
                    this.$Progress.start()
                    let formData = new FormData();
                    formData.append("employee_id", this.$store.state.user_profile.employee.id);
                    formData.append("year", this.schudule_form.year);
                    formData.append("name_day", this.schudule_form.name_day);

                    const response = await scheduleService.create_schedule(formData);      
                    this.loadSchedules();
                    this.$refs.addScheduleMdl.hide();
                    Toast.fire({
                        icon: "success",
                        title: "Schedule Successfully added!"
                    });

                } catch (e) {
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

                  
            }
         
           
       
        },


        updateSchedule(data){
            const sel_schedule = {...data}
            var year = String(sel_schedule.school_year)
            
            this.schudule_update_form = {...data}
            this.schudule_update_form.school_year = year


            this.$refs.updateScheduleMdl.show();
        },

        updateShechedule: async function(){
            try{    
                this.$Progress.start()
                var current_page = this.schedules_data.current_page;
                let formData = new FormData();

                formData.append("day", this.schudule_update_form.day);
                formData.append("school_year", this.schudule_update_form.school_year == null ? "" : this.schudule_update_form.school_year);

                formData.append("_method", "put");
                
                const response = await scheduleService.update_schedule(this.schudule_update_form.id, formData);   

                this.loadSchedules();  
                this.$refs.updateScheduleMdl.hide();
                Toast.fire({
                    icon: "success",
                    title: "Updated successfully!"
                });


            } catch(e){


            }
        },


         deleteSchedule: async function(id){
            try {
                var current_page = this.schedules_data.current_page;
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
                        scheduleService.delete_schedule(id)
                        Toast.fire({
                            icon: "success",
                            title: "schedule successfully Deleted"
                        });
                    // this.loadPage(current_page);   
                    this.loadSchedules();  


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




    mounted() {
        this.loadDays();
        this.loadSchedules();
    }   
}
</script>

<style>

</style>
