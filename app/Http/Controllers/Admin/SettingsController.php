<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SettingsController extends Controller
{
    public function __construct(){
    	$this->middleware(['auth:admin']);
    }

    public function index(){
    	$user = auth()->user();

    	return view('admin.settings.edit', compact('user'));
    }

    public function update(Request $request){
    	$this->validate($request, [
    		'page_width' => 'required|numeric',
            'page_height' => 'required|numeric',
            'top_user_id' => 'required|numeric',
            'left_user_id' => 'required|numeric',
            'top_sender' => 'required|numeric',
            'left_sender' => 'required|numeric',
            'top_receiver' => 'required|numeric',
            'left_receiver' => 'required|numeric',
            'left_product' => 'required|numeric',
            'top_product' => 'required|numeric',
            'top_date' => 'required|numeric',
            'left_date' => 'required|numeric',
            'left_amount' => 'required|numeric',
            'top_amount' => 'required|numeric',
    	]);


    	auth()->user()->settings()->update($request->except(['_token']));

    	alert()->success('Settings Successfully updated');

    	return back();
    }
}
