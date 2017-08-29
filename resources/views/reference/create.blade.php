@extends('layouts.app')

@section('content')
		<div class="header"> 
                        <h1 class="page-header">
                            Dashboard <small>Summary of your App</small>
                        </h1>
                        <ol class="breadcrumb">
                          <li class="active"><a href="#">Home</a></li>
                          <li class="active"><a href="/references">References</a></li>
                          <li class="active"><a href="/references/create">Generate Reference Code</a></li>
                        </ol> 
                                    
        </div>
            <div id="page-inner">
            @if (session('message'))
                <div class="alert alert-success alert-dismissible fade in" role="alert"> 
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> 
                    <strong>Reference code Successfully created</strong> Reference Code: {{ session('message.reference_code') }} 
                    <p>You can also see un used reference code in <a href="/references/">References Page</a></p>
                </div>
            @endif

            @if (session('error'))
                <div class="alert alert-danger alert-dismissible fade in" role="alert"> 
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> 
                    {{ session('error.message') }} <br>
                    {{ session('error.error') }}
                </div>
            @endif
            <h3>Generate Recerence code</h3>
            <form class="form-horizontal" action="{{ url('/references/create') }}" method="post">
                {{ csrf_field() }}
                <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">For</label>
                    <div class="col-sm-4">
                      <select name="created_for" class="form-control">
                        @include('reference.partials.createdfor.options')    
                      </select>
                    </div>
                  </div>
                  
                  <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                      <button type="submit" class="btn btn-primary">Create</button>
                    </div>
                  </div>
                
            </form>

            		

            </div>
        <!-- /. PAGE INNER  -->
        
@endsection
