<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'auth'], function() {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');

    Route::group(['middleware' => 'auth:api'], function(){
        Route::get('logout', 'AuthController@logout');
        Route::get('user_profile', 'AuthController@userProfile');
    });
});


Route::group(['middleware' => 'auth:api'], function () {
    Route::group(['middleware' => 'scope:admin,employee'], function () {

        Route::resource('employee', 'EmployeeController');
        Route::resource('student', 'StudentController');
        Route::resource('guest', 'GuestController');
        
        Route::resource('schedule', 'ScheduleController');
        
        Route::get('/get-all-days', 'DayController@getAllDays');


    });
});


Route::resource('appointment', 'AppointmentController');
Route::get('/get-all-schedules', 'AppointmentController@getAllSchedules');
// Route::resource('student', 'StudentController');
// Route::resource('guest', 'GuestController');

// Route::resource('schedule', 'ScheduleController');

// Route::get('/get-all-days', 'DayController@getAllDays');