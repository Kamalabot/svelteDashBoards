import { csv, descending,json } from "d3"

export const GET = async ({request, url}) =>{
    const res = await csv("https://raw.githubusercontent.com/Kamalabot/M3nD3/main/ObservableData/iris.csv")
	const res1 = await csv('https://raw.githubusercontent.com/Kamalabot/M3nD3/main/ObservableData/athletes.csv')
    const athleteRes = res1.map(d =>({
		name: d.name.split(' ')[1],
		weight: Number(d.weight),
		height: Number(d.height),
		sex: d.sex,
		sport:d.sport
	}))
	.sort((a,b) => descending(a.weight, b.weight))
	const bseScrips = await json('https://raw.githubusercontent.com/Kamalabot/M3nD3/main/ObservableData/bseScripts.json');
	const fmcgCompany = await csv('https://raw.githubusercontent.com/Kamalabot/M3nD3/main/ObservableData/Common_FMCG_Labelled_Quarter_Results.csv')
	const companyByIncome = fmcgCompany
		.map(d => ({
			Company_Name: d['Company Name'],
			qtr: d.Quarter,
			TotalIncome: Number(d['Total Income'])
		}))
	const companies = [...new Set(companyByIncome.map(d => d.Company_Name))]
	const qtr = [...new Set(companyByIncome.map(d => d.qtr))]
	console.log(companies.length)
	return new Response(JSON.stringify({message:'Recd Data', 
										data:res, 
										data1:athleteRes, 
										data2:bseScrips,
										data3:fmcgCompany,
									   data4:[companyByIncome,companies,qtr]}),{status:200})
}
