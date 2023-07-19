const express = require('express');
const path = require('path'); // path
const port = 8000;

const db = require('./config/mongoose'); // this will perform all operations.
const Contact = require('./models/contact');
const { redirect } = require('express/lib/response');
const app = express();

app.set('view engine', 'ejs'); // this wil tell us the what template engine we are using .
app.set('views', path.join(__dirname, 'views'))

// middlerware

app.use(express.urlencoded()); // very importa as it creates an object in body and stores the records.
app.use(express.static('assets'))


var contactLIst = [{
        name: "stalin",
        phone: 2342423,
    },
    {
        name: "sunny",
        phone: 2342423,
    },
    {
        name: "leone",
        phone: 2342423,
    },
]



app.get('/', function(req, res) {

    Contact.find({})
    .then(contact => {
        return res.render('home', {
            title: "Contact List",
            contact_List: contact
        });
    })
    .catch(err => {
        console.log("error in retrieving the values from DB:", err);
        
        res.status(500).send("Error retrieving contacts from the database.");
    });
   
})

app.get('/delete-contact/', function(req, res) {
    // console.log(req.query); -> To verify whether it detects / captures the deletion object or not.
    //let name = req.query.name;
    // get id from query params from URL params
    let id = req.query.id;
   /* let contactIndex = contactLIst.findIndex(contact => contact.name == name);
    if(contactIndex != -1){
        contactLIst.splice(contactIndex , 1);
    }
    */
  //  console.log(contactIndex);

  // find the contact in the databaase using id and delete.
   
  Contact.findByIdAndDelete(id)
    .then(() => {
        return res.redirect('back');
    })
    .catch(err => {
        console.log("error in deleting an object from database:", err);
        // Handle the error and send an appropriate response to the client
        res.status(500).send("Error deleting the object from the database.");
    });
    
})

app.post('/create-contact', function(req, res) {
    /*
    contactLIst.push({
        name: req.body.name,
        phone: req.body.phone
    })
    */ 
    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    })
        .then(newContact => {
            console.log("*********************", newContact);
            res.redirect('/');
        })
        .catch(err => {
            console.log("error in creating a contact:", err);
           
            res.status(500).send("Error creating a contact.");
        });
    });
app.listen(port, function(err) {

    if (err) {
        console.log("Error is running the server", err);
        return;

    }
    console.log("YUp! my express server is running on port", port);
});