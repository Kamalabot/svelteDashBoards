<script>
	import * as d3 from "d3"
	import BarPlotV1 from "$lib/BarPlotV1.svelte"
	import TableV1 from "$lib/TableV1.svelte"
	function sumSeries(dataset, series,filterVar,filterOn){
    	let sum = d3.sum(dataset.filter(d =>d[filterOn]==filterVar), d => d[series])
    	return sum
	}
	export let data;
	const dashboardData = data.csvData.salesData
	let storeSelected;
	let repSelected;	
	
	//group data
	var storeList= d3.rollups(dashboardData,v => v.length,d => d.stores).map(d => d[0]);
    var repList = d3.rollups(dashboardData,v => v.length,d => d.reps).map(d => d[0]);
    var dayList = d3.rollups(dashboardData,v => v.length,d => d.weekDays).map(d => d[0]);
	
	//summing data
	
	var storePerformance = storeList.map(d =>({
		store: d,
		saleUnits: sumSeries(dashboardData, 'qty',d,'stores'),
		UPT: sumSeries(dashboardData, 'qty',d,'stores') / dashboardData.filter(f =>f['stores']== d).length,
		sales:sumSeries(dashboardData, 'totalSales',d,'stores'),
		cost:sumSeries(dashboardData, 'cost',d,'stores'),
		costPerUnit: sumSeries(dashboardData, 'cost',d,'stores')/ dashboardData.filter(f =>f['stores']== d).length,
		repsInStore: d3.rollups(dashboardData.filter(f =>f['stores']== d),v => v.length,d => d.reps).map(d => d[0])
	}))
	//console.log(storePerformance)
	
	let saleUnits = sumSeries(dashboardData, 'qty','Freeport','stores') 
	let UPT = saleUnits / dashboardData.filter(d =>d['stores']=='Freeport').length
	let sales = sumSeries(dashboardData, 'totalSales','Freeport','stores')
	let cost = sumSeries(dashboardData, 'cost','Freeport','stores') / dashboardData.filter(d =>d['stores']=='Freeport').length
	//console.log(saleUnits, UPT, sales,cost)
	
	var pdtListStore = d3.rollups(dashboardData.filter(d =>d['stores']=='Freeport'),v => v.length,d => d.product).map(d => d[0])
	
	var pdtPerformance = pdtListStore.map(c =>({
	 			sales: sumSeries(dashboardData.filter(d =>d['stores']=='Freeport'),'totalSales',c,'product'),
				cost: sumSeries(dashboardData.filter(d =>d['stores']=='Freeport'),'cost',c,'product')
			})).sort((a,b) => d3.descending(a.sales, b.sales)).slice(0,10)
	console.log(pdtPerformance)
	
</script>	

