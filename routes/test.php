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

Route::get('/test/3', function(){
		 Excel::create('Filename', function($excel) {



		    // Set the title
		    $excel->setTitle('Our new awesome title');

		    // Chain the setters
		    $excel->setCreator('Maatwebsite')
		          ->setCompany('Maatwebsite');

		    // Call them separately
		    $excel->setDescription('A demonstration to change the file properties');

		     $excel->sheet('Sheetname', function($sheet) {
		     	$receipts = App\Receipt::all();

		     	$sheet->fromModel($receipts);
		        

		    });

		})->export('csv');;

})->name('test.3');