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
        <a href="/admin/settings/select">
            <button class="btn btn-primary">Select Predefined Print Setting</button>
        </a>
        <h4>OR</h4>
        <h3>Set Position In The Receipts</h3>

        @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
        @endif
        <form action="/admin/settings" method="post" class="form-horizontal">
            {{ csrf_field() }}
            <h4>Fonts</h4>
            <div class="form-group">
                <label for="font" class="col-sm-2 control-label">Font</label>
                <div class="col-sm-4">
                    <select class="form-control" name="font">
                        @foreach (config('user.fonts') as $font)
                        <option value="{{$font}}" {{ old( 'font') ? (old( 'font')== $font ? 'selected': '') : ($user->settings->font == $font ? 'selected': '')}}>{{$font}}</option>
                        @endforeach
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label for="font_size" class="col-sm-2 control-label">Font Size</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="font_size" name="font_size" value="{{ old('left_amount') ? old('left_amount') : $user->settings->font_size }}">
                </div>
            </div>
            <h4>Page Dimentions (in mm)</h4>
            <div class="form-group">
                <label for="page_width" class="col-sm-2 control-label">Page Width</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="page_width" name="page_width" value="{{ old('left_amount') ? old('left_amount') : $user->settings->page_width }}">
                </div>
            </div>
            <div class="form-group">
                <label for="page_height" class="col-sm-2 control-label">Page Height</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="page_height" name="page_height" value="{{ old('left_amount') ? old('left_amount') : $user->settings->page_height }}">
                </div>
            </div>

            <h4>Content Position (in mm)</h4>

            <div class="form-group">
                <label for="top_sender_id" class="col-sm-2 control-label">ID From Top</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="top_sender_id" name="top_sender_id" value="{{ old('left_amount') ? old('left_amount') : $user->settings->top_sender_id }}">
                </div>
            </div>
            <div class="form-group">
                <label for="left_sender_id" class="col-sm-2 control-label">ID From Left</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="left_sender_id" name="left_sender_id" value="{{ old('left_amount') ? old('left_amount') : $user->settings->left_sender_id }}">
                </div>
            </div>

            <div class="form-group">
                <label for="top_sender" class="col-sm-2 control-label">Sender From Top</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="top_sender" name="top_sender" value="{{ old('left_amount') ? old('left_amount') : $user->settings->top_sender }}">
                </div>
            </div>
            <div class="form-group">
                <label for="left_sender" class="col-sm-2 control-label">Sender From Left</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="left_sender" name="left_sender" value="{{ old('left_amount') ? old('left_amount') : $user->settings->left_sender }}">
                </div>
            </div>

            <div class="form-group">
                <label for="top_receiver" class="col-sm-2 control-label">Receiver From Top</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="top_receiver" name="top_receiver" value="{{ old('left_amount') ? old('left_amount') : $user->settings->top_receiver }}">
                </div>
            </div>

            <div class="form-group">
                <label for="left_receiver" class="col-sm-2 control-label">Receiver From Left</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="left_receiver" name="left_receiver" value="{{ old('left_amount') ? old('left_amount') : $user->settings->left_receiver }}">
                </div>
            </div>

            <div class="form-group">
                <label for="top_product" class="col-sm-2 control-label">Product From Top</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="top_product" name="top_product" value="{{ old('left_amount') ? old('left_amount') : $user->settings->top_product }}">
                </div>
            </div>

            <div class="form-group">
                <label for="left_product" class="col-sm-2 control-label">Product From Left</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="left_product" name="left_product" value="{{ old('left_amount') ? old('left_amount') : $user->settings->left_product }}">
                </div>
            </div>

            <div class="form-group">
                <label for="top_date" class="col-sm-2 control-label">Date From Top</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="top_date" name="top_date" value="{{ old('left_amount') ? old('left_amount') : $user->settings->top_date }}">
                </div>
            </div>

            <div class="form-group">
                <label for="left_date" class="col-sm-2 control-label">Date From Left</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="left_date" name="left_date" value="{{ old('left_amount') ? old('left_amount') : $user->settings->left_date }}">
                </div>
            </div>

            <div class="form-group">
                <label for="top_amount" class="col-sm-2 control-label">Amount From Top</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="top_amount" name="top_amount" value="{{ old('left_amount') ? old('left_amount') : $user->settings->top_amount }}">
                </div>
            </div>

            <div class="form-group">
                <label for="left_amount" class="col-sm-2 control-label">Amount From Left</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="left_amount" name="left_amount" value="{{ old('left_amount') ? old('left_amount') : $user->settings->left_amount }}">
                </div>
            </div>
            <div class="form-group">
                <label for="top_postcode" class="col-sm-2 control-label">Postcode From Top</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="top_postcode" name="top_postcode" value="{{ old('top_postcode') ? old('top_postcode') : $user->settings->top_postcode }}">
                </div>
            </div>
            <div class="form-group">
                <label for="left_postcode" class="col-sm-2 control-label">Postcode From Left</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="left_postcode" name="left_postcode" value="{{ old('left_postcode') ? old('left_postcode') : $user->settings->left_postcode }}">
                </div>
            </div>

            <div class="form-group">
                <label for="top_postcode" class="col-sm-2 control-label">Phone From Top</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="top_phone" name="top_phone" value="{{ old('top_phone') ? old('top_phone') : $user->settings->top_phone }}">
                </div>
            </div>
            <div class="form-group">
                <label for="left_phone" class="col-sm-2 control-label">Phone From Left</label>
                <div class="col-sm-4">
                    <input type="number" class="form-control" id="left_phone" name="left_phone" value="{{ old('left_postcode') ? old('left_postcode') : $user->settings->left_postcode }}">
                </div>
            </div>
            <div class="form-group">
                <div class="col-xs-offset-2">
                    <button type="submit" class="btn btn-primary">Update</button>
                </div>
            </div>
        </form>
    </div>


    <div class="bg-danger">

    </div>
</div>



<!-- /. PAGE INNER  -->

@endsection