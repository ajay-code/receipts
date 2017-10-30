<?php

namespace App\Http\Controllers\Admin;

use App\PrintSetting;
use App\Http\Requests\StoreSetting;
use App\Http\Controllers\Controller;

class PrintSettingController extends Controller
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
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $printSettings = PrintSetting::all();
        return view('admin.print-settings.index', compact('printSettings'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.print-settings.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreSetting  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSetting $request)
    {
        PrintSetting::create($request->all());
        
        return redirect('/admin/print-settings');
    }

    /**
     * Display the specified resource.
     *
     * @paam  \App\PrintSetting  $printSetting
     * @return \Illuminate\Http\Response
     */
    public function show(PrintSetting $printSetting)
    {
        return view('admin.print-settings.show', compact('printSetting'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @paam  \App\PrintSetting  $printSetting
     * @return \Illuminate\Http\Response
     */
    public function edit(PrintSetting $printSetting)
    {
        return view('admin.print-settings.edit', compact('printSetting'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\StoreSetting  $request
     * @param  \App\PrintSetting  $printSetting
     * @return \Illuminate\Http\Response
     */
    public function update(StoreSetting $request, PrintSetting $printSetting)
    {
        $printSetting->update($request->all());

        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @paam  \App\PrintSetting  $printSetting
     * @return \Illuminate\Http\Response
     */
    public function destroy(PrintSetting $printSetting)
    {
        $printSetting->delete();

        return 'success';
    }
}
