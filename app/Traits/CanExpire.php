<?php
namespace App\Traits;
use Carbon\Carbon;
trait CanExpire
{

    /**
     * Boot function from laravel.
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->expire_at = Carbon::now()->addMonth();
        });
    }
}
