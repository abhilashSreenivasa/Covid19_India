const fetch=require('node-fetch')

async function districtData(){
    
    let response = await fetch(`https://api.covid19india.org/districts_daily.json`)
        let data = await response.json()
   return data
}

module.exports= districtData
