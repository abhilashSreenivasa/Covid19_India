const express = require('express')
const router = express.Router()
const fetch=require('node-fetch')
router.get('/',async (req, res) => {

    try{
        let response = await fetch(`https://api.covid19india.org/data.json`)
        let data = await response.json()
        data.cases_time_series[0]
   const todayTotal=data.cases_time_series.find((d)=>d.date=="20 May ")

  res.render('index',{todayTotal:todayTotal})
    }
    catch(e){
        console.error(e)
    }
})



module.exports = router