const express = require('express');
const path = require('path');
const db = require('./config/mongoos')
const Contact = require('./models/contact')
const port  = 8000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

app.get('/' , (req , res) =>{
    return res.render('form' , {
        title  : "contactVision Form",
        editMode: false, 
    });
});

app.post('/create-contact', async (req, res) => {
    try {


        // Adding contact to the database using async/await
        const newContact = await Contact.create({
            firstname: req.body.first_name,
            phone: req.body.phone_number,
            address: req.body.address
        });

        console.log("New contact created:", newContact);
        res.redirect('getContacts');
    } catch (err) {
        console.log("Error creating contact:", err);
        res.status(500).send("Error creating contact");
    }
});



app.get('/getContacts' , async (req ,res) => {
   const contactLists = await Contact.find();
    return res.render('listContact', {
        title : "contact",
        contact : contactLists,
        editMode: false
    })
})

app.post("/delete-contact" , async (req ,res) => {
    const firstNameToDelete = req.body.id;
    const result = await Contact.findByIdAndDelete(firstNameToDelete);
    return res.redirect('getContacts');
})

app.get('/edit-contact/:_id', async (req, res) => {
    const id= req.params._id;
    const contactLists = await Contact.find();
    const contact = await Contact.findById(id);
    if (contact) {
       return res.render('editform', {
            title: "Edit Contact",
            contact: contactLists,
            editMode: true,
            editContact: contact
        });
    } else {
        return res.status(404).send('Contact not found');
    }
});

app.post('/update-contact/:id', async (req, res) => {
    const id =  req.params.id;  
    console.log(id);
    console.log(req.body);
    console.log(req.body.firstname);
    const updatedContact = await Contact.findByIdAndUpdate(
        id, 
        {
            firstname: req.body.firstname,
            phone: req.body.phone,
            address: req.body.address
        },
        { new: true } // Return the updated document
    );
    res.redirect('/getContacts');
});

app.listen(port , (err) => {
    if(err) 
        console.log("error in running the server" , err);
    console.log("yup! my express server is running on port:" , port);
});