import { csv, descending,json } from "d3"

export const GET = async ({request, url}) =>{
	const nycCollisions = await csv('https://gist.githubusercontent.com/DanielKerrigan/d01fc44e4cee0c5c2434f464497ba260/raw/982bcefac49be9fd29887cbaead524e033f6dad4/nyc-collisions-2019-reduced.csv')
    
	return new Response(JSON.stringify({message:'Recd Data', data:nycCollisions}),{status:200})
}
