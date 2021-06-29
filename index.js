const express = require('express')
const axios=require('axios')
const app=express()



app.listen(4005,(req,res)=>{
    console.log("listing event bus on 4005")
})