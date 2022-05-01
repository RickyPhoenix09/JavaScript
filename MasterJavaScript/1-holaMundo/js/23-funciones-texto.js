'use strict'

// transformacion de textos
var numero = 444;
var texto1 = "Bienvenidos al curso de javaScript de AttoItsmo";
var texto2 = "excelente curso";
	var busqueda = texto1.substr(14,10);
	var busqueda0 = texto1.match(/curso/);
	var busqueda1 = texto1.startsWith("curso");
		busqueda1 = texto1.includes("de");
		busqueda1 = texto1.replace("javaScript", "Angular");
		busqueda1 = texto1.slice(20);
	var busqueda2 = texto1.split();
	var busqueda3 = texto1.split(" ");
	console.log(busqueda);
	console.log(busqueda0);
	console.log(busqueda1);
	console.log(busqueda2);
	console.log(busqueda3);