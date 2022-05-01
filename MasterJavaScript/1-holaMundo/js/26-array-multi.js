'use strict'

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['la verdad duele', 'la vida es bella', 'Gran torino'];
peliculas.reverse();
console.log(peliculas);

peliculas.sort();
console.log(peliculas);


var cine = [categorias, peliculas];
	//	console.log(cine[1][2]);
	/*
var elemento = "";
	do{
		elemento = prompt("Introduce tu pelicula: ");
		peliculas.push(elemento); 		
	}while(elemento != "Acabar")
		peliculas.pop();
*/
	var indice = peliculas.indexOf('Gran torino');
	if(indice > -1){
		peliculas.splice(indice, 1);
	}
	var peliculas_string = peliculas.join()

	var cadena = "texto1, texto2, texto3";
	var cadena_array = cadena.split(", ");

console.log(peliculas);
console.log(peliculas_string);
console.log(cadena);
console.log(cadena_array);