@extends('layouts.app')

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
                            <span class="user-name"> {{ $user->name }}</span>
                </div>

                <table class="table table">
                    <tr>
                        <th>UID</th>
                        <td>{{ $user->uid }}</td>
                    </tr>
                    <tr>
                        <th>User Name</th>
                        <td>{{$user->name}}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{{ $user->email }}</td>
                    </tr>
                    <tr>
                        <th>Type</th>
                        <td>{{ $user->type }}</td>
                    </tr>
                    <tr>
                        <th>Total Receipts</th>
                        <td>{{ $user->receipts()->count() }}</td>
                    </tr>
                    <tr>
                        <th>Total Revenue</th>
                        <td>${{ $user->receipts()->sum('amount') }}</td>
                    </tr>
                    <tr>
                        <th>Account Axpire At</th>
                        <td>{{ $user->expire_at->formatLocalized('%A, %B %d, %Y') }}</td>
                    </tr>
                </table>

                <a href="/profile/edit">
                    <button class="btn btn-primary btn-lg">Edit</button>
                </a>
                
            </div>



            </div>
        <!-- /. PAGE INNER  -->
        
@endsection
