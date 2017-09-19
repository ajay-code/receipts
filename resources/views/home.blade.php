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
                                <h4>{{ auth()->user()->users->count() + auth()->user()->retailers->count() + auth()->user()->wholesalers->count()  }}</h4>
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
                            @if($topSelling)
                                <div class="panel-right">
                                <h4>{{ $topSelling->amount }} - <small class="inherit-color">{{ $topSelling->receiver_product }}</small></h4>
                                <strong> Top Selling</strong>
                                </div>
                            @endif
                        </div>
                    </div>
                    
                </div>
                @if(auth()->user()->has('receipts'))

                <div class="row">

                    <table class="table">

                        <caption>
                            <div class="col-sm-6">
                                STATISTIC
                            </div>
                            {{--  <div class="col-sm-4 col-sm-offset-2">
                                <select class="form-control">
                                    <option value="0">this month</option>  
                                    <option value="1">last month</option>  
                                </select>
                            </div>  --}}
                        </caption>

                        <tr>
                            <th> Total Sales </th>
                            <td> ${{ auth()->user()->receipts->sum('amount') }} </td>
                        </tr>
                        <tr>
                            <th> Total Product Cost </th>
                            <td> ${{ auth()->user()->receipts->sum('product_cost') }} </td>
                        </tr>
                        <tr>
                            <th> Total Postage Cost </th>
                            <td> ${{ auth()->user()->receipts->sum('postage_cost') }} </td>
                        </tr>

                        <tr>
                            <th>
                                Net
                            </th>  
                            <td>
                                ${{ auth()->user()->receipts->sum('amount') - (auth()->user()->receipts->sum('product_cost') + auth()->user()->receipts->sum('postage_cost')) }}
                            </td>
                        </tr>
                    </table>    
                    
                </div>
                @endif

            </div>
        <!-- /. PAGE INNER  -->
        
@endsection
