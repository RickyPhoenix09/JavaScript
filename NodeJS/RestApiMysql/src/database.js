const mysql = require('mysql');

const mySqlConnection = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : 'Dark.Otachix09',
    database : 'dscompany'
});

mySqlConnection.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Db is conected');
    }
});

module.exports = mySqlConnection;