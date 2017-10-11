<?php

namespace App\Http\Controllers\Admin;

use App\User;
use App\Receipt;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MainController extends Controller
{
    public function index(){
    	$receiptsCount = Receipt::count();
    	$usersCount = User::count();
    	return view('admin.home', compact('usersCount', 'receiptsCount'));
	}

	public function dashboard_api(Request $request){
		

		return [

		];
	}
	
	
}
