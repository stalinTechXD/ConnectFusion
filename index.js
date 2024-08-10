const express = require('express');
const path = require('path');
const port  = 8000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
var contactLists = [
    {
        first_name : "stalin",
        last_name : "s",
        email : "stalin@gmail.com",
        phone_number  : "324324",
        address : "1232aed",
        company : "Google",
        jobtitle : "swe",
        birthday : "22/12/1999"
    }
]

app.get('/' , (req , res) =>{
    return res.render('form' , {
        title  : "contactVision Form",
    });
});

app.post('/create-contact', (req ,res) => {
    contactLists.push({
        first_name : req.body.first_name,
        phone_number : req.body.phone_number,
        address : req.body.address
    });
    return res.redirect('getContacts');
})

app.get('/getContacts' , (req ,res) => {

    return res.render('listContact', {
        title : "contact",
        contact : contactLists,
    })
})

app.listen(port , (err) => {
    if(err) 
        console.log("error in running the server" , err);
    console.log("yup! my express server is running on port:" , port);
});