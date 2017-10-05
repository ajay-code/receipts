@extends('admin.layout.app')

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

                <!-- /. ROW  --> 

                <div class="row" >
            		<deleted-receipts ></deleted-receipts> 
                </div> 

            </div>
        <!-- /. PAGE INNER  -->
            
@endsection
