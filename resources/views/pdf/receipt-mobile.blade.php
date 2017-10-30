<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<style>
	@page{ 
        size: {{$user->settings->page_width}}mm {{$user->settings->page_height}}mm;
        margin: 0;
      }
    .page-break {
        page-break-after: always;
    }
    body{
        font-family: {{$user->settings->font ? $user->settings->font : "arial"}};
        font-size: {{$user->settings->font_size ? $user->settings->font_size : 12}}px;
        font-weight: normal;
        margin: 0;
    }
    .sender-id{
    	position : absolute;
        left: {{$user->settings->left_sender_id ? $user->settings->left_sender_id :  4}}mm;
		top: {{$user->settings->top_sender_id ? $user->settings->top_sender_id :  0.5}}mm;
    }
    .sender{
        position : absolute;
        left: {{$user->settings->left_sender ? $user->settings->left_sender :  4}}mm;
		top: {{$user->settings->top_sender ? $user->settings->top_sender :  1}}mm;
    }
    .receiver{
	    position : absolute;
	    left: {{$user->settings->left_receiver ? $user->settings->left_receiver :  4}}mm;
		top: {{$user->settings->top_receiver ? $user->settings->top_receiver :  6}}mm;
    }
    .products{
    	position: absolute;
    	left: {{$user->settings->left_product ? $user->settings->left_product :  11}}mm;
		top: {{$user->settings->top_product ? $user->settings->top_product :  3.5}}mm;
    }
    .date{
    	position: absolute;
    	left: {{$user->settings->left_date ? $user->settings->left_date :  14}}mm;
		top: {{$user->settings->top_date ? $user->settings->top_date :  1}}mm;
    }
	.amount{
    	position: absolute;
    	left: {{$user->settings->left_amount ? $user->settings->left_amount :  110}}mm;
		top: {{$user->settings->top_amount ? $user->settings->top_amount :  42}}mm;
    }
	.postcode{
    	position: absolute;
    	left: {{$user->settings->left_postcode ? $user->settings->left_postcode :  0}}mm;
		top: {{$user->settings->top_postcode ? $user->settings->top_postcode :  0}}mm;
    }

	.phone{
    	position: absolute;
    	left: {{$user->settings->left_phone ? $user->settings->left_phone :  0}}mm;
		top: {{$user->settings->top_phone ? $user->settings->top_phone :  0}}mm;
    }

	</style>

</head>

<body>

	@foreach ($receivers as $receiver)
		<div class="page" id="page" >
			@if ($user->settings->top_sender_id != 0 && $user->settings->left_sender_id != 0)
				<div class="sender-id">
					{{ $sender['sender_id'] ? $sender['sender_id']:''}}
				</div>
			@endif
			
			@if ($user->settings->top_sender != 0 && $user->settings->left_sender != 0)
			<div class="sender">
				{{ $sender['name'] ? $sender['name']:''}} <br>
				{!! $sender['address'] ? str_replace("|","<br/>", $sender['address'])  : ''!!} <br>
				{{ $sender['phone'] ? $sender['phone']:''}} <br>
				@if ($sender['email'])
					{{ $sender['email']}} <br>
				@endif
			</div>
			@endif
			
			@if ($user->settings->top_receiver != 0 && $user->settings->left_receiver != 0)
			<div class="receiver">
				{{ $receiver['name'] ? $receiver['name']:''}} <br>
				{!! $receiver['address'] ? str_replace("|","<br/>", $receiver['address']) : ''!!} <br>
				{{ $receiver['phone'] ? $receiver['phone']:''}} <br>
				@if ($receiver['email'])
					{{ $receiver['email']}} <br>
				@endif
			</div>
			@endif
			@if ($user->settings->top_product != 0 && $user->settings->left_product != 0)
				<div class="products">
					{{ $receiver['products'] ? $receiver['products']:''}} <br>
				</div>
			@endif

			@if ($user->settings->top_amount != 0 && $user->settings->left_amount != 0)
					<div class="amount">
						${{ $receiver['amount'] ? $receiver['amount']:''}}
					</div>
			@endif

			@if ($user->settings->top_postcode != 0 && $user->settings->left_postcode != 0)
				<div class="postcode">
					${{ $receiver['receiver_postcode'] ? $receiver['receiver_postcode'] : ''}}
				</div>
			@endif

			@if ($user->settings->top_phone != 0 && $user->settings->left_phone != 0)
				<div class="phone">
					${{ $receiver['receiver_phone'] ? $receiver['receiver_phone'] : ''}}
				</div>
			@endif

			
			@if ($user->settings->top_date != 0 && $user->settings->left_date != 0)
				<div class="date">
					{{ $date->format('D, d M Y') }}
				</div>
			@endif

		</div>

		@if (!$loop->last)
			<div class="page-break"></div>
		@endif
		
	@endforeach
	</div>
		
	
	
	
</body>
</html>