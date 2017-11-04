<?php

namespace App\Http\Controllers\Admin\DataTable;

use Route;
use App\User;
use App\Receipt;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;

class UserReceiptController extends ReceiptController
{
    /**
     * Get all records.
     *
     * @param  Request $request
     * @return mixed
     */
    protected function getRecords(Request $request)
    {
        $builder = $this->builder;
        $userId = $request->route('user');
        if ($this->hasSearchQuery($request)) {
            $builder = $this->buildSearch($builder, $request);
        }

        try {
            return $this->builder->where('user_id', $userId)->orderBy('id', 'asc')->select($this->getDisplayableColumns())->paginate($request->limit);
        } catch (QueryException $e) {
            return [];
        }
    }
}
