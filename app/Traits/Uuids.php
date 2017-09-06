<?php
namespace App\Traits;
use Uuid;
trait Uuids
{

    /**
     * Boot function from laravel.
     */
    protected static function bootUuids()
    {
        static::creating(function ($model) {
            $model->{$model->uid()} = uniqid(time());
        });
    }
}
