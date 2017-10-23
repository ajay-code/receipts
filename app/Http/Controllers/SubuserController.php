<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SubuserController extends Controller
{
    public function __construct(){
    	$this->middleware(['auth', 'not-expired']);
    }

    /** 
     * Display Subusers
     * 
     * @return \Illuminate\Http\Response
     */
    public function index(){
    	$CurrentUser = auth()->user();

    	$CurrentUser->load(['users', 'retailers', 'wholesalers']);

    	return view('subusers.index',compact('CurrentUser'));
    }
}
