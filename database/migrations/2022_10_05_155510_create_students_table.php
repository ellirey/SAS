<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users');

            $table->string('school_num')->length(100);
            $table->string('fname')->length(100);
            $table->string('mname')->length(100);
            $table->string('lname')->length(100);
            $table->string('gender')->length(6);
            $table->date('birthday');
            $table->integer('age')->length(2);
            $table->string('course')->length(100);
            $table->string('department')->length(100);







            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('students');
    }
}
