const express = require('express')
const mysql = require('mysql2');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var router=express.Router();
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'tp_final'
  });

router.get('/getAll',(req,res)=>{
    connection.execute('select * from Evaluation',[],(err, results, fields)=>{
        res.json(results);
    })
})

router.post('/add',jsonParser,(req,res)=>{
    console.log(JSON.stringify(req.body));
    connection.execute('insert into Evaluation(note,idEtudiant,idMatiere,idUser,status) values(?,?,?,?,?)',[
      req.body.note,
      req.body.idEtudiant,
      req.body.idMatiere,
      req.body.idUser,
      req.body.status
    ],(err, results, fields)=>{
        res.json(results);
    })
})

router.put('/edit',(req,res)=>{
    connection.execute('update Evaluation set note=?,idEtudiant=?,idMatiere=?,idUser=? where id=?',[
        req.body.note,
        req.body.idEtudiant,
        req.body.idMatiere,
        req.body.idUser,
        req.body.id
      ],(err, results, fields)=>{
          res.json(results);
      })
})

router.delete('/delete',(req,res)=>{
    connection.execute('update Evaluation set status=?,idUser=? where id=?',[
   
        'delete',
        req.body.idUser,
        req.body.id
      ],(err, results, fields)=>{
          res.json(results);
      })
})

module.exports=router;
