<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppointmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();

            $table->bigInteger('schedule_id')->unsigned();
            $table->foreign('schedule_id')->references('id')->on('schedules');

            $table->string('appointment_code');
            $table->boolean('cough_check_no');
            $table->boolean('cough_check_yes');
            $table->boolean('shortness_check_no');
            $table->boolean('shortness_check_yes');

            $table->date('appointment_date');
            $table->string('selected_day');
            $table->string('selected_year');
            $table->string('department');
            $table->string('visiting_person');

            $table->boolean('status');




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
        Schema::dropIfExists('appointments');
    }
}
