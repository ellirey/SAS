<?php

namespace App\Http\Controllers;

use App\Student;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $student = Student::with('user')->paginate(2);

        return $student;
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
            'age'                   =>      ['required', 'integer'],
            'gender'                =>      ['required'],
            'school_num'            =>      ['required'],
            'department'            =>      ['required'],
            'course'                =>      ['required'],
        ]);


        $user = User::create([
            'email'         =>  $request->email,
            'username'      =>  $request->username,
            'password'      =>  Hash::make($request->password),
            'role'          =>  'student'
        ]);

        


        $student = Student::create([
            'user_id'       =>  $user->id,
            'username'      =>  $request->job_specialization,
            'password'      =>  Hash::make($request->password),
          
            'fname'         =>  $request->fname,
            'mname'         =>  $request->mname,
            'lname'         =>  $request->lname,
            'birthday'      =>  $request->birthday,
            'age'           =>  $request->age,
            'gender'        =>  $request->gender,
            'school_num'    =>  $request->school_num,
            'department'    =>  $request->department,
            'course'        =>  $request->course,

        ]);

        if($student->save()) {
            return response()->json([
                'message'       =>      'Student created successfully!',
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
     * Display the specified resource.
     *
     * @param  \App\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function show(Student $student)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function edit(Student $student)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Student $student)
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
                'course'                =>      ['required'],
      
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
                'course'                =>      ['required'],
            ]);
            $password = $request->password;

        }

        $user->username =   $request->username;
        $user->email    =   $request->email;
        $user->password =   $password;
        $user->save();


        $student->fname        =   $request->fname;
        $student->mname        =   $request->mname;
        $student->lname        =   $request->lname;
        $student->birthday     =   $request->birthday;
        $student->age          =   $request->age;
        $student->gender       =   $request->gender;
        $student->school_num   =   $request->school_num;
        $student->department   =   $request->department;
        $student->course       =   $request->course;

        if($student->save()) {
            return response()->json([
                'message'       =>      'Student Information updated successfully!',
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
     * @param  \App\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function destroy(Student $student)
    {
        $user = User::where('id', $student->user_id)->first();
        $user->students()->delete();
        if($user->delete()) {
            return response()->json([
                'message'       =>      'Student data deleted successfully!',
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
