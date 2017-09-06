<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReceiptsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('receipts', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->string('sender_id')->nullable();
            $table->string('sender_name');
            $table->string('sender_address');
            $table->string('sender_postcode')->nullable();
            $table->string('sender_phone');
            $table->string('sender_email')->nullable();

            $table->string('receiver_name');
            $table->string('receiver_address');
            $table->string('receiver_postcode')->nullable();
            $table->string('receiver_phone');
            $table->string('receiver_email')->nullable();
            $table->string('receiver_product');
            $table->integer('amount');
            
            $table->string('tracking')->nullable();

            $table->timestamps();

             $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('receipts');
    }
}
