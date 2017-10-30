<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserSetting extends FormRequest
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
            'font' => 'required', 
            'font_size' => 'required|integer',
            'page_width' => 'required|numeric',
            'page_height' => 'required|numeric',
            'top_sender_id' => 'required|numeric',
            'left_sender_id' => 'required|numeric',
    		'top_sender' => 'required|numeric',
    		'left_sender' => 'required|numeric',
    		'top_receiver' => 'required|numeric',
    		'left_receiver' => 'required|numeric',
    		'left_product' => 'required|numeric',
    		'top_product' => 'required|numeric',
    		'top_date' => 'required|numeric',
    		'left_date' => 'required|numeric',
    		'left_amount' => 'required|numeric',
			'top_amount' => 'required|numeric',
			'left_postcode' => 'required|integer',
            'top_postcode' => 'required|integer',
    		'left_phone' => 'required|integer',
            'top_phone' => 'required|integer',
        ];
    }
}
