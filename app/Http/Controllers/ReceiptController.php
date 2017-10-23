<?php

namespace App\Http\Controllers;

use DB;
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

    /**
     * Display receipts
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('receipts.index');
    }

    /**
     * Display receipt creating form
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('create');
    }

    /**
     * Get list of receipts
     *
     * @param \Illuminate\Http\Response $request
     * @return array $receipts
     */
    public function receipts_paginated_api(Request $request)
    {
        $user = auth()->user();
        $search = $request->search;
        $records = $request->records ? $request->records : 100;
        $from = Carbon::createFromFormat('Y-m-d', $request->from)->startOfDay();
        $to = Carbon::createFromFormat('Y-m-d', $request->to)->endOfDay();
        $receipts = [];
        $query = $user->receipts();
        $searchFor = $this->search_for($request->searchFor);
        if ($search) {
            $query = $query->where(function ($query) use ($searchFor, $request, $search) {
                $i = 1;
                if ($searchFor) {
                    foreach ($searchFor as $key => $value) {
                        if ($i == 1) {
                            $query = $query->Where($key, 'LIKE', "%{$search}%");
                        }
                        $query = $query->orWhere($key, 'LIKE', "%{$search}%");
                        $i++;
                    }
                } else {
                    foreach ($request->searchFor as $key => $value) {
                        if ($i == 1) {
                            $query = $query->Where($key, 'LIKE', "%{$search}%");
                        }
                        $query = $query->orWhere($key, 'LIKE', "%{$search}%");
                        $i++;
                    }
                }
            });
        } else {
            $query = $query->latest();
        }
        $receipts = $query->whereBetween('created_at', [$from, $to])->paginate($records);
        // dd($query->toSql());
        
        return $receipts;
    }

    /**
     * Generate pdf for a single record to print.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Receipt $receipt
     * @return array
     */
    public function print_single_receipt(Request $request, Receipt $receipt)
    {
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

    /**
     * Delete single receipt.
     *
     * @param \Illuminate\Http\Request $request
     * @return string 'success'
     */
    public function receipts_delete_api(Receipt $receipt)
    {
        if (auth()->user()->id !== $receipt->user_id) {
            throw new \Exception('Not Authorized');
        }
        $receipt->delete();
        return 'success';
    }


    /**
     * Delete multiple receipts.
     *
     * @param \App\Receipt $receipt
     * @return string 'success'
     */
    public function multiple_receipts_delete_api(Request $request)
    {
        Receipt::where('id', $request->receipts)->where('user_id', auth()->user()->id)->delete();
        return 'success';
    }

    /**
     * Generate pdf for a multiple records to print.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function print_multiple_receipts(Request $request)
    {
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

    /**
     * Update receipt.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Receipt $receipt
     * @return string 'success'
     */
    public function update(Request $request, Receipt $receipt)
    {
        $this->authorize('update', $receipt);
        
        $this->validate($request, [
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

    /**
     * Upload receipts in form of CVS.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function csv_upload(Request $request)
    {
        Validator::make([
              'file'      => $request->file,
              'extension' => strtolower($request->file->getClientOriginalExtension()),
          ],
          [
              'file'          => 'required',
              'extension'      => 'required|in:csv,xlsx,xls',
          ]);

        $receipts = Excel::load($request->file, function ($reader) {
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

    /**
     * Get list of users in CVS format
     *
     * @param \Illuminate\Http\Request $request
     * @return File CVS
     */
    public function csv_download(Request $request)
    {
        return Excel::create('receipts', function ($excel) use ($request) {
            // Set the title
            $excel->setTitle('Receipts');
             $excel->sheet('Sheetname', function ($sheet) use ($request) {
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

    /**
     * Tell what to search for in receipts
     *
     * @param array $searchFor
     * @return $result
     */
    protected function search_for($searchFor = null)
    {
        if ($searchFor == null) {
            return;
        }
        $result = array_filter($searchFor);
        if (empty($result)) {
            $result = null;
        }
        return $result;
    }
}
