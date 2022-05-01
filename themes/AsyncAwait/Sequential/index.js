const asyncClass = require('./tasks');

async function main(){
    try{
    let asyn = new asyncClass();
    console.time('Measuring Time');
        //const valueOne = await taskOne();
        //const valueTwo = await taskTwo();
    console.log('Task One returned', await asyn.taskOne());
    console.log('Task Two returned', await asyn.taskTwo());
    console.timeEnd('Measuring Time');
    }
    catch(e){
        console.log(e);
    }
}

main();