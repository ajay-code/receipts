<?php

namespace App;

use App\Receipt;
use App\Traits\Uuids;
use App\Traits\CanExpire;
use Laravel\Scout\Searchable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable, Searchable, Uuids, CanExpire;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'uid', 'user_id', 'email', 'password', 'type', 'expire_at', 'varified', 'activated'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['expire_at'];

    /**
     * Get the index name for the model.
     *
     * @return string
     */
    public function searchableAs()
    {
        return 'users_index';
    }

    /**
     * Get the indexable data array for the model.
     *
     * @return array
     */
    public function toSearchableArray()
    {
        $array = $this->toArray();

        $array = array_only($array, ['id', 'name', 'email', 'uid']);

        return $array;
    }

    /**
     * Get the name of key used for uuid
     *
     * @return array
     */

    protected function uid(){
        return 'uid';
    }

    /**
    * Relationships
    */

    // Belongs To Relationships
    public function manufacturer(){
        return $this->belongsTo(User::class, 'user_id')->where('type', 'manufacturer');
    }

    public function wholesaler(){
        return $this->belongsTo(User::class, 'user_id')->where('type', 'wholesaler');
    }

    public function retailer(){
        return $this->belongsTo(User::class, 'user_id')->where('type', 'retailer');
    }

    // Has Relationships
    public function settings(){
        return $this->hasOne(Setting::class, 'user_id');
    }
    public function wholesalers(){
        return $this->hasMany(User::class)->where('type', 'wholesaler');
    }

    public function retailers(){
        return $this->hasMany(User::class)->where('type', 'retailer');
    }

    public function users(){
        return $this->hasMany(User::class)->where('type', 'user');
    }

    public function receipts(){
        return $this->hasMany(Receipt::class);
    }

    public function references(){
        return $this->hasMany(Reference::class, 'creator_id')->where('creator_type', get_class($this));
    }


}
