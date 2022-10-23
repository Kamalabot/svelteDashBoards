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
      // console.log(link,'formLink')
      let tempData = await csv(link);
      recvngData.push(tempData)
    return{
      type:'Success'
    } 
    
  }
}