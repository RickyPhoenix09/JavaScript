const asyncClass = require('./tasks');

async function main(){
    try{
    let asyn = new asyncClass();
        console.time('Measuring Time');
    const results = await Promise.all([asyn.taskOne(), asyn.taskTwo()]);
        console.timeEnd('Measuring Time');
    console.log('Task One returned', results[0]);
    console.log('Task Two returned', results[1]);
    
    }
    catch(e){
        console.log(e);
    }
}

main();