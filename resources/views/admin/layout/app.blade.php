

 <!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Admin {{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <!-- Bootstrap Styles-->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <!-- Google Fonts-->
    <link href='//fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
    @yield('links')

    <script>
        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>
    </script>
</head>

<body>
    <div id="app">
        <loader></loader>
        <notifications group="notice" classes="vue-notification z-index"></notifications>

    <div id="wrapper">

        @include('admin.layout.partials.nav')
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

    <!-- JS Scripts-->
    <!-- jQuery Js -->
    <script src="{{ asset('js/manifest.js') }}"></script>
    <script src="{{ asset('js/vendor.js') }}"></script>
    <script src="{{ asset('js/admin/admin.js') }}"></script>
    @yield('scripts')
    @include('sweet::alert')


</body>

</html>