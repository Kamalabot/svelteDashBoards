<script>
    import Histogram from "$lib/Histogram.svelte"
    import ScatterChart from "$lib/ScatterChart.svelte"
    import Table from "$lib/Table.svelte";

    // console.log('outside', recdData)

    export let data;
	let length;
	let firstElement;
	
    // export let form;
    let trialData = data?.recvngData ?? [2,7,5,6,2,12,5,10,76,52,80,79,8,21,54,68,7]
    //console.log(trialData)
	if (trialData !== undefined){
		length = trialData.length
		firstElement = JSON.stringify(trialData[0])
	}
	console.log(length, firstElement)
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

<div class="max-w">
    <h3 class="text-3x1 font-bold">Details</h3>
    <p class="py-6"></p>
</div>


	
