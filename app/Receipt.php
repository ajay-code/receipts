<?php

namespace App;

use App\User;
use Laravel\Scout\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Receipt extends Model
{
    use Searchable, SoftDeletes;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
    'sender_name', 'sender_id', 'sender_address', 'sender_postcode', 'sender_phone', 'sender_email',
    'receiver_name', 'receiver_address', 'receiver_postcode', 'receiver_phone', 'receiver_email', 'receiver_product', 'amount', 'product_cost', 'postage_cost',
    'tracking', 'remark'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
    ];

    protected $dates = ['deleted_at'];

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
        $array = array_except($array, 'sender_address', 'sender_postcode', 'sender_address', 'receiver_address', 'receiver_postcode', 'receiver_address');
        return $array;
    }
   



    // Relations
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
