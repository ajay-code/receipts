<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<style>
	@page{ 
        size: 21cm 10cm;
        margin: 0;
      }
     @font-face {
          font-family: "Arial";
          src: url('fonts/arial/Arial.ttf') format('truetype');
        }
    .page-break {
    }
     body{
        font-family: "Arial";
        font-size: 12px;
        font-weight: normal;
        margin: 0;
    }

    .hide{
    	display:  none;
    }
	.hidden-print{
		display: block;
	}

	.btn{
			margin-left: 40px;
			margin-top: 40px;
		    color: #fff;
		    background-color: #2579a9;
		    border-color: #1f648b;
		    display: inline-block;
		    margin-bottom: 0;
		    font-weight: normal;
		    text-align: center;
		    vertical-align: middle;
		    -ms-touch-action: manipulation;
		    touch-action: manipulation;
		    cursor: pointer;
		    background-image: none;
		    border: 1px solid transparent;
		    white-space: nowrap;
		    padding: 6px 12px;
		    font-size: 14px;
		    line-height: 1.6;
		    border-radius: 4px;
		    -webkit-user-select: none;
		    -moz-user-select: none;
		    -ms-user-select: none;
		    user-select: none;
	}

    .page{
        page-break-after: always;
    }
    @media print{
    	.hide{
    		display: block;
    	}
    	.hidden-print{
			display: none;
		}
        .sender{
            position : relative;
            left: {{$dim['ls'] ? $dim['ls'] :  4}}cm;
			top: {{$dim['ts'] ? $dim['ts'] :  1}}cm
        }
        .receiver{
        position : relative;
        left: {{$dim['lr'] ? $dim['lr'] :  4}}cm;
		top: {{$dim['tr'] ? $dim['tr'] :  6}}cm;
        }
        .products{
        	position: relative;
        	left: {{$dim['lp'] ? $dim['lp'] :  11}}cm;
			top: {{$dim['tp'] ? $dim['tp'] :  3.5}}cm;
        }
        .date{
        	position: relative;
        	left: {{$dim['ld'] ? $dim['ld'] :  14}}cm;
			top: {{$dim['td'] ? $dim['td'] :  1}}cm;
        }
  
		
	</style>

</head>

<body  >
	<button class="btn hidden-print" onclick="pdf()">
		Print
	</button>
	<div id="app">	
	@foreach ($receivers as $receiver)
		<div class="page" id="page" >
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
		
	@endforeach
	</div>
		
	
	
	<script type="text/javascript">

		function inIframe () {
		    try {
		        return window.self !== window.top;
		    } catch (e) {
		        return true;
		    }
		}
		function pdf(){
			try{
			  		this.print();
			  	}catch(e){
			  		window.onload = window.print
			  	}
		}
		

		function hide(){
			body = document.getElementById('app');
			body.classList.add('hide');
		}

		function printPfd(){
			if(!inIframe()){
				console.log('not in iframe')
				hide();
			}else{
				console.log('in iframe')
				setTimeout(function(){
					pdf();
				},1000);
			}
		}

		printPfd();





  </script>
</body>
</html>