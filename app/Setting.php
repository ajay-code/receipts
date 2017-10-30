<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
	public $timestamps = false;

	protected $guarded = ['id']; 

	/*
		Relations
	*/

	public function admin(){
		$this->belongsTo(Admin::class, 'user_id');
	}

	public function user(){
		$this->belongsTo(User::class, 'user_id');
	}
}
