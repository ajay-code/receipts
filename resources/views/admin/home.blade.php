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

            <dashboard admin></dashboard>  

        </div>
        <!-- /. PAGE INNER  -->
            
@endsection
