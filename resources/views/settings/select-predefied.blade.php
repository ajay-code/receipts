@extends('layouts.app') 
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
    {{--  <form action="/settings/store" method="post">
        {{ csrf_field() }}
        <div class="form-group">
            <select name="setting" class="form-control">
                @foreach($printSettings as $printSetting)
                    <option value="{{$printSetting->id}}">{{$printSetting->name}}</option>
                @endforeach
            </select>
        </div>
        <br>
        <div class="">
            <button type="submit" class="btn btn-primary"> Update </button>
        </div>
    </form>  --}}
    <settings></settings>
</div>



<!-- /. PAGE INNER  -->

@endsection