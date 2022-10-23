/** @type {import('./$types').PageLoad} */
import parsers from "$lib/parsers"
import { csv } from "d3"
export const load = async ({fetch})=>{
    
    const fetchData = async() =>{
        const res = await fetch('https://api.covidtracking.com/v1/us/daily.json')
        const dataRecd = await res.json()
        const parsedData = parsers.historicUS(dataRecd)
        return parsedData
    }

    const irisData = async() =>{
        const res = await fetch('/bseScripts.json')
        const dataRecd = await res.json()
        return dataRecd
    }

    const pyPiDownloads = async() =>{
        const res = await fetch('/top-pypi-packages-30-days.json')
        const pkgDownload = await res.json()
        return pkgDownload
    }
    
    return {
        chartData: fetchData(),
        irisData: irisData(),
        pypiData: pyPiDownloads(), 
        color:'green',
        title:'Covid Status in US',
        xVar:'x',
        yVar:'y'
    };
}; 