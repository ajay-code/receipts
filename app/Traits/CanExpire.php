<?php
namespace App\Traits;
use Carbon\Carbon;
trait CanExpire
{

    /**
     * Boot function from laravel.
     */
    protected static function bootCanExpire()
    {

        static::creating(function ($model) {
            $model->expire_at = Carbon::now()->addMonth();
        });
    }
}
