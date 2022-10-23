import { csv } from "d3"

export const POST = async({request})=>{
    console.log('hitting csvAPI');
    const dataReq = await request.json()
    const link = dataReq.linkName;
    const res = await csv(link)
    console.log(res,'API reply')
    return new Response(JSON.stringify({message:'Recd Data', data:res}),{status:200})
}