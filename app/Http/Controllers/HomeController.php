<?php

namespace App\Http\Controllers;

use PDF;
use Session;
use App\User;
use App\Receipt;
use Carbon\Carbon;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth', 'not-expired'], ['except' => ['loadPdf', 'downloadPdf']]);
    }

    /**
     * Display dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
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

        return $data;
    }

    /**
     * Generate pdf of receipt.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function generatePdf(Request $request)
    {
        $this->validate($request, [
            'sender' => 'required',
            'receivers' => 'required',
        ]);

        $sender = $this->sender($request->sender);
        $sender['sender_id'] = $request->sender_id;
        $receivers = $this->receivers($request->receivers);
        $date = Carbon::now();
        $user = auth()->user();
        $user->load('settings');
        
        // Saves the receipt to database
        foreach ($receivers as $receiver) {
            $user->receipts()->create([
                'sender_id' => $sender['sender_id'],
                'sender_name' => $sender['name'],
                'sender_address' => $sender['address'],
                'sender_postcode' => $sender['postcode'],
                'sender_phone' => $sender['phone'],
                'sender_email' => $sender['email'],
                'receiver_name' => $receiver['name'],
                'receiver_address' => $receiver['address'],
                'receiver_postcode' => $receiver['postcode'],
                'receiver_phone' => $receiver['phone'],
                'receiver_email' => $receiver['email'],
                'receiver_product' => $receiver['products'],
                'amount' => $receiver['amount'],
            ]);
        }

        $pdfName = 'receipt-'.str_random(6).'.pdf';

        $path = storage_path('app/public/pdf/').$pdfName;
        
        $html = view('pdf.receipt-mobile', compact('sender', 'receivers', 'user', 'date'));
        $html = compress_html($html);
        PDF::loadHTML($html)->save($path);

        return [
            'type' => 'url',
            'pdfName' => $pdfName
        ];
    }

    /**
     * Load pdf
     *
     * @param string $pdf
     * @return \Illuminate\Http\Response
     */
    public function loadPdf($pdf)
    {
        return response()->file(storage_path('app/public/pdf/') . $pdf);
    }


    /**
     * Download pdf
     *
     * @param string $pdf
     * @return \Illuminate\Http\Response
     */
    public function downloadPdf($pdf)
    {
        return response()->download(storage_path('app/public/pdf/') . $pdf);
    }

    /**
     * Extract the info about sender
     *
     * @param string $sender
     * @return array $data
     */
    public function sender($sender)
    {
        $reg = '/(^\+)?\d{10}/';
        $data = [
            'address' => '',
            'email' => null,
            'name' => null,
            'phone' => 0,
            'postcode' => null
        ];

        $temp = preg_split('/\n/', $sender);
        foreach ($temp as $value) {
            if (!$data['name']) {
                $data['name'] = $value;
            } else {
                if (!$data['phone']) {
                    if (preg_match($reg, $value)) {
                        $data['phone'] = $this->phone_number($value);
                    } else {
                        if ($data['address'] == '') {
                            $data['address'] .= $value;

                            $postcodeRegex = "!\d{5,6}!";
                            if (preg_match($postcodeRegex, $value, $matches)) {
                                $data['postcode'] = $matches[0];
                            }
                        } else {
                            $data['address'] .= '|' . $value;

                            $postcodeRegex = "!\d{5,6}!";
                            if (preg_match($postcodeRegex, $value, $matches)) {
                                $data['postcode'] = $matches[0];
                            }
                        }
                    }
                } elseif (!$data['email']) {
                    if (preg_match('/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/', $value)) {
                        $data['email'] = $value;
                    } else {
                        $data['products'] .= $value;
                    }
                } else {
                    $data['products'] .= $value;
                }
            }
        }

        return $data;
    }

    /**
     * Extract the info about receiver
     *
     * @param string $receivers
     * @return array $data
     */
    public function receivers($receivers)
    {
        $temps =  preg_split("/\n\r\n|\n\r|\r\n|\n\n/", $receivers);
        $reg = '/(^\+)?\d{10}/';
        
        $rslt = [];
        foreach ($temps as $receiver) {
            if (!$receiver) {
                break;
            }
            $data = [
                'address' => '',
                'email' => null,
                'name' => null,
                'phone' => null,
                'products' => '',
                'postcode' => null,
                'amount' => 0,

            ];

            $temp = preg_split('/\n/', $receiver);
            foreach ($temp as $value) {
                if (!$data['name']) {
                    $data['name'] = $value;
                } else {
                    if (!$data['phone']) {
                        if (preg_match($reg, $value)) {
                            $data['phone'] = $this->phone_number($value);
                        } else {
                            if ($data['address'] == '') {
                                $data['address'] .= $value;
                                $postcodeRegex = "!\d{5,6}!";
                                if (preg_match($postcodeRegex, $value, $matches)) {
                                    $data['postcode'] = $matches[0];
                                }
                            } else {
                                $data['address'] .= '|' . $value;

                                $postcodeRegex = "!\d{5,6}!";
                                if (preg_match($postcodeRegex, $value, $matches)) {
                                    $data['postcode'] = $matches[0];
                                }
                            }
                        }
                    } elseif (!$data['email']) {
                        if (preg_match('/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/', $value)) {
                            $data['email'] = $value;
                        } else {
                            if (!$data['products']) {
                                $data['products'] = $value;
                            } else {
                                if (!$data['amount']) {
                                    if (preg_match('/(^\$)\d+/', $value)) {
                                        $data['amount'] = trim($value, '$');
                                    }
                                }
                            }
                        }
                    } else {
                        if (!$data['products']) {
                                $data['products'] = $value;
                        } else {
                            if (!$data['amount']) {
                                if (preg_match('/(^\$)\d+/', $value)) {
                                    $data['amount'] = trim($value, '$');
                                }
                            }
                        }
                    }
                }
            }

            $rslt[] = $data;
        }
        return $rslt;
    }

    /**
     * Extract phone number
     *
     * @param string $phone
     * @return string $finalNumber
     */
    protected function phone_number($phone)
    {
        $finalNumber = '';
        if (preg_match('/(^60)\d{9,10}/', $phone)) {
            $finalNumber = '+' . $phone;
        } elseif (preg_match('/(^0)\d{9,10}/', $phone)) {
            $finalNumber = '+6' . $phone;
        } elseif (preg_match('/(^\+)\d{9,10}/', $phone)) {
                $finalNumber = $phone;
        } elseif (preg_match('/\d{9,10}/', $phone)) {
            $finalNumber = '+60' . $phone;
        }

        return $finalNumber;
    }


    /**
     * Get summary of the day
     */
    protected function summary_of_day($from = null, $to = null)
    {
        if(!($from && $to)){
            return [];
        }
        
    }
}
