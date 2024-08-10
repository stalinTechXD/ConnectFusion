const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstname : {
        type : String,
        required : true
    },
    phone: {
        type : String,
        required : true
    },
    address: {
        type : String,
        required : true
    }
})

const Contact = mongoose.model('Contact' , contactSchema);

module.exports = Contact;