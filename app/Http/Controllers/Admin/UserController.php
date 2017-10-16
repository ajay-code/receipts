<?php

namespace App\Http\Controllers\Admin;

use App\User;
use App\Receipt;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use App\Transformers\UserWithReceiptsInfo;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;

class UserController extends Controller
{
    /**
     * Display users
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.users.index');
    }

    /**
     * Display receipts of the user
     *
     * @param \App\User $user
     * @return \Illuminate\Http\Response
     */
    public function user_receipts(User $user)
    {
        return view('admin.users.receipts', compact('user'));
    }

    /**
     * Get lsist of users
     *
     * @param \Illuminate\Http\Request $request
     * @return array $users
     */
    public function users_paginated_api(Request $request)
    {
        $search = $request->search;
        $records = $request->records ? $request->records : 100;
        $order = $request->order ? $request->order : 'latest';

        if ($search) {
            if ($order == 'latest') {
                $users = User::search($search)->paginate($records);
            } else {
                $users = User::search($search)->paginate($records);
            }
        } else {
            if ($order == 'latest') {
                $users = User::latest()->paginate($records);
            } else {
                $users = User::oldest()->paginate($records);
            }
        }

        return fractal()
                ->collection($users)
                ->transformWith(new UserWithReceiptsInfo)
                ->paginateWith(new IlluminatePaginatorAdapter($users))
                ->toArray();
        return $users;
    }

    /**
     * Get users and receipt info
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\User $user
     * @return array $receipts
     */
    public function users_receipts_paginated_api(Request $request, User $user)
    {
        // return $request->all();
        $search = $request->search;
        $records = $request->records ? $request->records : 100;
        $order = $request->order ? $request->order : 'latest';

        if ($search) {
            if ($order == 'latest') {
                $receipts = Receipt::search($search)->where('user_id', $user->id)->paginate($records);
            } else {
                $receipts = Receipt::search($search)->where('user_id', $user->id)->paginate($records);
            }
        } else {
            if ($order == 'latest') {
                $receipts = Receipt::latest()->where('user_id', $user->id)->paginate($records);
            } else {
                $receipts = Receipt::oldest()->where('user_id', $user->id)->paginate($records);
            }
        }

        return $receipts;
    }

    /**
     * Activate user
     *
     * @param \App\User $user
     * @return string 'success'
     */

    public function users_activation_api(User $user)
    {
        $user->update([
            'activated' => true
        ]);

        return 'success';
    }

    /**
     * Deactivate user
     *
     * @param \App\User $user
     * @return string 'success'
     */
    public function users_deactivation_api(User $user)
    {

        $user->update([
            'activated' => false
        ]);

        return 'success';
    }

    /**
     * Update user
     *
     * @param \App\User $user
     * @return string 'success'
     */
    public function update_api(Request $request, User $user)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email',
            'type' => [
                'required',
                Rule::in(['user', 'retailer', 'wholesaler', 'manufacturer']),
            ],
            'expire_at' => 'required',
        ]);

        $user->update([
            'name' => $request->name,
            'eamil' => $request->email,
            'type' => $request->type,
            'expire_at' => $request->expire_at,
        ]);

        return 'success';
    }
}
