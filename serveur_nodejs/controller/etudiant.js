const express = require('express')
const mysql = require('mysql2');
var router=express.Router();

const verifToken=require('./authtoken');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'tp_final'
  });

router.get('/getAll',verifToken,(req,res)=>{
    connection.execute('select * from Etudiant',[],(err, results, fields)=>{
        res.json(results);
    })
})

router.get('/get/:id',(req,res)=>{
connection.execute('select * from Etudiant where id=?',[req.params.id],(err, results, fields)=>{
        res.json(results);
    })
})

module.exports=router;
