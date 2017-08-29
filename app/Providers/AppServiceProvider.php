<?php

namespace App\Providers;

use Hash;
use Validator;
use App\Observers\UserObserver;
use App\Observers\AdminObserver;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{ 
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        \App\User::observe(UserObserver::class);
        \App\Admin::observe(AdminObserver::class);

        Validator::extend('old_password', function($attribute, $value, $parameters, $validator) {
            return Hash::check($value, auth()->user()->password);
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        if ($this->app->environment() == 'local') {
            $this->app->register('Hesto\MultiAuth\MultiAuthServiceProvider');
        }
    }
}
