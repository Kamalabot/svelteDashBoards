import {csv, text} from "d3"
import PocketBase from 'pocketbase'
import {serializeNonPOJOs} from '$lib/helpers'

//The idea of this load() is the page by default executes this function. 
export const load = async ({locals}) => {
	const saleData = await locals.pb.records.getList('salesFullData',1,20)
	const irisData = await locals.pb.records.getList('irisData',1,20)
	const nycData = await locals.pb.records.getList('nycCollisions',1,20)
	//console.log(saleData)
	return{
		collOne : [serializeNonPOJOs(saleData), serializeNonPOJOs(irisData),serializeNonPOJOs(nycData)]
	}
}
