import { csv, descending,json, format, timeParse } from "d3"

export const GET = async ({request, url}) =>{
	const nycCollisions = await csv('https://gist.githubusercontent.com/DanielKerrigan/d01fc44e4cee0c5c2434f464497ba260/raw/982bcefac49be9fd29887cbaead524e033f6dad4/nyc-collisions-2019-reduced.csv')
	const salesPerformanceData = await csv('https://raw.githubusercontent.com/Kamalabot/dashboard_Designs/main/Sales%20Perfomance/salesPerformanceDashboard.csv')    
	
	const parseDate = timeParse("%d-%m-%Y");
    const numberFormat = format(".2s")
	var monthNames= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
	const cleanSalePerfData = salesPerformanceData.map(d=>({
        cogs: Number(d.COGS),
        category: d.Category,
        cost: Number(d.Cost),
        customerName: d['Customer Name'],
        gender: d.Gender,
        grossProfit: Number(d['Gross Profit']),
        price: Number(d.Price),
        product: d.Product,
        qty: Number(d.Qty),
        dateSold: parseDate(d['Sales Date']),
        saleId:d['Sales ID'],
        reps: d['Sales Reps'],
        stores:d.Stores,
        totalSales: Number(d['Total Sales']),
        txnType: d['Trans.Types'],
        weekDays:d['Week days'],
        month: monthNames[parseDate(d['Sales Date']).getMonth()]
    }))
	return new Response(JSON.stringify({message:'Recd Data', data:nycCollisions, salesData:cleanSalePerfData}),{status:200})
}
