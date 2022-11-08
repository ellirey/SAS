<?php

namespace App\Http\Controllers;

use App\Guest;
use App\User;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;


class GuestController extends Controller
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
        $guests = Guest::with('user')->paginate(2);

        return $guests;
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
            'occupation'            =>      ['required'],
        ]);


        $user = User::create([
            'email'         =>  $request->email,
            'username'      =>  $request->username,
            'password'      =>  Hash::make($request->password),
            'role'          =>  'guest'
        ]);

        $latestID = Guest::latest('id')->first();

        if($latestID == null) {
            $guest_num = 'GST-'.str_pad(1, 4, '0', STR_PAD_LEFT);
        } else {
            $guest_num = 'GST-'.str_pad($latestID->id+1, 4, '0', STR_PAD_LEFT);
        }


        $guest = Guest::create([
            'user_id'        =>  $user->id,
            // 'username'      =>  $request->job_specialization,
            // 'password'      =>  Hash::make($request->password),
          
            'fname'         =>  $request->fname,
            'mname'         =>  $request->mname,
            'lname'         =>  $request->lname,
            'birthday'      =>  $request->birthday,
            'age'           =>  $request->age,
            'gender'        =>  $request->gender,
            'occupation'    =>  $request->occupation,
            'guest_code'    =>  $guest_num,

        ]);

        if($guest->save()) {
            return response()->json([
                'message'       =>      'Guest created successfully!',
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
     * @param  \App\Guest  $guest
     * @return \Illuminate\Http\Response
     */
    public function show(Guest $guest)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Guest  $guest
     * @return \Illuminate\Http\Response
     */
    public function edit(Guest $guest)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Guest  $guest
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Guest $guest)
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
                'occupation'            =>      ['required'],
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
                'occupation'            =>      ['required'],
            ]);

            $password = $request->password;

        }


        $user->username =   $request->username;
        $user->email    =   $request->email;
        $user->password =   Hash::make($request->password);
        $user->save();

        $guest->fname        =   $request->fname;
        $guest->mname        =   $request->mname;
        $guest->lname        =   $request->lname;
        $guest->birthday     =   $request->birthday;
        $guest->age          =   $request->age;
        $guest->gender       =   $request->gender;
        $guest->occupation   =   $request->occupation;

        if($guest->save()) {
            return response()->json([
                'message'       =>      'Guest Information updated successfully!',
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
     * @param  \App\Guest  $guest
     * @return \Illuminate\Http\Response
     */
    public function destroy(Guest $guest)
    {
        $user = User::where('id', $guest->user_id)->first();
        $user->guests()->delete();
        if($user->delete()) {
            return response()->json([
                'message'       =>      'Guest data deleted successfully!',
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
