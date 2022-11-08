<?php

namespace App\Http\Controllers;

use App\Schedule;
use App\Employee;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class ScheduleController extends Controller
{

    public function __construct(){  
        $this->middleware('auth:api');
    }   

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $employee = Auth::user()->employee;

        $schedules = Schedule::where('employee_id', $employee->id)->paginate(5);

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
            'name_day'        =>      ['required'],
            'year'            =>      ['required'],
        ]);
        
        $schedule = Schedule::create([
            'employee_id'   =>  $request->employee_id,
            'school_year'   =>  $request->year,
            'day'           =>  $request->name_day,
            'status'        =>  1
        ]);
        $schedule->save();

        // $schedule->days()->attach($request->day_id);


        return $request->all();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Schedule  $schedule
     * @return \Illuminate\Http\Response
     */
    public function show(Schedule $schedule)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Schedule  $schedule
     * @return \Illuminate\Http\Response
     */
    public function edit(Schedule $schedule)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Schedule  $schedule
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Schedule $schedule)
    {
        $validateData = $request->validate([
            'day'               =>      ['required'],
            'school_year'               =>      ['required'],

        ]);


        $schedule->school_year = $request->school_year;
        $schedule->day         = $request->day;


        if($schedule->save()) {
            return response()->json([
                'message'       =>      'Schedule updated successfully!',
                'status_code'   =>      201
            ], 201);
        } else {
            return response()->json([
                'message'       =>      'Some error occurred, Please try again!',
                'status_code'   =>      500
            ], 500);
        }
        

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Schedule  $schedule
     * @return \Illuminate\Http\Response
     */
    public function destroy(Schedule $schedule)
    {
        if($schedule->delete()) {
            return response()->json([
                'message'       =>      'schedule data deleted successfully!',
                'status_code'   =>      201
            ], 201);
        } else {
            return response()->json([
                'message'       =>      'Some error occurred, Please try again!',
                'status_code'   =>      500
            ], 500);
        }
    }
}
