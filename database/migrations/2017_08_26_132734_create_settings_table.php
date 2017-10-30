<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('admin_id')->nullable();
            $table->integer('user_id')->nullable();

            // Font
            $table->enum('font', ['courier', 'times-roman', 'arial'])->default('arial');
            $table->integer('font_size')->default(12);

            // Page
            $table->integer('page_width')->default(210);
            $table->integer('page_height')->default(100);

            // UserId
            $table->integer('top_sender_id')->default(5);
            $table->integer('left_sender_id')->default(40);

            // Sender
            $table->integer('top_sender')->default(10);
            $table->integer('left_sender')->default(40);

            // Receiver
            $table->integer('top_receiver')->default(60);
            $table->integer('left_receiver')->default(40);

            // Product
            $table->integer('left_product')->default(110);
            $table->integer('top_product')->default(35);

            // Date
            $table->integer('top_date')->default(10);
            $table->integer('left_date')->default(140);

            // Ammount
            $table->integer('top_amount')->default(42);
            $table->integer('left_amount')->default(110);

            // PostCode
            $table->integer('top_postcode')->default(0);
            $table->integer('left_postcode')->default(0);

            // Phone
            $table->integer('top_phone')->default(0);
            $table->integer('left_phone')->default(0);

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('settings');
    }
}
