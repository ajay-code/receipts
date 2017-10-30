@extends('admin.layout.app') @section('content')
<div class="header">
    <h1 class="page-header">
        Print
        <small>Settings</small>
    </h1>
    <ol class="breadcrumb">
        <li class="active">
            <a href="#">Home</a>
        </li>
    </ol>
</div>
<div id="page-inner">
    <div>
        <a href="/admin/print-settings/create">
            <button class="btn btn-primary">
                <i class="fa fa-plus"></i> Create
            </button>
        </a>
    </div>
    <div class="table-responsive">
        <table class="table">
            @if($printSettings->isNotEmpty())
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Font</th>
                    <th>Font Size</th>
                    <th>Actions</th>
                </tr>
            </thead>
            @else No Default Settings Are Avalilable @endif
            <tbody>
                @foreach($printSettings as $printSetting)
                <tr>
                    <td>{{$printSetting->name}}</td>
                    <td>{{$printSetting->font}}</td>
                    <td>{{$printSetting->font_size}}</td>
                    <td>
                        <a href="/admin/print-settings/{{$printSetting->id}}/edit" class="text-primary" >
                            <i class="fa fa-edit"></i>
                        </a>
                        <a href="/admin/print-settings/{{$printSetting->id}}" class="text-danger" data-method="delete" onclick="event.preventDefault();deletePrintSetting(this);">
                            <i class="fa fa-trash"></i>
                        </a>
                    </td>
                </tr>
                @endforeach
  
                </script>
                
            </tbody>
        </table>
    </div>
</div>
<!-- /. PAGE INNER  -->
@endsection