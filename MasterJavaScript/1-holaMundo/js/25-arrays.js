'use strict'

// arrays
var nombre = "Fernando Hernandez";
var nombres = ["Fernando Hernandez","Juan Lopez","Manolo Garcia", "Jose Martin", 52, true];

var lenguajes = new Array("PHP", "JS", "Python", "Go", "Java", "C", "C++");
/*
var elemento = parseInt(prompt("¿Que elemento del Array quieres?", 0));
if(elemento >= nombres.length){
	alert("Introduce el numero correcto menor que "+ nombres.length)
}else{
	alert("El usuario seleccionado es: "+nombres[elemento]); 
} 		*/
document.write("<h1>lenguajes de programacion del 2018</h1>");
	document.write("<ul>");
/*
for(var i = 0; i < lenguajes.length; i++){
	document.write("<li>"+lenguajes[i]+"</li>");
}
	lenguajes.forEach((elemento, index, data)=>{
		document.write("<li>"+elemento+"</li>");
	});		*/
	for(let lenguaje in lenguajes){
		document.write("<li>"+lenguajes[lenguaje]+"</li>");
	}
		document.write("</ul>");
/*  //	busqueda
	var busqueda = lenguajes.find(function(lenguaje)){
	return lenguaje == "PHP";
})*/
	var precios = [10, 20, 50, 80, 12];
	var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");
	var busquedaInd = lenguajes.findIndex(lenguaje => lenguaje == "PHP");
	var busquedaPre = precios.some(precio => precio < 10); 
		console.log(busquedaInd, busqueda);
		console.log(busquedaPre); 


