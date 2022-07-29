// cada vez que haga una ruta debe llevar este url?  https://www.themoviedb.org/  // no she
//  /search
const express = require("express");
const router = express.Router();
const axios = require("axios");

const apiKey = "api_key=52a534486649bb6aa6eb93087941ce85";
const baseUrl = "https://api.themoviedb.org/3";
//esto no esta del todo bien, no me devuelve algo esta ruta :(, pero al ruta esta bien

router.get("/search/movie/:busqueda", (req, res, next) => {
 if(req.user){
  const apiUrl = baseUrl + "/search/movie?" + apiKey + "&query=" + req.params.busqueda;
  axios.get(apiUrl).then((movies) => res.send(movies.data.results));
 }else{
   res.sendStatus(403)
 }
  
});

router.get("/search/tv/:busqueda", (req, res, next) => {
  if(req.user){
  //https://api.themoviedb.org/3/tv/{tv_id}?api_key=<<api_key>>&language=en-US
   const apiUrl = baseUrl + "/search/tv?" + apiKey + "&query=" + req.params.busqueda;
   axios.get(apiUrl).then((movies) => res.send(movies.data.results));
  }else{
    res.sendStatus(403)
  }
   
 });

module.exports = router;
