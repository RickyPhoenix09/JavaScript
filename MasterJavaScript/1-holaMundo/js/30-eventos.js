'use strict'

// funcion con evento load	
	window.addEventListener('load',() =>{
//Eventos del raton		ondblclick="cambiarColor()"	
		function cambiarColor(){
			console.log("me has dado click");
		var bg = boton.style.background;
			if(bg == "green"){
				boton.style.background = "red";
			}else{
				boton.style.background = "green";
			}
			boton.style.padding = "10px";
			boton.style.border = "1px solid #ccc";
		return true;
		}

		// click
	var boton = document.querySelector("#boton");
	boton.addEventListener('click', function(){
		cambiarColor();
		console.log(this);
		this.style.border = "10px solid black";

	});
		//mouseOver
	boton.addEventListener('mouseover', function(){
		boton.style.background = "yellow";
	});
		//mouseOut
	boton.addEventListener('mouseout', function(){
		boton.style.background = "#ccc";
	});
		//focus
	var input = document.querySelector("#campo_nombre");
		input.addEventListener('focus', function(){
				console.log("[focus]estas dentro del input");
		});
		//Blur
		input.addEventListener('blur', function(){
				console.log("[blur]estas fuera del input");
		});
		//keydown
		input.addEventListener('keydown', function(event){
				console.log("[keydown]pulsando esta tecla ", String.fromCharCode(event.keyCode));
		});
		//keypress
		input.addEventListener('keypress', function(event){
				console.log("[keypress]Tecla presionada ", String.fromCharCode(event.keyCode));
		});
		//keyup
		input.addEventListener('keyup', function(event){
				console.log("[keypress]			Tecla soltada ", String.fromCharCode(event.keyCode));
		});
	});	// endo load
