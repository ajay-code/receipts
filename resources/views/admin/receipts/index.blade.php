@extends('admin.layout.app')

@section('content')
          <div class="header"> 
                        <h1 class="page-header">
                            Reports <small>View Sales Report</small>
                        </h1>
                        <ol class="breadcrumb">
                          <li class="active"><a href="#">Home</a></li>
                          <li class="active"><a href="/admin/receipts">Receipts</a></li>
                        </ol> 
                                    
        </div>
            <div id="page-inner">

                <!-- /. ROW  --> 

                <div class="row" >
            		{{--  <receipts admin></receipts>   --}}
                    <receipts-data-table endpoint="/admin/datatable/receipts" admin></receipts-data-table>

                </div> 

            </div>
        <!-- /. PAGE INNER  -->
            
@endsection
