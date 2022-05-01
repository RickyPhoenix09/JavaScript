//const url = "https://static.wikia.nocookie.net/yugiohenespanol/images/2/2c/Foto_obelisco_el_atormentador_%28legal%29.jpg/revision/latest?cb=20111209062854&path-prefix=es";
// const url = "https://tenor.com/view/love-cats-cat-cute-hug-love-.gif-16191958";
// const url = "https://scontent.fmex1-2.fna.fbcdn.net/v/t1.6435-9/249222608_3131181913794152_3583976768717800561_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGw_iO9iGGzNHmyNlv9Q3gJEopOMmEqE9ASik4yYSoT0Kr46Brmz2rtwFvGoly7Huo2qe3KpyqBW3hnvQY7PrzH&_nc_ohc=FbIXRFsh7NkAX_ETJe2&_nc_ht=scontent.fmex1-2.fna&oh=c02f319a623b896f0dbe471a878944d0&oe=61A13230"
// const url ="https://www.youtube.com/watch?v=oFciAZyKavY";
    const url = "C:\\Users\\RICKY\\Downloads\\Informe Global.pdf";
//const tipo = '.mp3';
        const largoString = url.length;
            console.log(largoString);
        const arrayUrl = url.split(/\\/g, largoString);
        const Elements = arrayUrl.length;
        const nameDoc = arrayUrl[Elements - 1]
            console.log(arrayUrl, Elements, nameDoc);
            const shortName = nameDoc.substr(0, nameDoc.search(".pdf"));
                console.log(shortName);
/*
    const indice = url.search(".pdf");
        console.log(indiceFinal, typeof(indiceFinal));    
            // const newTipo = url.substr(indice,4);
            // console.log(newTipo);

    if(indice != -1){
            const largo = url.length;
            //const newTipo = url.substr(url.search(/jpg/||/mp3/||/mp4/||/gif/),3);
                console.log(newTipo);
        if(newTipo == "jpg"){
            console.log(newTipo);
            console.log(largo);
        }else{
        console.log("no es del tipo imagen");
    }
    }else{
        console.log("enviar enlace comun");
    }
    */
/*
    // to String
        console.log({}.toString());
        console.log(Object.prototype.toString.call([]));
    const myArray = [2, 4, 6, 8];
        console.log("this is my array: " + myArray);
        console.log(myArray.toString());
    const searchParams = new URLSearchParams([["Name", "Fer"], ["Age", 46]]);
        console.log("Here are my search params: " + searchParams);
// const nurl = url.match();
// console.log(nurl);
class Rectangle{
    constructor(width, height, unit){
        this.width = width;
        this.height = height;
        this.unit =  unit;
    }
    toString(){
        return `Rectangle (${this.width}x${this.height} ${this.unit})`;
    }
}

class ColoredRectangle extends Rectangle{
    constructor(width, height, unit, color){
        super(width, height, unit);
        this.color = color;
    }
    toString(){
        return `${super.toString()} [${this.color}]`;
    }
}
    const myRect = new Rectangle(8, 9, "cm");
        console.log("here is my rectangle: "+ myRect);

    const myColorRect = new ColoredRectangle(15, 7, "cm", "blue");
        console.log("here is my rectangle: "+ myColorRect);
        console.log("here is my rectangle: "+ Rectangle.prototype.toString.call(myColorRect));

*/