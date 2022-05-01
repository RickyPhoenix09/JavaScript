'use strict'
/*	1.-Pida 6 numeros por pantalla y los intriduce en un array 
	2.-mostrar el array entero (todos sus elementos) en el cuerpo de la pantalla y en la consola
	3.-Ordenar y mostrar el arreglo
	4.-invertir su orden y mostrarlo
	5.-Mostrar cuantos elementos tiene el array
	6.-Busqueda del valor introducido por el usuario, que nos diga si lo encuentra y su indice
	(se valorara el uso de funciones)
*/
	function mostrarArray(elementos, textoCustom = ""){
		document.write("<h1> Contenido del array "+textoCustom+" </h1>");
		document.write("<ul>");
		elementos.forEach((elemento, index) => {
			document.write("<li>"+elemento+"</li>");
	});
		document.write("</ul>")
	}
	//Pedir 6 numeros
	//var numeros = new Array(6);
	var numeros = [];

	for(var i = 0; i <=5; i++){
		//	numeros[i] = parseInt(prompt("Introduce un numero", 0));
		numeros.push(parseInt(prompt("Introduce un numero", 0)));
	}
// Mostrar en el cuerpo de la pagina
	mostrarArray(numeros);
 // mostrar el array entero en la consola
	console.log(numeros);

 // odenar y mostar
 	numeros.sort(function(a, b){return a-b});
	mostrarArray(numeros, 'ordenados');
 // invertir y mostrar
 	numeros.reverse();
 	mostrarArray(numeros, 'Invertidos');
 // contar elementos
 	document.write("<h1>El array tiene: "+numeros.length+" elementos</h1>");
// busqueda
var busqueda = parseInt(prompt("busca un numero",0));
var posicion = numeros.findIndex(numero => numero == busqueda);
	if(posicion && posicion != -1){
		document.write("<hr/><h1> Numero encontrado </h1>");
		document.write("<h1> posicion en la busqueda: "+posicion+"</h1><hr/>");

	}else{
		document.write("<hr/><h1> No encontrado</h1><hr/>");
	}