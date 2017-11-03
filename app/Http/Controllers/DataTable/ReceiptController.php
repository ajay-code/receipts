<?php

namespace App\Http\Controllers\DataTable;

use App\Receipt;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;

class ReceiptController extends DataTableController
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth', 'not-expired']);

        $builder = $this->builder();
        // dd($builder);

        if (!$builder instanceof Builder) {
            throw new \Exception('Entity builder not instance of Builder');
        }

        $this->builder = $builder;
    }
    /**
     * If we can create an entity or not.
     *
     * @var boolean
     */
    protected $allowCreation = false;

    /**
     * Get the builder for the entity.
     *
     * @return Illuminate\Database\Eloquent\Builder
     */
    public function builder()
    {
        return Receipt::Query();
    }


    /**
     * Get the columns that we can display.
     *
     * @return array
     */
    public function getDisplayableColumns()
    {
        return ["id","user_id","sender_id","sender_name","sender_address","sender_postcode","sender_phone","sender_email","receiver_name","receiver_address","receiver_postcode","receiver_phone","receiver_email","receiver_product","amount","product_cost","postage_cost","tracking","created_at","updated_at"];
    }

    /**
     * Get all records.
     *
     * @param  Request $request
     * @return mixed
     */
    protected function getRecords(Request $request)
    {
        $builder = $this->builder;

        if ($this->hasSearchQuery($request)) {
            $builder = $this->buildSearch($builder, $request);
        }

        try {
            return $this->builder->where('user_id', auth()->user()->id)->orderBy('id', 'asc')->select($this->getDisplayableColumns())->paginate($request->limit);
        } catch (QueryException $e) {
            return [];
        }
    }

    
}
