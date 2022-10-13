<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    protected $fillable = [
        'id',
        'employee_id',
        'school_year',
       
    ];
 
    public function employee(){
        return $this->belongsTo('App\Employee', 'employee_id', 'id');
    }


    public function days()
    {
        return $this->belongsToMany(Day::class)->withPivot('schedule_id');
    }
}
