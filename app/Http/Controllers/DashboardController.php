<?php

namespace App\Http\Controllers;

use PDF;
use Session;
use App\User;
use App\Receipt;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth', 'not-expired']);
    }

    /**
     * Get dashboard data.
     *
     * @param \Illuminate\Http\Request $request
     * @return array $data
     */
    public function dashboard_api(Request $request)
    {
        $use = $request->use;
        $user = auth()->user();
        $data = [
            'totalReceipts' => 0,
            'topSelling' => '',
            'totalSales' => 0,
            'totalProductCost' => 0,
            'totalDeliveryCost' => 0,
            'netProfit' => 0
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
        $maxAmount = $user->receipts()->whereBetween("created_at", [$from, $to])->max('amount');
        $data['totalReceipts'] = $user->receipts()->whereBetween("created_at", [$from, $to])->count();
        if ($maxAmount) {
            $data['topSelling'] = $user->receipts->where('amount', $maxAmount)->first()->receiver_product;
        }
        $data['totalSales'] = $user->receipts()->whereBetween("created_at", [$from, $to])->sum('amount');
        $data['totalProductCost'] = $user->receipts()->whereBetween("created_at", [$from, $to])->sum('product_cost');
        $data['totalDeliveryCost'] = $user->receipts()->whereBetween("created_at", [$from, $to])->sum('postage_cost');
        $data['netProfit'] = $data['totalSales'] - ($data['totalProductCost'] + $data['totalDeliveryCost']);

        return $data;
    }

     /**
     * Get dashboard summary.
     *
     * @param \Illuminate\Http\Request $request
     * @return array $data
     */
    public function summary_api(Request $request)
    {
        $use = $request->use;
        $user = auth()->user();
        $data = [];
        $from = '';
        $to = '';

        if ($use == 'Day') {
            $date = $request->date;
            $from = Carbon::createFromFormat('F d, Y', $date)->startOfDay();
            $to = Carbon::createFromFormat('F d, Y', $date)->endOfDay();
            $data = $this->summary_of_day($from, $to);
        } elseif ($use == 'Month') {
            $month = $request->month;
            $from = Carbon::createFromFormat('F Y', $month)->startOfMonth();
            $to = Carbon::createFromFormat('F Y', $month)->endOfMonth();
            $data = $this->summary_of_month($from, $to);
        } elseif ($use == 'Year') {
            $year = $request->year;
            $from = Carbon::createFromFormat('Y', $year)->startOfYear();
            $to = Carbon::createFromFormat('Y', $year)->endOfYear();
            $data = $this->summary_of_year($from, $to);
        }
        $date = $from;
        // return $data;
        $pdfName = 'summary-'.str_random(6).'.pdf';
        
        $path = storage_path('app/public/pdf/').$pdfName;
        $lowerUse = strtolower($use);
         $html = view("print.summary.{$lowerUse}", compact('user', 'data', 'date'));
        $html = compress_html($html);
        PDF::loadHTML($html)->save($path);

        return [
            'type' => 'url',
            'pdfName' => $pdfName
        ];
    }

    /**
     * Get summary of the day
     */
    protected function summary_of_day($from = null, $to = null)
    {
        $user = auth()->user();
        $data = $this->get_data($from, $to);
        return $data;
    }

    /**
     * Get summary of the day
     */
    protected function summary_of_month($from = null, $to = null)
    {
        $user = auth()->user();
        $data = Receipt::whereBetween('created_at', [$from, $to])->where('user_id', $user->id)->select('amount', 'product_cost', 'postage_cost', 'created_at')->get()->groupBy(function($receipt)
        {
          return $receipt->created_at->format('d-M-y');
        });

        return $data;
    }

    /**
     * Get summary of the day
     * 
     * @param \Carbon\Carbon $from
     * @param \Carbon\Carbon $to
     * @return $data 
     */
    protected function summary_of_year($from = null, $to = null)
    {
        $user = auth()->user();
        $data = Receipt::whereBetween('created_at', [$from, $to])->where('user_id', $user->id)->select('amount', 'product_cost', 'postage_cost', 'created_at')->get()->groupBy(function($receipt)
        {
          return $receipt->created_at->format('M');
        });
        return $data;
    }

    /**
     * Get data about receipts between the given dates
     *
     * @param \Carbon\Carbon $from
     * @param \Carbon\Carbon $to
     * @return $data
     */
    protected function get_data($from = null, $to = null)
    {
        $user = auth()->user();
        $data = [
            'totalReceipts' => 0,
            'topSelling' => '',
            'totalSales' => 0,
            'totalProductCost' => 0,
            'totalDeliveryCost' => 0,
            'netProfit' => 0,
        ];
        $maxAmount = $user->receipts()->whereBetween("created_at", [$from, $to])->max('amount');
        $data['totalReceipts'] = $user->receipts()->whereBetween("created_at", [$from, $to])->count();
        if ($maxAmount) {
            $data['topSelling'] = $user->receipts->where('amount', $maxAmount)->first()->receiver_product;
        }
        $data['totalSales'] = $user->receipts()->whereBetween("created_at", [$from, $to])->sum('amount');
        $data['totalProductCost'] = $user->receipts()->whereBetween("created_at", [$from, $to])->sum('product_cost');
        $data['totalDeliveryCost'] = $user->receipts()->whereBetween("created_at", [$from, $to])->sum('postage_cost');
        $data['netProfit'] = $data['totalSales'] - ($data['totalProductCost'] + $data['totalDeliveryCost']);
        return $data;
    }
}
