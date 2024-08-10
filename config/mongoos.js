const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost/connectfusion');

// acquire teh connection
const db = mongoose.connection;

//error
db.on('error' , console.error.bind(console, "error connecting to db"));

db.once('open' , () => {
    console.log("succesffully connected to the database");
})