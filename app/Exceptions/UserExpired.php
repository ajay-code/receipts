<?php

namespace App\Exceptions;


class UserExpired extends \Exception
{

    public function render(){
    	alert()->success('you have successfully redirected');
    	return redirect('/');
    }

}