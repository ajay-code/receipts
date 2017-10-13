<?php

namespace App\Http\Controllers\Admin;

use App\User;
use App\Receipt;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MainController extends Controller
{
    public function index()
    {
        $receiptsCount = Receipt::count();
        $usersCount = User::count();
        return view('admin.home', compact('usersCount', 'receiptsCount'));
    }

    // Api For Dashboard Data
    public function dashboard_api(Request $request)
    {
		// return $request->all();
        $use = $request->use;
        
        $data = [
            'totalReceipts' => 0,
            'totalUsers' => 0,
            'totalManufactures' => 0,
            'totalWholesalers' => 0,
            'totalRetailers' => 0,
            'totalNormalUsers' => 0,
            'topSelling' => '',
            'totalExpiredUsers' => 0,
            'topUser' => '',
            'newRegistrations' => 0
        ];

		$from = '';
		$to = '';

        if ($use == 'Day') {
			$date = $request->date;
			$from = Carbon::createFromFormat('F d, Y', $date)->startOfDay();
			$to = Carbon::createFromFormat('F d, Y', $date)->endOfDay();
        } elseif ($use == 'Month') {
			$month = $request->month;
			$from = Carbon::createFromFormat('F Y', $month)->startOfMonth();
			$to = Carbon::createFromFormat('F Y', $month)->endOfMonth();        
        } elseif ($use == 'Year') {
			$year = $request->year;
			$from = Carbon::createFromFormat('Y', $year)->startOfYear();
			$to = Carbon::createFromFormat('Y', $year)->endOfYear(); 
		}
		
		$maxAmount = Receipt::whereBetween('created_at', [$from, $to])->max('amount');
		$data['totalReceipts'] = Receipt::count();
		$data['totalUsers'] = User::count();
		$data['totalManufactures'] = User::where('type', 'manufacturer')->count();
		$data['totalWholesalers'] = User::where('type', 'wholesaler')->count();
		$data['totalRetailers'] = User::where('type', 'retailer')->count();
		$data['totalNormalUsers'] = User::where('type', 'user')->count();
		if($maxAmount) $data['topSelling'] = Receipt::where('amount', $maxAmount)->first()->receiver_product;
		$data['totalExpiredUsers'] = User::where('expire_at', '<' ,Carbon::now()->toDateString())->count();
		$data['topUser'] = '';
		$data['newRegistrations'] = User::whereBetween('created_at', [$from,$to])->count();
        return $data;
    }
}
