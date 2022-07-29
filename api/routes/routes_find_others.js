const express = require("express")
const router = express.Router()
const User = require("../db/models/Users")

router.get("/findOthers/:email", (req,res,next)=>{
    User.findAll({where:{email:req.params.email}})
    .then((response)=>res.send(response))
})

router.get("/profile/:id", (req,res,next)=>{
    User.findOne({where:{id:req.params.id}})
    .then((response)=>res.send(response))
})
module.exports= router