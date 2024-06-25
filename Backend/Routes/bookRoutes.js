const express=require('express')
const router=express.Router()
const details = require("../dbconnect.js")

router.post("/",async(req,res)=>{
    const data={
        title:req.body.title,
        author:req.body.author,
        year:req.body.year
    }
    try{
        const book = await details.create([data]);
        return res.send(book)
    }
    catch(err){
        res.json(err)
    }
})

router.get("/",async(req,res)=>{
    try{
        const books= await details.find({})
        return res.status(200).json(books)
    }catch(err){
        res.send({message:err.message})
    }
})

router.get("/:id",async(req,res)=>{
    try{
        const {id}=req.params
        const book= await details.findById(id)
        return res.status(200).json(book)
    }catch(err){
        res.send({message:err.message})
    }
})

router.put("/:id",async(req,res)=>{
    try{
        const {id}=req.params
        const book = await details.findByIdAndUpdate(id,req.body)
        if(!book) {
            return res.status(404).json({message:"Book not found"})
        }else{
            return res.send("Data updated successfully")
        }
    }catch(err){
        res.send(err.message)
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const {id}=req.params
        const book = await details.findByIdAndDelete(id)
        if(!book){
            return res.status(404).send("Book not found")
        }
        return res.json({message:"Deleted Successfully"})
    }catch(err){
        res.send(err.message)
    }
})

module.exports= router;