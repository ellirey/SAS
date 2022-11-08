<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Day extends Model
{
    protected $fillable = [
        'id',
        'name_day',
    ];

    // public function schedules()
    // {
    //     return $this->belongsToMany(Schedule::class)->withPivot('day_id');
    // }



    // public function schedule(){
    //     return $this->belongsTo('App\Schedule', 'schedule_id', 'id');
    // }


}
