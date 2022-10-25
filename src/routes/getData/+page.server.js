import {csv, text} from "d3"
import * as cheerio from "cheerio"
import * as fs from "fs"

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
	  const siteLink = urlData.get('linkName');
	  const response = await request(siteLink)
	  const picBlob = await response.body
	  console.log(picBlob)
	  var data = picBlob.replace(/^data:image\/\w+;base64,/, "");
	  var buf = Buffer.from(data, 'base64');
      fs.writeFileSync('$static/myFile.png',buf)
	  recvngData.push('Writing to file')
	  return{
		  type:'Success'
	  }
	},
	
  scrapeText: async({request})=>{
	  const urlData = await request.formData();
	  const siteLink = urlData.get('linkName');
	  const payLoad = await text(siteLink);
	  const $ = cheerio.load(payLoad)    
		let itemsA = $('a');
		let itemsLi = $('li');
		let itemsP = $('p');
		let itemsS = $('span');
		let parsedItemsA = [];
		let parsedItemsLi = [];
		let parsedItemsS = [];
		let parsedItemsP = [];
		itemsA.each((i, elem) => {
			parsedItemsA.push($(elem).attr('href'));
		});
		itemsLi.each((i, elem) => {
			parsedItemsLi.push($(elem).text());
		});
		itemsP.each((i, elem) => {
			parsedItemsP.push($(elem).text());
		});
		itemsS.each((i, elem) => {
			parsedItemsS.push($(elem).text());
		});
		const reply ={
			links: parsedItemsA,
			spans: parsedItemsS,
			paras: parsedItemsP,
			lists: parsedItemsLi,
		}

		if(reply){    
			//Registering the links and the results to the array
			recvngData.push(reply)
		} else {
			return {success:false,msg:'Something went wrong'}
		}
	}
}
