<?php

// Route::get('/', function () {
//     $users[] = Auth::user();
//     $users[] = Auth::guard()->user();
//     $users[] = Auth::guard('admin')->user();

//     dd($users);

//     return view('admin.home');
// })->name('home');

Route::get('/', 'Admin\MainController@index')->name('index');
Route::get('/home', 'Admin\MainController@index')->name('home');

// 
// Receipts Routes
// 
Route::get('receipts', 'Admin\ReceiptController@index')->name('receipts');
Route::post('receipts/{receipt}', 'Admin\ReceiptController@update')->name('receipts.update');

// Get Receipts By Dates
Route::get('receipts/date', 'Admin\ReceiptController@receipts_by_date')->name('receipts.bydate');

// Printing the Saved Receipts
Route::post('receipts/print', 'Admin\ReceiptController@print_multiple_receipts')->name('receipts.print.multiple');
Route::get('receipts/print/{receipt}', 'Admin\ReceiptController@print_single_receipt')->name('receipts.print.single');



// 
// users controler routes for admin
// 
Route::get('users', 'Admin\UserController@index')->name('users');
Route::get('users/{user}/receipts', 'Admin\UserController@user_receipts')->name('users');


/*
	Settings Routes
*/

Route::get('/settings', 'Admin\SettingsController@index')->name('settings');
Route::post('/settings', 'Admin\SettingsController@update')->name('settings.update');
