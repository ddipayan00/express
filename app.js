const express = require('express')
const path = require('path')
const app = express()
let {people} = require('./data')
// Static assets
app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended: false}))
// GET METHODS
app.get('/',(req,res) => {
    res.status(200)
})
app.get('/api/people',(req,res) => {
    res.status(200).json({success:true,data:people})
})
app.post('/login',(req,res) => {
    const {name} = req.body
    if(name){
        return res.send("Hi, "+ name)
    }
    return res.status(401).send("Please provide name")
})
// POST METHODS







app.listen(5000,()=>{
    console.log("Server started at 5000 port ");
})