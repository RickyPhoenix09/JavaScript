'use strict'

var cadenaJSON = '{"Marca":"Ferrari","Modelo":"365 gtb/4","Color":"negro","TipoAuto":"Sport","Cilindrada":"390.35"}';
    console.log(cadenaJSON);
// Convierte una cadena JSON a un objeto javascript
    var nuevoObjetoJS = JSON.parse(cadenaJSON);
        console.log(nuevoObjetoJS);

var objetoJS = {
    Marca:"Ferrari", Modelo:"365 gtb/4", Color:"negro", TipoAuto:"Sport", Cilindrada: 390.35
};
    console.log(objetoJS);
    // Convierte un objeto javascript a Cadena json 
    var newCadenaJSON = JSON.stringify(objetoJS);
        console.log(newCadenaJSON);

