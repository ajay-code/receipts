@extends('layouts.app')

@section('content')
		<div class="header"> 
                        <h1 class="page-header">
                            Dashboard <small>Summary of your App</small>
                        </h1>
                        <ol class="breadcrumb">
                          <li class="active"><a href="{{ url('/') }}">Home</a></li>
                          <li class="active"><a href="{{ url('/receipts') }}">Receipts</a></li>
                        </ol> 
                                    
        </div>
            <div id="page-inner">

                <!-- /. ROW  --> 

                <div class="row" >
            		{{--  <receipts></receipts>   --}}

                    <receipts-data-table endpoint="/datatable/receipts"></receipts-data-table>
                </div> 

            </div>
        <!-- /. PAGE INNER  -->
        
@endsection
