<?php

namespace App\Policies;

use Auth;
use App\User;
use App\Receipt;
use Illuminate\Auth\Access\HandlesAuthorization;

class ReceiptPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the receipt.
     *
     * @param  \App\User  $user
     * @param  \App\Receipt  $receipt
     * @return mixed
     */
    public function view(User $user, Receipt $receipt)
    {
        if ($user->id == $receipt->user_id) {
            return true;
        } elseif ($user->user_id == $receipt->user_id) {
            return true;
        }
        return false;
    }

    /**
     * Determine whether the user can create receipts.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return false;
        return Auth::check();
    }

    /**
     * Determine whether the user can update the receipt.
     *
     * @param  \App\User  $user
     * @param  \App\Receipt  $receipt
     * @return mixed
     */
    public function update(User $user, Receipt $receipt)
    {
        return $user->id == $receipt->user_id;
    }

    /**
     * Determine whether the user can delete the receipt.
     *
     * @param  \App\User  $user
     * @param  \App\Receipt  $receipt
     * @return mixed
     */
    public function delete(User $user, Receipt $receipt)
    {
        return false;
    }
}
