<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<style>
    body{
        font-family:  "arial";
        font-size: 12px;
        font-weight: normal;
        margin: 0;
		font-size: 14px;
		
    }
	table{
		margin: 40px auto;
		width: 80%;
		border-collapse: collapse;
	}
	caption{
		background: #16adc9;
		color: white;
		padding: 5px;
		text-align: center;
		vertical-align: middle;
	}
	tr:nth-child(even) {background-color: #e8f1f5}
	th {
		background-color: #4CAF50;
		color: white;
		text-align: left;
		padding: 5px;

	}
	td{
		padding: 5px;
	}
	</style>
</head>

<body>
	<table>
		<caption>
			Report Summary for {{$date->format('F Y')}}
		</caption>
		<tbody>
			<tr>
				<th></th>
				<th>Total Order</th>
				<th>Revenue</th>
				<th>Product Cost</th>
				<th>Delivery Cost</th>
				<th>Net Profit</th>
			</tr>		
			@php
				$grandTotalOrders = 0;
				$grandTotalSales = 0;
				$grandtotalProductCost = 0;
				$grandtotalDeliveryCost = 0;
				$grandNetProfit = 0;
			@endphp
			@foreach($data as $day => $row)		
				@php
					$grandTotalOrders += $totalOrders = $row->count();
					$grandTotalSales += $totalSales = $row->sum('amount');
					$grandtotalProductCost += $totalProductCost = $row->sum('product_cost');
					$grandtotalDeliveryCost += $totalDeliveryCost = $row->sum('postage_cost');
					$grandNetProfit += $netProfit = $totalSales - ($totalProductCost + $totalDeliveryCost);
				@endphp
				<tr>
					<td>{{$day}}</td>
					<td>${{ $totalOrders }}</td>
					<td>${{ $totalSales }}</td>
					<td>${{ $totalProductCost }}</td>
					<td>${{ $totalDeliveryCost }}</td>
					<td>${{ $netProfit }}</td>
				</tr>	
			@endforeach
				<tr>
					<td>Total</td>
					<td>${{ $grandTotalOrders }}</td>
					<td>${{ $grandTotalSales }}</td>
					<td>${{ $grandtotalProductCost }}</td>
					<td>${{ $grandtotalDeliveryCost }}</td>
					<td>${{ $grandNetProfit }}</td>
				</tr>
		</tbody>
	</table>
</body>
</html>