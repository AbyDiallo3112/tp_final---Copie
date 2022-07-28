const express = require('express')
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var jwt = require('jsonwebtoken');
var router = express.Router();
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'tp_final'
});

router.post('/login', jsonParser, (req, res) => {
    let password = "";
    bcrypt.hash(req.body.password, 10, function (err, hash) {
        password = hash;

        connection.execute('select * from User where email=?', [
            req.body.email,
        ], (err, results, fields) => {
            if (err)
                console.log(err);

            if (results && results.length > 0) {
                bcrypt.compare(req.body.password, results[0].password, (err, ok) => {
                    if (ok) {
                        let user = results[0];
                        user.password = ''
                        let token = jwt.sign({
                            user
                        }, 'passer', { expiresIn: '24h' });
                        res.json(token);
                    } else {
                        res.status(403).json('Email ou mot de passe invalide');
                    }
                })

            } else {
                res.status(403).json('Email ou mot de passe invalide');
            }

        })
    });

})

router.post('/inscription', jsonParser, (req, res) => {
    let password = "";
    console.log(req.body);
    bcrypt.hash(req.body.password, 10, function (err, hash) {
        password = hash;
        connection.execute('insert into User(email,password,idProfil) values(?,?,?)', [
            req.body.email,
            password,
            req.body.idProfil
        ], (err, results, fields) => {
            if (err) {
                console.log(err);
            }
            res.json(results);
        })
    });

})


module.exports = router;
