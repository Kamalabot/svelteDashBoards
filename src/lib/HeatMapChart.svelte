<script>
// @ts-nocheck'
    import parsers from "$lib/parsers"    
	export let height;
    export let width;
	import * as d3 from 'd3'
	import { onMount } from 'svelte';
	export let label;
	export let variable;
	export let xArray;
	export let yArray;
	export let xVar;
	export let yVar;
    export let chartData; //get the historic data from page.js
	let div;

	heatMapPlot(width, height, chartData,xArray,yArray,variable,xVar,yVar,label)


	function heatMapPlot(width, height, chartData,xArray,yArray,variable,xVar,yVar,label){

		const margin = { left: 30, right: 40, top: 10, bottom: 30 };

		const visWidth = width - margin.right - margin.left;

		const x = d3.scaleBand()
      		.domain(xArray)
      		.range([0, visWidth])
      		.padding(0.05);
	
	   const y = d3.scaleBand()
		   .domain(yArray)
		   .range([0, visHeight])
		   .padding(0.05)
	
  		const visHeight =  x.step() * 7;

		onMount(() => {

		const docLocation = d3.select(div)
		
		const canvas = docLocation.append('svg')
				.attr('width',width)
				.attr('height',height)
		
		const chart = canvas.append('g')
      		.attr('transform', `translate(${margin.left}, ${margin.top})`)
	    
		const yAxis = d3.axisLeft(y)
		    .tickPadding(10)
		    .tickSize(0);
		
		const xAxis = d3.axisBottom(x)
		    .tickPadding(10)
		    .tickSize(0);
		
		const axisY = canvas.append('g')
      		.attr('transform', `translate(${margin.left}, ${margin.top})`)
			.call(yAxis)
			.call(g => g.selectAll('.domain').remove());
	
		const axisX = canvas.append('g')
      		.attr('transform', `translate(${margin.left}, ${margin.top + visHeight})`)
			.call(xAxis)
			.call(g => g.selectAll('.domain').remove());
	
	    const color = d3.scaleLinear()
		    .domain(d3.extent(chartData, c => c[variable]))
		    .range(d3.schemeTableau10)
		
		chart.selectAll('rect')
			.data(weather)
			.join('rect')
		  	.attr('x', d => x(d[xVar]))
		  	.attr('y', d => y(d[yVar]))
		  	.attr('width', x.bandwidth())
		  	.attr('height', y.bandwidth())
		  	.attr('fill', d => color(d[variable])) 

		
			})
	}
</script>

<div bind:this={div}></div>