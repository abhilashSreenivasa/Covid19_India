const express = require('express')
const router = express.Router()
const total=require("../stateDaily")

const fetch=require('node-fetch')
router.get('/',async (req, res) => {

    try{
        const data=await total()
        //states daily
        const statesTotal=data.statewise
       
        

  res.render('index',
    {
        statesTotal:statesTotal
    }

)}
    catch(e){
        console.error(e)
    }
})



module.exports = router