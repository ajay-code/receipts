<?php

namespace App\Http\Middleware;

use Closure;
use Carbon\Carbon;

class CheckUserExpiryDate
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $diff = auth()->user()->expire_at->diffInDays(Carbon::now(), false);
        
        if($diff > 0){
            return redirect('/payments');
        }
        return $next($request);
    }
}
