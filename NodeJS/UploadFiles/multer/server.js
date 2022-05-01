const express = require('express');
const app = express();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function(req, file, cb){
        cb("","imagen.jpg");    
    }
})

const upload = multer({
    storage: storage
});

app.get("/",(req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/views/index.html");
});

app.post("/files", upload.single('imagen'), (req, res) => {
    res.send("todo bien");
});


app.listen(8080, () => console.log("server started"));