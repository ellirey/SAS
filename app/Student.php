<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
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
        'department',
        'course',
    ];

    public function user(){
        return $this->belongsTo('App\User', 'user_id', 'id');
    }

}



