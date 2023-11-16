const express = require('express')
const contactSchema = require('../model/contact')
const contactRoute = express.Router()

//allcontactroute
//http://localhost:5002/contact/getall
contactRoute.get('/getall',async(req,res)=>{
    try{
const contact = await contactSchema.find()
res.status(200).json({msg:'all users',contact})
    }catch(err){
        console.log(err) 
    }
})
//post route
//http://localhost:5002/contact/addcontact
contactRoute.post('/adduser',async(req,res)=>{
    try{
   const newContact = new contactSchema(req.body)
   await  newContact.save()
     res.status(200).json({msg:'you could add ur new contact',newContact})
    }catch(err){
        console.log(err)
    }
})



//post update route
//http://localhost:5002/contact/update/:id
contactRoute.post('/update/:id',async(req,res)=>{
    try{
        const{id}=req.params
        const updateuser = await contactSchema.findByIdAndUpdate(id,{$set:{...req.body}})
        res.status(200).json({msg:"update me",updateuser})
    }catch(err){
        console.log(err)
    }
})

//delroute
//http://localhost:5002/contact/delete/:id
contactRoute.delete('/delete/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const deletcont= await contactSchema.findByIdAndDelete(id)
        res.status(200).json({msg:'user deleted'})
    }catch(err){
        console.log
    }
})


//uniqueroute
//http://localhost:5002/contact/getunique/:id
contactRoute.get('/getunique/:id',async(req,res)=>{
    const{id}=req.params
    
})


module.exports= contactRoute