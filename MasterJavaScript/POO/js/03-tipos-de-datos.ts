type alfanum = string | number;
    let newDT: alfanum = "Dark Otachi Empereur";

// string
    let chain: string | number | boolean = "curso de javascript";
        chain = 15;
        chain = false;
// numbrer
    let numero: number = 12;
// boleano
    let verdad_mentira: boolean = true;
// any
    let cualquiera: any = "hola";
// Arrays
    var lenguajes: Array<any> = ["php", "js", "css", "pyton"];

    let years: any[] = ["Doce", 13, 14];

// let vs var
var numero1 =  10;
var numero2 = 12;
if (numero1 == 10){
    let numero1 = 44;
    var numero2 = 55;

    console.log("dentro de bloque:","let:",numero1,"var:",numero2);
}
    console.log("fuera de bloque:","let:",numero1,"var:",numero2);

    console.log(newDT, chain, numero, verdad_mentira, cualquiera, lenguajes, years);