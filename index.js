const express = require('express');
const path = require('path'); // path
const port = 8000;

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

    return res.render('home', {
        title: "Contact List",
        contact_List: contactLIst
    });
})

app.get('/delete-contact/', function(req, res) {
    // console.log(req.query); -> To verify whether it detects / captures the deletion object or not.
    let name = req.query.name;
    let contactIndex = contactLIst.findIndex(contact => contact.name == name);
    if(contactIndex != -1){
        contactLIst.splice(contactIndex , 1);
    }
  //  console.log(contactIndex);
    return res.redirect('back');
})

app.post('/create-contact', function(req, res) {
    contactLIst.push({
        name: req.body.name,
        phone: req.body.phone
    })
    return res.redirect('/');
})
app.listen(port, function(err) {

    if (err) {
        console.log("Error is running the server", err);
        return;

    }
    console.log("YUp! my express server is running on port", port);
});