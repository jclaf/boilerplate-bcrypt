'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

const bcrypt = require('bcrypt');


// Ajoute une route pour la racine
app.get('/', (req, res) => {
    res.send('Hello, world!');
});
  
  // Démarre le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//START_ASYNC -do not remove notes, place code between correct pair of notes.



//END_ASYNC

//START_SYNC



//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
