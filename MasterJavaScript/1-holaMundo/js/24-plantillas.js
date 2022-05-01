'use strict'

// plantillas de texto

var nombre = prompt("Introduce tu nombre");
var prim_apellido = prompt("Introduce tu primer apellido");
var segn_apellido = prompt("Introduce tu segungo apellido")

// var texto = " Mi nombre es: "+nombre+" <br/> mis apellidos son: "+apellidos;
	var texto = `
		<h1> BUEN DIA, que tal </h1>
		<h3> mi nombre es: $(nombre)</h3>
		<h3> Mis apellidos son: $(prim_apellido,segn_apellido)</h3>
	`;

	document.write(texto);