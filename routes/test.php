<?php

Route::get('/test', function(){
	$files = Storage::files('pdf/');
	foreach ($files as $file) {
		if(!preg_match('/^pdf\/\./', $file)){
			// $f = '';
			try{
				$f = Carbon\Carbon::createFromTimestampUTC(File::lastModified(storage_path('app/public/') . $file));
				if($f->diffInMinutes(Carbon\Carbon::now()) > 10){
					Storage::delete($file);
				}
			}catch (Exception $e){
				continue;
			}
		}
	}
})->name('test');
Route::get('/test/2', function(){
	$user = App\User::find(1)->load('manufacturer', 'wholesaler', 'retailer', 'retailers', 'wholesalers', 'users', 'references');
	return $user;
})->name('test.2');