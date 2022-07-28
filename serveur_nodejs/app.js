const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const port = 3000

const noteController=require('./controller/note');
const etudiantController=require('./controller/etudiant');
const filiereController=require('./controller/filiere');
const matiereController=require('./controller/matiere');
const profilController=require('./controller/profil');
const authController=require('./controller/auth');

app.use('/api/note',noteController);
app.use('/api/etudiant',etudiantController);
app.use('/api/filiere',filiereController);
app.use('/api/matiere',matiereController);
app.use('/api/profil',profilController);
app.use('/api/auth',authController);
app.use(cors({origin: 'http://localhost:4200'}));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})