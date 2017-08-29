<br><br>
<h2>OR</h2>
<br><br>
@if (!$user->password)
<h3>Set Password</h3>
	<form method="post" action="/password/set" class="form-horizontal">
		{{ csrf_field() }}
		<div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
            <label for="password" class="col-sm-2 control-label">Password</label>

            <div class="col-sm-4">
                <input id="password" type="password" class="form-control" name="password" required>

                @if ($errors->has('password'))
                    <span class="help-block">
                        <strong>{{ $errors->first('password') }}</strong>
                    </span>
                @endif
            </div>
        </div>

        <div class="form-group">
            <label for="password-confirm" class="col-sm-2 control-label">Confirm Password</label>

            <div class="col-sm-4">
                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
            </div>
        </div>

        <div class="form-group">
	        <div class="col-sm-offset-1">
	            <button type="submit" class="btn btn-primary">
	                Set Password
	            </button>
	        </div>
	    </div>
	</form>
@else
	<h3>Change Password</h3>
	<form method="post" action="/password/change" class="form-horizontal">
		{{ csrf_field() }}
	
		<div class="form-group{{ $errors->has('old_password') ? ' has-error' : '' }}">
            <label for="old_password" class="col-sm-2 control-label">Current Password</label>

            <div class="col-sm-4">
                <input id="old_password" type="password" class="form-control" name="old_password" required>

                @if ($errors->has('old_password'))
                    <span class="help-block">
                        <strong>{{ $errors->first('old_password') }}</strong>
                    </span>
                @endif
            </div>
        </div>
		<div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
            <label for="password" class="col-sm-2 control-label">New Password</label>

            <div class="col-sm-4">
                <input id="password" type="password" class="form-control" name="password" required>

                @if ($errors->has('password'))
                    <span class="help-block">
                        <strong>{{ $errors->first('password') }}</strong>
                    </span>
                @endif
            </div>
        </div>

        <div class="form-group">
            <label for="password-confirm" class="col-sm-2 control-label">Confirm Password</label>

            <div class="col-sm-4">
                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
            </div>
        </div>

        <div class="form-group">
	        <div class="col-sm-offset-1">
	            <button type="submit" class="btn btn-primary">
	                Set Password
	            </button>
	        </div>
	    </div>
	</form>
@endif