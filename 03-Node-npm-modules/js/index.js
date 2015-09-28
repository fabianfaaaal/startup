var $ = require('jquery'); //llamo a jquery.
var Mov = require('./movie.js'); //llamo el modulo, desde movie.js

var pelicula = new Mov(); //instancio mov para no modificar el constructor original. hereda todas las caracteristicas del contructor

pelicula.setTitle("NNnnn"); 

console.log(pelicula.getTitle());
console.log("Funciona?");
