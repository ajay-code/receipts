<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('auth.name', 'Laravel') }}</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' lazyload="1"/>

    <style type="text/css">
        .container{
            padding-top: 100px
        }    
    </style>
    @yield('links')

</head>
<body>
    <div id="app">
         @include('layouts.partials.nav-error')
         @yield('content')
    </div> 

    <!-- Scripts -->
    @yield('scripts')

</body>
</html>
