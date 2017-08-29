@extends('layouts.app')

@section('content')
		<div class="header"> 
                        <h1 class="page-header">
                            Dashboard <small>Summary of your App</small>
                        </h1>
                        <ol class="breadcrumb">
                          <li class="active"><a href="/">Home</a></li>
                          <li class="active"><a href="/references">References</a></li>
                        </ol> 
                                    
        </div>
            <div id="page-inner">
                <a href="/references/create">
                    <button class="btn btn-primary"> Generate Reference Code </button>
                </a>
                <br><br>

                @if ($references->count() > 0)
                <div class="table-responsive">
                  <table class="table table">
                        <thead>
                            <th>Reference Code</th>
                            <th>Created For</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            @foreach ($references as $reference)
                                <tr>
                                    <td>{{ $reference->reference_code }}</td>
                                    <td>{{ $reference->created_for }}</td>
                                    <td><a href="/references/{{$reference->id}}/delete"><button class="btn btn-danger"><i class="fa fa-delete"></i> Delete</button></a></td>
                                </tr>
                            @endforeach
                        </tbody>
                  </table>
                </div>
                @else
                <div class="bg-info padding-20">
                    No Unused reference code Present
                </div>
                @endif
            </div>
        <!-- /. PAGE INNER  -->
        
@endsection
