@extends('layouts.app')

@section('content')
		<div class="header"> 
                        <h1 class="page-header">
                            Dashboard <small>Summary of your App</small>
                        </h1>
                        <ol class="breadcrumb">
                          <li class="active"><a href="#">Home</a></li>
                          <li class="active"><a href="/references">References</a></li>
                          <li class="active"><a href="/references/use">Use Reference Code</a></li>
                        </ol> 
                                    
        </div>
            <div id="page-inner">
            @if (session('error'))
                <div class="alert alert-danger alert-dismissible fade in" role="alert"> 
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> 
                    {{ session('error.message') }} <br>
                    {{ session('error.error') }}
                </div>
            @endif
            <h3>Use Recerence code</h3>
            <form class="form-horizontal" action="{{ url('/references/use') }}" method="post">
                {{ csrf_field() }}
                <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">Reference Code</label>
                    <div class="col-sm-4">
                      <input name="reference_code" class="form-control">
                    </div>
                  </div>
                  
                  <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                      <button type="submit" class="btn btn-primary">Use</button>
                    </div>
                  </div>
                
            </form>

            		

            </div>
        <!-- /. PAGE INNER  -->
        
@endsection
