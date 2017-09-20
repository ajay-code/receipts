<?php

namespace App\Http\Controllers;

use PDF;
use Excel;
use Input;
use Validator;
use App\Receipt;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ReceiptController extends Controller
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
	// Shows list of saved receipts
    public function index(){
    	return view('receipts.index');
    }

    // Create New Receipts
    public function create()
    {
        return view('create');
    }

    public function receipts_by_date(){
        return view('receipts.by-date');
    }

	// Returns array of saved receipts
    public function receipts_api(){
    	return auth()->user()->receipts()->latest()->get();
    }

    // Returns array of saved receipts
    public function receipts_paginated_api(Request $request){
        // return $request->all();  
        $search = $request->search;
        $records = $request->records ? $request->records : 100;
        $order = $request->order ? $request->order : 'latest';

        if($search){
            if($order == 'latest'){
                $receipts = Receipt::search($search)->where('user_id', auth()->user()->id)->paginate($records);
            }else{
                $receipts = Receipt::search($search)->where('user_id', auth()->user()->id)->paginate($records);
            }
        }else{
            if($order == 'latest'){
                $receipts = Receipt::where('user_id', auth()->user()->id)->latest()->paginate($records);
            }else{
                $receipts = Receipt::where('user_id', auth()->user()->id)->oldest()->paginate($records);
            }
        }
        return $receipts;
    }

	// Generate pdf for a single record to print
    public function print_single_receipt(Request $request, Receipt $receipt){
        $this->authorize('view', $receipt);
    	$user = auth()->user();
        $user->load('settings');

    	$pdfName = 'receipt-'.str_random(6).'.pdf';

        $path = storage_path('app/public/pdf/').$pdfName;
        $html = view('print.stored-receipt-print', compact('receipt', 'user'));
        $html = compress_html($html);
    	PDF::loadHTML($html)->save($path);


        return [
            'type' => 'url',
            'pdfName' => $pdfName
        ];
    }

	// Generate pdf for a multiple record to print
    public function print_multiple_receipts(Request $request){
    	$user = auth()->user();
        $user->load('settings');

    	$receipts = Receipt::find($request->receipts)->where('user_id', auth()->user()->id);

    	$pdfName = 'receipt-'.str_random(6).'.pdf';

        $path = storage_path('app/public/pdf/').$pdfName;
        $html = view('print.stored-receipts-print', compact('receipts', 'user'));
        $html = compress_html($html);
    	PDF::loadHTML($html)->save($path);

        return [
            'type' => 'url',
            'pdfName' => $pdfName
        ];
    }

    public function update(Request $request, Receipt $receipt){

        $this->authorize('update', $receipt);
        
        $this->validate($request,[
            "receiver_address" => "required",
            "receiver_name" => "required",
            "receiver_phone" => "required",
            "receiver_product" => "required",
            "sender_address" => "required",
            "sender_name" => "required",
            "sender_phone" => "required",
        ]);

        $receipt->update($request->all());
        
        return 'success';
    }

    // Returns array of saved receipts
    public function receipts_by_date_paginated_api(Request $request){

        $records = $request->records ? $request->records : 100;
        $from = $request->from ? date($request->from . ' 00:00:00', time()) : Carbon::now()->subweek()->setTime(00,00,00)->toDateTimeString();
        $to = $request->to ? date($request->to . ' 23:59:59', time()) : Carbon::now()->setTime(23,59,59)->toDateTimeString();

        $receipts = Receipt::where('user_id', auth()->user()->id)->whereBetween("created_at", [$from, $to])->paginate($records);

        return $receipts;

    }

    public function csv_upload(Request $request){
        // dd($request->all()); 
        Validator::make([
              'file'      => $request->file,
              'extension' => strtolower($request->file->getClientOriginalExtension()),
          ],
          [
              'file'          => 'required',
              'extension'      => 'required|in:csv,xlsx,xls',
          ]);

        $receipts = Excel::load($request->file, function ($reader){
        })->get();

        $user = auth()->user();

        foreach ($receipts as $receipt) {
            $data = $receipt->toArray();
            $user->receipts()->create($data);
        }

        $pdfName = 'receipt-'.str_random(6).'.pdf';

        $path = storage_path('app/public/pdf/').$pdfName;
        $html = view('print.imported-receipts-print', compact('receipts', 'user'));
        $html = compress_html($html);
        PDF::loadHTML($html)->save($path);
        
        return [
            'type' => 'url',
            'pdfName' => $pdfName
        ];
    }

    public function csv_download(Request $request){
        
        return Excel::create('receipts', function($excel) use($request)  {
            // Set the title
            $excel->setTitle('Receipts');
             $excel->sheet('Sheetname', function($sheet) use($request) {
                $receipts = Receipt::find($request->receipts)->where('user_id', auth()->user()->id);
                $subset = $receipts->map(function ($user) {
                    return collect($user->toArray())
                        ->except(['user_id'])
                        ->all();
                });
                $sheet->fromArray($subset);
            });

        })->download('csv');
    }

    public function net_amount_api(Request $request){
		$net = $request->net;
		$totalAmount = '';
		$totalProductCost = '';
		$totalPostageCost = '';

        $from = '';
        $to = new Carbon('last day of this month');

		if($net == 'current'){
			$from = new Carbon('first day of this month');     
		}elseif($net == 'last'){
			$from = new Carbon('first day of last month');     
			$to = new Carbon('last day of last month');  
		}else{
            $from = new Carbon('last day of this month');
            $from->subMonths(3);
        }

        $from->setTime(0,0,0);
        $to->setTime(23,59,59);

        $totalAmount = auth()->user()->receipts()->whereBetween("created_at", [$from, $to])->sum('amount');
        $totalProductCost = auth()->user()->receipts()->whereBetween("created_at", [$from, $to])->sum('product_cost');
        $totalPostageCost = auth()->user()->receipts()->whereBetween("created_at", [$from, $to])->sum('postage_cost');

		return [
			'totalAmount' => $totalAmount,
			'totalProductCost' => $totalProductCost,
			'totalPostageCost' => $totalPostageCost
		];

	}
}
