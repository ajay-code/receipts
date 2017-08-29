<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class ProfileController extends Controller
{

    public function __construct(){
        $this->middleware('auth');
    } 
    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        $user = auth()->user();

        return view('profile.index', compact('user'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        $user = auth()->user();

        return view('profile.edit', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $this->validate($request, [
        ]);
        auth()->user()->update($request->all());

        alert()->success('Profile Successfully updated');

        return back();
    }

    public function set_password(Request $request){
        $this->validate($request, [
            'password' => 'required|string|min:6|confirmed',
        ]);

        auth()->user()->update([
            'password' => bcrypt($request->password)
        ]);

        alert()->success('Password Successfully Set');

        return back();


    }

    public function change_password(Request $request){
        $this->validate($request, [
            'old_password' => 'required|old_password',
            'password' => 'required|string|min:6|confirmed',
        ]);

        auth()->user()->update([
            'password' => bcrypt($request->password)
        ]);

        alert()->success('Password Successfully Set');
        return back();
    }
}
