<script>
	import * as d3 from "d3"
	import BarPlotV1 from "$lib/BarPlotV1.svelte"
	
	export let data;
	const dashboardData = data.csvData.salesData
	let storeSelected;
	let repSelected;	
	//group data
	var storeList= d3.rollups(dashboardData,v => v.length,d => d.stores).map(d => d[0]);
    var repList = d3.rollups(dashboardData,v => v.length,d => d.reps).map(d => d[0]);
    var dayList = d3.rollups(dashboardData,v => v.length,d => d.weekDays).map(d => d[0]);
	//filtering data
	$: stores ='';
</script>	

<html class="h-full bg-gray-100">
<body class="h-full">
<div>
  <header class="bg-white">
    <div class="flex mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 gap-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">Sale Performance Dashboard</h1>
	  	<div>
		<label class="btn m-1">Stores</label>
		  <select tabindex="0" class="menu p-2 shadow bg-base-100" bind:value={storeSelected} on:change="{()=> stores =storeSelected}">
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
		<h2 class="card-title">Sales $ of {stores}</h2>
		<figure><BarPlotV1 width={250} height={200} chartData={dashboardData} filterVar={'Freeport'} xVar={"month"} yVar={"totalSales"} color={'orange'} label={""} class="bg-primary" /></figure>
		<p>Sales Performance of the Store</p>
	  </div>
	</div>
	<div class="flex-auto card w-96 bg-base-100 shadow-xl">
	  <div class="card-body">
		<h2 class="card-title">Gross Margin%</h2>
		<figure><svg width=250 height=200 class="bg-primary" /></figure>
		<p>Margin Performance of the Store</p>
	  </div>
	</div>
	<div class="flex-auto card w-96 bg-base-100 shadow-xl">
	  <div class="card-body">
		<h2 class="card-title">COGS $</h2>
		<figure><svg width=250 height=200 class="bg-primary" /></figure>
		<p>Ads usage of the Store</p>
	  </div>
	</div>
</div>
<div class="flex justify-center gap-4 p-6 h-96">
	<div class="flex-auto card w-96 bg-base-100 shadow-xl">
	  <div class="card-body">
		<h2 class="card-title">Sales/ Day</h2>
		<figure><svg width=250 height=200 class="bg-primary" /></figure>
		<p>Sales Performance of the Store</p>
	  </div>
	</div>
	<div class="w-64 bg-base-100 shadow-xl">  
		  <div class="stat">
			<div class="stat-title">Unit/Txn</div>
			<div class="stat-value text-primary">25.6K</div>
			<div class="stat-desc">What cost?</div>
		  </div>
		  <div class="stat">
			<div class="stat-title">Sales Units</div>
			<div class="stat-value text-secondary">2.6M</div>
			<div class="stat-desc">How Many?</div>
		  </div>
		  <div class="stat">
			<div class="stat-title">Traffic / Day</div>
			<div class="stat-value text-secondary">2.6M</div>
			<div class="stat-desc">What Number?</div>
		  </div>
	</div>
	<div class="flex-auto card w-96 bg-base-100 shadow-xl">
	  <div class="card-body">
		<h2 class="card-title">UPT Trend Weekly</h2>
		<figure><svg width=250 height=200 class="bg-primary" /></figure>
		<p>Ads usage of the Store</p>
	  </div>
	</div>
</div>
<div class="flex justify-center gap-4 p-6 h-96">
	<div class="flex-auto card w-96 bg-base-100 shadow-xl">
	  <div class="card-body">
		<h2 class="card-title">Top 5 stores</h2>
		<figure><svg width=250 height=200 class="bg-primary" /></figure>
		<p>Sales Performance of the Store</p>
	  </div>
	</div>
	<div class="flex-auto card w-96 bg-base-100 shadow-xl">
	  <div class="card-body">
		<h2 class="card-title">Store Leader Board</h2>
		<figure><svg width=250 height=200 class="bg-primary" /></figure>
		<p>Table containing Sales, GMargin, ADs$, UPT, Sales/Unit, Traffic, Trend </p>
	  </div>
	</div>
</div>
</body>
</html>