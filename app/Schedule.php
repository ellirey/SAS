<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    protected $fillable = [
        'id',
        'employee_id',
        'day',
        'school_year',
        'status'
       
    ];
 
    public function employee(){
        return $this->belongsTo('App\Employee', 'employee_id', 'id');
    }

    public function appointments(){
        return $this->hasMany('App\Appointment', 'schedule_id', 'id');
    }

    // public function day(){
    //     return $this->hasOne('App\Day', 'schedule_id', 'id');
    // }


    // public function days()
    // {
    //     return $this->belongsToMany(Day::class)->withPivot('schedule_id');
    // }
}
