const express = require('express')
const router = express.Router()
const total=require("../stateDaily")
const district=require("../districtDaily")

const fetch=require('node-fetch')
router.get('/',async (req, res) => {

    try{
        const data=await total()
        const districtData=await district()
        //states daily
        const statesTotal=data.statewise
        console.log(districtData.districtsDaily.Karnataka.Shivamogga.slice(-1)[0])
       
        

  res.render('index',
    {
        statesTotal:statesTotal,
        districtData:districtData
    }

)}
    catch(e){
        console.error(e)
    }
})



module.exports = router