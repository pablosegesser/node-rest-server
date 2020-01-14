require('./config/config');

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true}, (err, res) =>{
if (err) throw err;
console.log('base de datos ONLINE');

});




// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(require('./routes/usuario'));
 
app.listen(process.env.PORT, () =>{

    console.log('Escuchando el puerto: ', process.env.PORT);
});