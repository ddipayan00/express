const express = require('express')
const path = require('path')
const app = express()
let {people} = require('./data')

app.get('/',(req,res) => {
    res.status(200).send("HEHE")
})
app.get('/api/people',(req,res) => {
    res.status(200).json({success:true,data:people})
})

app.listen(5000,()=>{
    console.log("Server started at 5000 port ");
})