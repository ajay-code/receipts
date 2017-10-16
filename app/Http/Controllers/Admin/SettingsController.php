<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SettingsController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth:admin']);
    }

    /**
     * Display settings of the user
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = auth()->user();
        return view('admin.settings.edit', compact('user'));
    }

    /**
     * Update settings
     *
     * @return \Illumunate\Http\Response
     */
    public function update(Request $request)
    {
        $this->validate($request, [
            'font' => 'required',
            'font_size' => 'required|integer',
            'page_width' => 'required|integer',
            'page_height' => 'required|integer',
            'top_sender_id' => 'required|integer',
            'left_sender_id' => 'required|integer',
            'top_sender' => 'required|integer',
            'left_sender' => 'required|integer',
            'top_receiver' => 'required|integer',
            'left_receiver' => 'required|integer',
            'left_product' => 'required|integer',
            'top_product' => 'required|integer',
            'top_date' => 'required|integer',
            'left_date' => 'required|integer',
            'left_amount' => 'required|integer',
            'top_amount' => 'required|integer',
        ]);

        auth()->user()->settings()->update($request->except(['_token']));

        alert()->success('Settings Successfully updated');

        return back();
    }
}
