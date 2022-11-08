<?php

namespace App\Http\Controllers;

use App\Employee;
use App\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class EmployeeController extends Controller
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
        $employees = Employee::with('user')->paginate(2);

        return $employees;
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
            'email'                 =>      ['required', 'string', 'email', 'unique:users'],
            'username'              =>      ['required', 'string' ,'max:255', 'regex:/^[^(\|\]~`!%^&*=};:?><’)]*$/', 'unique:users'],
            'password'              =>      ['required', 'string', 'min:8', 'confirmed'],
            'password_confirmation' =>      ['required', 'string', 'min:8', 'same:password'],

            'fname'                 =>      ['required', 'string' ,'max:255', 'regex:/^[^(\|\]~`!%^&*=};:?><’)]*$/'],
            'mname'                 =>      ['required', 'string' ,'max:255', 'regex:/^[^(\|\]~`!%^&*=};:?><’)]*$/'],
            'lname'                 =>      ['required', 'string' ,'max:255', 'regex:/^[^(\|\]~`!%^&*=};:?><’)]*$/'],
            'birthday'              =>      ['required'],
            'age'                   =>      ['required', 'integer'  ],
            'gender'                =>      ['required'],
            'school_num'            =>      ['required'],
            'department'            =>      ['required'],
            'title'                 =>      ['required'],
        ]);


        $user = User::create([
            'email'         =>  $request->email,
            'username'      =>  $request->username,
            'password'      =>  Hash::make($request->password),
            'role'          =>  'employee'
        ]);


        $employee = Employee::create([
            'user_id'        =>  $user->id,
            // 'username'      =>  $request->job_specialization,
            // 'password'      =>  Hash::make($request->password),
          
            'fname'         =>  $request->fname,
            'mname'         =>  $request->mname,
            'lname'         =>  $request->lname,
            'birthday'      =>  $request->birthday,
            'age'           =>  $request->age,
            'gender'        =>  $request->gender,
            'school_num'   =>  $request->school_num,
            'department'    =>  $request->department,
            'title'         =>  $request->title,

        ]);

        if($employee->save()) {
            return response()->json([
                'message'       =>      'Employee created successfully!',
                'status_code'   =>      201
            ], 201);
        } else {
            return response()->json([
                'message'       =>      'Some error occurred, Please try again!',
                'status_code'   =>      500
            ], 500);
        }




        return $request->all();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function show(Employee $employee)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function edit(Employee $employee)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Employee $employee)
    {

        $user = User::where('id', $request->user_id)->first();

        if($request->password == null || $request->password_confirmation == null)  {
            $validateData = $request->validate([
                'email'                 =>      ['required', 'string', 'email'],
                'username'              =>      ['required', 'string' ,'max:255', 'regex:/^[^(\|\]~`!%^&*=};:?><’)]*$/'],
                
                'fname'                 =>      ['required', 'string' ,'max:255', 'regex:/^[^(\|\]~`!%^&*=};:?><’)]*$/'],
                'mname'                 =>      ['required', 'string' ,'max:255', 'regex:/^[^(\|\]~`!%^&*=};:?><’)]*$/'],
                'lname'                 =>      ['required', 'string' ,'max:255', 'regex:/^[^(\|\]~`!%^&*=};:?><’)]*$/'],
                'birthday'              =>      ['required'],
                'age'                   =>      ['required', 'integer'],
                'gender'                =>      ['required'],
                'school_num'            =>      ['required'],
                'department'            =>      ['required'],
                'title'                 =>      ['required'],
            ]);
            $password = $user->password;

        } else {

            $validateData = $request->validate([
                'email'                 =>      ['required', 'string', 'email'],
                'username'              =>      ['required', 'string' ,'max:255', 'regex:/^[^(\|\]~`!%^&*=};:?><’)]*$/'],
                'password'              =>      ['required', 'string', 'min:8', 'confirmed'],
                'password_confirmation' =>      ['required', 'string', 'min:8', 'same:password'],

                
                'fname'                 =>      ['required', 'string' ,'max:255', 'regex:/^[^(\|\]~`!%^&*=};:?><’)]*$/'],
                'mname'                 =>      ['required', 'string' ,'max:255', 'regex:/^[^(\|\]~`!%^&*=};:?><’)]*$/'],
                'lname'                 =>      ['required', 'string' ,'max:255', 'regex:/^[^(\|\]~`!%^&*=};:?><’)]*$/'],
                'birthday'              =>      ['required'],
                'age'                   =>      ['required', 'integer'],
                'gender'                =>      ['required'],
                'school_num'            =>      ['required'],
                'department'            =>      ['required'],
                'title'                 =>      ['required'],
            ]);

            $password = $request->password;

        }


        $user->username =   $request->username;
        $user->email    =   $request->email;
        $user->password =   Hash::make($request->password);
        $user->save();

        $employee->fname        =   $request->fname;
        $employee->mname        =   $request->mname;
        $employee->lname        =   $request->lname;
        $employee->birthday     =   $request->birthday;
        $employee->age          =   $request->age;
        $employee->gender       =   $request->gender;
        $employee->school_num   =   $request->school_num;
        $employee->department   =   $request->department;
        $employee->title        =   $request->title;

        if($employee->save()) {
            return response()->json([
                'message'       =>      'Employee Information updated successfully!',
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
     * @param  \App\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function destroy(Employee $employee)
    {
        $user = User::where('id', $employee->user_id)->first();
        $user->employees()->delete();
        if($user->delete()) {
            return response()->json([
                'message'       =>      'Emplyee data deleted successfully!',
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
