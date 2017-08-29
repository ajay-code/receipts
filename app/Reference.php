<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reference extends Model
{
    /*
		Model Variables
	*/
	public $timestamps = false;
	
	protected $guarded = [
		'id'
    ];


    /**
    * Relationships
    */

    // Belongs To Relationships

    public function creator(){
    	if($this->creator_type == 'App\User'){
    		return $this->belongsTo(User::class, 'creator_id');
    	}elseif ($this->creator_type == 'App\Admin') {
    		return $this->belongsTo(Admin::class, 'creator_id');
    	}
    }

	
}
