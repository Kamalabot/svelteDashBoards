import { csv } from "d3"

export const GET = async({request, locals})=>{
    console.log('Requesting postgres to provide data');
     
    const {sql} = locals;
     
    const irisData = await sql`SELECT * FROM iris`
    console.log(irisData,'API reply')
    return new Response(JSON.stringify({message:'Recd Data', data:irisData}),{status:200})
}
