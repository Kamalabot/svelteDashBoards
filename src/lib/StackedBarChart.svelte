<script>
// @ts-nocheck'
    import parsers from "$lib/parsers"    
	export let height;
    export let width;
	import * as d3 from 'd3'
	import { onMount } from 'svelte';
	export let label;
	export let xVar;
	export let yVar;
	export let stackVar
    export let chartData; //get the historic data from page.js
	let div;

	stackedBarPlot(width, height, chartData,stackVar,xVar,yVar, label)

	function stackedBarPlot(width, height,chartData, stackVar, xVar, yVar, label) {
	
	  const xArray = dataByMonth.map(d => d.month)
	  const margin = {top: 30, right: 0, bottom: 20, left: 40};
	  const visWidth = width - margin.left - margin.right;
	  const visHeight = 500 - margin.top - margin.bottom;

	  const svg = d3.create('svg')
		  .attr('width', visWidth + margin.left + margin.right)
		  .attr('height', visHeight + margin.top + margin.bottom);

	  const g = svg.append('g')
		  .attr('transform', `translate(${margin.left}, ${margin.top})`);

	  const x = d3.scaleBand()
		  .domain(months)
		  .range([0, visWidth])
		  .padding(0.25)

	  const y = d3.scaleLinear()
		  .domain([0, yMax]).nice()
		  .range([visHeight, 0]);

	  const xAxis = d3.axisBottom(x).tickFormat(d3.timeFormat('%B'))

	  const yAxis = d3.axisLeft(y).tickFormat(d3.format(yFormat))

	  g.append('g')
		  .attr('transform', `translate(0,${visHeight})`)
		  .call(xAxis)
		  .call(g => g.select('.domain').remove());

	  g.append("g")
		  .call(yAxis)
		  .call(g => g.select('.domain').remove())
		.append('text')
		  .attr('fill', 'black')
		  .attr('text-anchor', 'start')
		  .attr('dominant-baseline', 'hanging')
		  .attr('font-weight', 'bold')
		  .attr('y', -margin.top + 5)
		  .attr('x', -margin.left)
		  .text(yLabel);

	  const series = g.append('g')
		.selectAll('g')
		.data(data)
		.join('g')
		  .attr('fill', d => color(d.key));

	  series.selectAll('rect')
		.data(d => d)
		.join('rect')
		  .attr('y', d => y(d[1]))
		  .attr('height', d => y(d[0]) - y(d[1]))
		  .attr('x', d => x(d.data.month))
		  .attr('width', x.bandwidth());

	  return svg.node();
	}

	function stackedBarPlot(width,height,chartData,refVar,xVar,yVar, label){
		
		const parameterRollUp = d3.rollups(chartData, g => d3.sum(g, x => x[refVar]), d => d[yVar])
  				.sort((a,b) => d3.descending(a[1],b[1]))
		
		const dataHierarchy = d3.rollup(chartData, g => d3.sum(g, x => x[refVar]),d => d[yVar], d => d[xVar])		
	
		const paramColorScale = d3.scaleOrdinal()
  			.domain(parameterRollUp.map(d => d[0]))
  			.range(d3.schemeCategory10)
	
		paramColorScale.unknown('lightgreen')
				
		const margin = { left: 100, right: 100, top: 10, bottom: 10 };
		const visHeight = height - margin.top - margin.bottom;
		const visWidth = width - margin.right - margin.left;
	
		const dataPack = d3.treemap()
  			.size([visWidth,visHeight])
  			.paddingOuter(10)
			.paddingInner(2)
			.tile(d3.treemapBinary)
	
		const hierarchyRoot = d3.hierarchy(dataHierarchy)
		
		hierarchyRoot.sum(d => d[1])
	
		const hierarchyPack= dataPack(hierarchyRoot)
		
		const sizeScale = d3.scaleLinear()
		  .domain([0, d3.max(hierarchyRoot.descendants().map(d => d.r))])
		  .range([5,10])
	
		onMount(() => {

		const docLocation = d3.select(div)
		
		const canvas = docLocation.append('svg')
				.attr('width',width)
				.attr('height',height)

		const chart = canvas.append('g')
			.attr('transform', `translate(${150}, ${margin.top})`);
			
		const title = canvas.append('g')
			.attr('transform',`translate(${0},${margin.top + 20})`)
			.append('text')
			.text(label)

		const bubbles = chart.selectAll('g')
			.data(hierarchyPack)
			.join('g')
			.attr('transform',d=> `translate(${d.x0},${d.y0})`);
	
		const tip = chart.append('text')
			.attr('transform','translate(-150,50)')
			.attr('visibility','hidden')
			.attr('id','recDetail')

		  bubbles 
			.append('rect')
			.attr('width', d => d.x1 - d.x0)
			.attr('height', d => d.y1 - d.y0)
			.attr('fill',d => paramColorScale(d.data[0]))
			.attr('opacity',0.8)
			.attr('stroke','black')
			.attr('stroke-opacity',0.3)
			.on('mouseover',showDetail)

		  function showDetail(event, d) {
			const text = d3.select('#recDetail')
			  .attr('visibility','visible')
			  .text(`${xVar}: ${d.data[0]}
					 ${refVar}: ${Math.round(d.value)} INR`)
		  }
		})
	}
</script>

<div bind:this={div}></div>