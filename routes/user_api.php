<?php

/* 
    Receipts Apis
*/

Route::post('receipts', 'ReceiptController@receipts_paginated_api')->name('receipts.paginated');
Route::post('receipts/delete', 'ReceiptController@multiple_receipts_delete_api')->name('receipts.delete.multiple');
Route::get('receipts/delete/{receipt}', 'ReceiptController@receipts_delete_api')->name('receipts.delete');



/* 
    Dashbpard Api
*/

Route::get('dashboard', 'DashboardController@dashboard_api')->name('dashboard.api');
Route::get('summary', 'DashboardController@summary_api')->name('summary.api');


/* 
    SubUser Api
*/
Route::get('/users/{user}/receipts', 'SubuserController@users_receipts_paginated_api');
Route::get('/users/{user}/activate', 'SubuserController@users_activation_api');
Route::get('/users/{user}/deactivate', 'SubuserController@users_deactivation_api');

/* 
    get predefined print settings
*/
Route::get('/settings/predefined', 'SettingsController@get_predefined_settings_api')->name('settings.get-predefined');