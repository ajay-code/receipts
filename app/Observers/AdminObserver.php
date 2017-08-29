<?php

namespace App\Observers;

use App\Admin;

class AdminObserver
{
    /**
     * Listen to the Admin created event.
     *
     * @param  Admin  $Admin
     * @return void
     */
    public function created(Admin $admin)
    {
        $admin->settings()->create([]);
    }

    /**
     * Listen to the Admin deleting event.
     *
     * @param  Admin  $Admin
     * @return void
     */
    public function deleting(Admin $Admin)
    {
        //
    }
}