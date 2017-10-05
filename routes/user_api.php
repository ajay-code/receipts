<?php

// 
// User Api
// 


// 
// Receipts Apis
// 

Route::get('receipts', 'ReceiptController@receipts_paginated_api')->name('receipts.paginated');
Route::post('receipts/delete', 'ReceiptController@multiple_receipts_delete_api')->name('receipts.delete.multiple');
Route::get('receipts/delete/{receipt}', 'ReceiptController@receipts_delete_api')->name('receipts.delete');
Route::get('receipts/date', 'ReceiptController@receipts_by_date_paginated_api')->name('receipts.bydate.api');

Route::get('net/amount', 'ReceiptController@net_amount_api')->name('receipts.netamount.api');
