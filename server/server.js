const express = require('express');
var app = express()

var cors = require('cors');
app.use(cors());

var path = require("path");
require('./routes/authroute.js')(app, path);
//require('./routes/loginroute.js')(app, path);
//require('./routes/accountroute.js')(app, path);

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname + '/../dist/week4')));

app.listen(3000, '127.0.0.1', function(){
    console.log("Server has started and is listening on port 3000.")
});
