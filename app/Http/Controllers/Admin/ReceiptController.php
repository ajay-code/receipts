<?php

namespace App\Http\Controllers\Admin;


use PDF;
use App\User;
use App\Receipt;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ReceiptController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:admin');
    }
	// Shows list of saved receipts
    public function index(){
    	return view('admin.receipts.index');
    }

    public function receipts_by_date(){
        return view('admin.receipts.by-date');
    }

	// Returns array of saved receipts
    public function receipts_api(){
    	return Receipt::latest()->get();
    }

    // Returns array of saved receipts
    public function receipts_paginated_api(Request $request){
        $search = $request->search;
        $records = $request->records ? $request->records : 10;
        $order = $request->order ? $request->order : 'latest';
        $receipts = [];

        if($search){
            if($order == 'latest'){
                $receipts = Receipt::search($search)->paginate($records);
            }else{
                $receipts = Receipt::search($search)->paginate($records);
            }
        }else{
            if($order == 'latest'){
                $receipts = Receipt::latest()->paginate($records);
            }else{
                $receipts = Receipt::oldest()->paginate($records);
            }
        }
        return $receipts;
    }



    // Returns array of saved receipts
    public function receipts_by_date_paginated_api(Request $request){
        $search = $request->search;
        $records = $request->records ? $request->records : 10;
        $date = $request->date ? $request->date : Carbon::now()->toDateString();
        $receipts = [];

        if($search){
                $receipts = Receipt::search($search)->whereRaw("date(created_at) = '{$date}'")->paginate($records);
        }else{
                $receipts = Receipt::whereRaw("date(created_at) = '{$date}'")->paginate($records);
        }
        return $receipts;
    }

    public function receipts_delete_api(Receipt $receipt){
        $receipt->delete();
        return 'success';
    }

	// Generate pdf for a single record to print
    public function print_single_receipt(Request $request, Receipt $receipt){
    	$user = auth()->user();
        $user->load('settings');

    	$pdfName = 'receipt-'.str_random(6).'.pdf';

        $path = storage_path('app/public/pdf/').$pdfName;

    	PDF::loadHTML(view('print.stored-receipt-print', compact('receipt', 'user')))->save($path);

        return [
            'type' => 'url',
            'pdfName' => $pdfName
        ];
    }

	// Generate pdf for a multiple record to print
    public function print_multiple_receipts(Request $request){

    	$user = auth()->user();
        $user->load('settings');

    	$receipts = Receipt::find($request->receipts);

    	$pdfName = 'receipt-'.str_random(6).'.pdf';

        $path = storage_path('app/public/pdf/').$pdfName;

    	PDF::loadHTML(view('print.stored-receipts-print', compact('receipts', 'user')))->save($path);

        return [
            'type' => 'url',
            'pdfName' => $pdfName
        ];
    }

    public function update(Request $request, Receipt $receipt){
        // dd($request->all());
        $this->validate($request,[
            "receiver_address" => "required",
            "receiver_name" => "required",
            "receiver_phone" => "required",
            "receiver_postcode" => "required",
            "receiver_product" => "required",
            "sender_address" => "required",
            "sender_name" => "required",
            "sender_phone" => "required",
            "sender_postcode" => "required",
        ]);
        $receipt->update([
            "receiver_address" => $request->receiver_address,
            "receiver_name" => $request->receiver_name,
            "receiver_email" => $request->receiver_email,
            "receiver_phone" => $request->receiver_phone,
            "receiver_postcode" => $request->receiver_postcode,
            "receiver_product" => $request->receiver_product,
            "amount" => $request->amount,
            "sender_address" => $request->sender_address,
            "sender_name" => $request->sender_name,
            "sender_email" => $request->sender_email,
            "sender_phone" => $request->sender_phone,
            "sender_postcode" => $request->sender_postcode,
            "tracking" => $request->tracking,
        ]);
        return 'success';
    }

    // users functions

    public function users(){
        return view('admin.users.index');
    }

    // Returns array of saved users
    public function users_paginated_api(Request $request){
        // return $request->all();
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
        return $users;
    }
}

