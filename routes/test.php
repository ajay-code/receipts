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
	return App::environmentPath();
})->name('test.2');

Route::get('/test/3', function(){
		 Excel::create('receipts', function($excel) {



		    // Set the title
		    $excel->setTitle('Receipts');



		     $excel->sheet('Sheetname', function($sheet) {
		     	$receipts = App\Receipt::all();
		     	$subset = $receipts->map(function ($user) {
				    return collect($user->toArray())
				        ->except(['user_id'])
				        ->all();
				});
		     	$sheet->fromArray($subset);
		        

		    });

		})->export('csv');;

})->name('test.3');