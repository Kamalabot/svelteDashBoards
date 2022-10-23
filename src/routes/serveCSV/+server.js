import { csv, descending } from "d3"

export const GET = async ({request, url}) =>{
    const res = await csv('https://raw.githubusercontent.com/Kamalabot/M3nD3/main/ObservableData/iris.csv')
	const res1 = await csv('https://raw.githubusercontent.com/Kamalabot/M3nD3/main/ObservableData/athletes.csv')
    const athleteRes = res1.map(d =>({
		name: d.name.split(' ')[1],
		weight: Number(d.weight),
		height: Number(d.height),
		sex: d.sex,
		sport:d.sport
	}))
	.sort((a,b) => descending(a.weight, b.weight))
    return new Response(JSON.stringify({message:'Recd Data', data:res, data1:athleteRes}),{status:200})
}
