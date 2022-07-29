//rutas para el usuario 

const express = require("express")
const router = express.Router()
const User = require("../db/models/Users")

router.post("/createUser",(req, res, next)=>{
    User.create(req.body)
    .then((newUser)=> res.status(201).send(newUser))
    .catch(next)
})


module.exports = router

//aun no funciona :v


