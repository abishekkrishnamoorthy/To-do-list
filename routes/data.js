const express=require('express')
const router=express.Router()
const path=require('path')
router.get('/data/data.json',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','data','data.json'))
})
module.exports=router