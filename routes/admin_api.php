<?php
// 
// Admin Apis
// 


// 
// Recepts Routes
// 
Route::get('receipts/', 'Admin\ReceiptController@receipts_paginated_api')->name('receipts.paginated');
Route::get('receipts/delete/{receipt}', 'Admin\ReceiptController@receipts_delete_api')->name('receipts.delete');
// Get Receipts By Dates
Route::get('receipts/date', 'Admin\ReceiptController@receipts_by_date_paginated_api')->name('receipts.bydate.api');



// 
// Admin user routes
// 
Route::get('users/', 'Admin\UserController@users_paginated_api')->name('users.paginated');
Route::get('/users/{user}/receipts', 'Admin\UserController@users_receipts_paginated_api');
Route::get('/users/{user}/activate', 'Admin\UserController@users_activation_api');
Route::get('/users/{user}/deactivate', 'Admin\UserController@users_deactivation_api');
Route::post('/users/{user}/update', 'Admin\UserController@update_api');


// 
// Admin Net Amount
// 
Route::get('net/amount', 'Admin\ReceiptController@net_amount_api')->name('receipts.netamount.api');
