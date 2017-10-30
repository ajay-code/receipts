<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSetting extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|unique:print_settings,name,' . ($this->route('print_setting') ? $this->route('print_setting')->id : ''), 
            'font' => 'required', 
            'font_size' => 'required|integer',
            'page_width' => 'required|integer',
            'page_height' => 'required|integer',
            'top_sender_id' => 'required|integer',
            'left_sender_id' => 'required|integer',
    		'top_sender' => 'required|integer',
    		'left_sender' => 'required|integer',
    		'top_receiver' => 'required|integer',
    		'left_receiver' => 'required|integer',
    		'left_product' => 'required|integer',
    		'top_product' => 'required|integer',
    		'top_date' => 'required|integer',
    		'left_date' => 'required|integer',
    		'left_amount' => 'required|integer',
    		'top_amount' => 'required|integer',
    		'left_postcode' => 'required|integer',
            'top_postcode' => 'required|integer',
    		'left_phone' => 'required|integer',
            'top_phone' => 'required|integer',
        ];
    }
}
