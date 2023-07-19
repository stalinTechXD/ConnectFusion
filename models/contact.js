const mongoose = require('mongoose'); // it will create a same instance 


// creatin of model
const contactShema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    phone : {
        type : String, // +91 can be intrupped as string.
        required : true
    }
})


const Contact = mongoose.model('Contact' , contactShema); // Table name and its scheme

module.exports = Contact; // export