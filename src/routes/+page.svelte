<script>
    import ScatterChart from "$lib/ScatterChart.svelte";
    export let data;
    console.log(data)
</script>

<h1 class="tc blue pa2">Welcome to the Repo</h1>

<div class="pa2 blue">
    <h3 class="black">Motivation</h3>
    <p class="lh-copy f3">
        Ideas of converting complete chart written in D3 in to components 
        and then use them like programming constructs lead me to start this 
        project. The repo will contain all kinds of D3 charts as svelte components 
        which can be readily imported into any dash board. 
    </p>
    <h3>Inspiration</h3>
    <p class="lh-copy f3">I am deeply inspired by the Ian Holtz and his <a href="https://d3-graph-gallery.com/">D3 Graph Gallery.</a> repo which contains more than 300 charts. I depend a lot on <a href="https://www.d3indepth.com/">D3 In Depth reference</a> Mike and Rich the creators of D3 and Svelte have been a great source of knowledge and made the life of developers a little more easier.</p>
    
    <h3 class="black">Line Chart</h3>

    <ScatterChart width={400} height={300} chartData={data.chartData} color={data.color} label={data.title}/>

    <h3>Standardisation : Stub</h3>
    <p class="lh-copy f3">
        The day when I created the repo my intent was to create a library of sorts 
        for the charts that can be built in D3. It starts with the 
        interfaces to the svelte components which dictate the user has to provide when the use the component. The above line chart is created using below Component
           
    </p>

    <pre> &lt;LineChart height width chartData /&gt;</pre>

    <p class="lh-copy f3">
        At the next level, given The function will have the following format. The components can analyse the data in Univariate, BiVariate or Multivariate. Provided D3 allows lot more customisation using the various attributes the list can keep on growning. To show which attributes are being plotted, the argument names are provided appropriately in the function and component definition.
    </p>

    <pre class="lh-copy f4 black">
function buildChart(data, color, label)
    </pre>
    
    <p class="lh-copy f3"></p>
</div>
