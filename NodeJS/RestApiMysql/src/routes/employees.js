const express = require('express');
const router = express.Router();

const mySqlConnection = require('../database');

router.get('/',(req, res) => {
    mySqlConnection.query('SELECT * FROM employees',(err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});
router.get('/:id',(req, res) =>{
    const {id} = req.params;
    //console.log(id);
    mySqlConnection.query('SELECT * FROM employees WHERE id=?', [id], (err, 
    rows, fields) => {
            if(!err){
                res.json(rows[0]);
            }else{
                console.log(err);
            }
        });
});

router.post('/', (req, res) => {
    const { id, name, salary } = req.body;
    console.log(req.params);
    const query = 'CALL employeeAddOrEdit(?, ?, ?);';
    mySqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
        if(!err){
            res.json({Status: 'Employeed Saved'});
        }else{
            console.log(err);
        }
    });
});

router.put('/:id', (req, res) => {
    const {name, salary} = req.body;
    const {id} = req.params;
    const query = 'CALL employeeAddOrEdit(?,?,?)';
    mySqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
        if(!err){
            res.json({Status : 'Employee Update'});
        }else{
            console.log(err);
        }
    });
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    mySqlConnection.query('DELETE FROM employees WHERE id = ?', [id], (err,
    rows, fields) => {
        if(!err){
            res.json({Status : 'Employee Deleted'});
        }else{
            console.log(err);
        }
    });
});
module.exports = router;