@extends('layouts.app')

@section('content')
		<div class="header"> 
                        <h1 class="page-header">
                            Dashboard <small>Summary of your App</small>
                        </h1>
                        <ol class="breadcrumb">
                          <li class="active"><a href="/">Home</a></li>
                          <li class="active"><a href="/profile">Profile</a></li>
                          <li class="active"><a href="/profile/edit">Edit Profile </a></li>
                        </ol> 
                                    
        </div>
            <div id="page-inner">
                <h3>Edit Profile</h3>

                <form action="/profile/edit" method="post" class="form-horizontal">
                    {{ csrf_field() }}
                    <div class="form-group">
                            <label for="name" class="col-sm-2 control-label">User Name</label>
                            <div class="col-sm-4">
                              <input type="text" class="form-control" id="name" name="name" value="{{ $user->name }}" placeholder="">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-xs-offset-2">
                                <button type="submit" class="btn btn-primary">Change</button>
                            </div>
                        </div>
                </form>

                @include('layouts.partials.change-password')

            </div>
        <!-- /. PAGE INNER  -->
        
@endsection
