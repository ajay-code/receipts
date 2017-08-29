@extends('layouts.app')

@section('content')
          <div class="header"> 
                        <h1 class="page-header">
                            Dashboard <small>Summary of your App</small>
                        </h1>
                        <ol class="breadcrumb">
                          <li class="active"><a href="{{ url('/') }}">Home</a></li>
                          <li class="active"><a href="{{ url('/receipts/date') }}">Receipts By Date</a></li>
                        </ol> 
                                    
        </div>
            <div id="page-inner">

                <!-- /. ROW  --> 

                <div class="row" >
            		<receipts-bydate></receipts-bydate> 
                </div> 

            </div>
        <!-- /. PAGE INNER  -->
            
@endsection
