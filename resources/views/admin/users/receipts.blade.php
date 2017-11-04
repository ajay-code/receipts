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
            		{{--  <users-receipts user-id="{{$user->id}}" admin></users-receipts>   --}}
                <receipts-data-table endpoint="/admin/datatable/users/{{$user->id}}/receipts" admin></receipts-data-table>
                </div> 
    
            </div>
        <!-- /. PAGE INNER  -->
            
@endsection

