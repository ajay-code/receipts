<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<style>
	@page{ 
        size: {{$user->settings->page_width}}cm {{$user->settings->page_height}}cm;
        margin: 0;
      }
     @font-face {
          font-family: "Arial";
          src: url('fonts/arial/Arial.ttf') format('truetype');
        }
    
     body{
        font-family: "Arial";
        font-size: 12px;
        font-weight: normal;
        margin: 0;
    }
    .page-break {
        page-break-after: always;

    }

    
    .page{
    }
    
    .user-id{
    	position : absolute;
        left: {{$user->settings->left_user_id ? $user->settings->left_user_id :  4}}cm;
		top: {{$user->settings->top_user_id ? $user->settings->top_user_id :  0.5}}cm;
    }
    	
    .sender{
        position : absolute;
        left: {{$user->settings->left_sender ? $user->settings->left_sender :  4}}cm;
		top: {{$user->settings->top_sender ? $user->settings->top_sender :  1}}cm;
    }
    .receiver{
	    position : absolute;
	    left: {{$user->settings->left_receiver ? $user->settings->left_receiver :  4}}cm;
		top: {{$user->settings->top_receiver ? $user->settings->top_receiver :  6}}cm;
    }

    .products{
    	position: absolute;
    	left: {{$user->settings->left_product ? $user->settings->left_product :  11}}cm;
		top: {{$user->settings->top_product ? $user->settings->top_product :  3.5}}cm;
    }
    .date{
    	position: absolute;
    	left: {{$user->settings->left_date ? $user->settings->left_date :  14}}cm;
		top: {{$user->settings->top_date ? $user->settings->top_date :  1}}cm;
    }
   
		
	</style>

</head>

<body  >
		@foreach ($receipts as $receipt)
		<div class="page" id="page" >
				<div class="user-id">
					{{ $receipt->user->uid }}
				</div>
				<div class="sender">
					{{ $receipt->sender_name ? $receipt->sender_name : ''}} <br>
					{!! $receipt->sender_address ? str_replace("|","<br/>", $receipt->sender_address)  : ''!!} <br>
					{{ $receipt->sender_phone ? $receipt->sender_phone : ''}} <br>
					@if (!!$receipt->sender_email)
						{{ $receipt->sender_email}} <br>
					@endif
				</div>
				<div class="receiver">
					{{ $receipt->receiver_name ? $receipt->receiver_name : ''}} <br>
					{!! $receipt->receiver_address ? str_replace("|","<br/>", $receipt->receiver_address)  : ''!!} <br>
					{{ $receipt->receiver_phone ? $receipt->receiver_phone : ''}} <br>
					@if (!!$receipt->receiver_email)
						{{ $receipt->receiver_email}} <br>
					@endif
				</div>

				<div class="products">
					{{ $receipt->receiver_product ? $receipt->receiver_product : ''}} <br>
					
				</div>

				<div class="date">
					{{ $receipt->created_at->formatLocalized('%A, %B %d, %Y') }}
				</div>

			</div>
		</div>

		@if (!$loop->last)
			<div class="page-break"></div>
		@endif
		
		@endforeach
	
	
	
</body>
</html>