const express = require('express')
const router = express.Router();
const NameSchema = require('../model/model')


//this is get all user from db     api/User
router.get('/User',async (req,res)=>{
const UserName =  await NameSchema.find();
res.json(UserName)
console.log(UserName)
})

//get data from user based on id
router.get('/User/:id',async (req,res)=>{
    const UserName =  await NameSchema.findById(req.params.id);
    res.json(UserName)
    console.log(UserName)
    })

//this is to add user to db   api/User
router.post('/User', async (req,res)=>{
    const UserName =  new NameSchema({
        name: req.body.name,
        age:req.body.age
    })
    const name = await UserName.save()
    res.json(name)
    })


//Update the record using id
router.put('/User/:id', async (req,res)=>{
       
    const UpdatedResult =  {
        name: req.body.name,
        age:req.body.age
    }

    let result = await NameSchema.findByIdAndUpdate(req.params.id,  
    UpdatedResult,{new:true}, function (err, docs) { 
    if (err){ 
        console.log(err) 
    } 
    else{ 
        console.log("Original Doc : ",docs); 
        res.send(docs)
    } 
    }); 
    console.log(result+"this is result")
})


//delete the record using id
router.delete('/tUser/:id',async (req,res)=>{
    const UserName =  await NameSchema.findByIdAndDelete(req.params.id);
    res.json(UserName)
    console.log(UserName)
    
})
        
module.exports = router;