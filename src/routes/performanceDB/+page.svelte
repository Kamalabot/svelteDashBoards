<script>
	import * as d3 from "d3"
	
	export let data;
	const dashboardData = data.csvData.salesData
	
	let stores = "Harrison"
	let storesData = dashboardData.filter(d => d.stores == stores)
	var storeList= d3.rollups(dashboardData,v => v.length,d => d.stores).map(d => d[0]);
    var reps = d3.rollups(dashboardData,v => v.length,d => d.reps).map(d => d[0]);
    var days = d3.rollups(dashboardData,v => v.length,d => d.weekDays).map(d => d[0]);
	console.log(storeList)
</script>

<html class="h-full bg-gray-100">
<body class="h-full">
<div>
  <header class="bg-white">
    <div class="flex mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 gap-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">Sale Performance Dashboard</h1>
	  	<div class="dropdown">
		  <label tabindex="0" class="btn bg-secondary">Stores</label>
		  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box">
			{#each storeList as store}
			<li><a>{store}</a></li>
			{/each}
		  </ul>
		</div>
		<div class="dropdown">
		  <label tabindex="0" class="btn bg-secondary">Sales Executive</label>
		  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box">
			{#each reps as executives}
			<li><a>{executives}</a></li>
			{/each}
		  </ul>
		</div>
    </div>
  </header>
</div>
<div class="flex justify-center gap-4 p-6 h-96">
	<div class="flex-auto card w-96 bg-base-100 shadow-xl">
	  <div class="card-body">
		<h2 class="card-title">Sales $</h2>
		<figure><svg width=250 height=200 class="bg-primary" /></figure>
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
		<h2 class="card-title">ADS $</h2>
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