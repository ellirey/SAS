<?php

namespace App\Http\Controllers;

use App\Appointment;
use App\Schedule;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $appointments = Appointment::with('schedule', 'schedule.employee')->paginate(5);

        return $appointments;
    }

    public function getAllSchedules()
    {
        $schedules = Schedule::with('employee')->get();
        return $schedules;
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validateData = $request->validate([
            // 'cough_check_no'           =>  'boolean','required_if:cough_check_yes,0',

            'cough_check_yes'           =>  'required_without:cough_check_no',
            'cough_check_no'           =>  'required_without:cough_check_yes',
            // 'cough_check_no'           =>  'required_without:cough_check_yes,null'
            // 'cough_check_no'              =>      'boolean','required_if:cough_check_yes,0',
            // 'cough_check_yes'             =>      ['required_without: cough_check_no', 'in:true'],

            // 'birthday'              =>      ['required'],
            // 'age'                   =>      ['required', 'integer'  ],
            // 'gender'                =>      ['required'],
            // 'school_num'            =>      ['required'],
            // 'department'            =>      ['required'],
            // 'title'                 =>      ['required'],
        ]);

        return $request->all();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function show(Appointment $appointment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function edit(Appointment $appointment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Appointment $appointment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Appointment $appointment)
    {
        //
    }
}
