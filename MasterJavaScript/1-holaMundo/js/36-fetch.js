'use strict';
// Fetch (ajax) y peticiones a servicios
var div_usuarios = document.querySelector("#usuarios");
var div_Leanne = document.querySelector("#Leanne");
var div_profesor = document.querySelector("#profesor");

getUsuarios()
	.then(data => data.json())
	.then(data => {
		listadoUsuarios(data);
		return getInfo();
		
	})
	.then(data =>{
		div_profesor.innerHTML = data;
		return getLeanne();
	})
	.then(data => data.json())
	.then(user => {
		mostrarLeanne(user);	
	})
	.catch(error => {
		console.log(error);
		alert('Error en las petiiones');
	});

function getUsuarios(){
	return fetch('https://jsonplaceholder.typicode.com/users')
}
function getLeanne(){
	return fetch('https://jsonplaceholder.typicode.com/users/1')
}
function getInfo(){
	var profesor = {
		nombre: "Julian",
		apellido: "Zuñiga",
		url: 'https://hcna-fesaragon.unam.mx'
	};
	return new Promise((resolve, reject) => {
		var profesor_string = "";
	setTimeout(() => {
		profesor_string = JSON.stringify(profesor);

		if(typeof profesor_string != 'string' || profesor_string == "") return reject('error');
			return resolve(profesor_string);
	}, 3000);
	});
}

function listadoUsuarios(usuarios){
	usuarios.map((user, i) => {
	// console.log(user.name);
			let nombre = document.createElement('h4');
			nombre.innerHTML = i + " " + user.name + " - " + user.username;
			div_usuarios.appendChild(nombre);
			document.querySelector(".loading").style.display = "none";
		});
}

function mostrarLeanne(user){
		// console.log(user.name);
				let nombre = document.createElement('h4');
				nombre.innerHTML = user.name + " - " + user.username;
				div_Leanne.appendChild(nombre);
				document.querySelector("#Leanne .loading").style.display = "none";
			}


