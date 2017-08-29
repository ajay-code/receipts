@extends('layouts.app')

@section('content')
		<div class="header"> 
                        <h1 class="page-header">
                            Dashboard <small>Summary of your App</small>
                        </h1>
                        <ol class="breadcrumb">
                          <li class="active"><a href="#">Home</a></li>
                        </ol> 
                                    
        </div>
            <div id="page-inner">
                
                <div class="row" >
                    <div class="col-md-3 col-sm-12 col-xs-12">
                        <div class="panel panel-primary text-center no-boder blue">
                            <div class="col-xs-12">
                                <div class="panel-left pull-left blue">
                                    <i class="fa fa-user fa-5x"></i>
                                </div>
                            </div>
                            <div class="panel-right">
                                <h3>{{ auth()->user()->users->count() + auth()->user()->retailers->count() + auth()->user()->wholesalers->count()  }}</h3>
                               <strong>Users Under You</strong>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12 col-xs-12">
                        <div class="panel panel-primary text-center no-boder blue">
                            <div class="col-xs-12">

                              <div class="panel-left pull-left blue">
                                <i class="fa fa-print fa-5x"></i>
                                </div>
                                </div>
                            <div class="panel-right">
                            <h3>{{auth()->user()->receipts->count()}}</h3>
                               <strong> Total Receipts</strong>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-12 col-xs-12">
                        <div class="panel panel-primary text-center no-boder blue">
                            <div class="col-xs-12">

                              <div class="panel-left pull-left blue">
                                <i class="fa fa-usd fa-5x"></i>
                                </div>
                                </div>
                            <div class="panel-right">
                            <h3>{{ auth()->user()->receipts->sum('amount') }}</h3>
                               <strong> Total Revenue</strong>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        <!-- /. PAGE INNER  -->
        
@endsection
