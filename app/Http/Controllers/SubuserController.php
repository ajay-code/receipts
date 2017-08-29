<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SubuserController extends Controller
{
    public function __construct(){
    	$this->middleware(['auth']);
    }

    // Show Uses Under The Current User
    public function index(){
    	$CurrentUser = auth()->user();

    	$CurrentUser->load(['users', 'retailers', 'wholesalers']);

    	return view('subusers.index',compact('CurrentUser'));
    }
}
