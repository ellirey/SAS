<template>
    <div>
        <header class="py-5 bg-light border-bottom mb-4" style="">
            <div class="container">
                <div class="text-center my-5">
                    <h1 class="fw-bolder">Appointment</h1>
                    <p class="lead mb-0"></p>
                </div>
            </div>
        </header>
        
        <div class="container-fluid">
            <div class="row justify-content-md-center">
                <div class="col-11">
                    <h3 class="m-5">Appointments  <button type="button" class="btn btn-primary" @click="addAppointmentBtn()">Add <i class="fa-solid fa-plus"></i></button></h3> 

                        <div class="row justify-content-md-center">
                            <div class="col-11">
                                <div class="card-body p-0">
                                    <table class="table">
                                        <thead>
                                            <tr style="text-align: center;">
                                                <th>#</th>
                                                <th>Schedule</th>
                                                <th>Department</th>
                                                <th>Visiting</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th>QR code</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr style="text-align: center;" v-for="(appointment, index) in appointments_data.data" :key="index">
                                                <td>{{appointment.id}}</td>
                                                <td>2</td>
                                                <th>{{appointment.schedule.employee.department}}</th>
                                                <td>{{appointment.schedule.employee.fname | upText}} {{appointment.schedule.employee.mname | upText}}. {{appointment.schedule.employee.lname | upText}}</td>
                                                <th>Date</th>
                                                
                                                <th>status here</th>
                                                <th>
                                                    <b-button size="sm" variant="primary" @click="showQrCode(appointment, index, $event.target)" class="mr-1">
                                                        <i class="fas fa-qrcode"></i>
                                                    </b-button>
                                                </th>
                                                <td>
                                                    <button type="button" class="btn btn-success" >
                                                        Edit <i class="fa-solid fa-pen-to-square"></i>
                                                    </button>
                                                    <button type="button" class="btn btn-danger" >
                                                        Delete <i class="fa-solid fa-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>

                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>


                        <!-- <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Scheduled Appointments</h3>
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
                                            <th>Person</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                              
                                            </td>
                                        </tr>

                                        <tr style="text-align: center;" v-for="(schedule ,index) in schedules_data.data" :key="index">
                               
                                            <td>{{index+1}}</td>
                                            <td>{{schedule.day}}</td>
                                            <td>{{schedule.school_year}}</td>
                                         

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
                                    :data="appointments_data"
                                    @pagination-change-page="loadPage"
                                ></pagination>
                            </div>  

                        </div> -->

                    </div> 

            </div>



        </div>



        <!-- Create modal -->
        <b-modal  size="lg" ref="addAppointmentMdl" hide-footer title="Appointment Form">
            <div class="d-block">
                <div class="container-fluid">
                    <form @submit.prevent="addAppointment">


                        <div class="form-row">
                            <div class="h5 pb-2 mb-2 col-md-12  form-group text-primary border-bottom border-primary">
                                COVID-19 Self Screening Questionnaire
                            </div>

                            <p>
                                You must answer “NO” to all the questions in this questionnaire in order to enter our physical location. If you answer “YES” to any of the questions, 
                                please DO NOT come enter the School buildings.
                            </p>
                            <p class="mb-3">
                                If you experience any symptoms or answer “YES” to any of these questions, you must immediately contact your health care professional
                            </p>



                            <div class="card-body table-responsive p-0">
                                <table class="table table-hover text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col" style="border-top: none;"></th>
                                            <th scope="col" style="border-top: none;">No</th>
                                            <th scope="col" style="border-top: none;">Yes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="border-top: none;">1) Have you had any of the following symptoms in the last 24 hours? <span style="color:red;">*</span></td>
                                            <td style="border-top: none;"></td>
                                            <td style="border-top: none;"></td>
                                        </tr>
                                        <tr>
                                            <td style="border-top: none;"><span style="margin-left:5%;">Cough</span> </td>
                                            <td style="border-top: none;">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" v-model="appointment_form.cough_check_no">
                                                </div>
                                            </td>
                                            <td style="border-top: none;">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" v-model="appointment_form.cough_check_yes">
                                                </div>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td style="border-top: none;"><span style="margin-left:5%;"> Shortness of breath of difficulty breathing</span></td>
                                            <td style="border-top: none;">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox"  v-model="appointment_form.shortness_check_no">
                                                </div>
                                            </td>
                                            <td style="border-top: none;">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox"  v-model="appointment_form.shortness_check_yes">
                                                </div>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>


                            <div class="h5 pb-2 mb-2 col-md-12  form-group text-primary border-bottom border-primary">
                                Appointment
                            </div>


                            <label for="inputEmail3" class="col-sm-3  col-form-label">Date</label>
                            <div class="col-sm-9 mb-2">
                                <b-form-datepicker v-model="appointment_form.appointment_date" class="form-control"></b-form-datepicker>
                            </div>
                           
                            <label for="inputEmail3" class="col-sm-3  col-form-label">Department</label>
                            <div class="col-sm-9 mb-2">
                                <select class="custom-select" id="selectpos" v-model="appointment_form.department" :class="errors.department ? 'is-invalid' : ''">
                                    <option value="" disabled>Select Department</option>
                                    <option v-for="(department, index) in available_department" :key="index" :value="department">{{ department }}</option>
                                </select>
                                <div class="invalid-feedback" v-if="errors.department">{{errors.department[0]}}</div>
                            </div>



                            <label for="inputEmail3" class="col-sm-3  col-form-label">Person to meet</label>
                            <div class="col-sm-9 mb-2">
                                <select class="custom-select" id="selectpos" v-model="appointment_form.visiting_person" :class="errors.department ? 'is-invalid' : ''">
                                    <option value="" disabled>Select Person</option>
                                    <option v-for="(person, index) in available_person" :key="index" :value="person.id">{{person.name}}</option>
                                </select>
                                <div class="invalid-feedback" v-if="errors.department">{{errors.department[0]}}</div>
                            </div>


                         

                       



                            <button type="submit" class="btn btn-primary col-12">Submit</button>
                    
                        </div> 
                            
                    </form>
                </div>
            </div>
        </b-modal>


        <b-modal centered size="md"  ref="qrCodeMdl" hide-footer title="QR Code">
            <div class="d-block">
                <div class="row col mb-2 justify-content-center qrcode" > 
                    <qr-code ref="printcontent" :text="qrData" class="" style="cursor: pointer; width:50%; margin-left: auto;margin-right: auto;"></qr-code>
                </div>
               
            </div>
            <div class="text-right">
                <button type="button" class="btn btn-secondary" v-on:click="hideQrMdl">
                    Cancel
                </button>
            </div>
              
        </b-modal>


        
    </div>
