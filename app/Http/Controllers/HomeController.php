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
        $this->middleware('auth', ['except' => ['loadPdf', 'downloadPdf']]);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }

    

    //  Generate and Save the Receipt
    public function generatePdf(Request $request)
    {
        $this->validate($request, [
            'sender' => 'required',
            'receivers' => 'required',
        ]);

        $sender = $this->sender($request->sender);
        $receivers = $this->receivers($request->receivers);
        $date = Carbon::now();

        $user = auth()->user();
        $user->load('settings');
        // Saves the receipt to database
        foreach ($receivers as $receiver) {
            $user->receipts()->create([
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

        PDF::loadHTML(view('pdf.receipt-mobile', compact('sender', 'receivers', 'user', 'date')))->save($path);
        return [
            'type' => 'url',
            'pdfName' => $pdfName
        ];
    }

    // Loads the pdf receipt generated
    public function loadPdf($pdf)
    {
        return response()->file(storage_path('app/public/pdf/') . $pdf);
    }


    // Downloads the pdf receipt generated
    public function downloadPdf($pdf)
    {
        return response()->download(storage_path('app/public/pdf/') . $pdf);
    }

    // Extracts the information about the senser
    public function sender($sender){
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
            if(!$data['name']){
                $data['name'] = $value;
            }else{
                if(!$data['phone']){
                    if(preg_match($reg, $value)){
                        if(preg_match('/(^60)\d{9,10}/', $value)){
                            $data['phone'] = '+' . $value;
                        }elseif (preg_match('/(^0)\d{9,10}/', $value)) {
                            $data['phone'] = '+6' . $value;
                        }elseif(preg_match('/(^\+)\d{10}/', $value)){
                                $data['phone'] = $value;
                        }elseif(preg_match('/\d{9,10}/', $value)){
                            $data['phone'] = '+60' . $value;
                        }
                    }else{
                        if($data['address'] == ''){
                            $data['address'] .= $value;

                            $postcodeRegex = "!\d{5,6}!";
                            if (preg_match($postcodeRegex, $value, $matches))
                            {
                                $data['postcode'] = $matches[0];
                            }

                        }else{
                            $data['address'] .= '|' . $value;

                            $postcodeRegex = "!\d{5,6}!";
                            if (preg_match($postcodeRegex, $value, $matches))
                            {
                                $data['postcode'] = $matches[0];
                            }
                        }
                    }
                }elseif(!$data['email']){
                    if(preg_match('/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/', $value)){
                        $data['email'] = $value;
                    }else{
                        $data['products'] .= $value;
                    }
                }else{
                    $data['products'] .= $value;
                }
            }
        }

        return $data;
    }

    // Extracts the information about the receiver
    public function receivers($receivers){
        $temps =  preg_split("/\n\r\n|\n\r|\r\n|\n\n/", $receivers);
        $reg = '/(^\+)?\d{10}/';
        
        // dd($temps);
        $rslt = [];
        foreach ($temps as  $receiver) {
            if(!$receiver){
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
                if(!$data['name']){
                    $data['name'] = $value;
                }else{
                    if(!$data['phone']){
                        if(preg_match($reg, $value)){
                            if(preg_match('/(^60)\d{9,10}/', $value)){
                                $data['phone'] = '+' . $value;
                            }elseif (preg_match('/(^0)\d{9,10}/', $value)) {
                                $data['phone'] = '+6' . $value;
                            }elseif(preg_match('/(^\+)\d{10}/', $value)){
                                    $data['phone'] = $value;
                            }elseif(preg_match('/\d{9,10}/', $value)){
                                $data['phone'] = '+60' . $value;
                            }
                        }else{
                            if($data['address'] == ''){
                                $data['address'] .= $value;

                                $postcodeRegex = "!\d{5,6}!";
                                if (preg_match($postcodeRegex, $value, $matches))
                                {
                                    $data['postcode'] = $matches[0];
                                }
                            }else{
                                $data['address'] .= '|' . $value;

                                $postcodeRegex = "!\d{5,6}!";
                                if (preg_match($postcodeRegex, $value, $matches))
                                {
                                    $data['postcode'] = $matches[0];
                                }
                            }
                        }
                    }elseif(!$data['email']){
                        if(preg_match('/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/', $value)){
                            $data['email'] = $value;
                        }else{
                            if(!$data['products']){
                                $data['products'] = $value;
                            }else{
                                if(!$data['amount']){
                                    if(preg_match('/(^\$)\d+/', $value)){
                                        $data['amount'] = trim($value, '$');
                                    }
                                }
                            }
                        }
                    }else{
                        if(!$data['products']){
                                $data['products'] = $value;
                            }else{
                                if(!$data['amount']){
                                    if(preg_match('/(^\$)\d+/', $value)){
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
}
