<?php
namespace App\Traits;
use Uuid;
trait Uuids
{

    /**
     * Boot function from laravel.
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->{$model->uid()} = uniqid(time());
        });
    }
}
