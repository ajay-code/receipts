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

                <dashboard></dashboard>
                
                {{--  <div class="row" >
                    @if(auth()->user()->type != 'user')
                    <div class="col-md-3 col-sm-12 col-xs-12">
                        <div class="panel panel-primary text-center no-boder blue">
                            <div class="col-xs-12">
                                <div class="panel-left pull-left blue">
                                    <i class="fa fa-user fa-5x"></i>
                                </div>
                            </div>
                            <div class="panel-right">
                                <h4>{{ auth()->user()->users->count() + auth()->user()->retailers->count() + auth()->user()->wholesalers->count()  }}</h4>
                               <strong>Users Under You</strong>
                            </div>
                        </div>
                    </div>
                    @endif
                    <div class="col-md-3 col-sm-12 col-xs-12">
                        <div class="panel panel-primary text-center no-boder blue">
                            <div class="col-xs-12">

                              <div class="panel-left pull-left blue">
                                <i class="fa fa-print fa-5x"></i>
                                </div>
                                </div>
                            <div class="panel-right">
                            <h4>{{auth()->user()->receipts->count()}}</h4>
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
                            <h4>{{ auth()->user()->receipts->sum('amount') }}</h4>
                               <strong> Total Revenue</strong>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-12 col-xs-12">
                        <div class="panel panel-primary text-center no-boder blue">
                            <div class="col-xs-12">

                              <div class="panel-left pull-left blue">
                                <i class="fa fa-trophy fa-5x"></i>
                                </div>
                                </div>
                                @php
                                    $maxAmount = auth()->user()->receipts->max('amount');
                                    $topSelling = auth()->user()->receipts->where('amount', $maxAmount)->first();
                                @endphp
                                <div class="panel-right">
                                    @if($topSelling)
                                        <h4>{{ $topSelling->amount }} - <small class="inherit-color">{{ $topSelling->receiver_product }}</small></h4>
                                    @endif
                                    <strong> Top Selling</strong>
                                </div>
                        </div>
                    </div>
                    
                </div>
                @if(auth()->user()->has('receipts'))
                    <net-amount scope-api="/api"></net-amount>
                @endif  --}}

            </div>
        <!-- /. PAGE INNER  -->
        
@endsection
