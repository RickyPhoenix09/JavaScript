'use strict'
window.addEventListener('load',function(){
    console.log("Dom Cargado");

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener('submit',function(){
        console.log("Evento submit capturado");

        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellidos").value;
        var edad = document.querySelector("#edad").value;

        box_dashed.style.display = "block";
        console.log(nombre, apellido, edad);
    });
});