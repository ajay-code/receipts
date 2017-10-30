@extends('admin.layout.app') 
@section('content')
<div class="header">
    <h1 class="page-header">
        Dashboard
        <small>Summary of your App</small>
    </h1>
    <ol class="breadcrumb">
        <li class="active">
            <a href="#">Home</a>
        </li>
    </ol>

</div>
<div id="page-inner">
    <div class="row">
        <h2>Create Print Settings</h2>

        @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
        @endif
        <form action="/admin/print-settings/{{$printSetting->id}}" method="post" class="form-horizontal">
            {{ csrf_field() }}
            <input name="_method" type="hidden" value="PATCH">
            <div class="form-group">
                <label for="name" class="col-sm-2 control-label">Name</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" id="name" name="name" value="{{ old('name') ? old('name') : $printSetting->name }}" placeholder="">
                </div>
            </div>
            <h4>Font</h4>
            <div class="form-group">
                <label for="font" class="col-sm-2 control-label">Font</label>
                <div class="col-sm-4">
                    <select class="form-control" name="font" required>
                        @foreach (config('user.fonts') as $font)
                        <option value="{{$font}}" {{ old('font') ? (old('font') == $font ? 'selected': '') : ($printSetting->font == $font ? 'selected': '')}}>{{$font}}</option>
                        @endforeach
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label for="font_size" class="col-sm-2 control-label">Font Size</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="font_size" name="font_size" value="{{ old('font_size') ? old('font_size') : $printSetting->font_size }}" placeholder="">
                </div>
            </div>
            <h4>Page Dimentioms (in mm)</h4>
            <div class="form-group">
                <label for="page_width" class="col-sm-2 control-label">Page Width</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="page_width" name="page_width" value="{{ old('page_width') ? old('page_width') : $printSetting->page_width }}" placeholder="">
                </div>
            </div>
            <div class="form-group">
                <label for="page_height" class="col-sm-2 control-label">Page Height</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="page_height" name="page_height" value="{{ old('page_height') ? old('page_height') : $printSetting->page_height }}"
                        placeholder="">
                </div>
            </div>

            <h4>Content Position (in mm)</h4>

            <div class="form-group">
                <label for="top_sender_id" class="col-sm-2 control-label">ID From Top</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="top_sender_id" name="top_sender_id" value="{{ old('top_sender_id') ? old('top_sender_id') : $printSetting->top_sender_id }}"
                        placeholder="">
                </div>
            </div>
            <div class="form-group">
                <label for="left_sender_id" class="col-sm-2 control-label">ID From Left</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="left_sender_id" name="left_sender_id" value="{{ old('left_sender_id') ? old('left_sender_id') : $printSetting->left_sender_id }}"
                        placeholder="">
                </div>
            </div>

            <div class="form-group">
                <label for="top_sender" class="col-sm-2 control-label">Sender From Top</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="top_sender" name="top_sender" value="{{ old('top_sender') ? old('top_sender') : $printSetting->top_sender }}" placeholder="">
                </div>
            </div>
            <div class="form-group">
                <label for="left_sender" class="col-sm-2 control-label">Sender From Left</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="left_sender" name="left_sender" value="{{ old('left_sender') ? old('left_sender') : $printSetting->left_sender }}"
                        placeholder="">
                </div>
            </div>

            <div class="form-group">
                <label for="top_receiver" class="col-sm-2 control-label">Receiver From Top</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="top_receiver" name="top_receiver" value="{{ old('top_receiver') ? old('top_receiver') : $printSetting->top_receiver }}"
                        placeholder="">
                </div>
            </div>

            <div class="form-group">
                <label for="left_receiver" class="col-sm-2 control-label">Receiver From Left</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="left_receiver" name="left_receiver" value="{{ old('left_receiver') ? old('left_receiver') : $printSetting->left_receiver }}"
                        placeholder="">
                </div>
            </div>

            <div class="form-group">
                <label for="top_product" class="col-sm-2 control-label">Product From Top</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="top_product" name="top_product" value="{{ old('top_product') ? old('top_product') : $printSetting->top_product }}"
                        placeholder="">
                </div>
            </div>

            <div class="form-group">
                <label for="left_product" class="col-sm-2 control-label">Product From Left</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="left_product" name="left_product" value="{{ old('left_product') ? old('left_product') : $printSetting->left_product }}"
                        placeholder="">
                </div>
            </div>

            <div class="form-group">
                <label for="top_date" class="col-sm-2 control-label">Date From Top</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="top_date" name="top_date" value="{{ old('top_date') ? old('top_date') : $printSetting->top_date }}" placeholder="">
                </div>
            </div>

            <div class="form-group">
                <label for="left_date" class="col-sm-2 control-label">Date From Left</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="left_date" name="left_date" value="{{ old('left_date') ? old('left_date') : $printSetting->left_date }}" placeholder="">
                </div>
            </div>

            <div class="form-group">
                <label for="top_amount" class="col-sm-2 control-label">Amount From Top</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="top_amount" name="top_amount" value="{{ old('top_amount') ? old('top_amount') : $printSetting->top_amount }}" placeholder="">
                </div>
            </div>

            <div class="form-group">
                <label for="left_amount" class="col-sm-2 control-label">Amount From Left</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="left_amount" name="left_amount" value="{{ old('left_amount') ? old('left_amount') : $printSetting->left_amount }}"
                        placeholder="">
                </div>
            </div>

            <div class="form-group">
                <label for="top_postcode" class="col-sm-2 control-label">Postcode From Top</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="top_postcode" name="top_postcode" value="{{ old('top_postcode') ? old('top_postcode') : $printSetting->top_postcode }}"
                        placeholder="">
                </div>
            </div>
            <div class="form-group">
                <label for="left_postcode" class="col-sm-2 control-label">Postcode From Left</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="left_postcode" name="left_postcode" value="{{ old('left_postcode') ? old('left_postcode') : $printSetting->left_postcode }}"
                        placeholder="">
                </div>
            </div>

            <div class="form-group">
                <label for="top_postcode" class="col-sm-2 control-label">Phone From Top</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="top_phone" name="top_phone" value="{{ old('top_phone') ? old('top_phone') : $printSetting->top_phone }}"
                        placeholder="">
                </div>
            </div>
            <div class="form-group">
                <label for="left_phone" class="col-sm-2 control-label">Phone From Left</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="left_phone" name="left_phone" value="{{ old('left_postcode') ? old('left_postcode') : $printSetting->left_postcode }}"
                        placeholder="">
                </div>
            </div>
            <div class="form-group">
                <div class="col-xs-offset-2">
                    <button type="submit" class="btn btn-primary">Update</button>
                </div>
            </div>
        </form>
    </div>

</div>



<!-- /. PAGE INNER  -->

@endsection