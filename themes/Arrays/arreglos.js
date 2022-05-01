// arreglo de arreglos
let contacto = [
    [1, "leo", "5615780680"], [2, "fer", "5511605070"], [2, "mamica", "5523802121"]
];
// funcion foreach
contacto.forEach( (indice, item) => {
        console.log(indice, item);
});
// funcion map
let contacts = contacto.map((item, index) =>{
    return `<div>${item} </div>`;
});
console.log(contacts);
console.log(contacto);
// metodo filtrado
let contOne = contacto.filter((item, index) => {
    return index > 1 && index < 3;
});
console.log(contOne);
// arreglo de objetos
let peliculas = [
    {
        id:"1",
        title:"los vengadores",
        director:"Joss Whedon",
        year:"2012",
        rating:"7"
    },
    {
        id:"2",
        title:"The dark knight",
        director:"Christopher Nolan",
        year:"2008",
        rating:"10"
    },
    {
        id:"3",
        title:"Diamantes en bruto",
        director:"Josh Safdie, Ben Safdie",
        year:"2019",
        rating:"9"
    },
    {
        id:"4",
        title:"The mariachi",
        director:"Robert Rodriguez",
        year:"1992",
        rating:"8"
    }
]
// metodo find
let buscaPeliculas = peliculas.find((item) => {
    return item.rating >= 9;
});
console.log(buscaPeliculas);
// metodo buscar indice
let indicePeliculas = peliculas.findIndex((item) => {
    return item.id < 3;
});
console.log(peliculas[indicePeliculas]);

// metodo some
    let algunaPelicula = peliculas.some((peliculas) => {
        return peliculas.director.includes('Christopher Nolan')    
    });
console.log(algunaPelicula);


let dirEncontrado = peliculas.map(item);
    if (algunaPelicula == true){
        dir = peliculas.find(peliculas.director);
    }
    return dir;

    console.log(dirEncontrado);
