<script>
    import Histogram from "$lib/Histogram.svelte"
    import ScatterChart from "$lib/ScatterChart.svelte"
    import Table from "$lib/Table.svelte";

    export let data;
	console.log(data.recvngData)
	//console.log(length, firstElement)
</script>

 <form
    method="POST"
    action="?/getData"
    class="w-full flex flex-col">
	<div class="form-control">
	  <label class="label">
		<span class="label-text">Data Input</span>
	  </label>
	  <label class="input-group">
		<input type="text" placeholder="Enter full URL of CSV file" name="linkName" class="input input-bordered" />
		<span>Data Source</span>
	  </label>
    <button class="mt-4 btn btn-primary w-full max-w-xs">Import csv File</button>
	</div>
</form>

<h1 class="text-5x1 font-bold text-center">Imported data</h1>


<Table fileData={data.recvngData}/>
	
