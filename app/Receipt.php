<?php

namespace App;

use App\User;
use Laravel\Scout\Searchable;
use Illuminate\Database\Eloquent\Model;

class Receipt extends Model
{
    use Searchable;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
    'sender_name', 'sender_address', 'sender_postcode', 'sender_phone', 'sender_email', 
    'receiver_name', 'receiver_address', 'receiver_postcode', 'receiver_phone', 'receiver_email', 'receiver_product', 'amount',
    'tracking'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
    ];

    /**
     * Get the index name for the model.
     *
     * @return string
     */
    public function searchableAs()
    {
        return 'receipts_index';
    }

    /**
     * Get the indexable data array for the model.
     *
     * @return array
     */
    public function toSearchableArray()
    {
        $array = $this->toArray();
        $array = array_except($array, 'sender_address', 'sender_postcode','sender_address','receiver_address', 'receiver_postcode','receiver_address');
        return $array;
    }
   



    // Relations
    public function user(){
    	return $this->belongsTo(User::class);
    }
}
