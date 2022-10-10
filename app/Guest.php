<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Guest extends Model
{
   

    protected $fillable = [
        'user_id',
        'guest_code',
        'fname',
        'mname',
        'lname',
        'gender',
        'birthday',
        'age',
        'occupation',
    ];

    public function user(){
        return $this->belongsTo('App\User', 'user_id', 'id');
    }
}
