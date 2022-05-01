const mysql = require('mysql');
var 


var cone = mysql.createConnection({
    host : "localhost",
    port :  "3305",
    user : "root",
    //password : "Dark.Otachix09"
    database : "my_nodedb"
});

cone.connect((err) => {
    if(err) throw err;
    console.log("Successfull Connection ");
    //create();
    create_tabla(usuarios);
});

function create(){ 
    cone.query("CREATE DATABASE IF NOT EXISTS my_nodedb", (err) => {
            if(err) throw err;
                console.log("database created");
    });
}

function create_tabla(nameTable){
    var sql = "CREATE TABLE nameTable (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
}

function delete_tabla(){
    con.connect(function(err) {
        if (err) throw err;
        var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
        con.query(sql, function (err, result) {
            if (err) throw err;
                console.log("Number of records deleted: " + result.affectedRows);
        });
    });
}
