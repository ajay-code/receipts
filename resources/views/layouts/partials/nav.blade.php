<nav class="navbar navbar-default top-navbar z-index-99999" role="navigation">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#sidebar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="{{ url('/') }}"><strong>{{ config('app.name', 'Laravel') }}</strong></a>
    </div>

    <ul class="nav navbar-top-links navbar-right ">

        <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                <i class="fa fa-user fa-fw"></i> <i class="fa fa-caret-down"></i>
            </a>
            <ul class="dropdown-menu dropdown-user">
                </li>
                <li><a href="/settings"><i class="fa fa-gear fa-fw"></i> Settings</a>
                <li><a href="/profile"><i class="fa fa-user fa-fw"></i> Profile</a>
                <li><a href="/references/use"><i class="fa fa-barcode fa-fw"></i> Use Reference Code</a>
                </li>
                <li class="divider"></li>
                <li>
                <a href="{{ route('logout') }}"
                                    onclick="event.preventDefault();
                                             document.getElementById('logout-form').submit();">
                                    <i class="fa fa-sign-out fa-fw"></i> Logout
                                </a>

                <form id="logout-form" action="{{ url('/logout') }}" method="POST" style="display: none;">
                    {{ csrf_field() }}
                </form>
                    
                </li>
            </ul>
            <!-- /.dropdown-user -->
        </li>
        <!-- /.dropdown -->
    </ul>
</nav>
<!--/. NAV TOP  -->
<nav class="navbar-default navbar-side" role="navigation">
    <div id="sidebar" class="sidebar-collapse">
        <ul class="nav" id="main-menu">

            <li>
                <a class="{{ \Request::is('/') ? 'active-menu':''}}" href="{{ url('/') }}"><i class="fa fa-dashboard"></i> Dashboard</a>
            </li>
            <li>
                <a class="{{ \Request::is('receipts/create') ? 'active-menu':''}}" href="{{ url('/receipts/create') }}"><i class="fa fa-plus"></i> Generate Receipts</a>
            </li>

            <li>
                <a class="{{ \Request::is('receipts') ? 'active-menu':''}}" href="{{ url('/receipts') }}"><i class="fa fa-print"></i> Receipts</a>
            </li>

            <li>
                <a class="{{ \Request::is('receipts/date') ? 'active-menu':''}}" href="{{ url('/receipts/date') }}"><i class="fa fa-calendar"></i> Receipts By Date</a>
            </li>

            <li>
                <a class="{{ \Request::is('subusers') ? 'active-menu':''}}" href="{{ url('/subusers') }}"><i class="fa fa-users"></i>Users Under You </a>
            </li>
            
            @if (auth()->user()->type !== 'user')
                <li>
                    <a class="{{ \Request::is('references') ? 'active-menu':''}}" href="{{ url('/references') }}"><i class="fa fa-barcode"></i> References</a>
                </li>
            @endif
        </ul>

    </div>

</nav>