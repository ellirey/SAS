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
                                            <td>1</td>
                                            <td>{{schedule.days[0].name_day}}</td>
                                            <td>{{schedule.school_year}}</td>
                                            <td>
                                                <button type="button" class="btn btn-primary">
                                                    Appointments <span class="badge text-bg-secondary">4</span>
                                                </button>

                                                <!-- <button type="button" class="btn btn-success" >
                                                    Edit <i class="fa-solid fa-pen-to-square"></i>
                                                </button> -->
                                            </td> 

                                            <td>
                                                <!-- <button type="button" class="btn btn-success" @click="updateGuestBtn(guest)">
                                                    Edit <i class="fa-solid fa-pen-to-square"></i>
                                                </button>
                                                <button type="button" class="btn btn-danger" @click="deleteGuestBtn(guest.id)">
                                                    Delete <i class="fa-solid fa-trash"></i>
                                                </button> -->

                                                <button type="button" class="btn btn-success" >
                                                    Edit <i class="fa-solid fa-pen-to-square"></i>
                                                </button>
                                                <button type="button" class="btn btn-danger">
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



    <!-- update modal -->
        <b-modal   size="lg" ref="addScheduleMdl" hide-footer title="Scheduling Form">
            <div class="d-block">
                <div class="container-fluid">
                    <form @submit.prevent="addSchedule">
                        <div class="form-row">

                             <div class="form-group col-md-6">
                               <label for="selectpos" class="form-label">Day</label>
                                 <select class="custom-select" v-model="schudule_form.day_id" :class="errors.day_id ? 'is-invalid' : ''">
                                    <option selected value="" disabled>Select day</option>
                                    <option v-for="(day, index) in days_data" :key="index" :value="day.id">{{day.name_day}}</option>
                                </select>
                                <div class="invalid-feedback" v-if="errors.day_id">{{errors.day_id[0]}}</div>
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
                name_days: "",
                day_id: "",
            },

            options: {
                format: 'YYYY',
                useCurrent: false,
            },


        
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

            // {{ this.$store.state.user_profile.role }}
            try {
                this.$Progress.start()
                let formData = new FormData();
                formData.append("employee_id", this.$store.state.user_profile.id);
                formData.append("year", this.schudule_form.year);
                formData.append("day_id", this.schudule_form.day_id);


                const response = await scheduleService.create_schedule(formData);      
                this.loadSchedules();
                this.$refs.addScheduleMdl.hide();
                Toast.fire({
                    icon: "success",
                    title: "Successfully added!"
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

    mounted() {
        this.loadDays();
        this.loadSchedules();
    }   
}
</script>

<style>

</style>
