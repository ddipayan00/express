const express = require('express')
const path = require('path')
const app = express()

// setup static and middleware
// app.use
app.use(express.static(path.resolve(__dirname,'public')))
// app.get
// app.get('/',(req,res)=>{
//     res.status(200).sendFile(path.resolve(__dirname,'navbar-app','index.html'))

// })
app.get('/about',(req,res)=> {
    res.status(200).send('<h1>About Page</h1>')
})
// app.all
app.all('*',(req,res)=>{
    res.status(404).send('<h1>Error not found</h1>')
})
// app.listen
app.listen(5000,()=>{
    console.log("Server is at 5000 port")
})

// app.post
// app.delete
