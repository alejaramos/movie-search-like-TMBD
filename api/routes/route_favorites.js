const express= require('express')
const router = express.Router()
const Favorite = require("../db/models/Favorites")

//post favorites in db

router.post("/addToFavorites", (req, res, next)=>{
    Favorite.create(req.body)
    .then((newMovie)=> res.status(201).send(newMovie))
    .catch(next)
})

//get favorites

router.get("/getFavorites/:id",(req, res, next)=>{
 
    Favorite.findAll({where:{userId: req.params.id}})
    .then((response)=>  res.send(response))
    .catch(next)
})

//delete from favorites

router.delete("/favorites/delete/:id",(req, res, next)=>{

    Favorite.destroy({where:{id: req.params.id}})
    .then((response)=>  res.sendStatus(201))
    .catch(next)
})

module.exports = router