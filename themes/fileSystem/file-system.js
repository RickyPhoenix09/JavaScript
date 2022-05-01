const fs = require('fs');
/*      Creacr un archivo
fs.writeFile('data1.txt','ricky.phoenix09@gmail.com - correo secundario', (err) =>{
    if(err) console.log(`Error: ${error}`);
});
*/
        /*    // leer un archivo
        fs.readFile('data1.txt', 'utf-8', (err, data) => {
            if(!err){
                console.log(data);
            }else{
                console.log(`Error: ${err}`);
            }
        });
        */
            /*
            fs.rename('data1.txt', 'data_correo.txt', (err) => {
                if(!err){
                    console.log("Renamed!!!");
                }else{
                    console.log(`Error: ${err}`);
                }
            });
            */
fs.readFile('data_correo.txt','es el correo de mi cuenta de youtube', (err) => {
    if(!err){
        console.log("Texto modificado!!!");
    }else{
        console.log(`Error: ${err}`);
    }
})