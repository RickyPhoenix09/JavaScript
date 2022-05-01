'use strict'
// JSON .- JavaScript Object Notation

var pelicula = {
	titulo: "Batman vs Superman",
	año: 2017,
	pais: "Estados unidos" 
};

var peliculas =[
{titulo: 'Si no nosotros, ¿quien?', año: 2011, pais:"Alemania"}, 
{titulo: 'midsommar', año: 2019, pais: "Estados unidos - Suecia"},
{titulo: 'Raw', año: 2016, pais: "Francia - Belgica"},
pelicula
];

//console.log(pelicula);
console.log(peliculas);

var cajaPeliculas = document.querySelector("#peliculas");
var index;
for(index in peliculas){
	var p = document.createElement("p");
	p.append(peliculas[index].titulo+" -  "+peliculas[index].año+" -  "+peliculas[index].pais);
	cajaPeliculas.append(p);
}