const express = require('express')
const path = require('path')
const logger = require('./logger') // middleware function
const authorize = require('./authorize')
const app = express()
const morgan = require('morgan')
// app.use([logger,authorize]) // for all routes
app.use(morgan('tiny'))

app.get('/',(req,res) => {
    res.status(200).send(`This is my Home page 
    <a href="/items">Go to Item Section</a>
    <a href="/about">Go to About Section</a>`)
})
app.get('/about',(req,res) => {
    res.status(200).send(`This is my About Page <a href="/">Back to home</a>`)
})
app.get('/items',(req,res)=>{
    res.status(200).send(`This is my Item Page <a href="/">Back to home</a>`)
})

app.listen(5000,()=>{
    console.log("Server is at 5000 port")
})



