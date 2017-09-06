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
    .page-break {
        page-break-after: always;

    }
     body{
        font-family: "Arial";
        font-size: 12px;
        font-weight: normal;
        margin: 0;
    }

    
    .page{
    }

    .sender-id{
    	position : absolute;
        left: {{$user->settings->left_sender_id ? $user->settings->left_sender_id :  4}}cm;
		top: {{$user->settings->top_sender_id ? $user->settings->top_sender_id :  0.5}}cm;
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

	@foreach ($receivers as $receiver)
		<div class="page" id="page" >

			<div class="sender-id">
				{{ $sender['sender_id'] ? $sender['sender_id']:''}}
			</div>
			
			<div class="sender">
				{{ $sender['name'] ? $sender['name']:''}} <br>
				{!! $sender['address'] ? str_replace("|","<br/>", $sender['address'])  : ''!!} <br>
				{{ $sender['phone'] ? $sender['phone']:''}} <br>
				@if ($sender['email'])
					{{ $sender['email']}} <br>
				@endif
			</div>
			<div class="receiver">
				{{ $receiver['name'] ? $receiver['name']:''}} <br>
				{!! $receiver['address'] ? str_replace("|","<br/>", $receiver['address']) : ''!!} <br>
				{{ $receiver['phone'] ? $receiver['phone']:''}} <br>
				@if ($receiver['email'])
					{{ $receiver['email']}} <br>
				@endif
			</div>

			<div class="products">
				{{ $receiver['products'] ? $receiver['products']:''}} <br>
				
			</div>

			<div class="date">
				{{ $date->formatLocalized('%A, %B %d, %Y') }}
			</div>

		</div>

		@if (!$loop->last)
			<div class="page-break"></div>
		@endif
		
	@endforeach
	</div>
		
	
	
	
</body>
</html>