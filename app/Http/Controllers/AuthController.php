<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Employee;
use App\Student;
use App\Guest;
use Illuminate\Support\Facades\Hash;
use Auth;
use Carbon\Carbon;

class AuthController extends Controller
{
    public function login(Request $request){ 

        $request->validate([
            'username'  => 'required|string',
            'password'    => 'required|string',
        ]);

        $fieldType = filter_var($request->username, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';
        if(!Auth::attempt([$fieldType => $request->username, 'password' => $request->password])) {
            return response()->json([
                'message' => 'Unauthorized',
                'status_code' => 401
            ], 401);
        }

        $user = $request->user();

        if($user->role == "admin"){
            $tokenPermission = $user->createToken('Personal Access Token', ['admin']);
        } elseif($user->role == "employee") {    
            $tokenPermission = $user->createToken('Personal Access Token', ['employee']);
        } elseif($user->role == "guest") {    
            $tokenPermission = $user->createToken('Personal Access Token', ['guest']);
        }else{
            $tokenPermission = $user->createToken('Personal Access Token', ['student']);
        }

        $token = $tokenPermission->token;

        if($request->remember_me) {
            $token->expires_at = Carbon::now()->addWeeks(1);
        }
        
        if($token->save()){
            return response()->json([
                'user' => $user,
                'access_token' => $tokenPermission->accessToken,
                'token_type' => 'Bearer',
                'token_scope' => $tokenPermission->token->scopes[0],
                'expires_at' => Carbon::parse($tokenPermission->token->expires_at)->toDateTimeString(),
                'status_code' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'Some error occurred, Please try again!',
                'status_code' => 500
            ], 500);
        }
    }

    public function userProfile(Request $request){
        $user_id = $request->user()->id;
        $user_data = User::where('id', $user_id)->first();

        
        if($user_data->role == "admin" || $user_data->role == "employee") {
            $user = User::with('employees')->first();
        } else if($user_data->role == "student"){
            $user = User::with('students')->first();
        } else {
            $user = User::with('guest')->first();
        }

        if($user) {
            return response()->json($user, 200);
        }

        return response()->json(
            [
                'message' => 'Not loggedin!',
                'status_code' => 500
            ], 500 
        );
    }

    public function logout(Request $request){
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Logout successfully!',
            'status_code' => 200
        ], 200);
    }

}
