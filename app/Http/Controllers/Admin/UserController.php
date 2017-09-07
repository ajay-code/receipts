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
    
    public function index(){
        return view('admin.users.index');
    }

    public function user_receipts(User $user){
        return view('admin.users.receipts', compact('user'));
    }

    

    // Returns array of saved users
    public function users_paginated_api(Request $request){
        $search = $request->search;
        $records = $request->records ? $request->records : 10;
        $order = $request->order ? $request->order : 'latest';

        if($search){
            if($order == 'latest'){
                $users = User::search($search)->paginate($records);
            }else{
                $users = User::search($search)->paginate($records);
            }
        }else{
            if($order == 'latest'){
                $users = User::latest()->paginate($records);
            }else{
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

    // Returns array of saved users with receipt info
    public function users_receipts_paginated_api(Request $request, User $user){
        // return $request->all();
        $search = $request->search;
        $records = $request->records ? $request->records : 10;
        $order = $request->order ? $request->order : 'latest';

        if($search){
            if($order == 'latest'){
                $receipts = Receipt::search($search)->where('user_id', $user->id)->paginate($records);
            }else{
                $receipts = Receipt::search($search)->where('user_id', $user->id)->paginate($records);
            }
        }else{
            if($order == 'latest'){
                $receipts = Receipt::latest()->where('user_id', $user->id)->paginate($records);
            }else{
                $receipts = Receipt::oldest()->where('user_id', $user->id)->paginate($records);
            }
        }

        return $receipts;

        // return fractal()
        //         ->collection($users)
        //         ->transformWith(new UserWithReceiptsInfo)
        //         ->paginateWith(new IlluminatePaginatorAdapter($users))
        //         ->toArray();
    }

    public function users_activation_api(User $user){
        $user->update([
            'activated' => true
        ]);

        return 'success';

    }

    public function users_deactivation_api(User $user){

        $user->update([
            'activated' => false
        ]);

        return 'success';
    }

    public function update_api(Request $request, User $user){
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
