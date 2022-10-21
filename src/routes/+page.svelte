<script>
    import ScatterChart from "$lib/ScatterChart.svelte";
    export let data;
    console.log(data)
</script>

<h1 class="tc blue pa2">Welcome to the Repo</h1>

<div class="pa2 blue">
    <h3 class="black">Current Challenge</h3>
    <p class="lh-copy f3">
        Ideas of abstracting complete chart is not new. There is <a href="https://vega.github.io/">Vega</a> and <a href="https://github.com/observablehq/plot">Plot</a>  written by D3 
        creators. Then there is veritable <a href="https://plotly.com/javascript/">Plotly.js</a> and <a href="http://www.gnuplot.info/">Gnu Plot</a>. There is Tableau and PowerBi softwares which transforms the Data to visualisation as seemless as possible.  
        </p>

    <h3 class="black">Line Chart</h3>

    <ScatterChart width={400} height={300} chartData={data.chartData} xVar={data.xVar} yVar={data.yVar} color={data.color} label={data.title}/>
    
    <h3 class="black">Abstraction : A Choice</h3>
    <p class="lh-copy f3">
        The ease comes with abstraction of the chart creation process, that has been implemented on top some other language or library for example D3. If you want to have control then of the chart, there is very high learning curve, and learn D3. With Svelte there is an opportunity to reverse this dynamics. If you know D3 then there is no need to learn any other library. You can implement the chart in the style you want, and then create Svelte Components that are reusable. Like the component shown below. 
    </p>

    <pre> &lt;LineChart height width chartData /&gt;</pre>

    <p class="lh-copy f3">
        What is Scatterplot? It is plot showing Bi-Variate analysis of the data. So it must have  Xvariable, YVariable. The styles and attributes play a vital role in controlling the visualisation. Grammar of Graphics implemented in Vega is a wonderful example. 
        
        When multiple types of visualisation is required on the same canvas to show a particular phenomenon, the libraries require us to understand the data, and how the library abstracts 
        the data into visualisation. 
    </p>

    <h3 class="black">Inspiration</h3>
    <p class="lh-copy f3">I am deeply inspired by the Ian Holtz and his <a href="https://d3-graph-gallery.com/">D3 Graph Gallery.</a> repo which contains more than 300 charts. I depend a lot on <a href="https://www.d3indepth.com/">D3 In Depth reference</a> Mike and Rich the creators of D3 and Svelte have been a great source of knowledge and made the life of developers a little more easier.</p>
</div>
