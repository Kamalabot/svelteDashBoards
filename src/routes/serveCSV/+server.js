import { csv } from "d3"

export const GET = async ({request, url}) =>{
    const res = await csv('https://raw.githubusercontent.com/Kamalabot/M3nD3/main/ObservableData/iris.csv')
    console.log(res)
    return new Response(JSON.stringify({message:'Recd Data', data:res}),{status:200})
}