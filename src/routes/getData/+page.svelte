<script>
    import Histogram from "$lib/Histogram.svelte"
    import ScatterChart from "$lib/ScatterChart.svelte"
    import Table from "$lib/Table.svelte";

    // console.log('outside', recdData)

    export let data;
    // export let form;
    let trialData = data.recvngData[0]
    console.log(trialData)
</script>
<div class="w-full">
  <form
    method="POST"
    action="?/getData"
    class="w-full flex flex-col">
    <input type="text" name="linkName" placeholder="Enter full url">
    <button class="mt-4 btn btn-primary w-full max-w-xs">Import</button>
  </form>
</div>
<div class="flex w-full">
  <div class="grid flex-grow card bg-base-300 rounded-box place-items-center">
    <h3 class="text-2xl font-bold">Histogram</h3>
    <Histogram width={400} height={300} bind:chartData={data.recvngData[0]} Var={'price'} Bins={10} color={'green'} label={'Histogram of Cases'} class="max-w-sm rounded-lg shadow-2xl"/>  
  </div>
</div>