<?php

namespace App\Http\Controllers;

use App\PrintSetting;
use Illuminate\Http\Request;
use App\Http\Requests\StoreUserSetting;

class settingsController extends Controller
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
     * Display Settings
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = auth()->user();

        return view('settings.edit', compact('user'));
    }

    /**
     * Update settings
     *
     * @return \Illumunate\Http\Response
     */
    public function update(StoreUserSetting $request)
    {

        auth()->user()->settings()->update($request->except(['_token']));

        alert()->success('Settings Successfully updated');

        return back();
    }
    
    /**
     * Select predefined settings
     *
     * @return \Illumunate\Http\Response
     */
    public function select_predefined_settings()
    {
        $printSettings = PrintSetting::all();
        return view('settings.select-predefied', compact('printSettings'));
    }
    
    /**
     * Store predefined setting
     *
     * @return \Illumunate\Http\Response
     */
    public function store_predefined_settings(Request $request)
    {
        $printSetting = PrintSetting::where('id', $request->setting)->exclude(['id', 'name', 'created_at', 'updated_at'])->first();
        auth()->user()->settings()->update($printSetting->toArray());
        alert()->success("Settings Successfully updated to {$printSetting->name}");

        return redirect('/settings');
    }

    /** 
     * Get predefined print settings
     * 
     * @return array 
     */
    public function get_predefined_settings_api(){
        return PrintSetting::all();
    }
}
