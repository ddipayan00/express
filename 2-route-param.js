const express = require('express')
const path = require('path')
const {products, people} = require('./data')
const app = express()

app.get('/',(req,res)=>{
    res.status(200)
    res.send(`<h1>Home Page</h1><a href="/people">People</a>
    <br><a href="/basic/products">ProductModel-1</a><br>
    <a href="/all/products">ProductModel-2</a>`)
})
app.get('/basic/products',(req,res)=>{
    const newProducts = products.map((products)=>{
        const {id,name,image,price} = products
        return {id,name,image,price}
    })
    res.status(200)
    res.json(newProducts)
})
app.get('/basic/products/:productID',(req,res)=>{
    const {productID} = req.params
    const newProducts = products.find((products)=> products.id === Number(productID))
    if(!newProducts || newProducts === undefined){
        res.status(404)
        res.send(`<h1>Error not Found</h1><a href="/basic/products/">Back</a>`)
    }
    else{
        res.json(newProducts)
    }
    
})
app.get('/all/products',(req,res)=>{
    const newProducts = products.map((products)=>{
        const {id,name,image,price,desc} = products
        return {id,name,image,price,desc}
    })
    res.status(200)
    res.json(newProducts)
})
app.get('/people',(req,res)=>{
    res.status(200)
    res.json(people)
})

app.all('*',(req,res)=>{
    res.status(404)
    res.send(`<h1>Error not Found</h1><a href="/">Back to home page</a>`)
})



app.listen(5000,()=>{
    console.log("Server is at 5000 port")
})

