<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    protected $fillable = [
        'appointment_code',
        'schedule_id',
        'cough_check_no',
        'cough_check_yes',
        'shortness_check_yes',
        'appointment_date',
        'selected_day',
        'selected_year',
        'department',
        'visiting_person',
        'status',
    ];

    public function schedule(){
        return $this->belongsTo('App\Schedule', 'schedule_id', 'id');
    }
    
}
