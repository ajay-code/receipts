<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<style>
	@page{ 
        size: {{$user->settings->page_width}}mm {{$user->settings->page_height}}mm;
        margin: 0;
      }
    
    body{
        font-family: {{$user->settings->font ? $user->settings->font : "arial"}};
        font-size: {{$user->settings->font_size ? $user->settings->font_size : 12}}px;
        font-weight: normal;
        margin: 0;
    }

    
    .sender-id{
    	position : absolute;
        left: {{$user->settings->left_sender_id ? $user->settings->left_sender_id :  400}}mm;
		top: {{$user->settings->top_sender_id ? $user->settings->top_sender_id :  50}}mm;
    }
    	
    .sender{
        position : absolute;
        left: {{$user->settings->left_sender ? $user->settings->left_sender :  400}}mm;
		top: {{$user->settings->top_sender ? $user->settings->top_sender :  100}}mm;
    }
    .receiver{
	    position : absolute;
	    left: {{$user->settings->left_receiver ? $user->settings->left_receiver :  400}}mm;
		top: {{$user->settings->top_receiver ? $user->settings->top_receiver :  600}}mm;
    }

    .products{
    	position: absolute;
    	left: {{$user->settings->left_product ? $user->settings->left_product :  1100}}mm;
		top: {{$user->settings->top_product ? $user->settings->top_product :  350}}mm;
    }
    .date{
    	position: absolute;
    	left: {{$user->settings->left_date ? $user->settings->left_date :  1400}}mm;
		top: {{$user->settings->top_date ? $user->settings->top_date :  100}}mm;
    }

    .amount{
    	position: absolute;
    	left: {{$user->settings->left_amount ? $user->settings->left_amount :  300}}mm;
		top: {{$user->settings->top_amount ? $user->settings->top_amount :  1400}}mm;
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

<body  >

		<div class="page" id="page" >
				@if ($user->settings->top_sender_id != 0 && $user->settings->left_sender_id != 0)
					<div class="sender-id">
						{{ $receipt->sender_id ? $receipt->sender_id : ''}} 
					</div>
				@endif
				@if ($user->settings->top_sender != 0 && $user->settings->left_sender != 0)
					<div class="sender">
						{{ $receipt->sender_name ? $receipt->sender_name : ''}} <br>
						{!! $receipt->sender_address ? str_replace("|","<br/>", $receipt->sender_address)  : ''!!} <br>
						{{ $receipt->sender_phone ? $receipt->sender_phone : ''}} <br>
						@if (!!$receipt->sender_email)
							{{ $receipt->sender_email}} <br>
						@endif
					</div>
				@endif
				
				@if ($user->settings->top_receiver != 0 && $user->settings->left_receiver != 0)
					<div class="receiver">
						{{ $receipt->receiver_name ? $receipt->receiver_name : ''}} <br>
						{!! $receipt->receiver_address ? str_replace("|","<br/>", $receipt->receiver_address)  : ''!!} <br>
						{{ $receipt->receiver_phone ? $receipt->receiver_phone : ''}} <br>
						@if (!!$receipt->receiver_email)
							{{ $receipt->receiver_email}} <br>
						@endif
					</div>
				@endif

				@if ($user->settings->top_product != 0 && $user->settings->left_product != 0)
					<div class="products">
						{{ $receipt->receiver_product ? $receipt->receiver_product : ''}}
					</div>
				@endif
				@if ($user->settings->top_amount != 0 && $user->settings->left_amount != 0)
					<div class="amount">
						${{ $receipt->amount ? $receipt->amount : ''}}
					</div>
				@endif

				@if ($user->settings->top_postcode != 0 && $user->settings->left_postcode != 0)
					<div class="postcode">
						${{ $receipt->receiver_postcode ? $receipt->receiver_postcode : ''}}
					</div>
				@endif

				@if ($user->settings->top_phone != 0 && $user->settings->left_phone != 0)
					<div class="phone">
						${{ $receipt->receiver_phone ? $receipt->receiver_phone : ''}}
					</div>
				@endif
				
				@if ($user->settings->top_date != 0 && $user->settings->left_date != 0)
					<div class="date">
						{{ $receipt->created_at->format('D, d M Y') }}
					</div>
				@endif

		</div>
		
	
	
	
</body>
</html>