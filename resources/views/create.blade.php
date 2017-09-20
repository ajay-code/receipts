@extends('layouts.app')

@section('content')
		<div class="header"> 
                        <h1 class="page-header">
                            Dashboard <small>Summary of your App</small>
                        </h1>
                        <ol class="breadcrumb">
                          <li class="active"><a href="/">Home</a></li>
                          <li class="active"><a href="/create">Generate Receipts</a></li>
                        </ol> 
                                    
        </div>
            <div id="page-inner">

            		<receipt-form></receipt-form>    

            </div>
        <!-- /. PAGE INNER  -->
        
@endsection
