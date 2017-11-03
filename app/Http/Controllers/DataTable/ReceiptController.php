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
    protected $allowCreation = true;

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
        return ["id","receiver_name","receiver_address","receiver_postcode","receiver_phone","receiver_product","tracking", "remark"];
    }

    /**
     * Get the columns that we can update.
     *
     * @return array
     */
    public function getUpdatableColumns()
    {
        return ["receiver_name","receiver_address","receiver_postcode","receiver_phone","receiver_product","tracking", "remark"];
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

    /**
     * Delete the given record
     *
     * @param \App\Receipt $receipt
     * @return void
     */
    public function destroy(Receipt $receipt)
    {
        $this->authorize('delete', $receipt);
        $receipt->delete();
    }

    /**
     * Delete the given records
     *
     * @param \Illuminate\Http\Request $request
     * @return void
     */
    public function delete_multiple(Request $request)
    {
        return Receipt::whereIn('id', $request->receipts)->where('user_id', auth()->user()->id)->delete();
    }
}
