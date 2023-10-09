const express = require("express");
const { obtenerPeliculas, peliculaReciente, peliculaPopular } = require("../controllers/peliculaController");
const routesPeliculas = express.Router();

routesPeliculas.get("/", obtenerPeliculas);
routesPeliculas.get("/Recientes", peliculaReciente)
routesPeliculas.get("/Populares", peliculaPopular)

module.exports = { routesPeliculas };
