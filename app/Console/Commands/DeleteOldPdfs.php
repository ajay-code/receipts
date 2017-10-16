<?php

namespace App\Console\Commands;

use File;
use Storage;
use Carbon\Carbon;
use Illuminate\Console\Command;

class DeleteOldPdfs extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'pdf:delete';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $files = Storage::files('pdf/');
        foreach ($files as $file) {
            if (!preg_match('/^pdf\/\./', $file)) {
                try {
                    $f = Carbon::createFromTimestampUTC(File::lastModified(storage_path('app/public/') . $file));
                    if ($f->diffInMinutes(Carbon::now()) > 10) {
                        Storage::delete($file);
                    }
                } catch (Exception $e) {
                    continue;
                }
            }
        }
        $this->info('Old Pdfs Deleted Successfully');
    }
}
