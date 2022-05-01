//Routes
const { Router } = require('express');
const router = Router();

router.get('/test',(req, res) => {
    const data = {
        "name": "Ricky",
        "lastname": "Phoenix",
        "Age": "25",
        "website": "DarkSpawn.com"
    };
    res.json(data);
});

module.exports = router; 