<?php

namespace App\Http\Controllers\Admin;

use PDF;
use Excel;
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

    /**
     * Display list of saved receipts.
     *
     * @return \Illunimate\Http\Response
     */
    public function index()
    {
        return view('admin.receipts.index');
    }

    /**
     * Display deleted receipts.
     *
     * @return \Illuminate\Http\Response
     */
    public function deleted_receipts()
    {
        return view('admin.receipts.deleted');
    }

    /**
     * Get list of receipts.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Request $receipt
     * @return array $receipts
     */
    public function receipts_paginated_api(Request $request)
    {
        $search = $request->search;
        $records = $request->records ? $request->records : 100;
        $from = Carbon::createFromFormat('Y-m-d', $request->from)->startOfDay();
        $to = Carbon::createFromFormat('Y-m-d', $request->to)->endOfDay();
        $receipts = [];
        $query = new Receipt();
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
        $query = $query->whereBetween('created_at', [$from, $to]);
        $receipts = $query->paginate($records);
        return $receipts;
    }

    /**
     * Delete single receipt.
     *
     * @param \App\Receipt $receipt
     * @return string 'success'
     */
    public function receipts_delete_api(Receipt $receipt)
    {
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
        Receipt::destroy($request->receipts);
        return 'success';
    }

    /**
     * Generate pdf for a single record to print.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Request $receipt
     * @return array
     */
    public function print_single_receipt(Request $request, Receipt $receipt)
    {
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
     * Generate pdf for a multiple records to print.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function print_multiple_receipts(Request $request)
    {
        $user = auth()->user();
        $user->load('settings');

        $receipts = Receipt::find($request->receipts);

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
        $this->validate($request, [
            "receiver_address" => "required",
            "receiver_name" => "required",
            "receiver_phone" => "required",
            "receiver_product" => "required",
            "sender_address" => "required",
            "sender_name" => "required",
            "sender_phone" => "required",
        ]);
        $receipt->update([
            "receiver_address" => $request->receiver_address,
            "receiver_name" => $request->receiver_name,
            "receiver_email" => $request->receiver_email,
            "receiver_phone" => $request->receiver_phone,
            "receiver_postcode" => $request->receiver_postcode,
            "receiver_product" => $request->receiver_product,
            "amount" => $request->amount,
            "sender_id" => $request->sender_id,
            "sender_address" => $request->sender_address,
            "sender_name" => $request->sender_name,
            "sender_email" => $request->sender_email,
            "sender_phone" => $request->sender_phone,
            "sender_postcode" => $request->sender_postcode,
            "tracking" => $request->tracking,
        ]);
        return 'success';
    }

    /**
     * Display list of users.
     *
     * @return \Illuminate\Http\Response
     */
    public function users()
    {
        return view('admin.users.index');
    }

    /**
     * Get list of users.
     *
     * @param \Illuminate\Http\Request $request
     * @return Array $users
     */
    public function users_paginated_api(Request $request)
    {
        $search = $request->search;
        $records = $request->records ? $request->records : 100;
        $order = $request->order ? $request->order : 'latest';

        if ($search) {
            if ($order == 'latest') {
                $users = User::search($search)->paginate($records);
            } else {
                $users = User::search($search)->paginate($records);
            }
        } else {
            if ($order == 'latest') {
                $users = User::latest()->paginate($records);
            } else {
                $users = User::oldest()->paginate($records);
            }
        }
        return $users;
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
            $excel->setTitle('Receipts');
             $excel->sheet('Sheetname', function ($sheet) use ($request) {
                $receipts = Receipt::find($request->receipts);
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
     * Get list of soft deleted receipts.
     *
     * @param \Illumunate\Http\Request
     * @return array $receipts
     */
    function soft_deleted_receipts_api(Request $request)
    {
        $search = $request->search;
        $records = $request->records ? $request->records : 100;
        $from = Carbon::createFromFormat('Y-m-d', $request->from)->startOfDay();
        $to = Carbon::createFromFormat('Y-m-d', $request->to)->endOfDay();
        $query = Receipt::onlyTrashed();
        $receipts = [];
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
        
        return $receipts;
    }

    /**
     * Force delete receipt.
     *
     * @param int $receiptId
     * @return string
     */
    public function receipts_force_delete_api($receiptId)
    {
        $receipt = Receipt::onlyTrashed()->findOrFail($receiptId);
        $receipt->forceDelete();
        return 'success';
    }

    /**
     * Force delete multiple receipts.
     *
     * @param \Illuminate\Http\Request $request
     * @return string 'string'
     */
    public function multiple_receipts_force_delete_api(Request $request)
    {
        $count = Receipt::onlyTrashed()->whereIn('id', $request->receipts)->forceDelete();
        return 'success';
    }

    /**
     * Restore deleted receipt.
     *
     * @param int $receiptId
     * @return string 'success'
     */
    public function receipts_restore_api($receiptId)
    {
        $receipt = Receipt::onlyTrashed()->findOrFail($receiptId);
        $receipt->restore();
        return 'success';
    }

    /**
     * Restore multiple deleted receipts.
     *
     * @param \Illuminate\Http\Request $request
     * @return string 'success'
     */
    public function multiple_receipts_restore_api(Request $request)
    {
        $count = Receipt::onlyTrashed()->whereIn('id', $request->receipts)->restore();
        return 'success ' . $count;
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
