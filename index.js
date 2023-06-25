const express = require('express');
const port = 8000;

const app = express();

app.get('/profile', function(req, res) {
    console.log(req);
    res.send('<h1>cool, it is running </h1>');
})
app.listen(port, function(err) {

    if (err) {
        console.log("Error is running the server", err);
        return;

    }
    console.log("YUp! my express server is running on port", port);
});