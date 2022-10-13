<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $fillable = [
        'user_id',
        'school_num',
        'fname',
        'mname',
        'lname',
        'gender',
        'birthday',
        'age',
        'year_started',
        'department',
        'title',
    ];


    public function user(){
        return $this->belongsTo('App\User', 'user_id', 'id');
    }


    public function schedules(){
        return $this->hasMany('App\Schedule', 'employee_id', 'id');
    }

}
