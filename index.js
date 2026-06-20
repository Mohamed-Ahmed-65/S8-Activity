import express from 'express'
import mongoose from 'mongoose'
import { Product } from './Schemas/product.js';


const MONGODB_URI= "mongodb://localhost:27017/"

mongoose.connect(MONGODB_URI)
  .then(() =>
    console.log('Successfully connected to MongoDB.'

    ))
  .catch((error) => 
    console.error('MongoDB connection error:', error));


  
const app = express()
const PORT = 2000

app.use(express.json())

app.post('/products',async(req,res)=>{
    try{
        const product = new Product(req.body)
        await product.save()
        res.status(201).json({msg:"created successfully !!"})

    }catch(err){
        res.status(500).json({msg:`Error : ${err.message}`})
        
    } 
})

app.get('/products',async(req,res)=>{
   const products = await Product.find()
   res.status(200).json(products)
    
})

app.get('/products/:id',async(req,res)=>{
   const product = await Product.findById(req.params.id)
   res.status(200).json(product)
    
})

app.listen(PORT,(err)=>{
    if(err){
        console.error("Error",err);
        
    }else{
        console.log("Runing successfully on port 2000");
        
    }
})