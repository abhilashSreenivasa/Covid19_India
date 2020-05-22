const fetch=require('node-fetch')

async function totalData(){
    
    let response = await fetch(`https://api.covid19india.org/data.json`)
        let data = await response.json()
   return data
}

module.exports= totalData
