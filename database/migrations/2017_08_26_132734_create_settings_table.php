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

            // Page
            $table->decimal('page_width')->default(21);
            $table->decimal('page_height')->default(10);

            // UserId
            $table->decimal('top_sender_id')->default(0.5);
            $table->decimal('left_sender_id')->default(4);

            // Sender
            $table->decimal('top_sender')->default(1);
            $table->decimal('left_sender')->default(4);

            // Receiver
            $table->decimal('top_receiver')->default(6);
            $table->decimal('left_receiver')->default(4);

            // Product
            $table->decimal('left_product')->default(11);
            $table->decimal('top_product')->default(3.5);

            // Date
            $table->decimal('top_date')->default(1);
            $table->decimal('left_date')->default(14);

            // Ammount
            $table->decimal('left_amount')->default(3);
            $table->decimal('top_amount')->default(14);

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
