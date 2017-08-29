<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->uuid('uid');
            $table->uuid('user_id')->nullable();
            $table->string('name');
            $table->string('email', 100)->unique();
            $table->string('password')->nullable();
            $table->enum('type', ['user', 'retailer', 'wholesaler', 'manufacturer'])->default('user');
            $table->boolean('verified')->default(true);
            $table->boolean('activated')->default(true);

            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
