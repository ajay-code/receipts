<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
	public $timestamps = false;
   	protected $fillable = [
   		'font', 'font_size', 'page_width', 'page_height', 'top_sender_id','left_sender_id','top_sender', 
   		'left_sender', 'top_receiver',
   		'left_receiver', 'left_product', 'top_product', 'top_date', 'left_date', 
	   	'left_amount', 'top_amount',
	];

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
