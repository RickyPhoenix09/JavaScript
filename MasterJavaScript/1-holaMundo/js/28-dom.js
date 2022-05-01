'use strict'
// Dom.- Document object model

function cambiaColor(color1, color2){
	caja.style.background = color1;
	caja.style.color = color2;

}
	//	Conseguir elementos por ID concreto
		//	var caja = document.getElementById("micaja");
		var caja = document.querySelector("#micaja");
	caja.innerHTML = "¡ Texto en la caja desde JS !";
	caja.style.background = "red";
	caja.style.padding = "20px";
	caja.style.color = "white";
	caja.className = "hola hola2";
		console.log(caja);
	// Conseguir elementos por su etiqueta
	var todosLosDivs = document.getElementsByTagName('div');
		var contenidoEnTexto = todosLosDivs[2];
			contenidoEnTexto.innerHTML = "nuevo texto para el segundo elemento";
			console.log(todosLosDivs);
			console.log(contenidoEnTexto);
		var seccion = document.querySelector("#miseccion");
		var hr = document.createElement("hr");
//	todosLosDivs.forEach((valor, indice) => {  ( solo utilizado para objetos )
		var valor;
		for(valor in todosLosDivs){
			if(typeof todosLosDivs[valor].textContent == 'string'){
				var parrafo = document.createElement("p");
				var texto = document.createTextNode(todosLosDivs[valor].textContent);
			parrafo.append(texto);
			document.querySelector("#miseccion").append(parrafo);
			}
		}
		seccion.append(hr);

	// Conseguir elementos por su clase CSS
		var divsRojos = document.getElementsByClassName('rojo');
		var divsAmarillos = document.getElementsByClassName('amarillo');
				divsAmarillos[0].style.background = "yellow";
			var div;
			for(div in divsRojos){
				if(divsRojos[div].className == "rojo"){
					divsRojos[div].style.background = "red";
			}
		}
			console.log(divsRojos);
	// Query selector
		var id = document.querySelector("#encabezado");
			console.log(id);
		var claseRojo = document.querySelector("div.rojo");
			console.log(claseRojo);		// primero desde clase
		var etiqueta = document.querySelector("div");
			console.log(etiqueta);		//primer div
