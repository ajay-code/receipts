<?php

// 
// Receipts Apis
// 

Route::post('receipts', 'ReceiptController@receipts_paginated_api')->name('receipts.paginated');
Route::post('receipts/delete', 'ReceiptController@multiple_receipts_delete_api')->name('receipts.delete.multiple');
Route::get('receipts/delete/{receipt}', 'ReceiptController@receipts_delete_api')->name('receipts.delete');



// 
// Dashbpard Api
// 

Route::get('dashboard', 'HomeController@dashboard_api')->name('dashboard.api');
Route::get('summary', 'HomeController@summary_api')->name('summary.api');