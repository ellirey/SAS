<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Day extends Model
{
    protected $fillable = [
        'id',
        'name_day',
    ];

    public function schdules()
    {
        return $this->belongsToMany(Schedule::class)->withPivot('day_id');
    }



}
