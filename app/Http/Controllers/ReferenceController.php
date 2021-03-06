<?php

namespace App\Http\Controllers;

use Session;
use App\User;
use App\Reference;
use Illuminate\Http\Request;

class ReferenceController extends Controller
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
     * Display list of references.
     * 
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    	if(auth()->user()->type == 'user'){
    		return redirect('/');
    	}

    	$references = auth()->user()->references;
    	return view('reference.index', compact('references'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    	if(auth()->user()->type == 'user'){
    		return redirect('/');
    	}
    	return view('reference.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
    	$ref_code = uniqid(time());

    	try{
    		// Try To create Reference Code
    		Reference::create([
    			'reference_code' => $ref_code, 
    			'creator_type' => get_class(auth()->user()), 
    			'creator_id' => auth()->user()->id, 
    			'created_for' => $request->created_for,
    		]);
    	}catch(\Exception $e){
    		// Handle Error if any occur
    		Session::flash('error' , [
    			'message' => 'Something went wrong please try again',
    			'error' => $e->getMessage()
    		]);
        	return back();
    	}

    	Session::flash('message' , [
    		'reference_code' => $ref_code,
    		'create_for' => $request->created_for
    		]);

        return back();
    }

    /** 
     * Redirect to home page is user type is 'user'
     * 
     * @return \Illuminate\Http\Response
     */
   	public function redirectIfUser()
   	{
   		if(auth()->user()->type == 'user'){
    		return redirect('/');
    	}
   	}

    /** 
     * Display form to use reference code
     * 
     * @return \Illuminate\Http\Response  
     */   
    public function use_reference_code_form(){
        return view('reference.use-reference-code-form');
    }

    /** 
     * Apply the reference code
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response 
     */
    public function use_reference_code(Request $request){
        $reference = Reference::where('reference_code', $request->reference_code)->first();
        // return $reference;
        if(!$reference){
            Session::flash('error', [
                'message' => 'Reference Code Already Used or Does Not Exist'
            ] );
            return back();
        }

        $user = auth()->user();

        if($user->id == $reference->creator_id & get_class($user) == $reference->creator_type){
            Session::flash('error', [
                'message' => "You can't use your own Reference Code" 
            ] );
            return back();
        }

        $user->update([
            'type' => $reference->created_for,
            'user_id' => $reference->creator_id ? $reference->creator_id : null,
        ]);

        alert()->success('Reference Code Successfully Used');

        $reference->delete();

        return back();
    }

    /** 
     * Delete reference code
     * 
     * @return \Illuminate\Http\Response 
     */
    public function destroy(Reference $reference){
        // dd($reference);
        if($reference->creator_id = auth()->user()->id){
            $reference->delete();
        }
        return back();
    }
}
