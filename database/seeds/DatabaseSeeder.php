<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	\App\User::create([
    		'name' => 'Ajay Singh',
    		'email' => 'ajay10mar96@gmail.com',
    		'password' => bcrypt('123456'),
    		'type' => 'manufacturer',
    	]);

    	\App\Admin::create([
    		'name' => 'admin',
    		'username' => 'admin',
    		'password' => bcrypt('admin'),
    	]);
    }
}