<html class="h-full bg-gray-100">
<body class="h-full">
<div>
  <header class="bg-white">
    <div class="flex mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 gap-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">Sale Performance Dashboard</h1>
	  	<div>
		<label class="btn m-1">Stores</label>
		  <select tabindex="0" class="menu p-2 shadow bg-base-100" bind:value={storeSelected}>
			<option>{storeList[0]}</option>
			{#each storeList as store}
			<option>{store}</option>
			{/each}
		  </select>
		</div>
		<div>
		<label class="btn m-1">Sales Execs</label>
		  <select tabindex="0" class="menu p-2 shadow bg-base-100" bind:value={repSelected}>
			<option>{repList[0]}</option>
			{#each repList as executives}
			<option>{executives}</option>
			{/each}
		  </select>
		</div>
    </div>
  </header>
</div>
<div class="flex justify-center gap-4 p-6 h-96">
	<div class="flex-auto card w-96 bg-base-100 shadow-xl">
	  <div class="card-body">
		<h2 class="card-title">Sales $ of Freeport</h2>
		<figure><BarPlotV1 width={250} height={200} chartData={dashboardData} filterVar={'Freeport'} xVar={"month"} yVar={"totalSales"} color={'orange'} label={""} class="bg-primary" /></figure>
		<p>Sales Performance of the Store</p>
	  </div>
	</div>
	<div class="flex-auto card w-96 bg-base-100 shadow-xl">
	  <div class="card-body">
		<h2 class="card-title">Gross Margin</h2>
		<figure><BarPlotV1 width={250} height={200} chartData={dashboardData} filterVar={'Freeport'} xVar={"month"} yVar={"grossProfit"} color={'orange'} label={""} class="bg-primary" /></figure>
		<p>Margin Performance of the Store</p>
	  </div>
	</div>
	<div class="flex-auto card w-96 bg-base-100 shadow-xl">
	  <div class="card-body">
		<h2 class="card-title">Cost $</h2>
		<figure><BarPlotV1 width={250} height={200} chartData={dashboardData} filterVar={'Freeport'} xVar={"month"} yVar={"cogs"} color={'orange'} label={""} class="bg-primary" /></figure>
		<p>Cost of Goods Sold</p>
	  </div>
	</div>
</div>
<div class="flex justify-center gap-4 p-6 h-96">
	<div class="flex-auto card w-96 bg-base-100 shadow-xl">
	  <div class="card-body">
		<h2 class="card-title">Sales/ Day</h2>
		<figure><BarPlotV1 width={250} height={200} chartData={dashboardData} filterVar={'Freeport'} xVar={"weekDays"} yVar={"totalSales"} color={'orange'} label={""} class="bg-primary" /></figure>
		<p>Sales Performance of the Store</p>
	  </div>
	</div>
	<div class="w-64 bg-base-100 shadow-xl">  
		  <div class="stat">
			<div class="stat-title">Unit/Txn</div>
			<div class="stat-value text-primary">{UPT.toFixed(1)}</div>
			<div class="stat-desc">How Many / txn?</div>
		  </div>
		  <div class="stat">
			<div class="stat-title">Sales Units</div>
			<div class="stat-value text-secondary">{saleUnits}</div>
			<div class="stat-desc">Total Units</div>
		  </div>
		  <div class="stat">
			<div class="stat-title">Cost$ / Txn</div>
			<div class="stat-value text-secondary">{cost.toFixed(1)}</div>
			<div class="stat-desc">At cost / Txn?</div>
		  </div>
	</div>
	<div class="flex-auto card w-96 bg-base-100 shadow-xl">
	  <div class="card-body">
		<h2 class="card-title">Units Sold Trend Daily</h2>
		<figure><BarPlotV1 width={250} height={200} chartData={dashboardData} filterVar={'Freeport'} xVar={"weekDays"} yVar={"qty"} color={'orange'} label={""} class="bg-primary" /></figure>
		<p>Ads usage of the Store</p>
	  </div>
	</div>
</div>
<div class="flex justify-center gap-4 p-6 h-96">
	<div class="flex-auto card w-96 bg-base-100 shadow-xl">
	  <div class="card-body">
		<h2 class="card-title">Sales Performance</h2>
		<figure><TableV1 fileData={storePerformance}/></figure>
	  </div>
	</div>
</div>
<div class="flex justify-center gap-4 p-6 h-96">
	<div class="flex-auto card w-96 bg-base-100 shadow-xl">
	  <div class="card-body">
		<h2 class="card-title">Top 5 stores</h2>
		<figure><svg width=250 height=200 class="bg-primary" /></figure>
	  </div>
	</div>
	<div class="flex-auto card w-96 bg-base-100 shadow-xl">
	  <div class="card-body">
		<h2 class="card-title">Sales Reps Board</h2>
		<figure><svg width=250 height=200 class="bg-primary" /></figure>
		<p>Table containing Sales, GMargin, ADs$, UPT, Sales/Unit, Traffic, Trend </p>
	  </div>
	</div>
</div>
</body>
</html>