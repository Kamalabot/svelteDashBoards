<script>
    import ScatterChart from "$lib/ScatterChart.svelte";
    import Histogram from "$lib/Histogram.svelte";
	import HistoScatter from "$lib/HistoScatter.svelte";
    export let data;
    //console.log(data.chartData[0].data)
	//console.log(data.chartData[1].data)
</script>

<h1 class="text-5xl font-bold text-center">Testing gallery</h1>

<div class="max-w">
    <h3 class="text-3xl font-bold">Testing Process</h3>
    <p class="py-6">The svelte components coded with D3 are tested here. Each type of chart needs the data to be in different 
	format, and contains different variables. The component specification has to include how the data needs to be provided, and 
	how the function built-in the component will use it. Both of that will be tested.</p>
</div>
<div class="max-w">
    <h3 class="text-3xl font-bold">Scatter Plot components</h3>
    <p class="py-6">The svelte components coded with D3 are tested here. Each type of chart needs the data to be in different 
	format, and contains different variables. The component specification has to include how the data needs to be provided, and 
	how the function built-in the component will use it. Both of that will be tested.</p>
</div>

<div class="flex w-full">
  <div class="grid flex-grow card bg-base-300 rounded-box place-items-center">
	<ScatterChart width={400} height={300} chartData={data.chartData[0].data} xVar={data.xVar} yVar={data.yVar} color={data.color} label={data.title}  class="max-w-sm rounded-lg shadow-2xl"/>	
	 <h1 class="text-2xl font-bold">ScatterPlot US Covid Data</h1>
  </div>
  <div class="divider divider-horizontal">|</div>
  <div class="grid flex-grow card bg-base-300 rounded-box place-items-center">
	<ScatterChart width={400} height={300} chartData={data.chartData[0].data} xVar={data.xVar} yVar={data.yVar} color={data.color} label={data.title}  class="max-w-sm rounded-lg shadow-2xl"/>	
	<h1 class="text-2xl font-bold">ScatterPlot Iris Dataset</h1>
  </div>
</div>