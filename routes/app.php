<?php


// Printing while Creating
Route::get('/', 'HomeController@index')->name('index');
Route::get('/home', 'HomeController@index')->name('home');
Route::post('/print', 'HomeController@generatePdf')->name('print');
Route::get('/pdf/{pdf}', 'HomeController@loadPdf')->name('pdf');
Route::get('/pdf/{pdf}/download', 'HomeController@downloadPdf')->name('pdf.download');

/*
 Receipts Routes
*/

// Printing the Saved Receipts
Route::post('/receipts/print', 'ReceiptController@print_multiple_receipts')->name('receipts.print.multiple');
Route::get('/receipts/print/{receipt}', 'ReceiptController@print_single_receipt')->name('receipts.print.single');
// Import Receipts In CSV
Route::post('/receipts/csv/upload', 'ReceiptController@csv_upload')->name('receipts.csv.import');
// Export Receipts In CSV
Route::post('/receipts/csv', 'ReceiptController@csv_download')->name('receipts.csv.download');
// Dispaly receipts
Route::get('/receipts', 'ReceiptController@index')->name('receipts');
// Receipts Create
Route::get('receipts/create', 'ReceiptController@create')->name('receipts.create');
// Update receipt
Route::post('/receipts/{receipt}', 'ReceiptController@update')->name('receipts.update');




/*
	Reference Code
*/

Route::get('/references', 'ReferenceController@index');
Route::get('/references/create', 'ReferenceController@create');
Route::post('/references/create', 'ReferenceController@store');
Route::get('/references/{reference}/delete', 'ReferenceController@destroy');

// using reference code
Route::get('/references/use', 'ReferenceController@use_reference_code_form');
Route::post('/references/use', 'ReferenceController@use_reference_code');


/*
	SubUser Routes 
*/

Route::get('/subusers', 'SubuserController@index')->name('subusers');



/*
	Settings Routes
*/

Route::get('/settings', 'SettingsController@index')->name('settings');
Route::post('/settings', 'SettingsController@update')->name('settings.update');

/*
	Profile Routes
*/

Route::get('/profile', 'ProfileController@show')->name('profile');
Route::get('/profile/edit', 'ProfileController@edit')->name('profile.edit');
Route::post('/profile/edit', 'ProfileController@update')->name('profile.update');

Route::post('/password/set', 'ProfileController@set_password')->name('profile.set_password');
Route::post('/password/change', 'ProfileController@change_password')->name('profile.change_password');

/*
	Payments
*/

Route::get('/payments', 'PaymentController@index')->name('payment');