<nav class="navbar navbar-default top-navbar z-index-99999" role="navigation">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#sidebar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="{{ url('/admin') }}"><strong>{{ config('app.name', 'Laravel') }}</strong></a>
    </div>

    <ul class="nav navbar-top-links navbar-right ">

        <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                <i class="fa fa-user fa-fw"></i> <i class="fa fa-caret-down"></i>
            </a>
            <ul class="dropdown-menu dropdown-user">
                {{-- <li><a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a> --}}
                </li>
                <li><a href="/admin/settings"><i class="fa fa-gear fa-fw"></i> Settings</a>
                <li><a href="/admin/profile"><i class="fa fa-user fa-fw"></i> Profile</a>
                </li>
                <li class="divider"></li>
                <li>
                <a href="{{ route('logout') }}"
                                    onclick="event.preventDefault();
                                             document.getElementById('logout-form').submit();">
                                    <i class="fa fa-sign-out fa-fw"></i> Logout
                                </a>

                <form id="logout-form" action="{{ url('/admin/logout') }}" method="POST" style="display: none;">
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
{{-- <div id="sideNav" href=""><i class="fa fa-caret-right"></i></div> --}}
    <div id="sidebar" class="sidebar-collapse">
        <ul class="nav" id="main-menu">

            <li>
                <a class="{{ \Request::is('admin') ? 'active-menu':''}}" href="{{ url('/admin') }}"><i class="fa fa-dashboard"></i> Dashboard</a>
            </li>
            <li>
                <a class="{{ \Request::is('admin/users') ? 'active-menu':''}}" href="{{ url('/admin/users') }}"><i class="fa fa-user"></i> Users</a>
            </li>
            <li>
                <a class="{{ \Request::is('admin/receipts') ? 'active-menu':''}}" href="{{ url('/admin/receipts') }}"><i class="fa fa-print"></i> Receipts</a>
            </li>

            <li>
                <a class="{{ \Request::is('admin/receipts/deleted') ? 'active-menu':''}}" href="{{ url('/admin/receipts/deleted') }}"><i class="fa fa-trash"></i> Deleted Receipts</a>
            </li>

            <li>
                <a class="{{ \Request::is('admin/print-settings') ? 'active-menu':''}}" href="{{ url('/admin/print-settings') }}"><i class="fa fa-print"></i> Print Settings</a>
            </li>
        </ul>

    </div>

</nav>