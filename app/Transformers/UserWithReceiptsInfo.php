<?php

namespace App\Transformers;

use App\User;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;
/**
* 
*/
class UserWithReceiptsInfo extends \League\Fractal\TransformerAbstract
{
	
	public function transform(User $user)
	{
		return [
			'id' => $user->id,
			'uid' => $user->uid,
			'name' => $user->name,
			'email' => $user->email,
			'type' => $user->type,
			'created_at' => $user->created_at->toDateString(),
			'expire_at' => $user->expire_at->toDateString(),
			'activated' => $user->activated,
			'totalReceipts' => $user->receipts->count(),
		];
	}
}