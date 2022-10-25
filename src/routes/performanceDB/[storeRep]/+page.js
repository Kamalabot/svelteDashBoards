import parsers from "$lib/parsers"
import { csv } from "d3"

export const load = async ({fetch})=>{
	
	const csvData = async() =>{
			const res = await fetch('/serveComplex')
			const csvServed = await res.json()
	//		console.log(csvServed.data[0], csvServed.data1[0])
			return csvServed
		}

		return {
			csvData: csvData(),
		};
}; 