const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api",  (req,res) => {
        res.json({
            mensaje: "node JS and JWT"
        });
});

app.post("/api/login", (req, res) => {
        const user = {
            id: 1,
            nombre: "Jane",
            email: "henry@email.com"
        }
        jwt.sign({user},'secretkey', {expiresIn:'40'}, (err,token) =>{
            res.json({
                token
            });
        });
});

app.post("/api/posts", verifyToken, (req, res) => {
    
        jwt.verify(req.token, 'secretkey', (error, authData) => {
            if(error){
                res.sendStatus(403);
            }else{
                res.json({
                    mensaje:"post fue creado",
                    authData
                });
            }
    });
});

// Authorization: Bearer <token>
function verifyToken(req, res, next){
    const bearerHeader  = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
            const bearerToken = bearerHeader.split(" ")[1];
            req.token = bearerToken;
            next();
    }else{
        res.sendStatus(403);
    }
}


app.listen(3000, function() {
    console.log("nodejs app running...");
});
