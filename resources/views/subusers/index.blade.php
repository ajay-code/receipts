@extends('layouts.app')

@section('content')
		<div class="header"> 
                        <h1 class="page-header">
                            Dashboard <small>Summary of your App</small>
                        </h1>
                        <ol class="breadcrumb">
                          <li class="active"><a href="/">Home</a></li>
                          <li class="active"><a href="/subusers">Subusers</a></li>
                        </ol> 
                                    
        </div>
            <div id="page-inner">
                    @if ($CurrentUser->users->count() <= 0 & $CurrentUser->retailers->count() <= 0 & $CurrentUser->wholesalers->count() <=0 )
                        <h3>You have No Users Under You</h3>
                    @endif
                    @if ($CurrentUser->users->count() > 0)
                        <div class="table-container">
                            <h3>Users Under You</h3>
                            <div class="table-responsive">
                                 <table id="users-table" class="table">
                                     <thead>
                                         <th>Name</th>
                                         <th>Email</th>
                                         <th>Id</th>
                                         <th>Go To</th>
                                         <th>Created at</th>
                                     </thead>
                                     <tbody>
                                         @foreach ($CurrentUser->users as $subuser)
                                             <tr>
                                                 <td>{{ $subuser->name }}</td>
                                                 <td>{{ $subuser->email }}</td>
                                                 <td>{{ $subuser->uid}}</td>
                                                 <td><a href="/subusers/{{ $subuser->id }}/receipts">Receipts...</a></td>
                                                 <td>{{ $subuser->created_at->diffForHumans() }}</td>
                                             </tr>
                                         @endforeach
                                     </tbody>
                                 </table>
                             </div> 
                         </div>
                    @endif

                    @if ($CurrentUser->retailers->count() > 0)
                        <div class="table-container">
                            <h3>Retailes Under You</h3>
                            <div class="table-responsive">
                                 <table id="retailers-table" class="table">
                                     <thead>
                                         <th>Name</th>
                                         <th>Email</th>
                                         <th>Id</th>
                                         <th>Go To</th>
                                         <th>Created at</th>
                                     </thead>
                                     <tbody>
                                         @foreach ($CurrentUser->retailers as $subretailer)
                                             <tr>
                                                 <td>{{ $subretailer->name }}</td>
                                                 <td>{{ $subretailer->email }}</td>
                                                 <td>{{ $subretailer->uid}}</td>
                                                 <td><a href="/subusers/{{ $subretailer->id }}/receipts">{{ $subretailer->id }}</a></td>
                                                 <td>{{ $subretailer->created_at->diffForHumans() }}</td>
                                             </tr>
                                         @endforeach
                                     </tbody>
                                 </table>
                             </div> 
                         </div>
                    @endif

                    @if ($CurrentUser->wholesalers->count() > 0)
                    <div class="table-container">
                            <h3>Wholesalers Under You</h3>
                            <div class="table-responsive">
                                 <table id="wholesalers-table" class="table">
                                     <thead>
                                         <th>Name</th>
                                         <th>Email</th>
                                         <th>Id</th>
                                         <th>Go To</th>
                                         <th>Created at</th>
                                     </thead>
                                     <tbody>
                                         @foreach ($CurrentUser->wholesalers as $subwholesaler)
                                             <tr>
                                                 <td>{{ $subwholesaler->name }}</td>
                                                 <td>{{ $subwholesaler->email }}</td>
                                                 <td>{{ $subwholesaler->uid}}</td>
                                                 <td><a href="/subusers/{{ $subwholesaler->id }}/receipts">{{ $subwholesaler->id }}</a></td>
                                                 <td>{{ $subwholesaler->created_at->diffForHumans() }}</td>
                                             </tr>
                                         @endforeach
                                     </tbody>
                                 </table>
                             </div> 
                         </div>
                    @endif

            </div>
        <!-- /. PAGE INNER  -->
        
@endsection
