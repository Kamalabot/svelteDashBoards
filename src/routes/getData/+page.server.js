import {csv} from "d3"

var recvngData = [];

//The idea of this load() is the page by default executes this function. 
export const load = () => {
  return {
    recvngData
  }
}

export const actions = {
    getData: async({request})=> {
      const urlData = await request.formData()
      const link = urlData.get('linkName')
      //console.log(link,'formLink')
      let tempData = await csv(link);
	  recvngData = [];
      recvngData.push(tempData)
    return{
      type:'Success'
    } 
    
  },
 
  getImg: async({request})=>{
	  const urlData = await request.formData();
	  const imgLink = urlData.get('linkName');
	  try{
	  	let tempData = await fetch(link);
	  }
	  catch(e){
		  console.log('fetch error')
	  }
	  return{
		  type:'Success'
	  }
	}
}