const util = require('util');
const sleep = util.promisify(setTimeout);

class asyncClass{
    async taskOne(){
        try{
            await sleep(6000);
        throw new Error('some problems');
        return 'ONE VALUE';
        }
        catch(e){
            console.log(e);
        }
    }
    async taskTwo(){
        try{
        await sleep(3000);
        return 'TWO VALUE';
        }
        catch(e){
            console.log(e);
        }
    }
}
module.exports = asyncClass;