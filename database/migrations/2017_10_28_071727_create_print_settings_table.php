<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePrintSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('print_settings', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 190)->unique();

            // Font
            $table->enum('font', ['courier', 'times-roman', 'arial'])->default('arial');
            $table->integer('font_size')->default(0);

            // Page
            $table->integer('page_width')->default(0);
            $table->integer('page_height')->default(0);

            // UserId
            $table->integer('top_sender_id')->default(0);
            $table->integer('left_sender_id')->default(0);

            // Sender
            $table->integer('top_sender')->default(0);
            $table->integer('left_sender')->default(0);

            // Receiver
            $table->integer('top_receiver')->default(0);
            $table->integer('left_receiver')->default(0);

            // Product
            $table->integer('left_product')->default(0);
            $table->integer('top_product')->default(0);

            // Date
            $table->integer('top_date')->default(0);
            $table->integer('left_date')->default(0);

            // Ammount
            $table->integer('top_amount')->default(0);
            $table->integer('left_amount')->default(0);

            // PostCode
            $table->integer('top_postcode')->default(0);
            $table->integer('left_postcode')->default(0);

            // Phone
            $table->integer('top_phone')->default(0);
            $table->integer('left_phone')->default(0);

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
        Schema::dropIfExists('print_settings');
    }
}
