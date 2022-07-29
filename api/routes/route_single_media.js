const express = require("express");
const router = express.Router();
const axios = require("axios");

const apiKey = "api_key=52a534486649bb6aa6eb93087941ce85";
const baseUrl = "https://api.themoviedb.org/3";


router.get("/movie/:id", (req, res, next) => {

  const apiUrl = baseUrl + "/movie/" + req.params.id +'?'+ apiKey 
  axios.get(apiUrl).then((movie) => {console.log(movie.data); res.send(movie.data)});

  
});

router.get("/tv/:id", (req, res, next) => {
  
  const apiUrl = baseUrl + "/tv/" + req.params.id +'?'+ apiKey 
  axios.get(apiUrl).then((movie) => {console.log(movie.data); res.send(movie.data)});
});


module.exports = router;