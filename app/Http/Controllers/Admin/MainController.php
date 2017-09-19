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
	
	public function net_amount_api(Request $request){
		$net = $request->net;
		$total = '';
		$totalProductCost = '';
		$totalPostageCost = '';
		
		if($net == 'all'){
			$total = App\Receipt::sum('amount');
			$totalProductCost = App\Receipt::sum('product_cost');
			$totalPostageCost = App\Receipt::sum('postage_cost');
		}else{
			$total = App\Receipt::sum('amount');
			$totalProductCost = App\Receipt::sum('product_cost');
			$totalPostageCost = App\Receipt::sum('postage_cost');
		}

		return [
			'total' => $total,
			'totalProductCost' => $totalProductCost,
			'totalPostageCost' => $totalPostageCost
		];

	}
}