</template>

<script>
import * as appointmentService from '../../../services/appointment_service';


export default {
    data() {
        return {
            appointments_data: {},
            appointment_form: {
                cough_check_no: '',
                cough_check_yes: '',
                shortness_check_no: '',
                shortness_check_yes: '',

                appointment_date: '',
                department: '',
                visiting_person: '',
                selected_day : '',
                schedule_id : '',
                selected_year: '',
                
            },

            
            schedules : {},
            available_schedule: {},
            available_department: {},
            available_person: {},
            available_days: {},


            qrData: '',
            errors: '',
        }    
    },
    watch:{
        'appointment_form.appointment_date': {
            handler: function(newVal, oldVal) {
                this.appointment_form.department = ''
                this.appointment_form.visiting_person = ''
                this.available_schedule = {}
                this.available_department = {}
                this.available_person = {}
                this.available_days = {}

                var sel_date = new Date(newVal).getFullYear()
                var day_name = ['Sunday', 'Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date(newVal).getDay()]
                this.appointment_form.selected_day = day_name
                const schedules_data = this.schedules;
                const department = []
                const available = []
                this.appointment_form.selected_year = sel_date;
                $.each(schedules_data, function(key, value){
                    if(value.school_year == sel_date){
                        if(value.day == day_name) {
                            department.push(value.employee.department)
                            available.push(value)
                        }  
                      
                    }
                })
                let unique_department = [...new Set(department)];

                this.available_department = unique_department
                this.available_schedule = available
             
            },
            deep: true
        },

        'appointment_form.department': {
            handler: function(newVal, oldVal) {
                this.appointment_form.visiting_person = ''
                const sel_department = newVal
                const available_sched = this.available_schedule;
                var sel_day = this.appointment_form.selected_day
                const persons = []
                $.each(available_sched, function(key, value){
                    if(value.employee.department == sel_department){
                        if(value.day == sel_day) {
                            persons.push({'id': value.employee.id, 'name': value.employee.fname, 'schedule_id': value.id, 'schedule_day': value.day})
                        }
                    }
                })
                let unique_persons = [...new Map(persons.map(item => [item['id'], item])).values()]
                this.available_person = unique_persons;

            },
            deep: true
        },

        'appointment_form.visiting_person':{
            handler: function(newVal, oldVal) {
                const sel_person = newVal
                const schedules_data = this.schedules;
                const available_per_sched = this.available_schedule
                const sel_year = this.appointment_form.selected_year
                var sel_schedule_id = '';
                var sel_day = this.appointment_form.selected_day
                
                console.log(sel_person)
                $.each(schedules_data, function(key, value){ 
                    if(value.school_year == sel_year){

                        if(value.day == sel_day){
                            
                            if(value.employee_id == sel_person){
                                sel_schedule_id = value.id
                            }
                        }
                        
                    }
                })

                this.appointment_form.schedule_id = sel_schedule_id;
            },
            deep: true

        },

      
     

        'appointment_form.cough_check_no':{
            handler: function(newVal, oldVal) {
                if(newVal == true){
                    // this.appointment_form.cough_check_no = 1
                    this.appointment_form.cough_check_yes = false
                } 
                if(newVal == false) {
                    this.appointment_form.cough_check_no = ""
                    // this.appointment_form.cough_check_yes = ""
                }
            },
            deep: true
        },

        'appointment_form.cough_check_yes':{
            handler: function(newVal, oldVal) {
                if(newVal == true){
                    // this.appointment_form.cough_check_yes = 1
                    this.appointment_form.cough_check_no = false
                }  
                if(newVal == false) {
                    this.appointment_form.cough_check_yes = ""
                    // this.appointment_form.cough_check_no = ""
                }
                
            },
            deep: true
        },


        'appointment_form.shortness_check_no':{
            handler: function(newVal, oldVal) {
                if(newVal == true){
                    this.appointment_form.shortness_check_yes = 0
                }
            },
            deep: true
        },

        'appointment_form.shortness_check_yes':{
            handler: function(newVal, oldVal) {
                if(newVal == true){
                    this.appointment_form.shortness_check_no = 0
                }
            },
            deep: true
        },

      

    },

    methods: {

        getAllSchedules: async function(){
            try{
                const response = await appointmentService.get_all_schedules();
                this.schedules = response.data;
            } catch(e){

            }
        },

        getAllAppointments: async function(){
            try{ 
                const response = await appointmentService.get_all_appointments();
                this.appointments_data = response.data
            } catch(e) {

            }
        },

        addAppointmentBtn(){
            this.$refs.addAppointmentMdl.show()
        },


        addAppointment: async function(){
            try{ 
                //   var current_page = this.guests_data.current_page;

                this.$Progress.start()
                let formData = new FormData();
                formData.append("cough_check_no", this.appointment_form.cough_check_no);
                formData.append("cough_check_yes", this.appointment_form.cough_check_yes);
                formData.append("shortness_check_no", this.appointment_form.shortness_check_no);
                formData.append("shortness_check_yes", this.appointment_form.shortness_check_yes);

                formData.append("appointment_date", this.appointment_form.appointment_date);
                formData.append("department", this.appointment_form.department);
                formData.append("visiting_person", this.appointment_form.visiting_person);
                formData.append("selected_day", this.appointment_form.selected_day);
                formData.append("schedule_id", this.appointment_form.schedule_id);
                formData.append("selected_year", this.appointment_form.selected_year);


                const response = await appointmentService.create_appointment(formData);   

                // this.loadPage(current_page);        
                this.getAllSchedules();
                this.$refs.addAppointmentMdl.hide();
                Toast.fire({
                    icon: "success",
                    title: "Successfully added!"
                });
            } catch(e) {

            }
        },

        showQrCode(data){
            const appointment_data = {...data}
            this.qrData = appointment_data.appointment_code;
            this.$refs.qrCodeMdl.show()
        },

        hideQrMdl(){
            this.$refs.qrCodeMdl.hide();
        },

    },
    mounted(){
        this.getAllSchedules();
        this.getAllAppointments();
    },


}
</script>