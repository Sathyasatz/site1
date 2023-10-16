const express = require('express');
const app = express();
const port = 3001;
var path = require('path');
var cookieParser = require('cookie-parser');

app.use(cookieParser());

//serves homeSite.html and sets first-party cookie
app.get('/', function (req, res) {
    res.cookie("first-party","785");
    res.sendFile(path.join(__dirname+"/home.html"));
});

app.get('/favicon.ico', function(req, res) { 
    res.status(204);
    res.end();    
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
