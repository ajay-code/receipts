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
    <settings admin></settings>
</div>



<!-- /. PAGE INNER  -->

@endsection