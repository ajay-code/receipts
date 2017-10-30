<?php
/* 
    Recepts Routes 
*/
Route::post('receipts/', 'Admin\ReceiptController@receipts_paginated_api')->name('receipts.paginated');

// Delete Receipts
Route::post('receipts/delete', 'Admin\ReceiptController@multiple_receipts_delete_api')->name('receipts.delete.multiple');
Route::get('receipts/delete/{receipt}', 'Admin\ReceiptController@receipts_delete_api')->name('receipts.delete');

//  Deleted Receipts
Route::post('receipts/deleted', 'Admin\ReceiptController@soft_deleted_receipts_api')->name('receipts.deleted');
// Force Delete Receipts
Route::get('receipts/force-delete/{receipt}', 'Admin\ReceiptController@receipts_force_delete_api')->name('receipts.force-delete');
Route::post('receipts/force-delete', 'Admin\ReceiptController@multiple_receipts_force_delete_api')->name('receipts.force-delete.multiple');

// Restore Delete Receipts
Route::get('receipts/restore/{receipt}', 'Admin\ReceiptController@receipts_restore_api')->name('receipts.restore');
Route::post('receipts/restore', 'Admin\ReceiptController@multiple_receipts_restore_api')->name('receipts.restore.multiple');

/* 
    Admin user routes 
*/
Route::get('users/', 'Admin\UserController@users_paginated_api')->name('users.paginated');
Route::get('/users/{user}/receipts', 'Admin\UserController@users_receipts_paginated_api');
Route::get('/users/{user}/activate', 'Admin\UserController@users_activation_api');
Route::get('/users/{user}/deactivate', 'Admin\UserController@users_deactivation_api');
Route::post('/users/{user}/update', 'Admin\UserController@update_api');


/* 
    Dashbpard Api
*/
Route::get('dashboard', 'Admin\MainController@dashboard_api')->name('dashboard.api');


/* 
    get predefined print settings
*/
Route::get('/settings/predefined', 'Admin\SettingsController@get_predefined_settings_api')->name('settings.get-predefined');