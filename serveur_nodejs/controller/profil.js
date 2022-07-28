const express = require('express')
const mysql = require('mysql2');
var router=express.Router();
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'tp_final'
  });

router.get('/getAll',(req,res)=>{
    connection.execute('select * from Profil',[],(err, results, fields)=>{
        res.json(results);
    })
})

router.get('/get/:id',(req,res)=>{
connection.execute('select * from Profil where id=?',[req.params.id],(err, results, fields)=>{
        res.json(results);
    })
})

module.exports=router;
