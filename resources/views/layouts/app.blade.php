<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset("css/admin/custom-styles.css") }}"> 
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' lazyload="1"/>
    <script>
        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>

    </script>


    @yield('links')

</head>
<body>
    {{-- <div id="app">
        
        @yield('content')
    </div> --}}
    <div id="app">
    <div id="wrapper">

         @include('layouts.partials.nav')
        <!-- /. NAV SIDE  -->
        <div id="page-wrapper" >
      
                @yield('content')
             
            <footer>
                <p><a href="{{ url('/') }}">{{config('app.name', 'Laravel')}}</a></p>
            </footer>
        </div>        
        <!-- /. PAGE WRAPPER  -->
    </div>
    <!-- /. WRAPPER  -->
    </div>
    <!-- /. APP  -->

    <!-- Scripts -->
    <script src="{{ asset('js/manifest.js') }}"></script>
    <script src="{{ asset('js/vendor.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>
    
    @yield('scripts')
    @include('sweet::alert')

</body>
</html>
