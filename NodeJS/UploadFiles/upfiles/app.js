const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const util = require('util');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload());

app.get("/", (req, res) => {
    res.send("hello")
});

app.post("/upload", async(req, res) => {
    try{
        const file = req.files.file;
        const fileName = file.name;
        const size = file.data.length;
        const extrension = path.extname(fileName);
        const allowedExtensions = /png|jpeg|jpg|gif/;
        if (!allowedExtensions.test(extrension)) throw "unsoported extrensions!";
        if (size > 5000000) throw "File must be less than 5 Mb";
            const md5 = file.md5;
            const URL = "/uploads/" + md5 + extrension;
        await   util.promisify(file.mv)("./public" + URL);
            res.json({
                message: "File uploaded successfully!"
            })
    }catch (err){
            console.log(err);
            res.status(500).json({
                message: err
        });
        }
});

app.listen(8000, () => {
    console.log("server listening on port 8000");
});