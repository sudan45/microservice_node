const express = require('express')
const { default: axios } = require('axios');

const app=express()

app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.post('/events',(req,res)=>{
    const event=req.body
    axios.post('http://localhost:4000/events',event)
    axios.post('http://localhost:4001/events',event)
    axios.post('http://localhost:4002/events',event)

    res.send({})
})

app.listen(4005,(req,res)=>{
    console.log("event bus running at 4005")

})