@extends('admin.layout.app')

@section('content')
          <div class="header margin-top-60"> 
                        <h1 class="page-header">
                            Dashboard <small>Summary of your App</small>
                        </h1>
                        <ol class="breadcrumb">
                          <li class="active"><a href="#">Home</a></li>
                        </ol> 
                                    
        </div>
            <div id="page-inner">

                <!-- /. ROW  --> 

                <div class="row" >
                    <div class="col-md-3 col-sm-12 col-xs-12">
                        <div class="panel panel-primary text-center no-boder blue">
                            <div class="col-xs-12">
                                <div class="panel-left pull-left blue">
                                    <i class="fa fa-user fa-5x"></i>
                                </div>
                            </div>
                            <div class="panel-right">
                                <h4>{{ $usersCount }}</h4>
                               <strong> Total Users</strong>
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
                            <h4>{{$receiptsCount}}</h4>
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
                            <h4>{{ \App\Receipt::sum('amount') }}</h4>
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
                            <div class="panel-right">
                            @php
                                $maxAmount = \App\Receipt::max('amount');
                                $topSelling = \App\Receipt::where('amount', $maxAmount)->first();
                            @endphp
                            <h4>{{ $topSelling->amount }} - <small class="inherit-color">{{ $topSelling->receiver_product }}</small></h4>
                               <strong> Top Selling</strong>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                {{-- <div class="row">
                <div class="col-md-5">
                        <div class="panel panel-default">
                        <div class="panel-heading">
                            Line Chart
                        </div>
                        <div class="panel-body">
                            <div id="morris-line-chart"></div>
                        </div>                      
                    </div>   
                    </div>      
                    
                        <div class="col-md-7">
                    <div class="panel panel-default">
                    <div class="panel-heading">
                                Bar Chart Example
                            </div>
                            <div class="panel-body">
                                <div id="morris-bar-chart"></div>
                            </div>
                        
                    </div>  
                    </div>
                    
                </div>  --}}

            </div>
        <!-- /. PAGE INNER  -->
            
@endsection
