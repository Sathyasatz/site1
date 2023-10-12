const express = require('express');
const app = express();
const port = 3001;
var path = require('path');
var cookieParser = require('cookie-parser');

app.use(cookieParser());

//serves homeSite.html and sets first-party cookie
app.get('/', function (req, res) {

    req.cookies.title = 'third-party';
    res.cookie("first-party","785");
    res.sendFile(path.join(__dirname+"/home.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
