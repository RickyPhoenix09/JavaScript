'use strict'
//Condicional

var edad =  78;
var nombre = "david sanchez";
/*Operadores relacionales
	mayor que: >
	menor que: <
	mayor o igual que: >=
	menor o igual que: <=
	igual: ==
	diferente que: !=
*/
if (edad >= 18){
		//es mayor de edad 
	console.log(nombre+" tiene "+edad+" años, es mayor de edad");
if (edad <= 33){
	console.log("todavia eres milenial");
}else if(edad >= 70){
	console.log("eres anciano");
}else{
	console.log("ya no eres milenial");
}
}else{
	console.log(nombre+" tiene "+edad+" años, es menor de edad");
}
