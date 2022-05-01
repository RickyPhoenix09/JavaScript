'use strict'

// funciones

//definicion de la funcion
function porConsola(numero1, numero2){
console.log("hola soy una calculadora");
 	console.log("Suma: "+ (numero1 + numero2));
 	console.log("Resta: "+ (numero1 - numero2));
 	console.log("Multiplicacion: "+ (numero1 * numero2));
 	console.log("Division: "+ (numero1 / numero2));
console.log("***************************");

}
function porPantalla(numero1, numero2){
		document.write("Suma: "+ (numero1 + numero2)+"<br/>");
		document.write("Resta: "+ (numero1 - numero2)+"<br/>");
 		document.write("Multiplicacion: "+ (numero1 * numero2)+"<br/>");
 		document.write("Division: "+ (numero1 / numero2)+"<br/>");
document.write("***************************");
}

function calculadora(numero1, numero2, mostrar = false){
	if(mostrar == false){
 		porConsola(numero1, numero2);
	}else{
		porPantalla(numero1, numero2);
	}
		return true;
}
calculadora(1,5);
calculadora(2,6,true);
/*
	//llamada de la funcion
for (var i = 1; i <= 10; i++){
	console.log(i);
calculadora(i, 9);
}
*/