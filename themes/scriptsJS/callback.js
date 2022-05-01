/* function main(cb){
    alert('primero hago algo y despues ejecuto el callback');
    cb();
}        
main(function(){
    alert('otro callback');
}) */

function suma(a,b,cb){
    var result = a + b;
        cb(result);
}

suma(3,5, (result) => {
    if (result > 10){
        alert('el resultado de la suma es : '+ result + ';   ' + result + ' > 10');
    }else{
        alert('el resultado de la suma es : '+ result + ';   ' + result + ' < 10');
    }
});



