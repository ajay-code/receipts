<?php

namespace App\Http\Controllers\Admin;

use DB;
use App\User;
use App\Receipt;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MainController extends Controller
{
    /**
     * Display dashboard
     * 
     * @return \Illuminate\Http\Response 
     */
    public function index()
    {
        $receiptsCount = Receipt::count();
        $usersCount = User::count();
        return view('admin.home', compact('usersCount', 'receiptsCount'));
    }

    /**
     * Get dashboard data
     * 
     * @param \Illuminate\Http\Request
     * @return array $data 
     */
    public function dashboard_api(Request $request)
    {
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
        if($maxAmount) $data['topSelling'] = Receipt::where('amount', $maxAmount)->first()->receiver_product;

		$data['totalReceipts'] = Receipt::whereBetween('created_at', [$from, $to])->count();
		$data['totalUsers'] = User::whereBetween('created_at', [$from, $to])->count();
		$data['totalManufactures'] = User::whereBetween('created_at', [$from, $to])->where('type', 'manufacturer')->count();
		$data['totalWholesalers'] = User::whereBetween('created_at', [$from, $to])->where('type', 'wholesaler')->count();
		$data['totalRetailers'] = User::whereBetween('created_at', [$from, $to])->where('type', 'retailer')->count();
		$data['totalNormalUsers'] = User::whereBetween('created_at', [$from, $to])->where('type', 'user')->count();
        $data['totalExpiredUsers'] = User::where('expire_at', '<' ,Carbon::now()->toDateString())->count();
        
        $receipts = Receipt::whereBetween('created_at', [$from, $to])->select(DB::raw('*, sum(amount) as total'))->orderBy('total', 'desc')->groupBy('user_id')->first();
        if($receipts) $topUser = $receipts->user;
		if(isset($topUser)) $data['topUser'] = $topUser->name;
        
        $data['newRegistrations'] = User::whereBetween('created_at', [$from,$to])->count();
        
        return $data;
    }
}