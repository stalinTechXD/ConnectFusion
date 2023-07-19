const mongoose = require('mongoose');// importating module

mongoose.connect('mongodb://127.0.0.1:27017/contactDB'); // connection will happen | Typicallly connect to database.

const db = mongoose.connection; // connection gives access to database.

// java script is event driven language.

db.on('error' , console.error.bind(console , 'error connecting to db'))

db.once('open' , function(){
    console.log("successfully connected to the database ");
}) // once connection is open