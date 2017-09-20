<?php

// 
// User Api
// 


// 
// Receipts Apis
// 

Route::get('receipts', 'ReceiptController@receipts_paginated_api')->name('receipts.paginated');

Route::get('receipts/date', 'ReceiptController@receipts_by_date_paginated_api')->name('receipts.bydate.api');

Route::get('net/amount', 'ReceiptController@net_amount_api')->name('receipts.netamount.api');