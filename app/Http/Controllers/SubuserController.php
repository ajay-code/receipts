<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use App\Transformers\UserWithReceiptsInfo;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;

class SubuserController extends Controller
{
    public function __construct(){
    	$this->middleware(['auth', 'not-expired']);
    }

    /** 
     * Display Subusers
     * 
     * @return \Illuminate\Http\Response
     */
    public function index(){
    	$CurrentUser = auth()->user();

    	$CurrentUser->load(['users', 'retailers', 'wholesalers']);

    	return view('subusers.index',compact('CurrentUser'));
    }


    /**
     * Display receipts of the user
     *
     * @param \App\User $user
     * @return \Illuminate\Http\Response
     */
    public function user_receipts(User $user)
    {
        return view('subusers.receipts', compact('user'));
    }

    /**
     * Get lsist of users under current user 
     *
     * @param \Illuminate\Http\Request $request
     * @return array $users
     */
    public function users_receipts_paginated_api(Request $request, User $user){
        
        $search = $request->search;
        $records = $request->records ? $request->records : 100;
        
        $receipts = $user->receipts()->paginate($records);
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

    protected function search_for(){
        return [
                id => true,
                name => true,
                email => true,
                uid => true,
                type => true,
                expire_at => true,
                totalReceipts => true,
                create_at => true,
                activated => true
        ];
    }
}
