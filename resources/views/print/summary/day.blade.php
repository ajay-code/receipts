<!DOCTYPE html>
<html>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<style>
		body {
			font-family: "arial";
			font-size: 12px;
			font-weight: normal;
			margin: 0;
			font-size: 14px;
		}
		.app{
			margin: 40px auto;
			width: 80%; 
		}
		table {
			margin: 0;
			width: 100%;
			border-collapse: collapse;
		}

		.app p{
			background: #16adc9;
			color: white;
			padding: 5px;
			text-align: center;
			vertical-align: middle;
		}

		tr:nth-child(even) {
			background-color: #e8f1f5
		}

		th {
			background-color: #4CAF50;
			color: white;
		}

		td {
			padding: 5px;
		}
	</style>
</head>

<body>
	<div class="app">
		<p>
			Report Summary for {{$date->format('l, j F Y')}}
		</p>
		<table>
			<tbody>
				<tr>
					<td>Total Order</td>
					<td> {{ $data['totalReceipts'] }} </td>
				</tr>
				<tr>
					<td>Top Selling</td>
					<td>{{ $data['topSelling'] }}</td>
				</tr>
				<tr>
					<td>Top Revenue</td>
					<td>${{ $data['totalSales'] }}</td>
				</tr>
				<tr>
					<td>Top Product Cost</td>
					<td>- ${{ $data['totalProductCost'] }}</td>
				</tr>
				<tr>
					<td>Top Delivery Cost</td>
					<td>- ${{ $data['totalDeliveryCost'] }}</td>
				</tr>
				<tr>
					<td>Net Profit</td>
					<td>${{ $data['netProfit'] }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</body>

</html>