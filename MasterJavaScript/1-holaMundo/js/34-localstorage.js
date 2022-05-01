'use strict'

// localstorage
//	Comprobando disponibilidad
	if(typeof(Storage)!== 'undefined'){
		console.log("localstorage disponible");
	}else{
		console.log("incompatible con localstorage")
	}
//Guardar datos
	localStorage.setItem("titulo", "Curso JavaScript");
//Recuperar elemento
	console.log(localStorage.getItem("titulo"));
	document.querySelector("#peliculas").innerHTML=localStorage.getItem("titulo");

//Guardar objeto
	var usuario = {
		nombre: "juan Marquez",
		email: "jmarquez@mail.com",
		web: "marquezblog.com"
	}
	localStorage.setItem("usuario",JSON.stringify(usuario));
// Recuperar objeto
	console.log(localStorage.getItem("usuario"));
	console.log(typeof("usuario"));
		var usablejs = JSON.parse(localStorage.getItem("usuario"));
		console.log(usablejs,typeof(usablejs));
		document.querySelector("#datos").append(usablejs.web+" - "+usablejs.nombre);

	localStorage.clear();