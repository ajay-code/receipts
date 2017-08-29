@if (auth()->user()->type == 'manufacturer')
	@php
		$types = array_where(config('user.types'), function($value){
			return $value !== 'manufacturer';
		});
	@endphp
	
@elseif(auth()->user()->type == 'wholesaler')
	@php
		$types = array_where(config('user.types'), function($value){
			return $value !== 'manufacturer' & $value !== 'wholesaler';
		});
	@endphp

@elseif(auth()->user()->type == 'retailer')
	@php
		$types = array_where(config('user.types'), function($value){
			return $value !== 'manufacturer' & $value !== 'wholesaler' & $value !== 'retailer';
		});
	@endphp

@endif

@foreach ( $types as $type)
		<option value="{{ $type }}"> {{ $type }} </option>
@endforeach
