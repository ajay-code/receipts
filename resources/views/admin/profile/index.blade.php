@extends('admin.layout.app')

@section('content')
		<div class="header"> 
                        <h1 class="page-header">
                            Dashboard <small>Summary of your App</small>
                        </h1>
                        <ol class="breadcrumb">
                          <li class="active"><a href="/">Home</a></li>
                          <li class="active"><a href="/profile">Profile</a></li>
                        </ol> 
                                    
        </div>
            <div id="page-inner">
                <div class="div">
                            <i class="fa fa-user fa-4x"></i>
                            <span class="user-name"> {{ $admin->name }}</span>
                </div>

                <table class="table table">
                    <tr>
                        <th>User Name</th>
                        <td>{{$admin->name}}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{{ $admin->username }}</td>
                    </tr>
                </table>

                <a href="/admin/profile/edit">
                    <button class="btn btn-primary btn-lg">Edit</button>
                </a>
                
            </div>



            </div>
        <!-- /. PAGE INNER  -->
        
@endsection
